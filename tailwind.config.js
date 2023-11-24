/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1e1b4b",
        light: "#eef2ff",
        primary: "#06b6d4",
        primaryDim: "#0891b2",
        primaryDark: "#bef264",
        primaryDarkDim: "#84cc16",
      },
      screens: {
        "3xl": "1850px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(#eef2ff 2px,#eef2ff 5px,#a5f3fc 100px)",

        circularDark:
          "repeating-radial-gradient(#818cf8 2px,#312e81 8px,#1e1b4b 100px)",

        circularLightLg:
          "repeating-radial-gradient(#eef2ff 2px,#eef2ff 5px,#a5f3fc 80px)",

        circularDarkLg:
          "repeating-radial-gradient(#818cf8 2px,#312e81 8px,#1e1b4b 80px)",

        circularLightMd:
          "repeating-radial-gradient(#eef2ff 2px,##eef2ff 5px,#a5f3fc 60px)",

        circularDarkMd:
          "repeating-radial-gradient(#818cf8 2px,#1e1b4b 6px,#312e81 60px)",

        circularLightSm:
          "repeating-radial-gradient(#eef2ff 2px,#eef2ff 5px,#a5f3fc 40px)",

        circularDarkSm:
          "repeating-radial-gradient(#818cf8 2px,#312e81 4px,#1e1b4b 40px)",
      },
    },
  },
  plugins: [],
};
