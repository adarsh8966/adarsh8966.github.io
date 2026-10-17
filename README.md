# Engineering portfolio

A static website you can edit and publish yourself. No account, framework, database, build pipeline, or runtime dependencies are required. No repository commits or remote uploads have been made.

## Open it

- **`preview.html`** is a standalone offline preview with current photographs embedded and scripts loaded after the page body (fixed blank-page bug). Open it in a desktop browser. On Windows you may double-click `Open-Portfolio-Windows.bat` to launch it. Some phone apps do not run downloaded HTML; try Chrome/Firefox/Edge on a computer.
- **`index.html`** is the deployable site. It uses `styles.css`, `content.js`, `demos.js`, `app.js`, and the `media/` and `assets/` directories.
- For a local server (recommended for testing video): from this directory run `python -m http.server 8000`, then open `http://localhost:8000`.

## What is included

- Ten project entries with four flagship stories first. The remainder are available under **View all projects** or category filters.
- Architecture diagrams and validation-context notes for the rover, pitch tracker, industrial arm, and drone mechanism.
- Three working educational interactions: mecanum inverse kinematics, conceptual six-joint teaching, and a synthetic IMU threshold detector. **None of these interactions reproduces actual test data or the physical arm's calibrated geometry.**
- User-supplied drone, glider, early mecanum rover, and pitch-tracker electronics photographs, optimized to WebP; tighter covers; cropped engineering drawing preserving the entire left-side views. An earlier desk screenshot containing private conversation text is excluded from the public site and source bundle.
- Your **uploaded one-page résumé**, unchanged, in `media/Adarsh_Dodeja_Resume.pdf`. The public website links to this PDF.
- Early-stage rover and pitch-tracker photographs are captioned as development/testing evidence, not photographs of finished products. Final build photos can be added later without changing the case-study structure.
- Gmail compose links with the recipient prefilled, a regular email-app fallback, and keyboard-accessible expandable expertise sections.
- The AI Fitness Application is marked complete, with no unsupported release or adoption claims.
- A refined graphite, sea-glass, and warm-neutral color palette.
- Project media lightbox and MP4 video support. **No sample footage is included because no project videos were supplied.**

## Add photos or videos

1. Put your media in `media/`, ideally `.webp`/`.jpg` photographs or an H.264/AAC `.mp4` video.
2. Open `content.js`, find the matching project, then set `coverImage`, `gallery`, `video`, or `videoPoster`:

```js
coverImage: 'media/project-cover.jpg',
gallery: [
  {src:'media/project-cover.jpg',alt:'Assembled prototype',caption:'Integrated hardware'},
  {src:'media/wiring.jpg',alt:'Motor controller wiring',caption:'Electrical integration'}
],
video: 'media/demo.mp4',
videoPoster: 'media/project-cover.jpg',
```

3. Save. Run `python tools/build_preview.py` to regenerate the offline `preview.html`. Large videos aren't embedded into that one-file preview; test them with a local server.

Update text, project results, skills, roles, and contact information only in `content.js`. Edit the CSS for layout, `demos.js` for interactive explanations, and `app.js` for navigation/case-study rendering.

## Prepare for publication

1. Review public project details, internship title/dates, and the résumé before publishing.
2. Replace temporary proof gaps with real videos, project photos, CAD captures, logs, and validation details when available. Do not claim those media are present if they are not.
3. Add a LinkedIn URL and project repository links **only for links you actually want to make public**.
4. Confirm that screenshots of private conversations or company information are absent from the displayed media.
5. Create your own GitHub repository. Copy the contents of this folder into its root, then commit them yourself. In Settings → Pages, deploy the root of your main branch. `index.html` is the homepage.
6. When you have a public URL, update any social preview and canonical metadata to use the absolute published URL. Hash-based detail routes work but are less discoverable by search engines than dedicated static project pages.

### Project facts to preserve

- The industrial pick-and-place arm was **existing hardware** at a biotech manufacturing facility in Mumbai during summer breaks in 2024/2025. The 0.5 mm measurement is **positional repeatability**, not absolute accuracy. Its precise cycle count and instrument are not supplied.
- The counter-drone cutter used camera-based fiber-wire localization, path planning and an **FPV VR headset for guided operation**, not autonomous targeting or cutting. There are no published model or localization-error figures.
- The 3D-printed glider **placed first in a class competition** with a reported 120-foot flight.
- The rover is an ongoing project. Its **8 cm mean return-to-start displacement over 20 tape-measured trials** is a reported measured result, not output from the interactive demo. Original logs are not bundled. The interactive equations are not recorded telemetry.

Keep internal master career profile notes private. Do not put the raw master document in the published site.
