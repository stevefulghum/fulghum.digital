# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository: fulghum.digital (Angular 20, Standalone Components, SSR with Express)

Common commands
- Install dependencies
  - npm ci
- Start dev server
  - npm start
  - Opens http://localhost:4200 with live reload.
- Build (production by default; see angular.json for configurations)
  - npm run build
  - Artifacts output to dist/fulghum.digital
- Watch build (development configuration)
  - npm run watch
- Serve SSR build locally (after build)
  - npm run serve:ssr:fulghum.digital
  - Starts an Express server using dist/fulghum.digital/server/server.mjs on http://localhost:4000 (override with PORT env var)
- Unit tests (Karma + Jasmine)
  - Run all tests: npm test
  - Run a single spec file: npx ng test --include "src/app/components/page/page.spec.ts"
  - Watch mode is on by default; to run once and exit: npx ng test --watch=false
- Lint CSS
  - Check: npm run lint:css
  - Fix: npm run lint:css:fix

High-level architecture
- Angular application (standalone)
  - Entry (browser): src/main.ts bootstraps App using appConfig
    - appConfig (src/app/app.config.ts)
      - provideBrowserGlobalErrorListeners, provideZonelessChangeDetection
      - provideRouter(routes) with client hydration (provideClientHydration with event replay)
    - Routes (src/app/app.routes.ts)
      - '' redirects to 'resume'; 'resume' renders Page; wildcard redirects to 'resume'
  - Root component: src/app/app.ts (selector: app-root)
    - Minimal shell; RouterOutlet drives page rendering
  - Feature component: src/app/components/page/Page (standalone component)
    - HTML/CSS in same directory; encapsulation set to None to allow global CSS layers
- Server-side rendering (SSR) and prerendering
  - Server entry: src/main.server.ts exports default bootstrap that merges server-specific config
    - Server-side application config: src/app/app.config.server.ts merges appConfig with provideServerRendering and server routes
    - Server routes (src/app/app.routes.server.ts) use RenderMode.Prerender for '**' to statically prerender all reachable routes at build
  - Express server: src/server.ts
    - Serves static assets from the browser build (../browser)
    - For other requests, delegates to AngularNodeAppEngine to render SSR responses
    - Exposes reqHandler used by the Angular CLI during dev/build or for hosting platforms
    - Listens on PORT or defaults to 4000
- Build system
  - Angular builder (@angular/build:application) configured in angular.json
    - Browser entry: src/main.ts; Server entry: src/main.server.ts
    - outputMode: static with ssr.entry set to src/server.ts enabling prerendered output plus SSR server bundle
    - Assets copied from public/ into the build output
    - Styles include src/styles.css
    - Configurations: production (default) and development (with source maps, no optimization)
  - TypeScript configs
    - tsconfig.json with strict options; references tsconfig.app.json and tsconfig.spec.json
    - App excludes *.spec.ts from app build; spec config includes Jasmine types
- Styling
  - Global CSS layers defined in src/styles.css using @layer
  - Utility and print styles included; print-friendly resume layout
  - src/functions.css defines custom CSS functions/macros used by styles (stylelint rules account for non-standard at-rules)
  - Root app styles in src/app/app.css provide minimal layout for the host
- Testing
  - Unit tests use Karma + Jasmine via @angular/build:karma (see angular.json test target)
  - Example specs in src/app/app.spec.ts and src/app/components/page/page.spec.ts

Notes for agents
- Prefer npx ng ... when invoking Angular CLI commands directly to ensure local CLI is used.
- SSR local serve requires a prior build; use npm run build followed by npm run serve:ssr:fulghum.digital.
- For a development build without optimizations, use npx ng build --configuration development or npm run watch for continuous builds.
- When running a single unit test, filter by file with --include or by grep via Karma options if needed; the --include example above is reliable for this project structure.
