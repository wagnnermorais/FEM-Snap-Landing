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
      width: {
        55: "55%",
        45: "45%",
        70: "70%",
      },
      maxWidth: {
        1440: "1440px",
      },
      minHeight: {
        "screen-4/5": "75vh",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      fontSize: {
        mainSize: "1.125rem",
        heading: "5rem",
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
