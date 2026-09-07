---
title: "Neural Palettes: Exploring Generative AI in Color Grading"
description: A Comparative Analysis of Two Generative Models for Cinematic Color Grading
date: 2025-03-28
status: in-progress
featured: true
image: /photography/two.png
imageAlt: Poster for the cinematic color-grading research project
researchPaperUrl: /projects/color-grading/research-paper.pdf
projectNotesUrl: /projects/color-grading/project-notes.pdf
---

## Research focus

Color grading is central to visual storytelling, but it is traditionally a manual process that depends on specialized software and an experienced colorist. This project explores whether generative models can learn recognizable cinematic color transformations while preserving the content of the original frame.

## Approach

I custom-built and compared two conditional generative systems: a diffusion model using a U-Net for forward and reverse diffusion, and a conditional Wasserstein generative adversarial network with a critic and U-Net generator. Both models were trained on a subset of Flickr 8K using paired source images and style labels for transformations including brightness, vivid color, warmth, and grain.

## Findings

The C-WGAN produced more visible and effective color transformations than the conditional diffusion model, whose outputs remained comparatively subtle and noisy. The comparison suggests that generative models can support automated aesthetic editing while revealing important tradeoffs between visual impact, structural similarity, and computational efficiency.
