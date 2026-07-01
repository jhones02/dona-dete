import { siteConfig } from "@/lib/site";

export default function TopNotice() {
    return (
        <div className="fixed left-0 top-0 z-50 w-full bg-primary px-4 py-2 text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
            🔥 Pão de queijo artesanal congelado •{" "}
            <a href={siteConfig.whatsappUrl} className="underline underline-offset-4">
                Faça seu pedido pelo WhatsApp
            </a>
        </div>
    );
}
