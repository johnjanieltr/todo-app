/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        lightWhite: "#fafafa",
        darkBlue: "#161722",
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
