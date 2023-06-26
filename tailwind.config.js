/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sofia: ["Sofia Sans Semi Condensed", "sans-serief"],
        Monomaniac: ["Monomaniac One", "sans-serief"],
        Shantell: ["Shantell Sans", "Shantell Sans"],
      },
      colors: {
        customPurple: "#A445ED",
        hr: "#979797",
      },
      container: {
        center: true,
        maxWidth: "none",
      },
    },
  },
  plugins: [],
};
