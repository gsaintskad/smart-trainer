/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: This preset is critical for NativeWind v4!
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
