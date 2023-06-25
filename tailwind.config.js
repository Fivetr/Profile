/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen: {
        "2xl": "1536px",
        "3xl": "2000px",
      },
    },
    fontFamily: {
      signature: "Pacifico",
    },
  },
  darkMode: "class",
  plugins: [],
};
