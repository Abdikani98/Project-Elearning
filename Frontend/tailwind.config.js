/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Dark mode waxuu ku shaqeeyaa fasalka 'dark'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primryColor: "#20B486",
        secdaryColor: "#16325B",
        accent: "#FACC15",

      },
      fontFamily:{
        poppins:  "Poppins",
        roboto:"Roboto",
        Playwrite :"Playwrite CZ"
      }
    },
    },
  // },
  plugins: [],
}

