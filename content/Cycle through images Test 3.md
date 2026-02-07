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
  .image-zoom {
    overflow: hidden;
    width: 100%;
    position: relative;
  }

  .image-zoom img {
    cursor: zoom-in;
    transition: transform 0.25s ease;
    transform-origin: center center;
    user-select: none;
    -webkit-user-drag: none;
  }

  .image-zoom.zoomed img {
    cursor: grab;
    transition: none; /* important for smooth dragging */
  }

  .image-zoom.zoomed img:active {
    cursor: grabbing;
  }
</style>

### 8mm - 2x extender - APSC
  <div class="image-switcher">

<div class="image-zoom">
  <img
    class="mainImage"
    src="./B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f1.8-x2-APSC.png"
    style="width: 99%; border-radius: 5px; margin-bottom: .5rem;"
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0rem">
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
  <div class="image-switcher">
  <img
    class="mainImage"
    src="./B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f1.8-x2-APSC.png"
    style="width: 99%; border-radius: 5px; margin-bottom: .5rem;"
  />
<div style="display: flex; gap: 0.5rem; margin-top: 0rem">
  <button
    class="selected"
    onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f1.8-x2-APSC.png', this)">f/1.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f2.8-x2-APSC.png', this)">f/2.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f4.0-x2-APSC.png', this)">f/4</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f5.6-x2-APSC.png', this)">f/5.6</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f8.0-x2-APSC.png', this)">f/8</button>
</div>
</div>

Add some sort of magnification option
### 30mm - 2x extender - APSC


### 60mm - 2x extender - APSC


### 128mm - 2x extender - APSC

```
// ===========================

// IMAGE SWITCHER + ZOOM + PAN

// ===========================

  

window.changeImage = function (src, button) {

  const container = button.closest(".image-switcher");

  if (!container) return;

  

  const image = container.querySelector(".mainImage");

  if (!image) return;

  

  image.src = src;

  

  const buttons = container.querySelectorAll("button");

  buttons.forEach(b => {

    b.classList.remove("selected");

    b.disabled = false;

  });

  

  button.classList.add("selected");

  button.disabled = true;

};

  

// Init selected buttons on page load

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".image-switcher").forEach(block => {

    const selected = block.querySelector("button.selected");

    if (selected) selected.disabled = true;

  });

});

  

// ======== ZOOM + PAN ========

let isDragging = false;

let startX = 0;

let startY = 0;

let currentX = 0;

let currentY = 0;

let zoomTarget = null;

let dragThreshold = 3;

let dragDetected = false;

  

// Start drag (mousedown / touchstart)

document.addEventListener("mousedown", startDrag);

document.addEventListener("touchstart", startDrag, { passive: false });

  

// Dragging

document.addEventListener("mousemove", drag);

document.addEventListener("touchmove", drag, { passive: false });

  

// End drag

document.addEventListener("mouseup", endDrag);

document.addEventListener("touchend", endDrag);

  

// Click to zoom (only if no drag)

document.addEventListener("click", (e) => {

  const zoomContainer = e.target.closest(".image-zoom");

  if (!zoomContainer) return;

  

  // If a drag was just detected, reset flag and ignore this click

  if (dragDetected) {

    dragDetected = false;

    return;

  }

  

  const img = zoomContainer.querySelector("img");

  

  zoomContainer.classList.toggle("zoomed");

  

  if (zoomContainer.classList.contains("zoomed")) {

    // Zoom in

    currentX = 0;

    currentY = 0;

    img.style.transform = "scale(2)";

  } else {

    // Zoom out

    currentX = 0;

    currentY = 0;

    img.style.transform = "";

  }

});

  

// ======= DRAG FUNCTIONS =======

function startDrag(e) {

  const zoomContainer = e.target.closest(".image-zoom.zoomed");

  if (!zoomContainer) return;

  

  e.preventDefault();

  

  zoomTarget = zoomContainer.querySelector("img");

  isDragging = zoomTarget;

  

  const point = e.touches ? e.touches[0] : e;

  startX = point.clientX - currentX;

  startY = point.clientY - currentY;

  

  dragDetected = false;

}

  

function drag(e) {

  if (!isDragging) return;

  

  e.preventDefault();

  

  const point = e.touches ? e.touches[0] : e;

  const deltaX = point.clientX - startX - currentX;

  const deltaY = point.clientY - startY - currentY;

  

  // Only mark as drag if movement exceeds threshold

  if (!dragDetected && (Math.abs(deltaX) > dragThreshold || Math.abs(deltaY) > dragThreshold)) {

    dragDetected = true;

  }

  

  currentX = point.clientX - startX;

  currentY = point.clientY - startY;

  

  isDragging.style.transform = `translate(${currentX}px, ${currentY}px) scale(2)`;

}

  

function endDrag() {

  isDragging = false;

  zoomTarget = null;

}
```
