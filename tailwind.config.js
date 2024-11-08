/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      colors: {
        customGray: "#E8E9ED",
      },
      width: {
        500: "500px",
      },
    },
  },
  plugins: [],
};

