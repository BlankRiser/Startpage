/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: "var(--bg-dark)",
          white: "var(--text-light)",
          red: "#FE6A77",
          blue: "#3A9CFC",
          teal: "#02D1B9",
          yellow: "#FFD669",
          beige: "#FDC799",
          purple: "#895BF7",
        },
      },
    },
  },
  plugins: [],
};
