# Codex Build Instructions

Read `README.md` before changing this project. Treat it as the source of truth for the site's purpose, architecture, routes, and content model. Update it whenever a change makes the documentation inaccurate.

## Angela's current preferences

- Use Astro for the framework. Do not migrate the site to another framework without explicit approval.
- Treat this as a blog-style personal portfolio, not a product landing page or web app.
- Keep the visual direction minimal, editorial, warm, and personal.
- Favor generous whitespace, expressive typography, and a restrained color palette.
- Avoid busy layouts, glossy gradients, excessive rounded cards, and ornamental animation.
- Keep the homepage intentionally sparse until more personal content is provided.
- Give passion projects their own first-class page and content collection.
- Store essays and project entries as Markdown content, separate from layout code.
- Prefer semantic HTML, accessible interactions, and strong mobile behavior.
- Prefer static Astro components. Add JavaScript or framework islands only when they add necessary behavior.
- Reuse existing tokens, components, and conventions before introducing new ones.
- Use a circular custom cursor on fine-pointer devices; let it react by growing over interactive elements.
- Do not use fade-in animation for text.
- Keep foreground motion minimal and playful, using small geometric or organic details rather than large decorative effects.
- Keep the primary navigation at the top right with Home, Videos, and About.
- Treat technology/computer science and film/media as the homepage's core visual theme.
- Use paper-like hero artifacts with soft blurred halos or feathered edges; controlled corner overlap is welcome, but it must not cover any text or labels.
- Make every hero artifact grow slightly when hovered by the custom cursor.
- Keep the medium-sized orange title card centered in the homepage hero.
- Leave the Home video section and Videos page free of placeholder artwork until Angela provides her own design.

## How to build

1. Inspect `README.md`, the relevant page, its layout, and shared styles before editing.
2. Make the smallest coherent change that fulfills the request.
3. Keep content schemas in `src/content.config.ts` aligned with their Markdown frontmatter.
4. Check navigation and page metadata when adding a route.
5. Run `pnpm check` and `pnpm build` after meaningful changes.
6. Update `README.md` if structure, commands, routes, dependencies, or conventions change.

## Guardrails

- Do not add a UI framework, CSS framework, CMS, database, analytics service, or deployment adapter unless requested.
- Do not add placeholder testimonials, fake metrics, invented biography, or generic portfolio copy.
- Do not commit secrets. Document required environment variables in `.env.example`.
- Do not replace human-authored writing for the sake of visual polish.
- Keep dependencies few and justified.
