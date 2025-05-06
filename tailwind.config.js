/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Shared
        primary: '#5645EE',
        secondary: '#FF7400',


        // Light mode
        light: {
          background: '#FAFAFA',
          component: '#F2F2F2',
          text: '#151515',

        },
        // Dark mode
        dark: {
          background: '#151515',
          component: '#252525',
          text: '#FAFAFA',

        },
      },
    },
  },
  plugins: [],
}