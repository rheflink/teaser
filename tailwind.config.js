"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      tablet: "1024px",
      laptop: "1280px",
      desktop: "1536px",
    },
  },
  plugins: [],
};
