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
├── package.json            Dependencies and project scripts
└── tsconfig.json           TypeScript configuration
```

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
| `/about` | `src/pages/about.astro` | About page |

## Content model

Blog posts belong in `src/content/blog/`. Each Markdown file must include `title`, `description`, and `publishedAt` in its frontmatter. Optional fields are `updatedAt`, `draft`, and `tags`.

Passion projects belong in `src/content/projects/`. Each Markdown file must include `title`, `description`, and `date`. Optional fields are `status`, `featured`, `link`, `image`, `imageAlt`, `articleUrl`, `notebookUrl`, `youtubeId`, `researchPaperUrl`, `projectNotesUrl`, `appDocumentationUrl`, and `appScreenUrl`. The three homepage project cards are generated from `technical-project-01.md` through `technical-project-03.md`. Store public project assets in `public/projects/` and use paths such as `/projects/project-name.jpg` or `/projects/notebook.pdf`.

The schemas in `src/content.config.ts` are authoritative. When fields change, update both the schema and this documentation.

## Design system

The site combines its original warm off-white background (`#faf9f7`) with the Graphite palette: gray `#c1c0c2`, olive `#837d68`, blue `#8a9db1`, pink `#ecc5c6`, and dark graphite for readable text. The full-width header places the site name near the top-left edge and Home, Projects, Exhibit, Life, and About navigation near the top-right edge with consistent screen margins; its lower divider extends across the full viewport. The Projects link targets the homepage project grid directly, while Life opens the Involvements & Activities page. On desktop, the homepage hero fills the browser width and the available screen height below the header, with its collage centered on balanced grid columns. It centers a medium-sized pink title card between a top-left graphite clapperboard and bottom-right blue recording frame. The clapperboard and title card share the same grid area so their strong upper-left overlap stays consistent across desktop and narrower browser widths without obstructing text; the blue frame rotates clockwise against the pink card's counterclockwise angle. One wide, unified pink, blue, and warm-yellow haze is centered behind the entire collage, without card-specific halos, and each artifact scales slightly on hover. Design tokens and shared page styles live in `src/styles/global.css`. A circular custom cursor appears on fine-pointer devices and grows over interactive elements; touch devices retain their native behavior. Text must never use entrance fades.

The homepage Projects section uses a responsive two-column grid with three image-forward technical-project cards; the third BIRDIE card is centered on its own row. The cards show project media, month and year, title, and description, then link to their Markdown-backed pages. Involvements are accessed through the Life navigation tab and remain intentionally separate from the technical-project content collection. All cards have sharp, square corners that match the site's paper-like theme. Category and progress status are not shown on the technical-project cards. Missing media uses a restrained numbered placeholder until an `image` and `imageAlt` are added to that project's frontmatter. Film, photography, and writing work remain exclusive to the Exhibit page.

The Involvements & Activities page is a full-screen floating word bank at `src/pages/involvements.astro`. Its nine current entries are national badminton, Irvington FRAME, the SF Bubble, CS Kickstart, VikingHacks, piano, school badminton, summer programs, and movies. The number-free floating words share one consistent responsive size and use a softer gray than the graphite page title. Each word has its own soft, palette-matched color glow, configured through the `glow` field in the page's `involvements` array.

The nine words occupy distinct positions in a three-column, three-row arrangement on larger screens. Each follows its own very small, slow, asymmetrical multi-directional path with subtle rotation and varied timing, creating a gentle hovering effect while remaining within its assigned area. Each word acts as a keyboard-accessible button that opens a large native dialog with its description and, when configured, its own photograph. Popup photographs preload when the page opens, and the image area stays hidden until the selected photograph is ready so an earlier image never flashes. The SF Bubble and piano are intentionally text-only because they currently have no images. Movement is reduced and arranged as a vertical zigzag on small screens; reduced-motion preferences stop it entirely. Clicking the backdrop, the Close button, or pressing Escape closes the dialog and returns focus to the selected word. The custom circle cursor remains visible inside the dialog.

