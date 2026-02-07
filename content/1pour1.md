---
draft: true
---

```
// ======================================================
// IMAGE SWITCHER + CLICK ZOOM + DRAG PAN + PIXEL-ZOOM
// Fully commented and aspect-ratio safe
// ======================================================

// ----- 1. IMAGE SWITCHING -----
window.changeImage = function (src, button) {
  // Find the parent image-switcher block
  const container = button.closest(".image-switcher");
  if (!container) return;

  // Find the main image in this block
  const image = container.querySelector(".mainImage");
  if (!image) return;

  // Update the image source
  image.src = src;

  // Update buttons selection
  const buttons = container.querySelectorAll("button");
  buttons.forEach(b => {
    b.classList.remove("selected");
    b.disabled = false;
  });
  button.classList.add("selected");
  button.disabled = true;
};

// Initialize selected buttons on page load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".image-switcher").forEach(block => {
    const selected = block.querySelector("button.selected");
    if (selected) selected.disabled = true;
  });
});

// ----- 2. ZOOM + PAN VARIABLES -----
let isDragging = false;      // Whether we are currently dragging
let startX = 0;              // Drag start X
let startY = 0;              // Drag start Y
let currentX = 0;            // Current translation X
let currentY = 0;            // Current translation Y
let zoomTarget = null;       // The <img> being zoomed
let dragThreshold = 3;       // Minimal movement to detect drag
let dragDetected = false;    // Flag to prevent click after drag

// Default scale factor for zoom
const DEFAULT_ZOOM = 2;

// ----- 3. CLICK TO ZOOM -----
document.addEventListener("click", (e) => {
  const img = e.target.closest(".zoomable");
  if (!img) return;

  // Ignore click immediately after a drag
  if (dragDetected) {
    dragDetected = false;
    return;
  }

  const container = img.parentElement;

  if (!img.classList.contains("zoomed")) {
    img.classList.add("zoomed");
    currentX = 0;
    currentY = 0;

    // ----- Pixel-perfect zoom -----
    if (img.dataset.pixelZoom === "true") {
      // Calculate scale factor to display 1 image pixel per screen pixel
      const rect = img.getBoundingClientRect();
      const scaleX = img.naturalWidth / rect.width;
      const scaleY = img.naturalHeight / rect.height;
      const pixelScale = Math.min(scaleX, scaleY);

      // Apply scale transform without changing width/height
      img.style.transform = `scale(${pixelScale}) translate(0px,0px)`;
    } else {
      // Normal zoom using DEFAULT_ZOOM factor
      img.style.transform = `scale(${DEFAULT_ZOOM}) translate(0px,0px)`;
    }
  } else {
    // Zoom out
    img.classList.remove("zoomed");
    img.style.transform = "";
    currentX = 0;
    currentY = 0;
  }
});

// ----- 4. DRAG START -----
document.addEventListener("mousedown", startDrag);
document.addEventListener("touchstart", startDrag, { passive: false });

function startDrag(e) {
  const img = e.target.closest(".zoomable.zoomed");
  if (!img) return; // Only zoomed images can be dragged

  e.preventDefault();

  zoomTarget = img;
  isDragging = img;

  const point = e.touches ? e.touches[0] : e;
  startX = point.clientX - currentX;
  startY = point.clientY - currentY;

  // Disable transition while dragging
  img.style.transition = "none";
  dragDetected = false;
}

// ----- 5. DRAG MOVE -----
document.addEventListener("mousemove", drag);
document.addEventListener("touchmove", drag, { passive: false });

function drag(e) {
  if (!isDragging) return;

  e.preventDefault();
  const point = e.touches ? e.touches[0] : e;
  let dx = point.clientX - startX;
  let dy = point.clientY - startY;

  // Detect drag
  if (!dragDetected && (Math.abs(dx - currentX) > dragThreshold || Math.abs(dy - currentY) > dragThreshold)) {
    dragDetected = true;
  }

  currentX = dx;
  currentY = dy;

  // ----- Apply boundaries so the image stays inside container -----
  const container = isDragging.parentElement;
  const imgRect = isDragging.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  const maxX = (imgRect.width - containerRect.width) / 2;
  const maxY = (imgRect.height - containerRect.height) / 2;

  currentX = Math.min(maxX, Math.max(-maxX, currentX));
  currentY = Math.min(maxY, Math.max(-maxY, currentY));

  isDragging.style.transform = `scale(${getCurrentScale(isDragging)}) translate(${currentX}px, ${currentY}px)`;
}

// ----- 6. DRAG END -----
document.addEventListener("mouseup", endDrag);
document.addEventListener("touchend", endDrag);

function endDrag() {
  if (zoomTarget) {
    // Restore smooth transition for next zoom toggle
    zoomTarget.style.transition = "transform 0.25s ease";
  }
  isDragging = false;
  zoomTarget = null;
}

// ----- 7. Helper: Get current scale of an image -----
function getCurrentScale(img) {
  const transform = img.style.transform;
  if (!transform) return 1;
  const match = transform.match(/scale\(([\d.]+)\)/);
  return match ? parseFloat(match[1]) : 1;
}

```