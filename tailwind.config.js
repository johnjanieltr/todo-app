/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#3a82f6", // Bright Blue
        },
        light: {
          gray: {
            50: "#fafafa", // Very Light Gray
          },
          grayishBlue: {
            50: "#e3e4f1", // Very Light Grayish Blue
            100: "#d2d3db", // Light Grayish Blue
            400: "#96989b", // Dark Grayish Blue
            800: "#4b5660", // Very Dark Grayish Blue
          },
        },
        dark: {
          blue: {
            50: "#e3e4f1", // Light Grayish Blue (hover)
            100: "#d8dee9", // Light Grayish Blue
            500: "#68757d", // Dark Grayish Blue
            825: "#3a3b41", // Very Dark Grayish Blue
            800: "#252c35", // Very Dark Desaturated Blue
            850: "#2a2c32", // Very Dark Grayish Blue (additional)
            900: "#181820", // Very Dark Blue
          },
        },
      },
      backgroundImage: {
        "check-gradient": "linear-gradient(#2ceeff, #d67eff)", // Custom gradient
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      width: {
        "85p": "85%",
      },
      letterSpacing: {
        widest: "0.40em",
      },
    },
  },
  plugins: [],
};
