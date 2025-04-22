// tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        cream: "#fdfaf4",
        rust: "#b14f3d",
        mustard: "#d2a74e",
        brown: "#3e2f27",
        offwhite: "#f6f1e7",
        graphite: "#1b1b1b",
        charcoal: "#2c2c2c",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

