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
  }

  .image-zoom img {
    cursor: zoom-in;
    transition: transform 0.25s ease;
    transform-origin: center center;
  }

  .image-zoom.zoomed img {
    transform: scale(2);
    cursor: zoom-out;
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

  

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".image-switcher").forEach(block => {

    const selected = block.querySelector("button.selected");

    if (selected) selected.disabled = true;

  });

});

  

document.addEventListener("click", (e) => {

  const zoomContainer = e.target.closest(".image-zoom");

  if (!zoomContainer) return;

  

  zoomContainer.classList.toggle("zoomed");

});

```
