"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import QualifierSection from "@/components/sections/QualifierSection";
import WorkshopsSection from "@/components/sections/WorkshopsSection";
import CompetitionSection from "@/components/sections/CompetitionSection";
import ArtistsSection from "@/components/sections/ArtistsSection";
import DressCodeSection from "@/components/sections/DressCodeSection";
import PassesSection from "@/components/sections/PassesSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import FAQSection from "@/components/sections/FAQSection";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <main id="main-content">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <AboutUsSection lang={lang} />
      <WorkshopsSection lang={lang} />
      <DressCodeSection lang={lang} />
      <ArtistsSection lang={lang} />
      <CompetitionSection lang={lang} />
      <PassesSection lang={lang} />
      <QualifierSection lang={lang} />
      <FAQSection lang={lang} />
      <Footer lang={lang} setLang={setLang} />
      <WhatsAppButton />
    </main>
  );
}
