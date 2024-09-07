/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#aa6d6b",
        brandDark: "#151616",
        secondary: "#f1c40f",
        danger: "#e74c3c",
      },
      fontFamily: {
        poppins:["Poppins","sans-serif"],
        varela:["Varela Round","sans-serif"],
      },
      container: {
        center: true,
        padding: {
          Default: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}

