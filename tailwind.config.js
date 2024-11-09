/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html", "./js/**/*.js"],
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

