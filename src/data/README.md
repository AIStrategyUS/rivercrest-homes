# Content collections: how to add real content later

`testimonials/`, `projects/`, and `guides/` are Astro content collections
(schema in `src/content/config.ts`) and are **intentionally empty** at
launch — no real reviews, closed deals, or long-form guides exist yet. Add
one `.md` file per entry to the matching folder; the schema in
`src/content/config.ts` documents the required/optional frontmatter for each.

- **testimonials** — collecting real reviews is an explicit post-launch
  task per Nic, not a launch blocker.
- **projects** — past properties purchased. Launch policy is **before-only**
  photos (the property in the distressed state it was purchased in); until a
  project has a real `heroImage`, its card renders the honest
  `<PlaceholderPhoto />` component instead of a stock photo.
- **guides** — long-form SEO content, a scoped post-launch fast-follow. Any
  Tennessee-specific legal/timeline claim in a guide should get a real
  attorney/title-company review before publishing.

`situations.js` and `faq.js` in this same folder are plain data modules, not
content collections — they're fully authored already and don't need
non-technical editing, so a markdown+frontmatter layer would add complexity
without a real benefit.
