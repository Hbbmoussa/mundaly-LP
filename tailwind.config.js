/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        "nav-el-color": "#2C2A80",
        "cocoa-color": "#282668",
        "call-action": "#A6EBE3",
        "hero-text-color": "#475569",
        "impact-funderBTN-color": "#FF2D55",
        "impact-deliverBTN-color": "#62C9A4",
        "rating-starts-color": "#A6EBE3",
        "rating-starts-color2": "#918000",
        "progressbar-color": "#2B9E59",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        inter: ["inter"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
