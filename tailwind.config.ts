// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    red: "#B31217",
                    redDark: "#8C0F13",
                    gold: "#F4B400",
                    cream: "#FFF8EC",
                    beige: "#F5E6D3",
                },
            },
            fontFamily: {
                sans: ["var(--font-baloo)", "ui-rounded", "sans-serif"],
            },
            borderRadius: {
                xl2: "1.5rem",
            },
        },
    },
    plugins: [],
} satisfies Config;
