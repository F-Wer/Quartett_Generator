# Quartet Card Game Generator

Quartet Card Game Generator is an offline-first React app for designing your own quartet-style card games. It runs entirely in your browser using TailwindCSS for styling.

## Features
- **Fully offline** &mdash; data and images are stored in your browser
- **Customizable** &mdash; choose game title, categories and card count
- **Flexible editor** with image uploads and instant preview
- **Card back design** via image upload or colored text background
- **Responsive layout** for mobile and desktop
- **Export options**: print-ready PDF or ZIP archive of card images

## Usage
1. Install dependencies and start the development server
   ```bash
   npm install
   npm start
   ```
   Visit `http://localhost:3000` to use the app.
2. Edit the game title, create categories and cards, and upload images. Changes are saved locally in your browser.
3. Use **Export PDF** for printable pages or **Export ZIP** for high-quality images.
4. To publish online, set your GitHub username in the `homepage` field of `package.json` and run:
   ```bash
   npm run deploy
   ```
   This builds the app and pushes the result to a `gh-pages` branch (created automatically if it doesn't exist). Your game will then be available at `https://<username>.github.io/Quartett_Generator`.

Clear your browser storage to reset the app to its defaults.

## Development
This project uses the standard `react-scripts` workflow.

- `npm test` runs the Jest tests once.
- `npm run build` creates a production build in `build/`.

Each push to `main` or `master` triggers a GitHub Action that installs dependencies, runs tests and builds the app.
