/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
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
        primary: {
          opaque: "#E9FFF2",
          lighter: "#D3FFE5",
          light: "#00C853",
          dark: "#00AA47",
          hover: "#07C054",
        },
      },
      // fontSize: {
      //   xs: "1.2rem",
      //   sm: "1.4rem",
      //   base: "1.6rem",
      //   lg: "1.8rem",
      //   xl: [
      //     "2rem",
      //     {
      //       fontWeight: "500",
      //       lineHeight: "130%",
      //       letterSpacing: "0.01em",
      //     },
      //   ],
      //   "2xl": [
      //     "2.4rem",
      //     {
      //       fontWeight: "400",
      //       lineHeight: "130%",
      //     },
      //   ],
      //   "3xl": [
      //     "3.2rem",
      //     {
      //       fontWeight: "400",
      //       lineHeight: "130%",
      //     },
      //   ],
      //   "4xl": "4rem",
      //   "5xl": [
      //     "4.8rem",
      //     {
      //       fontWeight: "400",
      //       lineHeight: "130%",
      //     },
      //   ],
      //   "6xl": "5.2rem",
      //   "7xl": [
      //     "6.4rem",
      //     {
      //       fontWeight: "500",
      //       lineHeight: "130%",
      //     },
      //   ],
      // },
      boxShadow: {
        "soft-01": "0px 2px 8px rgba(22, 22, 22, 0.1)",
        "soft-02": "0px 4px 12px rgba(22, 22, 22, 0.1)",
        "soft-03": "0px 6px 24px rgba(22, 22, 22, 0.1)",
        "soft-04": " 0px 8px 32px rgba(22, 22, 22, 0.1)",
        "soft-05": "0px 8px 64px rgba(22, 22, 22, 0.1)",
        "hard-01":
          "0px 1px 2px rgba(22, 22, 22, 0.3), 0px 1px 3px 1px rgba(22, 22, 22, 0.15)",
        "hard-02":
          "0px 1px 2px rgba(22, 22, 22, 0.3), 0px 2px 6px 2px rgba(22, 22, 22, 0.15)",
        "hard-03":
          "0px 4px 8px 3px rgba(22, 22, 22, 0.16), 0px 1px 3px rgba(22, 22, 22, 0.3)",
        "hard-04":
          "0px 6px 12px 4px rgba(22, 22, 22, 0.16), 0px 2px 6px rgba(22, 22, 22, 0.3)",
        "hard-05":
          "0px 8px 16px 6px rgba(22, 22, 22, 0.16), 0px 4px 8px rgba(22, 22, 22, 0.3)",
      },
    },
  },
  plugins: [require("./plugins/radix-tailwind")],
};
