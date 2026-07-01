import {
    CheckCircle2,
    Clock,
    CookingPot,
    HeartHandshake,
    Snowflake,
    Wheat
} from "lucide-react";
import SectionReveal from "./SectionReveal";

const features = [
    {
        icon: HeartHandshake,
        title: "Receita Mineira"
    },
    {
        icon: Wheat,
        title: "Ingredientes selecionados"
    },
    {
        icon: Snowflake,
        title: "Produto congelado"
    },
    {
        icon: CookingPot,
        title: "Fácil preparo"
    },
    {
        icon: CheckCircle2,
        title: "Sabor artesanal"
    },
    {
        icon: Clock,
        title: "Entrega rápida"
    }
];

export default function Features() {
    return (
        <section className="bg-cream px-5 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <SectionReveal className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-4 font-black uppercase tracking-[0.25em] text-primary">
                        Diferenciais
                    </p>

                    <h2 className="text-balance text-4xl font-black text-text sm:text-5xl">
                        Qualidade que dá para sentir no primeiro aroma.
                    </h2>
                </SectionReveal>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <SectionReveal key={feature.title} delay={index * 0.05}>
                                <div className="group rounded-5xl bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brandGold text-text transition group-hover:bg-primary group-hover:text-white">
                                        <Icon size={27} />
                                    </div>

                                    <h3 className="text-xl font-black text-text">
                                        {feature.title}
                                    </h3>
                                </div>
                            </SectionReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
