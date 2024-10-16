/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        IBMplex: ["IBM Plex Mono", "sans-serif"],
        Fred: ["Fredoka", "sans-serif"],
        Code: ["Source Code Pro", "sans-serif"],
        Head: ["Jacquarda Bastarda 9", "sans-serif"],
        Pix: ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
