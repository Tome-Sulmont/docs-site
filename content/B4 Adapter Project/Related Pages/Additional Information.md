---
draft: false
---

## Coverage Explanations

The Doubler adds a `2x` crop.
The Blackmagic B4 mount adds a `1.1x` crop.

![[2_3inch_APSC_coverage.png|Sensor coverage diagram|300]]

With the lens doubler engaged & the corrective element, only APSC is covered (w/ a bit of vignette).
The crop factor is around `3.8x` (So an 8mm B4 lens is equivalent to 30mm FF lens).

## Light Loss 

Note that the adapter and the doubler introduce a loss of light.

**Calculations:**
- $Aperture_{final} = Aperture_{initial} \times Adapter \times Doubler$
- $Aperture_{final} = 1.8 \times 1.1 \times 2 = 3.96$

For example, my f1.8 B4 lens lets light through as if it were an f4 lens.

## Crop Factor Calculation

|        | Full Frame | B4  | Crop factor |
| ------ | ---------- | --- | ----------- |
| Width  | 36         | 8.8 | 4.09        |
| Height | 24         | 6.6 | 3.64        |

So the crop factor is between `3.6x` and `4.1x`
I found the **experimental crop factor** to be around `3.8x` (w/ slight extra cropping in post).
It really depend of what you consider usable (how much you crop to remove the vignette and if you want to crop at all).