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
        heroHeight: "calc(100vh - 14rem - 5rem)",
      },
      animation: {
        hero: "hero 10s ease infinite",
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
