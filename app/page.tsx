import About from "@/components/About";
import BackToTop from "@/components/BackToTop";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import SEO from "@/components/SEO";
import Testimonials from "@/components/Testimonials";
import TopNotice from "@/components/TopNotice";

export default function Home() {
    return (
        <>
            <SEO />

            <TopNotice />
            <Navbar />

            <main>
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

            <Footer />
            <FloatingWhatsApp />
            <BackToTop />
        </>
    );
}
