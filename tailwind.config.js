/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e0e10",
        cream: "#faf7f1",
        gold: {
          DEFAULT: "#c9a24a",
          light: "#e2c97e",
          dark: "#8a6b22",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 30px 80px -30px rgba(201,162,74,0.35)",
        soft: "0 20px 60px -20px rgba(14,14,16,0.25)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg,#e2c97e 0%,#c9a24a 45%,#8a6b22 100%)",
        "ink-gradient":
          "linear-gradient(180deg,#0e0e10 0%,#1a1a1f 60%,#0e0e10 100%)",
      },
      animation: {
        "fade-up": "fadeUp .8s ease-out both",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
