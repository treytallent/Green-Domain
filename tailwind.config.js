/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontFamily: {
         sans: ["DM Sans", "sans-serif"],
      },
      extend: {
         colors: {
            cyan: {
               1000: "#044E54",
               900: "#0A6C74",
               800: "#0E7C86",
               700: "#14919B",
               600: "#2CB1BC",
               500: "#38BEC9",
               400: "#54D1DB",
               300: "#87EAF2",
               200: "#BEF8FD",
               100: "#E0FCFF",
            },
         },
      },
   },
   plugins: [],
}
