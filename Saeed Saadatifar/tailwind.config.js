/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        myImage: "url('./src/assets/1.jpg')",
      },
    },
  },
  plugins: [],
};
