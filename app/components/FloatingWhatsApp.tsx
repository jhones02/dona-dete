import { siteConfig } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    return (
        <a
            href={siteConfig.whatsappUrl}
            aria-label="Fazer pedido pelo WhatsApp"
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-warm transition hover:-translate-y-1 hover:scale-105"
        >
            <MessageCircle size={28} />
        </a>
    );
}
