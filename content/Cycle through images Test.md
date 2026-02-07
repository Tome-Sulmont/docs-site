---
draft: false
---

<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0rem;">
</div>
## Test
Camera : Fujifilm X-M5

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
  overflow: hidden; /* Clip zoomed image */
  position: relative;
  border-radius: 5px; /* Match image radius */
  display: inline-block; /* Container fits image size */
  width: 100%; /* Fill parent width */
}
.zoomable {
  display: block;
  width: 100%; /* Fit container */
  height: auto;
  margin: 0;
  border-radius: inherit;
  cursor: zoom-in;
  user-select: none;
  -webkit-user-drag: none;
  transform-origin: center center;
  transition: transform 0.25s ease; /* Smooth zoom in/out */
}
.zoomable.zoomed {
  cursor: grab; /* Drag cursor */
}
.zoomable.zoomed:active {
  cursor: grabbing; /* While dragging */
  transition: none; /* Instant while dragging */
}
</style>

### 8mm - 2x extender - APSC
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="./B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f1.8-x2-APSC.png"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
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
