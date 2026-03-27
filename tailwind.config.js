/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#001e40",
        "primary-container": "#003366",
        "primary-fixed": "#d5e3ff",
        "primary-fixed-dim": "#a7c8ff",
        secondary: "#4c616c",
        "secondary-container": "#cfe6f2",
        surface: "#f8f9fb",
        "surface-container-low": "#f2f4f6",
        "surface-container-lowest": "#ffffff",
        "surface-container": "#eceef0",
        "on-surface": "#191c1e",
        "on-surface-variant": "#43474f",
      },
      fontFamily: {
        headline: ["Manrope"],
        body: ["Inter"],
      },
    },
  },
  plugins: [],
};