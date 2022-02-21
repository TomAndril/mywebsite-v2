module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
  theme: {
    typography: (theme) => ({}),
    extend: {
      height: {
        'heroHeight': 'calc(100vh - 12rem - 5rem)'
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
