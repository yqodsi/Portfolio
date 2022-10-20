/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E1E1E",
        },
        secondary: {
          DEFAULT: "#02F74C",
        },
        tertiary: {
          DEFAULT: "#F3F3F4",
        },
      },
    },
  },
  plugins: [],
};
