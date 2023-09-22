import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scrollYDown: "scrollYDown 3s linear infinite",
        scrollYUp: "scrollYUp 3s linear infinite",
      },
      keyframes: {
        scrollYDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        scrollYUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
