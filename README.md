# Angela Yelan — Personal Website

This file is the source of truth for how the website is built and organized. Update it whenever the project's architecture or major conventions change.

## Purpose

A blog-style personal portfolio for Angela Yelan. The site has an editorial homepage, passion-project case studies, an exhibit for film, photography, and writing, and an about page, with content collections ready for future essays and project entries.

## Technology

- [Astro](https://astro.build/) for pages, layouts, and content collections
- TypeScript in strict mode
- Plain, global CSS with project design tokens
- Markdown or MDX-ready content kept separate from page templates
- Static output by default
- Hosted on Netlify. The footer visitor count uses one Netlify Function with [Netlify Blobs](https://docs.netlify.com/blobs/overview/) (`@netlify/blobs`); no Astro adapter is used
- Uncompressed HTML output so generated `dist/**/index.html` files retain readable indentation

## Commands

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
pnpm preview
pnpm format:html
```

`pnpm build` generates the static site and then formats every `dist/**/index.html` file with Prettier. Use `pnpm format:html` to reformat the generated HTML without rebuilding.

## Structure

```text
.
├── netlify/functions/      Netlify Function for the visitor counter (`/api/visit`)
├── public/                 Static files copied as-is
├── src/
│   ├── components/        Reusable interface pieces
│   ├── content/
│   │   ├── blog/          Future writing in Markdown
│   │   └── projects/      Future project entries in Markdown
│   ├── layouts/           Shared page shells and metadata
│   ├── pages/             File-based routes
│   ├── styles/            Global styles and design tokens
│   ├── content.config.ts  Content collection schemas
│   └── env.d.ts           Astro type declarations
├── AGENTS.md               Build instructions for Codex
├── astro.config.mjs        Astro configuration
├── netlify.toml            Netlify build and functions settings
├── package.json            Dependencies and project scripts
└── tsconfig.json           TypeScript configuration
```

## Visitor counter

`src/components/Footer.astro` calls `/api/visit` once per browser tab session (cached in `sessionStorage`, so refreshes and page changes don't add visits, but a new tab does) and keeps the last known total in `localStorage` to show instantly. `netlify/functions/visit.mjs` adds 1 to a number stored in Netlify Blobs and returns `{ "value": n }`. The counter only works on the deployed Netlify site; on `pnpm dev` the request fails and the footer keeps its fallback text. To reset or change the count, edit the `count` key in the `visitor-counter` store in the Netlify dashboard (Blobs).

## Routes

| URL | File | Purpose |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Minimal homepage |
| `/passion-projects` | `src/pages/passion-projects.astro` | Passion projects landing page |
| `/passion-projects/project-template` | `src/pages/passion-projects/project-template.astro` | Starter case-study structure |
| `/passion-projects/[slug]` | `src/pages/passion-projects/[slug].astro` | Markdown-backed page for one technical project |
| `/involvements` | `src/pages/involvements.astro` | Involvements and activities archive |
| `/exhibit` | `src/pages/exhibit.astro` | Interactive film reel plus photography and writing projects |
| `/videos` | `src/pages/videos.astro` | Legacy redirect to `/exhibit` |
| `/films` | `src/pages/films.astro` | Complete archive for 13 videos |
| `/image-stills` | `src/pages/image-stills.astro` | Camera-controlled rotating photography gallery |
| `/writing` | `src/pages/writing.astro` | Creative writing collection |
| `/about` | `src/pages/about.astro` | About page |

## Content model

Blog posts belong in `src/content/blog/`. Each Markdown file must include `title`, `description`, and `publishedAt` in its frontmatter. Optional fields are `updatedAt`, `draft`, and `tags`.

Passion projects belong in `src/content/projects/`. Each Markdown file must include `title`, `description`, and `date`. Optional fields are `status`, `featured`, `link`, `image`, `imageAlt`, `articleUrl`, `notebookUrl`, `youtubeId`, `researchPaperUrl`, `projectNotesUrl`, `appDocumentationUrl`, and `appScreenUrl`. The three homepage project cards are generated from `technical-project-01.md` through `technical-project-03.md`. Store public project assets in `public/projects/` and use paths such as `/projects/project-name.jpg` or `/projects/notebook.pdf`.

The schemas in `src/content.config.ts` are authoritative. When fields change, update both the schema and this documentation.

## Design system

The site combines its warm off-white background (`#faf9f7`) with the Graphite palette: gray `#c1c0c2`, olive `#837d68`, blue `#8a9db1`, pink `#ecc5c6`, and dark graphite for readable text. Typography uses a restrained editorial scale: page titles remain expressive without dominating the viewport, section headings step down clearly, and descriptive subheads stay close to body-copy proportions. The homepage omits the shared top navigation for a quieter, artwork-led presentation. Every other page shows a compact top-right navigation for Projects, Exhibit, Affinity, and About; links underline on hover and keyboard focus, and the current section remains underlined. Project detail pages remain active under Projects, while the Films archive remains active under Exhibit. The information footer is rendered only on the homepage; every other route omits it. Projects opens the dedicated passion-project gallery, while Affinity opens the Involvements & Activities page. Design tokens and shared page styles live in `src/styles/global.css`. A circular custom cursor appears on fine-pointer devices and grows over interactive elements; touch devices retain their native behavior. Text must never use entrance fades.

The homepage is a one-screen editorial introduction with no shared header or additional sections. Its hero pairs Angela's introduction and four small navigation illustrations on the left with a short, wide watercolor crosswalk painting on the right; the transparent, softly feathered asset lives at `public/images/crosswalk-haze-wide-v2.webp`. Directly beneath the introduction are a laptop for Projects, clapperboard for Exhibit, flowers for Life, and light bulb for About. Their files live in `public/images/home-nav/`. Each destination reveals a palette-matched hazy halo and responds with a small lift, tilt, and scale change on hover or keyboard focus; reduced-motion preferences minimize the transition. A quiet page label sits at the upper left, while a lower information rail shows the latest Git commit date, Angela's focus, and watercolor contact icons stored in `public/images/contact/`. The contact rail begins with GitHub above Instagram, followed by phone, LinkedIn, and email; hovering or keyboard-focusing an icon reveals a stationary pastel-pink halo without resizing the icon. The rail is absolutely positioned inside the homepage so it moves with the document without changing the centered hero's layout. The date is resolved at build time, so a Git-connected deployment updates it whenever a new commit is published. The hero stacks and the destination row becomes a two-column grid on small screens. The dedicated `/passion-projects` page places its concise editorial introduction and centered three-column gallery lower in the viewport, creating a quieter framed composition. Entries are ordered newest first and show only the project image and a restrained title; dates are intentionally omitted from the gallery. The layout stacks to one column on small screens. Involvements remain separate from the technical-project content collection, while film, photography, and writing work remain exclusive to the Exhibit page.

The Involvements & Activities page is a full-screen floating word bank at `src/pages/involvements.astro`. Its entries share one consistent responsive size and use a softer gray than the graphite page title. Each word has its own soft, palette-matched color glow, configured through the `glow` field in the page's `involvements` array. Hovering anywhere over the visible hazy glow triggers the same word, halo, and custom-cursor response as hovering the text itself.

The nine words occupy distinct positions in a three-column, three-row arrangement on larger screens. Each follows its own very small, slow, asymmetrical multi-directional path with subtle rotation and varied timing, creating a gentle hovering effect while remaining within its assigned area. Each word acts as a keyboard-accessible button that opens a large native dialog with its description and, when configured, its own photograph. Popup photographs preload when the page opens, and the image area stays hidden until the selected photograph is ready so an earlier image never flashes. The SF Bubble and piano are intentionally text-only because they currently have no images. Movement is reduced and arranged as a vertical zigzag on small screens; reduced-motion preferences stop it entirely. Clicking the backdrop, the Close button, or pressing Escape closes the dialog and returns focus to the selected word. The custom circle cursor remains visible inside the dialog.

Edit the `involvements` array at the top of the page to change the words, descriptions, individual image paths, image crop positions, and screen positions; leave an entry's `image` value empty to make its popup text-only. Edit `--word-size` in `src/styles/global.css` to change the shared word size. Add individual PNG files to `public/involvements/` as `national-badminton.png`, `irvington-frame.png`, `cs-kickstart.png`, `vikinghacks.png`, `school-badminton.png`, `summer-programs.png`, and `hollywood.png`. If a configured image cannot load, the original `photography/involvements.webp` collage appears as a fallback. Keep entries focused on real communities, teams, roles, and experiences; do not add invented organizations or positions.

`technical-project-01.md` is the Voice-Interactive Hogwarts Sorting Hat case study. Its route uses `src/components/SortingHatCaseStudy.astro` for a custom editorial layout with the system pipeline, physical build, and demo. A centered, tall Instructables article preview occupies the left rail beside the project narrative, while the embedded engineering-notebook PDF has its own full-width section below. The original hat and team images are imported from the existing `photography/` asset folder. Add `notebookUrl` and `youtubeId` to its frontmatter when those resources are available.

`technical-project-02.md` is the generative-AI cinematic color-grading study. Its route uses `src/components/ColorGradingCaseStudy.astro` for a custom editorial layout with a full-width project image imported from `photography/two.webp`, research narrative, selected quantitative findings, and side-by-side embedded viewers for the research paper and handwritten project notes. Its PDFs live in `public/projects/color-grading/` and are connected through `researchPaperUrl` and `projectNotesUrl`.

`technical-project-03.md` is the BIRDIE real-time badminton form-evaluation project. Its route uses `src/components/BirdieCaseStudy.astro`, a single-screen case study (no page scroll on desktop, except on the research tab) with five tabs: overview (project summary and the mobile home screen), research (centered literature-review copy with three figures and linked sources; this is the one tab that scrolls, and its images live in `public/projects/birdie/research-*.webp`), build (the four-stage form-detection loop and a link to the project-notes PDF), testing (a "coming soon" note), and outcome (the privacy-enhanced YouTube demo, from `youtubeId`). Tabs can be deep-linked with `#research`, `#build`, `#testing`, and `#outcome`. The overview and research copy are written in the component itself; the Markdown body of `technical-project-03.md` is no longer rendered on the page. Assets live in `public/projects/birdie/` and are connected through `appScreenUrl` and `appDocumentationUrl`. On phones narrower than 45rem the page is allowed to scroll.

The Exhibit page opens with three transparent watercolor category icons for films, image stills, and creative writing. Their assets live in `public/images/exhibit-nav/` and mirror the homepage navigation illustrations with soft palette-matched halos and a small lift on hover or keyboard focus. The hanging projector uses the matching transparent watercolor asset `projector-watercolor.png` from the same folder. Each category opens its own first-class page: films at `/films`, photography at `/image-stills`, and creative writing at `/writing`. The page also retains its “click to project” interaction: an accessible hanging cord switches on a strong warm-yellow projector glow rendered as a diffuse, gradient-based pool of light without hard polygon edges, then reveals one continuously moving horizontal reel containing thumbnails for all 13 videos. No video cards or archive link are visible before the projector is switched on. The reel pauses when hovered or keyboard-focused, each card links to its corresponding entry on `/films`, and reduced-motion preferences stop its automatic movement. Once the projector is on, a “see films →” link below the reel opens the complete film archive. Clicking the cord again dims the projector and hides the reel.

The `/image-stills` page is a camera-controlled photography gallery. Its simplified, slanted watercolor camera lives at `public/images/image-stills/camera-watercolor-v2.webp`; clicking it immediately cycles through the configured photo collections while a small painted star briefly appears at the camera. The rest of the page does not flash. Edit the `stillSets` array at the top of `src/pages/image-stills.astro` to set each collection's image paths, alternative text, layout, and caption. Photography files for this page belong in `public/images/image-stills/`. Leave an image's `src` empty while preparing the page to show a labeled placeholder instead. Collections may use a three-image `triptych` layout or a single-image `portrait` layout. Reduced-motion preferences keep the collection change while suppressing the animated camera response.

The `/films` page presents all 13 embedded videos in a single screen-first watercolor cinema. Its transparent cinema illustration (`public/images/videos/cinema-screen-watercolor-v2.webp`) uses a large 16:9 screen and a shallow audience so each film remains the focus. Matching painted arrows move backward and forward through the archive (the Left and Right arrow keys work too), while the center film-strip control reveals or hides the active video's title and description. The controls share `public/images/videos/cinema-controls-watercolor.webp`. Video and photography entries share `src/data/videos.ts`, so links, notes, and image paths only need to be edited once. Replacing a `VIDEO_ID_HERE` value with a YouTube link or video ID turns that numbered space into a privacy-enhanced YouTube embed. Photography files are imported from the root `photography/` folder so Astro bundles them into deployment builds, and they appear on `/exhibit`. The lightbox closes through its button, backdrop, or Escape key, and the circular custom cursor moves into the dialog's top layer while it is open.

Creative Writing projects appear on `/exhibit`, introduced by Angela's note highlighting “A Love for Life” from the poetry chapbook “Grow As We Go :).” Their PDFs and generated cover previews live in `public/writing/`. Each sharp-cornered cover links to the complete PDF in a new tab. The current collection contains the poetry chapbook `grow-as-we-go.pdf` and writing portfolio `from-this-place-me.pdf`.

The About page uses a centered editorial collage with a compact homepage back link and biography copy on the left, one tall portrait in the middle, and two tightly stacked detail photographs on the right. It imports the existing photographs from the root `photography/` folder and progressively stacks the layout for tablet and mobile screens. Edit its writing and image imports in `src/pages/about.astro`.

## Project rules

- Keep pages static unless an interactive feature has a clear purpose.
- Prefer Astro components and server-rendered HTML; add client-side JavaScript sparingly.
- Build reusable layout or component primitives when a pattern appears more than once.
- Keep content in Markdown rather than hard-coding long-form writing into page templates.
- Maintain accessible landmarks, heading order, link labels, focus behavior, and color contrast.
- Run `pnpm build` before considering a change complete.

## Before launch

The production site value in `astro.config.mjs` is `https://www.angelayelan.com`. Add canonical and social metadata when the visual identity is final.
