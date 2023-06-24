/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        0: "0",
      },
      padding: {
        0: "0",
      },
      container: {
        center: true,

        "*": {
          margin: "0px",
          padding: "0px",
          boxSizing: "border-box",
        },
      },
    },
  },
  plugins: [],
};
