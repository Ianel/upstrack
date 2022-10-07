/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE8C67",
        secondary: "#232323",
        tertiary: "#747474",
        accent: "rgba(254, 140, 103, 0.2)",
      },
    },
  },
  plugins: [],
};
