# Quartet Card Game Generator

Quartet Card Game Generator is an offline-first web app for designing your own quartet-style card games. Everything runs completely in your browser using React and TailwindCSS—no backend required and no data ever leaves your device.

## Features
- **Fully offline** &mdash; data and images are stored in your browser
- **Customizable game settings**: set a title, create as many categories as you like and choose the number of cards
- **Flexible card editor** with image uploads and live preview
- **Card back design**: upload an image or generate a colored background with custom text
- **Responsive layout** for mobile and desktop
- **Export options**: print-ready PDF or a ZIP archive with all card images

## Usage
1. Install dependencies and start the development server:
   ```bash
   npm install
   npm start
   ```
   This opens the app at `http://localhost:3000`.
2. Edit the game title, add categories and cards, and upload images. All changes are saved in your browser's local storage.
3. When finished, choose **Export PDF** to get a printable PDF or **Export ZIP** for high quality JPEGs of every card front and back.
4. Update `package.json`'s `homepage` with your GitHub username. To publish the
   app on GitHub Pages you can use either approach:
   - **gh-pages branch**
     ```bash
     npm run deploy
     ```
   - **`/docs` folder on `main`**
     ```bash
     npm run deploy-main
     ```
     Set GitHub Pages to use the `docs` folder on the `main` branch.
   Then open `https://<your-gh-username>.github.io/Quartett_Generator`.

Clearing your browser storage resets the app to its defaults.

## Development
This project uses the standard `react-scripts` workflow.

- `npm test` runs the Jest test suite once.
- `npm run build` creates a production build in the `build` folder.

Every push to `main` or `master` triggers a GitHub Action that installs dependencies, runs the tests and builds the app.
