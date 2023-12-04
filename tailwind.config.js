/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "nav-el-color": "#2C2A80",
        "cocoa-color": "#282668",
        "call-action": "#A6EBE3",
        "hero-text-color": "#475569",
        "impact-funderBTN-color": "#FF2D55",
        "impact-deliverBTN-color": "#62C9A4",
      },
    },
  },
  plugins: [],
};
