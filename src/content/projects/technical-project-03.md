---
title: "BIRDIE: Real-Time Badminton Form Evaluation"
description: An in-progress mobile coaching tool!
date: 2026-08-29
status: in-progress
featured: true
image: /photography/three.png
imageAlt: BIRDIE badminton form-analysis logo
appDocumentationUrl: /projects/birdie/app-documentation.pdf
appScreenUrl: /projects/birdie/home-screen.png
youtubeId: SDFEYmgquDs
---

## Project focus

I am building BIRDIE with a badminton teammate to make form analysis more accessible to newer players. Instead of requiring a specialized camera installed at a particular court, the project explores how a player’s own camera can support portable feedback and practice.

## Data and modeling

We created and labeled a custom dataset of badminton form examples. The form-detection work combines MediaPipe pose landmarks, OpenCV video processing, calculated joint angles, logistic regression, and convolutional neural networks. These experiments helped us translate movement into features that a model can compare and classify.

## Current direction

The project is still in development. Current work focuses on strengthening the dataset, improving model behavior across different camera angles, connecting the analysis pipeline to the mobile interface, and turning technical classifications into feedback that feels useful on the court.
