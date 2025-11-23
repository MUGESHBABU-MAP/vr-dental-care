module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5a4", // teal
        accent: "#38bdf8",  // sky blue
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
