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
        primary: "#f59e0b",
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
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f0f9ff 5px,#f0f9ff 100px)",

        circularDark:
          "repeating-radial-gradient(#818cf8 2px,#312e81 8px,#1e1b4b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f0f9ff 5px,##f0f9ff 80px)",

        circularDarkLg:
          "repeating-radial-gradient(#818cf8 2px,#312e81 8px,#1e1b4b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,##f0f9ff 5px,#1e1b4b 60px)",

        circularDarkMd:
          "repeating-radial-gradient(#818cf8 2px,#1e1b4b 6px,#312e81 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f0f9ff 5px,#f0f9ff 40px)",

        circularDarkSm:
          "repeating-radial-gradient(#818cf8 2px,#312e81 4px,#1e1b4b 40px)",
      },
    },
  },
  plugins: [],
};
