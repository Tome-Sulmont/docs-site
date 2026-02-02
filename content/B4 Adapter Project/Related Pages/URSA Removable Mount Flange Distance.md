---
draft: false
---

The standard B4 [[Flange Distance]] is 48 mm. The issue is that the Blackmagic B4 adapter include an optical element, which alters the effective flange distance.
That's why we need to determine the flange distance of the URSA removable mount system.

The EF mount is a pass-through adapter, so it can be use to measure the distance between the sensor and the URSA removable mount.

To determine this distance, I used a picture of the EF mount found in the Blackmagic website.
Using Inkscape, I scaled the image based on known dimensions. 
I then used the EF flange distance (whitch is <span style="color:rgb(255, 0, 0)">44 mm</span>) to position the <b><span style="color:rgb(0, 112, 192)">sensor</span></b> plane.
After taking measurements, I found that the URSA removable mount has a flange of <span style="color:rgb(255, 0, 0)">32.3 mm</span>.


| ![[Flange_distance_on_Blackmagic_EF.png\|280]] | ![[Flange_distance_on_Blackmagic_B4.png\|380]] |
| :--------------------------------------------: | :--------------------------------------------: |
|                *URSA EF mount*                 |                *URSA B4 mount*                 |


In the final design, I barely have to adjust the back focus on the lens, which suggests that this value is a good approximation.

---
Here is the [.SVG](/B4-Adapter-Project/download/Flange_distance.svg) (Inkscape) file.