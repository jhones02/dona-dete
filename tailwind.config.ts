import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                bg: "#F2C94C",
                "bg-light": "#F9E4A8",
                primary: "#B71C1C",
                "primary-dark": "#8C1414",
                text: "#1A1A1A",
                white: "#FFFFFF",
                accent: "#25D366",
                cream: "#FFF7E6",
                beige: "#F8E7C7",
                brandRed: "#B31217",
                brandGold: "#F4B400"
            },
            fontFamily: {
                sans: ["var(--font-site)", "system-ui", "sans-serif"]
            },
            boxShadow: {
                soft: "0 18px 45px rgba(26, 26, 26, 0.10)",
                warm: "0 20px 60px rgba(183, 28, 28, 0.18)"
            },
            borderRadius: {
                "4xl": "2rem",
                "5xl": "2.5rem"
            },
            backgroundImage: {
                grain:
                    "radial-gradient(circle at 1px 1px, rgba(26,26,26,.08) 1px, transparent 0)"
            }
        }
    },
    plugins: []
};

export default config;
