/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textDecoration: ["active"],
      container: {
        center: true,
        screens: {
          xl: "1200px",
        },
      },
      colors: {
        green: {
          DEFAULT: "#46A358",
        },
        black: {
          DEFAULT: "#3D3D3D",
        },
        grey: {
          DEFAULT: "#FBFBFB",
          1: "#727272",
          2: "#A5A5A5",
          3: "#CBCBCB",
          4: "#E5E5E5",
          5: "#ACACAC",
        },
      },
      fontFamily: {
        "cera-pro": "Cera Pro",
        "cera-pro-bold": "Cera Pro bold",
      },
      backgroundImage: {
        "box-img-1": "url('./public/mock-imges/img/box-img-1.png')",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        ".dfcol": {
          display: "flex",
          flexDirection: "column",
        },
        ".dfrowc": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        },
      };

      addUtilities(utilities, ["responsive", "hover"]);
    }),
  ],
};
