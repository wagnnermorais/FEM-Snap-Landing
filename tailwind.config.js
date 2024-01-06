/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
      },
      maxWidth: {
        1440: "1440px",
      },
      minHeight: {
        "screen-3/4": "75vh",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      fontSize: {
        mainSize: "1.125rem",
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
