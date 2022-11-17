/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--primary)",
          tertiary: "var(--tertiary)",
        },
      },
    },
  },
  plugins: [],
};
