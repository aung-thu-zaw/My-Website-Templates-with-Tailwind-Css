/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/preline/preline.js"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
