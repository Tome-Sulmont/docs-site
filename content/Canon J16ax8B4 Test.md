---
draft: true
---
Sample test of the custom B4 adaptor.



## Image quality


> **Tips:**
> In each viewer below you can **zoom** *`click`* and **pan** *`click + drag`*
> The button under the viewer switches between apertures.

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
}
</style>

### 8mm - 2x extender - Macro switch - APSC
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
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="./B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f1.8-x2-APSC.png"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
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

### 30mm - 2x extender - APSC
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="./B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f1.8-x2-APSC.png"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
  <button
    class="selected"
    onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f1.8-x2-APSC.png', this)">f/1.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f2.8-x2-APSC.png', this)">f/2.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f4.0-x2-APSC.png', this)">f/4</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f5.6-x2-APSC.png', this)">f/5.6</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f8.0-x2-APSC.png', this)">f/8</button>
</div>
</div>

### 60mm - 2x extender - APSC
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="./B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f1.8-x2-APSC.png"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
  <button
    class="selected"
    onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f1.8-x2-APSC.png', this)">f/1.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f2.8-x2-APSC.png', this)">f/2.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f4.0-x2-APSC.png', this)">f/4</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f5.6-x2-APSC.png', this)">f/5.6</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f8.0-x2-APSC.png', this)">f/8</button>
</div>
</div>

### 128mm - 2x extender - APSC
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="./B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f1.8-x2-APSC.png"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
  <button
    class="selected"
    onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f1.8-x2-APSC.png', this)">f/1.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f2.8-x2-APSC.png', this)">f/2.8</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f4.0-x2-APSC.png', this)">f/4</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f5.6-x2-APSC.png', this)">f/5.6</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f8.0-x2-APSC.png', this)">f/8</button>
</div>
</div>

## Clear / Doubler Comparison

Test with and without the x2 extender engaged. The `clear` image is zoomed in in post to match the `x2`.

### 60mm 
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="./B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f1.8-x1-S16.png"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
  <button
    class="selected"
    onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f1.8-x1-S16.png', this)">Clear</button>
  <button 
	  onclick="changeImage('./B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f2.8-x2-APSC.png', this)">2x</button>
</div>
</div>

### Observations
We can see that the doubler soften the edges, emphasis chromatic aberration, add some vignette, and haze the overall image.
The haze is more pronounced the tighter we get.

### Conclusion
If you have a good S16 mode or can crop in your sensor, it's best not using the doubler (better image quality and +2 stop of light gain)
But if not, the doubler give totally acceptable result !

## Centre haze

## Crash zoom
## Rocker control
### Slowest
### Fastest


## Final thoug

Filming a chart is interesting to know the streng and weknesses of the tool. But real worrld filming is whats importantPersonnaly I use this lens with the doubler engaged and let me tell you, I love shooting with it.
Yes this is not the *ideal* setup, It as not a "clinical"image quality but it's a excellent creative tool :)

Filming a chart is interesting to know the strengths and weaknesses of the tool. But real world filming is what's important.
Personally, I use this lens with the doubler engaged and let me tell you, I love shooting with it.
Yes this is not the *perfect* setup, it is not delivering the most *sharp* and *flawless* images, but above all it still is an excellent creative tool :)

Filming a chart is interesting for understanding the strengths and weaknesses of a lens, but real-world filming is what truly matters.
Personally, I use this lens with the doubler engaged, and let me tell you—I love shooting with it and am fulfilled by the images it can create.
Yes, this is not the *perfect* setup. It doesn’t deliver the most *sharp* and *flawless* images, but it is still an excellent creative tool :)

Filming a chart is interesting for understanding the strengths and weaknesses of a lens, but real-world filming is what truly matters.
Personally, I use this lens with the doubler engaged, and let me tell you—I love shooting with it and I’m very happy with the images it can create.
Yes, this is not the *perfect* setup and it doesn’t deliver the most *sharp* and *flawless* images, but it is still an excellent creative tool :)


## Gear used 
- Fujifilm X-M5 camera
- Custom B4 adapter
- Canon J16ax8B4 lens
- ISO12233 Resolution Chart, A3 size