import SectionReveal from "./SectionReveal";

const testimonials = [
    {
        text: "O melhor pão de queijo da cidade.",
        author: "Cliente Dona Dete"
    },
    {
        text: "Crocante por fora e macio por dentro.",
        author: "Cliente Dona Dete"
    },
    {
        text: "Todo café da tarde aqui em casa tem Dona Dete.",
        author: "Cliente Dona Dete"
    }
];

export default function Testimonials() {
    return (
        <section className="bg-cream px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionReveal className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-4 font-black uppercase tracking-[0.25em] text-primary">
                        Avaliações
                    </p>

                    <h2 className="text-balance text-4xl font-black text-text sm:text-5xl">
                        Quem prova, recomenda.
                    </h2>
                </SectionReveal>

                <div className="grid gap-6 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <SectionReveal key={testimonial.text} delay={index * 0.08}>
                            <figure className="h-full rounded-5xl bg-white p-8 shadow-soft">
                                <div className="mb-5 text-xl text-brandGold">★★★★★</div>

                                <blockquote className="text-2xl font-black leading-tight text-text">
                                    “{testimonial.text}”
                                </blockquote>

                                <figcaption className="mt-6 font-bold text-primary">
                                    {testimonial.author}
                                </figcaption>
                            </figure>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
