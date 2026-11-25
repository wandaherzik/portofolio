/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B4A4A",
          dark: "#073535",
        },
        secondary: "#3E9C9A",
        peach: "#F9A88B",
        sunshine: "#F8D27C",
        cream: "#FDF1EA",
        ink: "#0B3B3B",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        script: ["Caveat", "cursive"],
        body: ['"DM Sans"', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        xl2: "32px",
        xl3: "48px",
        arch: "999px 999px 24px 24px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(7,53,53,.12)",
        "card-hover": "0 18px 40px rgba(7,53,53,.20)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
