"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 700);
        onScroll();

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    return (
        <a
            href="#inicio"
            aria-label="Voltar ao topo"
            className="fixed bottom-24 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-soft transition hover:-translate-y-1 hover:bg-primary-dark"
        >
            <ArrowUp size={22} />
        </a>
    );
}
