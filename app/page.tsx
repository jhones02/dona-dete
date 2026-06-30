// src/app/page.tsx
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
    return (
        <main>
            <TopBar />
            <Hero />
            <About />
            <Products />
            <HowItWorks />
            <Features />
            <Gallery />
            <Testimonials />
            <FAQ />
            <CTA />
        </main>
    );
}
