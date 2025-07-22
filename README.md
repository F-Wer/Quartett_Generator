Quartet Card Game Generator is a modern, fully offline-capable web application built with React and TailwindCSS. The app allows you to create, customize, and export your own quartet-style card games directly in the browser—no backend, no data leaves your device.
Features

    Fully Offline: All data and images are stored locally in your browser (LocalStorage).

    Customizable Game Settings:

        Set your own game title

        Add, rename, and remove any number of categories (e.g., “Goals”, “Height”, “Price”)

        Choose the number of cards in your game

    Flexible Card Editing:

        Edit card titles and category values

        Upload a unique image for each card (stored locally)

        Intuitive card editing with live preview

    Card Back Design:

        Upload your own card back image

        Or generate a card back using a color picker, gradient, and custom text

    Responsive Layout:

        Cards are automatically sized and arranged for both desktop and mobile

        Dynamic card layouts adapt based on the number of categories

    Export Options:

        Export your game as a PDF (ready for double-sided printing, with crop marks)

        Or as a ZIP archive containing high-quality JPEGs of each card front and back

Tech Stack

    React

    TailwindCSS

    jsPDF & html2canvas for PDF export

    JSZip for ZIP export

    uuid for unique IDs

Privacy

All data remains on your device. No backend, no tracking, no cloud—your creations are yours only.

Build and play your own Quartet game — completely offline and privacy-friendly!

## Development

1. Install dependencies (Node >=18 required):
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

The app works completely offline and stores data in your browser's LocalStorage.
