/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#55c57a",
        secolor: "#777",
        dark: "#444",
        backcolor: "#f7f7f7",
      },
      backgroundImage: {
        "gradient-radial":
          "  linear-gradient(to bottom right,rgba(125, 213, 111, 0.85),rgba(40, 180, 135, 0.85))",
      },
    },
  },
  plugins: [],
};
