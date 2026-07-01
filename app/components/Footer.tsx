import {contactEmails, siteConfig} from "@/lib/site";
import {Facebook, Instagram, Mail, MessageCircle, Phone, Store} from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-text px-5 py-12 text-white lg:px-8">
            <div className="mx-auto max-w-7xl">
                <section className="relative mb-12 overflow-hidden rounded-5xl bg-gradient-to-br from-brandRed via-brandRed to-brandGold p-6 text-white shadow-soft md:p-10">
                    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-black/20 blur-3xl" />

                    <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div>
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-text shadow-sm">
                                <Store size={16} />
                                Oportunidade para revendedores
                            </span>

                            <h2 className="max-w-2xl text-3xl font-black leading-tight md:text-5xl">
                                Seja um Distribuidor Dona Dete
                            </h2>

                            <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
                                Leve o sabor artesanal da Dona Dete para mais clientes.
                                Entre em contato com nossa equipe e saiba como revender,
                                distribuir ou comprar nossos produtos para o seu negócio.
                            </p>

                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="mailto:distribuidores@donadete.com.br"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black uppercase tracking-wide text-text transition hover:scale-105 hover:bg-brandGold"
                                >
                                    <Mail size={18} />
                                    Quero ser distribuidor
                                </a>

                                <a
                                    href="mailto:comercial@donadete.com.br"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-text"
                                >
                                    <Mail size={18} />
                                    Falar com comercial
                                </a>
                            </div>
                        </div>

                        <div className="rounded-4xl bg-white/95 p-5 text-text shadow-lg backdrop-blur md:p-6">
                            <h3 className="flex items-center gap-2 text-xl font-black">
                                <Mail size={22} />
                                Canais de atendimento
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-text/65">
                                Escolha o setor ideal para falar diretamente com nossa equipe.
                            </p>

                            <div className="mt-5 grid gap-3">
                                {contactEmails.map((item) => (
                                    <a
                                        key={item.email}
                                        href={`mailto:${item.email}`}
                                        className={
                                            item.featured
                                                ? "group flex flex-col gap-1 rounded-2xl bg-brandGold px-4 py-3 text-text ring-2 ring-text/10 transition hover:scale-[1.02] hover:bg-brandGold/90 sm:flex-row sm:items-center sm:justify-between"
                                                : "group flex flex-col gap-1 rounded-2xl bg-text/5 px-4 py-3 transition hover:bg-brandGold/25 sm:flex-row sm:items-center sm:justify-between"
                                        }
                                    >
                                        <span className="font-black">
                                            {item.label}
                                        </span>

                                        <span
                                            className={
                                                item.featured
                                                    ? "text-sm font-bold text-text"
                                                    : "text-sm font-medium text-text/65 group-hover:text-text"
                                            }
                                        >
                                            {item.email}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
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
                                <strong className="block text-xl font-black">
                                    Dona Dete
                                </strong>
                                <span className="text-white/65">
                                    Pão de Queijo Artesanal
                                </span>
                            </div>
                        </div>

                        <p className="max-w-md leading-7 text-white/70">
                            Pão de queijo artesanal congelado, feito com carinho, tradição e
                            ingredientes selecionados.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 font-black text-brandGold">
                            Contato
                        </h3>

                        <div className="space-y-3">
                            <a
                                href={siteConfig.whatsappUrl}
                                className="flex items-center gap-2 text-white/80 transition hover:text-brandGold"
                            >
                                <Phone size={18} />
                                {siteConfig.phone}
                            </a>

                            <a
                                href="mailto:contato@donadete.com.br"
                                className="flex items-center gap-2 text-white/80 transition hover:text-brandGold"
                            >
                                <Mail size={18} />
                                contato@donadete.com.br
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 font-black text-brandGold">
                            Redes sociais
                        </h3>

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

                <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/55">
                    © Dona Dete Pão de Queijo. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}


