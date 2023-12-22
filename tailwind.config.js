/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "lato-font": ['"Lato"', "cursive"],
      },
      colors: {
        blue: {
          1: "#2F80ED",
        },
        red: {
          1: "#EB5757",
        },
        gray: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          6: "#F2F2F2",
        },
      },
      backgroundColor: {
        red: {
          1: "#EB5757",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
