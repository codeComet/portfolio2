/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      md: "600px",
      // => @media (min-width: 600px) { ... }

      sm: { max: "600px" },
      // => @media (max-width: 600px) { ... }
    },
    colors: {
      body: "#010C15", //bg-body
      border: "#1E2D3D",
      primary: "#011627",
      accent: "#FEA55F", //orange
      blue: "#4D5BCE", //blue
      green: "#43D9AD",
      coral: "#E99287",
      bodyText: "#607B96",
      button: "#1C2B3A",
      white: "#fff",
    },
    fontSize: {
      heading: ["62px", "81px"],
      subheading: "32px",
      bodyFont: "18px",
      label: "16px",
      code: "14px",
    },
    fontFamily: {
      firaCode: ["Fira Code", "monospace"],
    },
    extend: {
      borderRadius: {
        8: "8px",
      },
      backgroundImage: {
        "hero-bg": "url('./src/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
