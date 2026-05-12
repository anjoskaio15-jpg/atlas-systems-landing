import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      colors: {
        atlas: {
          ink: "#050816",
          deep: "#030611",
          navy: "#070B14",
          panel: "#0D1324",
          panelSoft: "#111827",
          line: "rgba(255, 255, 255, 0.08)",
          cyan: "#22D3EE",
          blue: "#38BDF8",
          soft: "#AAB4C5",
        },
      },
      boxShadow: {
        glow: "0 18px 56px rgba(34, 211, 238, 0.18)",
        panel: "0 28px 90px rgba(0, 0, 0, 0.36)",
      },
      backgroundImage: {
        "atlas-radial":
          "radial-gradient(circle at top right, rgba(34, 211, 238, 0.16), transparent 30%), linear-gradient(180deg, rgba(56, 189, 248, 0.06), transparent 42%)",
      },
    },
  },
  plugins: [],
};

export default config;
