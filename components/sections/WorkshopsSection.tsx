"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import SectionTitle from "@/components/ui/SectionTitle";
import WorkshopCard from "@/components/ui/WorkshopCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface WorkshopsSectionProps {
  lang: "es" | "en";
}

export default function WorkshopsSection({ lang }: WorkshopsSectionProps) {
  const { t } = useTranslation(lang);

  const workshops = [
    {
      title: t("workshops.sensual_title"),
      level: t("workshops.sensual_level"),
      description: t("workshops.sensual_desc"),
      color: "#8B3CF7",
      emoji: "❤️",
    },
    {
      title: t("workshops.tradicional_title"),
      level: t("workshops.tradicional_level"),
      description: t("workshops.tradicional_desc"),
      color: "#F59E0B",
      emoji: "🎵",
    },
    {
      title: t("workshops.fusion_title"),
      level: t("workshops.fusion_level"),
      description: t("workshops.fusion_desc"),
      color: "#A855F7",
      emoji: "✨",
    },
  ];

  const description =
    lang === "es"
      ? "Tres estilos, un mismo amor por la bachata. Aprende de los mejores instructores del mundo en sesiones intensivas diseñadas para llevarte al siguiente nivel, sin importar tu experiencia."
      : "Three styles, one shared love for bachata. Learn from the world's best instructors in intensive sessions designed to take you to the next level, regardless of your experience.";

  return (
    <section
      id="workshops"
      aria-labelledby="workshops-title"
      className="theme-dark"
      style={{
        padding: "var(--space-section) var(--space-container)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        {/* Header — centered subtitle, title, description */}
        <ScrollReveal>
          <div
            style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}
          >
            <SectionTitle
              id="workshops-title"
              label={t("workshops.label")}
              title={t("workshops.title")}
              align="center"
            />
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-lg)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                marginTop: "1.25rem",
                marginBottom: 0,
              }}
            >
              {description}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "var(--text-sm)",
                color: "var(--color-text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "0.75rem",
              }}
            >
              {t("workshops.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Two-column layout: images | cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            marginTop: "4rem",
            alignItems: "center",
          }}
        >
          {/* LEFT — stacked images */}
          <ScrollReveal direction="left">
            <div
              style={{
                position: "relative",
                height: "520px",
                width: "100%",
              }}
            >
              {/* B&W background image */}
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "8%",
                  width: "78%",
                  height: "84%",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  boxShadow: "0 24px 48px rgba(0,0,0,0.6)",
                }}
              >
                <Image
                  src="/images/img-1.jpg"
                  alt="Bailarines de bachata"
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  style={{
                    objectFit: "cover",
                    filter: "grayscale(100%) brightness(0.7)",
                  }}
                />
              </div>

              {/* Color overlay image — tilted left */}
              <div
                className="rotate-[0deg] sm:rotate-[20deg]"
                style={{
                  position: "absolute",
                  left: 0,
                  top: "4%",
                  width: "62%",
                  height: "70%",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  transformOrigin: "bottom right",
                  boxShadow:
                    "0 20px 60px rgba(139,60,247,0.35), 0 8px 24px rgba(0,0,0,0.5)",
                  border: "2px solid rgba(139,60,247,0.3)",
                  zIndex: 2,
                }}
              >
                <Image
                  src="/images/formacion-2.jpg"
                  alt="Instructor de bachata en clase"
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  style={{
                    objectFit: "cover",
                    /* Counter-rotate the image so it stays upright visually */
                    transform: "scale(1.35)",
                    transformOrigin: "center center",
                  }}
                  className="rotate-[0deg] sm:rotate-[20deg]"
                />
              </div>

              {/* Decorative glow blob */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "10%",
                  left: "15%",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(139,60,247,0.2) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  zIndex: 0,
                }}
              />
            </div>
          </ScrollReveal>

          {/* RIGHT — cards stacked vertically */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {workshops.map((workshop, i) => (
              <ScrollReveal
                key={workshop.title}
                delay={i * 120}
                direction="right"
              >
                <WorkshopCard {...workshop} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
