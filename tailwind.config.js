/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",
        checkBoxBg: {
          from: "hsl(192, 100%, 67%)",
          to: "hsl(280, 87%, 65%)",
        },

        lt: {
          veryLightGray: "hsl(0, 0%, 98%)",
          veryLightGrayishBlue: "hsl(236, 33%, 92%)",
          lightGrayishBlue: "hsl(233, 11%, 84%)",
          darkGrayishBlue: "hsl(236, 9%, 61%)",
          veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
        },

        dt: {
          veryDarkBlue: "hsl(235, 21%, 11%)",
          veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
          lightGrayishBlue: "hsl(234, 39%, 85%)",
          lightGrayishBlueHover: "hsl(236, 33%, 92%)",
          darkGrayishBlue: "hsl(234, 11%, 52%)",
          veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
          veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
        },
      },
    },
  },
  plugins: [],
};
