import { siteConfig } from "@/lib/site";

export default function SEO() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: siteConfig.name,
        description: siteConfig.description,
        image: siteConfig.heroImage,
        telephone: siteConfig.phone,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Uberaba",
            addressRegion: "MG",
            addressCountry: "BR"
        },
        sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl]
    };

    return (
        <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
