module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: [
          "lato-regular",
          "lato-bold",
          "lato-light",
          "lato-thin",
          "lato-black",
        ],
        fonarto: ["fonarto"],
        poppins: ["poppins"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        themeBrown: "#FAC697",
        themeBlue: "#14A8E2",
        themeGreen: "#0F903D",
        themeYellow: "#F2A306",
        themeOrange: "#E96703",
        themeWhite: "#FFFEFD",
        themeBlack: "#1E1E1E",
        themePeach: "#EDD28E",
        container: "#FAC697",
        background: {
          spring: "#BCF0FF",
          autumn: "#F8D1B3",
          summer: "#93D7F2",
          winter: "#EDF8FF",
        },
        admin: {
          black: "#242424",
          blue: "#6B82A9",
          orange: "#EF8F50",
          gray: "#686868",
          green: "#498B45",
          red: "#FF483F",
          background: "#F2F5FA",
        },
        hover: {
          themeBrown: "#FAB97E",
          themeBlue: "#0098D3",
          themeGreen: "#008A31",
          themeYellow: "#DB9200",
          themeOrange: "#D95E00",
          themePeach: "#E9C058",
          admin: {
            blue: "#3E5F98",
          },
        },
      },
      backgroundImage: (theme) => ({
        "autumn-large":
          "url('./assets/img/LandingPage/background/autumn/autumn-large.png')",
        "autumn-footer":
          "url('./assets/img/LandingPage/background/autumn/autumn-footer.png')",
        "autumn-mobile":
          "url('./assets/img/LandingPage/background/autumn/autumn-mobile.png')",
        "spring-large":
          "url('./assets/img/LandingPage/background/spring/spring-large.png')",
        "spring-footer":
          "url('./assets/img/LandingPage/background/spring/spring-footer.png')",
        "spring-mobile":
          "url('./assets/img/LandingPage/background/spring/spring-mobile.png')",
        "summer-large":
          "url('./assets/img/LandingPage/background/summer/summer-large.png')",
        "summer-footer":
          "url('./assets/img/LandingPage/background/summer/summer-footer.png')",
        "summer-mobile":
          "url('./assets/img/LandingPage/background/summer/summer-mobile.png')",
        "winter-large":
          "url('./assets/img/LandingPage/background/winter/winter-large.png')",
        "winter-footer":
          "url('./assets/img/LandingPage/background/winter/winter-footer.png')",
        "winter-mobile":
          "url('./assets/img/LandingPage/background/winter/winter-mobile.png')",
        "closing-plain": "url('./assets/img/Closing/closing-plain.png')",
        "closing-cloud": "url('./assets/img/Closing/closing-cloud.png')",
      }),
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(2deg)",
          },
          "50%": {
            transform: "rotate(-2deg)",
          },
        },
        strafe: {
          "0%, 100%": {
            transform: "translateX(20px)",
          },
          "50%": {
            transform: "translateX(-20px)",
          },
        },
        floating: {
          "0%, 100%": {
            transform: "translateX(10px) rotate(2deg)",
          },
          "50%": {
            transform: "translateX(-10px) rotate(-2deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
        strafe: "strafe 14s ease-in-out infinite",
        floating: "floating 8s ease-in-out infinite",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
    scrollbar: ["rounded"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
  ],
};
