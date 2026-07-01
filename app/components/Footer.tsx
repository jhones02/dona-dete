import { siteConfig } from "@/lib/site";
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-text px-5 py-12 text-white lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
                <div>
                    <div className="mb-5 flex items-center gap-4">
                        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-white">
                            <Image
                                src={siteConfig.logo}
                                alt="Logo Dona Dete"
                                fill
                                sizes="64px"
                                className="object-contain p-1"
                            />
                        </div>

                        <div>
                            <strong className="block text-xl font-black">Dona Dete</strong>
                            <span className="text-white/65">Pão de Queijo Artesanal</span>
                        </div>
                    </div>

                    <p className="max-w-md leading-7 text-white/70">
                        Pão de queijo artesanal congelado, feito com carinho, tradição e
                        ingredientes selecionados.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 font-black text-brandGold">Contato</h3>

                    <a
                        href={siteConfig.whatsappUrl}
                        className="flex items-center gap-2 text-white/80 transition hover:text-brandGold"
                    >
                        <Phone size={18} />
                        {siteConfig.phone}
                    </a>
                </div>

                <div>
                    <h3 className="mb-4 font-black text-brandGold">Redes sociais</h3>

                    <div className="flex gap-3">
                        <a
                            href={siteConfig.instagramUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="rounded-full bg-white/10 p-3 transition hover:bg-brandGold hover:text-text"
                        >
                            <Instagram size={21} />
                        </a>

                        <a
                            href={siteConfig.facebookUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="rounded-full bg-white/10 p-3 transition hover:bg-brandGold hover:text-text"
                        >
                            <Facebook size={21} />
                        </a>

                        <a
                            href={siteConfig.whatsappUrl}
                            aria-label="WhatsApp"
                            className="rounded-full bg-white/10 p-3 transition hover:bg-accent hover:text-white"
                        >
                            <MessageCircle size={21} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/55">
                © Dona Dete Pão de Queijo. Todos os direitos reservados.
            </div>
        </footer>
    );
}
