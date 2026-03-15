"use client";

import { useTranslation } from "@/lib/useTranslation";
import SectionTitle from "@/components/ui/SectionTitle";
import FAQItem from "@/components/ui/FAQItem";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface FAQSectionProps {
  lang: "es" | "en";
}

export default function FAQSection({ lang }: FAQSectionProps) {
  const { t } = useTranslation(lang);

  const faqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
  ];

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="theme-dark px-6 py-20"
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <div className="faq-grid">

          <ScrollReveal direction="right">
            <div className="faq-title-col">
              <SectionTitle
                id="faq-title"
                label={t("faq.label")}
                title={t("faq.title")}
                align="left"
              />
              <p className="text-left mt-2">Tienes dudas? Escribenos al bsc@gmail.com</p>
            </div>
          </ScrollReveal>


          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={i === 0}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .faq-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .faq-title-col {
          text-align: right;
        }
        @media (min-width: 1024px) {
          .faq-grid {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 4rem;
            align-items: start;
            flex-direction: unset;
          }
          .faq-title-col {
            position: sticky;
            top: 6rem;
          }
        }
      `}</style>
    </section>
  );
}
