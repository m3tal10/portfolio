/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        "brand-primary": "#facc15", //yellow-400
        "brand-secondary": "#f5f5f4", //stone-100
        "text-light": "#64748b", //slate-500
        "hover-fill": "#1f2937", //gray-800
        bgcolor: "#cbd5e1",
        "profile-back": "#ffeb3b",

        //Dark mode
        "brand-primary-dark": "#082f49", //sky-950
        "text-light-dark": "#cbd5e1", //slate-300
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#fbbf24",
            borderRadius: "50%",
            border: "2px solid transparent",
            backgroundClip: "content-box",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f5f5f4",
            borderRadius: "6px",
          },
        },
        ".scrollbar-main": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#fbbf24",
            borderRadius: "50%",
            border: "2px solid transparent",
            backgroundClip: "content-box",
            visibility: "hidden",
          },
          "&::-webkit-scrollbar-track": {
            borderRadius: "6px",
          },
        },
        // More custom classes can be added here
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
  darkMode: "class",
};
