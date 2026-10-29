# Portfolio modernization

The existing React/TypeScript/Vite application now opens with a responsive
portfolio shell. Existing About, Experience, Case Studies and Reading pages are
retained and loaded on demand from footer links. Existing project components and
data remain in source; the public project gallery uses the reviewed catalog in
`src/modern/projects.ts` to avoid repeating unsupported results or dead demos.

## Interactive experience

- Ten searchable project summaries; category filters combine with search.
- Shareable hash routes for project details, including refresh and history.
- Dark/light themes with optional browser storage persistence.
- Keyboard-operable skill selection, mobile navigation and route focus.
- Education timeline based on the previous portfolio's education records.
- Reduced-motion support and transform-only scroll reveals that keep text at
  full opacity throughout animation.
- Original interface illustrations made in CSS; these are labeled as
  illustrations on detail pages and do not represent captured product screens.

The primary email, LinkedIn address, portrait and biography come from existing
portfolio data. There is no unverified downloadable résumé or simulated contact
form; the résumé action opens an email request.

## Development and checks

```sh
npm ci --include=optional
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

Local Windows browser tests use installed Microsoft Edge. CI uses Playwright's
Chromium. `playwright.config.ts` defines desktop and mobile test projects.
`npm test` covers search/filter intersections, empty state, history/deep links,
theme persistence, keyboard selection, navigation focus, contact URLs, menu
controls, reduced motion, narrow layouts and loading the retained pages. Axe
checks scan seven primary routes in both themes and both viewports. Those scans
do not replace a manual screen-reader review or certify retained page content.

The new TypeScript config checks the application entry point and its complete
import graph, including retained pages. Four previously aliased, version-suffixed
UI imports were changed to valid package names so the compiler can resolve them.
No library design or component behavior was changed by those import repairs.

## Delivery and workflow

The existing deployment workflow now validates pull requests with read-only
repository access, uses a deterministic install, builds and runs browser tests.
Only the separate deployment job gets contents:write. It publishes an artifact
from the same run to gh-pages on main pushes or explicit main-branch manual
deployment; PRs cannot publish. Existing `eskinder.dev` domain is preserved.
Actions are pinned to commits. Jobs have 15/5-minute timeouts and concurrency
controls. No schedules were added.

The old lockfile included only Windows Rollup/SWC native packages, necessitating
an extra untracked Linux install in CI. It was regenerated from package
constraints in an empty directory to restore cross-platform optional packages.
Normal semver-compatible dependency resolutions are captured in the new lockfile.
The ad-hoc Linux-only CI install was removed.

The dependency audit also identified high-severity advisories in Vite 6.3.5 and
the unused `@react-three/drei` dependency chain. Vite was patched to 6.4.5, and
unused drei/fiber/three dependencies were removed after confirming that no source
file imports them. The final npm audit reported zero known vulnerabilities.

## Limits and evidence

See the profile repository's `docs/PROJECT_AUDIT.md` for the full project audit.
Frontend HTTP responses were checked on October 29, 2026; authenticated Firebase,
AWS and AI flows were not exercised. Other repositories were inspected only.

The inline GitHub README statistics are dated snapshots. This portfolio does not
load external statistics generators or depend on the GitHub API at runtime.
