# AGENTS Instructions

This repository is a standard React project using `react-scripts`. Contributors should follow these guidelines when making changes.

## Required Checks
- After any code or documentation modifications, run `npm test -- --watchAll=false` to ensure the Jest tests pass.
- If you add or modify React components, also run `npm run build` locally to confirm the build succeeds.

## GitHub Pages
- The project is configured for GitHub Pages via the `deploy` script and `homepage` in `package.json`. Update `homepage` to match your username before deploying.

## GitHub Actions
- A GitHub Actions workflow in `.github/workflows/build.yml` automatically installs dependencies, runs tests and builds the app on every push to `main` or `master`.

