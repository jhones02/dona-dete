import { siteConfig } from "@/lib/site";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionReveal from "./SectionReveal";

const products = [
    {
        title: "Pão de Queijo Congelado",
        description:
            "Pão de queijo artesanal congelado, perfeito para assar em casa e servir quentinho.",
        image: "/images/produto-pao-de-queijo.jpg",
        button: "Quero Comprar"
    },
    {
        title: "Biscoito de Queijo",
        description:
            "Sabor caseiro, textura deliciosa e aquele toque mineiro que combina com café.",
        image: "/images/galeria-2.jpg",
        button: "Saiba Mais"
    }
];

export default function Products() {
    return (
        <section id="produtos" className="bg-white px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionReveal className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-4 font-black uppercase tracking-[0.25em] text-primary">
                        Produtos
                    </p>

                    <h2 className="text-balance text-4xl font-black text-text sm:text-5xl">
                        Do freezer ao forno, pronto para deixar seu café mais feliz.
                    </h2>
                </SectionReveal>

                <div className="grid gap-8 lg:grid-cols-2">
                    {products.map((product, index) => (
                        <SectionReveal key={product.title} delay={index * 0.08}>
                            <article className="group overflow-hidden rounded-5xl bg-cream shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-warm">
                                <div className="relative h-72 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        loading="lazy"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                                </div>

                                <div className="p-8">
                                    <h3 className="text-3xl font-black text-primary">
                                        {product.title}
                                    </h3>

                                    <p className="mt-4 text-lg leading-8 text-text/75">
                                        {product.description}
                                    </p>

                                    <a
                                        href={siteConfig.whatsappUrl}
                                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-black text-white transition hover:bg-primary-dark"
                                    >
                                        {product.button}
                                        <ArrowRight size={20} />
                                    </a>
                                </div>
                            </article>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