Edit the `involvements` array at the top of the page to change the words, descriptions, individual image paths, image crop positions, and screen positions; leave an entry's `image` value empty to make its popup text-only. Edit `--word-size` in `src/styles/global.css` to change the shared word size. Add individual PNG files to `public/involvements/` as `national-badminton.png`, `irvington-frame.png`, `cs-kickstart.png`, `vikinghacks.png`, `school-badminton.png`, `summer-programs.png`, and `hollywood.png`. If a configured image cannot load, the original `photography/involvements.png` collage appears as a fallback. Keep entries focused on real communities, teams, roles, and experiences; do not add invented organizations or positions.

`technical-project-01.md` is the Voice-Interactive Hogwarts Sorting Hat case study. Its route uses `src/components/SortingHatCaseStudy.astro` for a custom editorial layout with the system pipeline, physical build, and demo. A centered, tall Instructables article preview occupies the left rail beside the project narrative, while the embedded engineering-notebook PDF has its own full-width section below. The original hat and team images are imported from the existing `photography/` asset folder. Add `notebookUrl` and `youtubeId` to its frontmatter when those resources are available.

`technical-project-02.md` is the generative-AI cinematic color-grading study. Its route uses `src/components/ColorGradingCaseStudy.astro` for a custom editorial layout with a full-width project image imported from `photography/two.png`, research narrative, selected quantitative findings, and side-by-side embedded viewers for the research paper and handwritten project notes. Its PDFs live in `public/projects/color-grading/` and are connected through `researchPaperUrl` and `projectNotesUrl`.

`technical-project-03.md` is the BIRDIE real-time badminton form-evaluation project. Its route uses `src/components/BirdieCaseStudy.astro` for a custom editorial layout with the mobile home screen, full-width development story, four-stage form-detection loop, embedded 45-page research and development archive, and a prototype-demo section. Its assets live in `public/projects/birdie/` and are connected through `appScreenUrl` and `appDocumentationUrl`; adding `youtubeId` replaces the demo placeholder with a privacy-enhanced YouTube embed.

The Exhibit page opens with a “click to project” interaction: an accessible hanging cord switches on a strong warm-yellow projector glow rendered as a diffuse, gradient-based pool of light without hard polygon edges, then reveals one continuously moving horizontal reel containing thumbnails for all 13 videos. No video cards, archive link, photography, or writing sections are visible before the cord is clicked. The reel pauses when hovered or keyboard-focused, each card links to its corresponding entry on `/films`, and reduced-motion preferences stop its automatic movement. Once the projector is on, a “see films →” link below the reel opens the complete film archive, followed by the three-image photography project with its lightbox and a two-project writing collection. Clicking the cord again dims the projector and hides all exhibit content.

The `/films` page preserves the original two-column 16:9 archive of all 13 embedded videos. Video and photography entries share `src/data/videos.ts`, so links, notes, and image paths only need to be edited once. Replacing a `VIDEO_ID_HERE` value with a YouTube link or video ID turns that numbered space into a privacy-enhanced YouTube embed. Photography files are imported from the root `photography/` folder so Astro bundles them into deployment builds, and they appear on `/exhibit`. The lightbox closes through its button, backdrop, or Escape key, and the circular custom cursor moves into the dialog's top layer while it is open.

Creative Writing projects appear on `/exhibit`, introduced by Angela's note highlighting “A Love for Life” from the poetry chapbook “Grow As We Go :).” Their PDFs and generated cover previews live in `public/writing/`. Each sharp-cornered cover links to the complete PDF in a new tab. The current collection contains the poetry chapbook `grow-as-we-go.pdf` and writing portfolio `from-this-place-me.pdf`.

The About page uses a full-width editorial collage: biography copy on the left, one tall portrait in the middle, and two stacked detail photographs on the right. It imports the existing photographs from the root `photography/` folder and progressively stacks the layout for tablet and mobile screens. Edit its writing and image imports in `src/pages/about.astro`.

## Project rules

- Keep pages static unless an interactive feature has a clear purpose.
- Prefer Astro components and server-rendered HTML; add client-side JavaScript sparingly.
- Build reusable layout or component primitives when a pattern appears more than once.
- Keep content in Markdown rather than hard-coding long-form writing into page templates.
- Maintain accessible landmarks, heading order, link labels, focus behavior, and color contrast.
- Run `pnpm build` before considering a change complete.

## Before launch

The production site value in `astro.config.mjs` is `https://www.angelayelan.com`. Add canonical and social metadata when the visual identity is final.
