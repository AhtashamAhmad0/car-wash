/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#EEF3F4",
          100: "#D7E2E4",
          300: "#7F9DA4",
          500: "#2E4A52",
          700: "#16292E",
          800: "#0F1E22",
          900: "#0B1619",
        },
        foam: {
          100: "#DFFBF5",
          200: "#B3F3E6",
          400: "#4FE3CC",
          500: "#21C7B0",
          600: "#17A695",
          700: "#128378",
        },
        signal: {
          400: "#FFC24D",
          500: "#FF9F1C",
          600: "#E8850A",
        },
        mist: "#F4F7F7",
      },
      fontFamily: {
        display: ["'Big Shoulders Display'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}
