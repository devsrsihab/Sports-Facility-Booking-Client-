/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008f70",
        secondary: "#f2a922",
      },
    },
  },
  plugins: [],
};
