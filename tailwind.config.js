/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#ecfeff",
          "100": "#cffafe",
          "200": "#a5f3fc",
          "300": "#67e8f9",
          "400": "#22d3ee",
          "500": "#06b6d4",
          "600": "#0891b2",
          "700": "#0e7490",
          "800": "#155e75",
          "900": "#164e63",
          "950": "#083344"
        }
      },
      margin: {
        "72px": "72px"
      },
      backgroundColor: {
        "zinc-930": "rgb(10,10,12)"
      },
      dropShadow: {
        'default': '0 0 0.0rem #7dd3fc',
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
