---
draft: true
---

<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0rem;">
</div>
Test :
Captured with a Fujifilm X-M5

<script src="./static/scripts/image-switcher.js"></script>
<style>
  button {
	background-color: #0000;
    color: var(--secondary);
    border: 1px solid var(--lightgray);
    border-radius: 4px;
    font-family: var(--headerFont);
    font-size: inherit;
    font-weight: 600;
    cursor: pointer;
    transition-duration: .2s;
  }
  button.selected {
    background-color: var(--highlight);
  }
  /* Hover: highlight text on hover */
  button:hover {
    color: var(--tertiary);
  }
  /* Keep selected button text as is on hover */
  button.selected:hover {
    color: var(--secondary);
  }
</style>

<style>
.zoom-container {
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  display: inline-block; /* shrink to image size */
  width: 100%; /* optional: keep full width if needed */
}
.zoomable {
  cursor: zoom-in;
  user-select: none;
  -webkit-user-drag: none;
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  transform-origin: center center;
  border-radius: inherit;
  /* Smooth transition for zoom in/out */
  transition: transform 0.25s ease;
}
.zoomable.zoomed {
  cursor: grab;
  /* Keep transition for scale, but disable during drag */
}
.zoomable.zoomed:active {
  cursor: grabbing;
  /* Disable transition while dragging */
  transition: none;
}
</style>

### 8mm - 2x extender - APSC
<div class="image-switcher">

<div class="zoom-container" style="width: 100%; border-radius: 5px;">
  <img
    class="mainImage zoomable"
    src="./B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f1.8-x2-APSC.png"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: .5rem">
  <button
    class="selected"
    onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f1.8-x2-APSC.png', this)">f/1.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f2.8-x2-APSC.png', this)">f/2.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f4.0-x2-APSC.png', this)">f/4</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f5.6-x2-APSC.png', this)">f/5.6</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f8.0-x2-APSC.png', this)">f/8</button>
</div>
</div>


### 15mm - 2x extender - APSC


### 30mm - 2x extender - APSC


### 60mm - 2x extender - APSC


### 128mm - 2x extender - APSC


```
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

let isDragging = false;   // Is the user currently dragging

let startX = 0;           // Start X position of drag

let startY = 0;           // Start Y position of drag

let currentX = 0;         // Current translate X

let currentY = 0;         // Current translate Y

let zoomTarget = null;    // The <img> being zoomed

let dragThreshold = 3;    // Minimal movement to consider a drag

let dragDetected = false; // Flag to prevent click from toggling zoom after drag

const ZOOM_FACTOR = 2;    // Scale factor when zoomed

  

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

  startX = point.clientX - currentX;

  startY = point.clientY - currentY;

  

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

  let dx = point.clientX - startX;

  let dy = point.clientY - startY;

  

  // Detect if drag exceeds threshold

  if (!dragDetected && (Math.abs(dx - currentX) > dragThreshold || Math.abs(dy - currentY) > dragThreshold)) {

    dragDetected = true;

  }

  

  currentX = dx;

  currentY = dy;

  

  // ----- 5a. CONSTRAIN PAN TO CONTAINER -----

  const container = isDragging.parentElement; // zoom container div

  const imgRect = isDragging.getBoundingClientRect();

  const containerRect = container.getBoundingClientRect();

  

  const maxX = (imgRect.width - containerRect.width) / 2;

  const maxY = (imgRect.height - containerRect.height) / 2;

  

  // Limit translate values so image does not move outside container

  currentX = Math.min(maxX, Math.max(-maxX, currentX));

  currentY = Math.min(maxY, Math.max(-maxY, currentY));

  

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

```