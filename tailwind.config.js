/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      margin: {"72px": "72px"},
      backgroundColor: {"zinc-930": "rgb(10,10,12)"}
    },
  },
  plugins: [],
};
