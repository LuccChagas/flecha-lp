import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Diagnostico from "@/components/Diagnostico";
import Servicos from "@/components/Servicos";
import Metodo from "@/components/Metodo";
import Resultados from "@/components/Resultados";
import ParaQuem from "@/components/ParaQuem";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante";
import { site, faq } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}#organizacao`,
      name: site.nome,
      description: site.descricao,
      url: site.url,
      telephone: `+${site.contato.whatsapp}`,
      email: site.contato.email,
      areaServed: "BR",
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      sameAs: [site.social.instagram, site.social.tiktok, site.social.facebook],
      knowsAbout: [
        "Tráfego pago",
        "Meta Ads",
        "Google Ads",
        "Marketing imobiliário",
        "Geração de leads",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.p,
        acceptedAnswer: { "@type": "Answer", text: f.r },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />

      <main>
        <Hero />
        <Diagnostico />
        <Servicos />
        <Metodo />
        <Resultados />
        <ParaQuem />
        <Faq />
        <CtaFinal />
      </main>

      <Footer />
      <WhatsAppFlutuante />
    </>
  );
}
