module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        sectionHeight: "calc(50vh - 12rem - 8rem)",
        heroHeight: "calc(90vh - 14rem - 5rem)",
      },
      height: {
        chatbotHeight: "calc(60vh - 8rem - 4rem)"
      },
      animation: {
        hero: "hero 10s ease infinite",
      },
      margin: {
        section: "calc(5vh + 5rem) 0",
      },
      fontSize: {
        xsm: "0.675rem",
      },
      keyframes: {
        hero: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
}
