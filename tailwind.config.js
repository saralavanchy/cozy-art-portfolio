/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cozybg: '#f6f1eb', // Cozy, warm background
        magical: '#bca7e8', // Magical accent
        nature: '#7ec49e', // Nature accent
        menu: '#f8e9c1', // Menu button color
      },
      fontFamily: {
        cozy: ['"Quicksand"', 'sans-serif'],
        handwriting: ['"Indie Flower"', 'cursive'],
      },
      boxShadow: {
        menu: '0 4px 20px 0 rgba(188, 167, 232, 0.15)',
      },
      backgroundImage: {
        'forest-texture': "url('/assets/textures/forest.png')",
      }
    },
  },
  plugins: [],
};
