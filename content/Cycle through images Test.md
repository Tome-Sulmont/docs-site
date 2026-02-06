---
draft: true
---

<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0rem;">
</div>

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


  <img
    id="mainImage"
    src="./B4-Adapter-Project/attachments/Compare/1.jpg"
    style="width: 500px; border-radius: 5px; margin-bottom: 0rem;"
  />
<div style="display: flex; gap: 0.5rem; margin-top: -.5rem">
  <button
    class="selected"
    onclick="changeImage('./B4-Adapter-Project/attachments/Compare/1.jpg', this)"
    >f1.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/Compare/2.jpg', this)"
     >f2.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/Compare/3.jpg', this)"
	  >f4</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/Compare/4.jpg', this)"
	  >f8</button>
</div>





