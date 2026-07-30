---
draft: false
description: Review of the Canon J16ax8B4 lens paired with the custom B4 adapter (sample images).
---

Review of the Canon J16ax8B4 lens paired with the [Custom B4 adapter](/B4-Adapter-Documentation).

## Lens Characteristics

| Canon J16ax8B4        |                             |
| --------------------- | --------------------------- |
| Focal length          | 8-128mm → 30-480mm (FF eq.) |
| Aperture              | f1.8                        |
| Weight                | 1.33 Kg                     |
| Doubler               | Yes                         |
| Min focusing distance | 0.6m (50mm w/ Macro)        |
| Front filter diameter | Ø 82mm                      |

Complete datasheet: [.PDF ↓](./B4-Adapter-Project/download/Canon-J16ax8B-datasheet.pdf)

## Test setup

![[personal_setup_solid_connection_hd.jpg|B4 ENG broadcast lens adapted on a mirrorless camera]]

### Gear used 
- Fujifilm X-M5 camera (APSC sensor)
- Custom B4 adapter
- Canon J16ax8B4 IRS-C SX12 lens
- ISO12233 Resolution Chart (A3 size)

## Image quality

> **Tips:**
> In each viewer below you can **zoom** *`click`* and **pan** *`click + drag`*.
> The buttons under the viewer switch between apertures.
> Images may take a bit of time to load at first.

<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0rem;">
</div>
<script src="/static/scripts/image-switcher.js"></script>
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

<style>
.ytplayer {
  border-radius: 5px; /* Match image radius */
  aspect-ratio: 16/9;
  width: 100%;
}
</style>


### 8mm - 2x extender - Macro switch - APSC
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="/B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f1.8-x2-APSC.jpg"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
  <button
    class="selected"
    onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f1.8-x2-APSC.jpg', this)">f/1.8</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f2.8-x2-APSC.jpg', this)">f/2.8</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f4.0-x2-APSC.jpg', this)">f/4</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f5.6-x2-APSC.jpg', this)">f/5.6</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-008mm-f8.0-x2-APSC.jpg', this)">f/8</button>
</div>
</div>


### 15mm - 2x extender - APSC
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="/B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f1.8-x2-APSC.jpg"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
  <button
    class="selected"
    onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f1.8-x2-APSC.jpg', this)">f/1.8</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f2.8-x2-APSC.jpg', this)">f/2.8</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f4.0-x2-APSC.jpg', this)">f/4</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f5.6-x2-APSC.jpg', this)">f/5.6</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-015mm-f8.0-x2-APSC.jpg', this)">f/8</button>
</div>
</div>

### 30mm - 2x extender - APSC
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="/B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f1.8-x2-APSC.jpg"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
  <button
    class="selected"
    onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f1.8-x2-APSC.jpg', this)">f/1.8</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f2.8-x2-APSC.jpg', this)">f/2.8</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f4.0-x2-APSC.jpg', this)">f/4</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f5.6-x2-APSC.jpg', this)">f/5.6</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-030mm-f8.0-x2-APSC.jpg', this)">f/8</button>
</div>
</div>

### 60mm - 2x extender - APSC
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="/B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f1.8-x2-APSC.jpg"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
  <button
    class="selected"
    onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f1.8-x2-APSC.jpg', this)">f/1.8</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f2.8-x2-APSC.jpg', this)">f/2.8</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f4.0-x2-APSC.jpg', this)">f/4</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f5.6-x2-APSC.jpg', this)">f/5.6</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f8.0-x2-APSC.jpg', this)">f/8</button>
</div>
</div>

### 128mm - 2x extender - APSC
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="/B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f1.8-x2-APSC.jpg"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
  <button
    class="selected"
    onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f1.8-x2-APSC.jpg', this)">f/1.8</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f2.8-x2-APSC.jpg', this)">f/2.8</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f4.0-x2-APSC.jpg', this)">f/4</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f5.6-x2-APSC.jpg', this)">f/5.6</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-128mm-f8.0-x2-APSC.jpg', this)">f/8</button>
</div>
</div>

## Clear / Doubler Comparison
Test shot with and without the x2 extender engaged. The `clear` image was cropped in in post to match the `x2` framing.

### Without the doubler
<iframe class= "ytplayer" src="https://www.youtube-nocookie.com/embed/_jpLMxW0fTE?vq=hd1080&rel=0&cc_load_policy=1&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>

### 60mm
<div class="image-switcher">
<div class="zoom-container">
  <img
    class="mainImage zoomable"
    src="/B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f1.8-x1-S16.jpg"
    data-pixel-zoom="true"
    style="border-radius: inherit; "
  />
</div>
<div style="display: flex; gap: 0.5rem; margin-top: 0.5rem">
  <button
    class="selected"
    onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f1.8-x1-S16.jpg', this)">Clear</button>
  <button 
	  onclick="changeImage('/B4-Adapter-Project/attachments/comparison/J16ax8B4-060mm-f2.8-x2-APSC.jpg', this)">2x</button>
</div>
</div>

### Observations
We can see that the doubler emphasizes chromatic aberration, adds some vignetting and softens the extreme edges.

### Conclusion
If your camera offers a Super 16 mode or allows you to crop in the sensor, it's best not to use the doubler (better image quality and +2 stops of light).
If not, the doubler delivers totally acceptable results.

## Zoom Showcase

### Handheld crash zoom - 2x extender
<iframe class= "ytplayer" src="https://www.youtube-nocookie.com/embed/ZfF2xkMjWc0?vq=hd1080&rel=0&cc_load_policy=1&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>

### Slowest motorized zoom - 2x extender
<iframe class= "ytplayer" src="https://www.youtube-nocookie.com/embed/sgcNR0yuiPw?vq=hd1080&rel=0&cc_load_policy=1&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>

### Fastest motorized zoom - 2x extender
<iframe class= "ytplayer" src="https://www.youtube-nocookie.com/embed/SfUvj4eUg0s?vq=hd1080&rel=0&cc_load_policy=1&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>

## Final Thought
Filming a chart is interesting for understanding a lens's strengths and weaknesses, but real-world shooting is what truly matters.

Personally, I use this lens with the doubler engaged, and let me tell you, I love shooting with it and I’m very happy with the images it can create. 
Yes, this isn't a perfect setup and it doesn’t deliver the most sharp and flawless images, but it remains an excellent creative tool :)

## To go Further
[James and Camera](https://www.youtube.com/@jamesandcamera) creates excellent content on b4 lenses (lots of lens reviews and adapting recommendations).

You can find the playlist of all his lens tests [here](https://www.youtube.com/watch?v=RdcxZvInbyg&list=PLGH1WUKulDW552TrDAl3LlB8NJh2eTcm7).
The Canon J16ax8 is reviewed [there](https://youtu.be/BIVx--2QveU?si=eyFSLl6m5FfgDqMK).
Note that he uses the same Blackmagic corrective optic for his tests.

