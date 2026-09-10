/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F0",
        sand: "#F1E8DC",
        blush: "#EED6CB",
        rose: "#C8877A",
        roseDeep: "#A9685B",
        gold: "#B98A4E",
        ink: "#2B1D1B",
        inkSoft: "#5C4A46",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "999px 999px 24px 24px",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(43,29,27,0.18)",
        card: "0 10px 40px -12px rgba(43,29,27,0.14)",
      },
      animation: {
        marquee: "marquee 42s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        "spin-slow": "spin 26s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
      },
    },
  },
  plugins: [],
};
