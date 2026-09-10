---
title: Voice-Interactive Hogwarts Sorting Hat
description: Sorting users into their prospective Hogwarts house!
date: 2024-03-22
status: complete
featured: true
image: /photography/one.png
imageAlt: Handmade voice-interactive Hogwarts Sorting Hat
articleUrl: https://www.instructables.com/Hogwarts-Sorting-Hat-Project/
notebookUrl: /projects/sorting-hat-engineering-notebook.pdf
youtubeId: TNkVVx-LkPg
---

## Re-Engineering Process
We originally built this project with Alan AI for a fun, interactive experience. We have since re-engineered it into a voice-interactive system powered by edge AI.

Now running on a Raspberry Pi 5, the hat uses Whisper.cpp for speech recognition, Piper for text-to-speech, and Llama.cpp for natural language processing. The entire system runs offline using quantized model, demonstrating an alternative to cloud-based AI.
## The Original Build

The first version began in a Principles of Engineering class. We designed its interior components in Fusion 360, printed flexible holders on a LulzBot Mini, and built a question flow informed by an analysis of the Pottermore Sorting Hat quiz. The program scored verbal answers across the four Hogwarts houses, handled ties with an additional question, and announced the result to the wearer. We made the hat from scratch, forming the shape with poster paper and stitching fabric and felt.

The build combined code, CAD, 3D printing, audio hardware, and hands-on fabrication. It was presented at a local engineering exposition, published as an Autodesk Instructables tutorial, and featured on the Instructables home page.

