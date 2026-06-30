// src/components/TopBar.tsx
import { SOCIAL } from "@/lib/constants";

export default function TopBar() {
    return (
        <div className="bg-brand-red text-white text-center text-sm py-2 px-4">
            🔥 Pão de queijo artesanal congelado •{" "}
            <a href={SOCIAL.whatsapp} target="_blank" className="underline font-semibold">
                Faça seu pedido pelo WhatsApp
            </a>
        </div>
    );
}
