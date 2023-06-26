/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
