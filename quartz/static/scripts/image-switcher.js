// ===============================================
// IMAGE SWITCHER + CLICK ZOOM + DRAG PAN
// Supports multiple independent image blocks
// ===============================================

// ----- 1. IMAGE SWITCHING -----
// Make the function global so inline onclick in HTML can call it
window.changeImage = function (src, button) {
  // Find the parent image-switcher block
  const container = button.closest(".image-switcher");
  if (!container) return;

  // Find the main image in this block
  const image = container.querySelector(".mainImage");
  if (!image) return;

  // Update the image source
  image.src = src;

  // Update button states
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
let isDragging = false;   // Is the user currently dragging
let grabX = 0;            // X position where user grabbed the image
let grabY = 0;            // Y position where user grabbed the image
let currentX = 0;         // Current translate X (in original image coordinates)
let currentY = 0;         // Current translate Y (in original image coordinates)
let zoomTarget = null;    // The <img> being zoomed
let dragThreshold = 3;    // Minimal movement to consider a drag
let dragDetected = false; // Flag to prevent click from toggling zoom after drag
const ZOOM_FACTOR = 2.5;    // Scale factor when zoomed

// ----- 3. CLICK TO ZOOM -----
// Toggle zoom on image when clicked (but ignore if just dragged)
document.addEventListener("click", (e) => {
  const img = e.target.closest(".zoomable");
  if (!img) return;

  // Ignore click if drag just happened
  if (dragDetected) {
    dragDetected = false;
    return;
  }

  img.classList.toggle("zoomed");

  if (img.classList.contains("zoomed")) {
    // Zoom in: reset pan to center
    currentX = 0;
    currentY = 0;
    img.style.transform = `scale(${ZOOM_FACTOR}) translate(0px, 0px)`;
  } else {
    // Zoom out: reset transform
    currentX = 0;
    currentY = 0;
    img.style.transform = "";
  }
});

// ----- 4. DRAG START -----
// Initialize dragging when user presses mouse or touches the image
document.addEventListener("mousedown", startDrag);
document.addEventListener("touchstart", startDrag, { passive: false });

function startDrag(e) {
  const img = e.target.closest(".zoomable.zoomed");
  if (!img) return; // Only allow drag if image is zoomed

  e.preventDefault();

  zoomTarget = img;
  isDragging = img;

  const point = e.touches ? e.touches[0] : e;
  // Store the grab position in viewport coordinates
  grabX = point.clientX;
  grabY = point.clientY;

  dragDetected = false;
}

// ----- 5. DRAG MOVE -----
// Update image position while dragging
document.addEventListener("mousemove", drag);
document.addEventListener("touchmove", drag, { passive: false });

function drag(e) {
  if (!isDragging) return;

  e.preventDefault();

  const point = e.touches ? e.touches[0] : e;
  const deltaX = point.clientX - grabX;
  const deltaY = point.clientY - grabY;

  // Detect if drag exceeds threshold
  if (!dragDetected && (Math.abs(deltaX) > dragThreshold || Math.abs(deltaY) > dragThreshold)) {
    dragDetected = true;
  }

  // Accumulate translation directly in image pixels
  currentX += deltaX / ZOOM_FACTOR;
  currentY += deltaY / ZOOM_FACTOR;

  // Update grab position for next frame
  grabX = point.clientX;
  grabY = point.clientY;

  // ----- 5a. CONSTRAIN PAN TO CONTAINER -----
  const img = isDragging;
  const container = img.parentElement;
  const containerRect = container.getBoundingClientRect();

  // Get image dimensions (with fallback if not loaded yet)
  let imgWidth = img.naturalWidth;
  let imgHeight = img.naturalHeight;

  if (imgWidth > 0 && imgHeight > 0) {
    // Image is loaded, calculate proper constraints
    // Visual size after zoom
    const visualWidth = imgWidth * ZOOM_FACTOR;
    const visualHeight = imgHeight * ZOOM_FACTOR;

    // How much the scaled image extends beyond the container (in screen pixels)
    const overflowX = Math.max(0, visualWidth - containerRect.width);
    const overflowY = Math.max(0, visualHeight - containerRect.height);

    // Convert screen overflow to image-coordinate translations
    // The translation happens in image space, so we divide by ZOOM_FACTOR
    const maxX = overflowX / 2 / ZOOM_FACTOR;
    const maxY = overflowY / 2 / ZOOM_FACTOR;

    // Clamp translation to bounds
    currentX = Math.min(maxX, Math.max(-maxX, currentX));
    currentY = Math.min(maxY, Math.max(-maxY, currentY));
  } else {
    // Image not loaded yet, use conservative bounds
    currentX = Math.min(100, Math.max(-100, currentX));
    currentY = Math.min(100, Math.max(-100, currentY));
  }

  // Apply transform: scale + translate
  isDragging.style.transform = `scale(${ZOOM_FACTOR}) translate(${currentX}px, ${currentY}px)`;
}

// ----- 6. DRAG END -----
// Reset dragging state
document.addEventListener("mouseup", endDrag);
document.addEventListener("touchend", endDrag);

function endDrag() {
  isDragging = false;
  zoomTarget = null;
}
