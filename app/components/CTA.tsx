import { siteConfig } from "@/lib/site";
import { MessageCircle } from "lucide-react";
import SectionReveal from "./SectionReveal";

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-primary px-5 py-24 text-white lg:px-8">
            <div className="absolute inset-0 noise opacity-20" />
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-brandGold/30 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-black/20 blur-3xl" />

            <SectionReveal className="relative z-10 mx-auto max-w-4xl text-center">
                <p className="mb-5 font-black uppercase tracking-[0.25em] text-brandGold">
                    É hora do café
                </p>

                <h2 className="text-balance text-4xl font-black leading-tight sm:text-6xl">
                    Seu café merece um pão de queijo de verdade.
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-white/85">
                    Do freezer ao forno, é amor à primeira mordida!
                </p>

                <a
                    href={siteConfig.whatsappUrl}
                    className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-brandGold px-9 py-5 text-lg font-black text-text shadow-soft transition hover:-translate-y-1 hover:bg-bg-light"
                >
                    <MessageCircle size={24} />
                    Peça agora pelo WhatsApp
                </a>
            </SectionReveal>
        </section>
    );
}
