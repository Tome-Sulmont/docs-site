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
// Performance helpers
let rafScheduled = false;
let pendingX = 0;
let pendingY = 0;
let cachedMaxX = 100;
let cachedMaxY = 100;
let activePointerId = null;

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
    // Improve touch responsiveness and GPU compositing
    img.style.touchAction = 'none';
    img.style.willChange = 'transform';
    img.style.borderRadius = '0';
    img.style.transform = `scale(${ZOOM_FACTOR}) translate3d(0px, 0px, 0)`;
  } else {
    // Zoom out: reset transform
    currentX = 0;
    currentY = 0;
    img.style.transform = "";
    img.style.touchAction = '';
    img.style.willChange = '';
    // Delay border-radius restoration until after transition completes
    setTimeout(() => {
      img.style.borderRadius = '';
    }, 260);
  }
});

// ----- 4. DRAG START -----
// Use Pointer Events for unified, low-latency input
document.addEventListener("pointerdown", pointerDown);
document.addEventListener("pointermove", pointerMove);
document.addEventListener("pointerup", pointerUp);
document.addEventListener("pointercancel", pointerUp);

function pointerDown(e) {
  const img = e.target.closest(".zoomable.zoomed");
  if (!img) return; // Only allow drag if image is zoomed

  e.preventDefault();

  zoomTarget = img;
  isDragging = img;
  activePointerId = e.pointerId;

  try {
    img.setPointerCapture(e.pointerId);
  } catch (err) {
    // ignore
  }

  // Disable transition during drag for instant movement
  img.style.transition = 'none';

  // Store the grab position in viewport coordinates
  grabX = e.clientX;
  grabY = e.clientY;

  dragDetected = false;
  // Cache geometry and bounds to avoid layout reads during move
  try {
    const container = img.parentElement;
    const displayW = img.clientWidth || container.clientWidth;
    const displayH = img.clientHeight || container.clientHeight;
    const visualW = displayW * ZOOM_FACTOR;
    const visualH = displayH * ZOOM_FACTOR;
    const overflowX = Math.max(0, visualW - container.clientWidth);
    const overflowY = Math.max(0, visualH - container.clientHeight);
    cachedMaxX = (overflowX / 2) / ZOOM_FACTOR;
    cachedMaxY = (overflowY / 2) / ZOOM_FACTOR;
  } catch (err) {
    cachedMaxX = 100;
    cachedMaxY = 100;
  }
}

// ----- 5. DRAG MOVE -----
// Update image position while dragging
function pointerMove(e) {
  if (!isDragging || e.pointerId !== activePointerId) return;

  e.preventDefault();

  const deltaX = e.clientX - grabX;
  const deltaY = e.clientY - grabY;

  // Detect if drag exceeds threshold
  if (!dragDetected && (Math.abs(deltaX) > dragThreshold || Math.abs(deltaY) > dragThreshold)) {
    dragDetected = true;
  }

  // Accumulate translation directly in image pixels
  currentX += deltaX / ZOOM_FACTOR;
  currentY += deltaY / ZOOM_FACTOR;

  // Update grab position for next frame
  grabX = e.clientX;
  grabY = e.clientY;

  // Clamp translation using cached bounds (avoids layout reads per-move)
  currentX = Math.min(cachedMaxX, Math.max(-cachedMaxX, currentX));
  currentY = Math.min(cachedMaxY, Math.max(-cachedMaxY, currentY));

  // Schedule visual update via requestAnimationFrame
  pendingX = currentX;
  pendingY = currentY;
  if (!rafScheduled) {
    rafScheduled = true;
    requestAnimationFrame(() => {
      if (isDragging) {
        isDragging.style.transform = `scale(${ZOOM_FACTOR}) translate3d(${pendingX}px, ${pendingY}px, 0)`;
      }
      rafScheduled = false;
    });
  }
}

// ----- 6. DRAG END -----
// Reset dragging state
function pointerUp(e) {
  if (e.pointerId !== activePointerId) return;
  try {
    if (zoomTarget && zoomTarget.releasePointerCapture) zoomTarget.releasePointerCapture(e.pointerId);
  } catch (err) {
    // ignore
  }
  // Re-enable transition after drag
  if (zoomTarget) {
    zoomTarget.style.transition = 'transform 0.25s ease';
  }
  isDragging = false;
  zoomTarget = null;
  activePointerId = null;
}
