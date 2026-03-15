"use client";

import { useTranslation } from "@/lib/useTranslation";
import SectionTitle from "@/components/ui/SectionTitle";
import CompCard from "@/components/ui/CompCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface CompetitionSectionProps {
  lang: "es" | "en";
}

export default function CompetitionSection({ lang }: CompetitionSectionProps) {
  const { t } = useTranslation(lang);

  const rankEs = ["Primer puesto", "Segundo puesto", "Tercer puesto"];
  const rankEn = ["1st place", "2nd place", "3rd place"];
  const rank = lang === "es" ? rankEs : rankEn;

  const competitions = [
    {
      title:
        lang === "es" ? "Mejor Lead y Mejor Follow" : "Best Lead & Best Follow",
      category: lang === "es" ? "Única" : "Open",
      prizes: [],
      placements: [
        {
          rank: rank[0],
          prizes:
            lang === "es"
              ? [
                  "Ser tallerista del BSC 2027 todo pago",
                  "Full Pass Bachatanamá Italia",
                  "Full Pass Motion Dubai 2026",
                  "$500.000 COP en efectivo",
                ]
              : [
                  "BSC 2027 instructor (all expenses paid)",
                  "Full Pass Bachatanamá Italy",
                  "Full Pass Motion Dubai 2026",
                  "$500,000 COP cash",
                ],
        },
        {
          rank: rank[1],
          prizes:
            lang === "es"
              ? ["$350.000 COP en efectivo"]
              : ["$350,000 COP cash"],
        },
        {
          rank: rank[2],
          prizes:
            lang === "es"
              ? ["$150.000 COP en efectivo"]
              : ["$150,000 COP cash"],
        },
      ],
      image: "/images/comp-1.jpg",
      featured: true,
    },
    {
      title: lang === "es" ? "1 vs 1 Mixto" : "1 vs 1 Mixed",
      category: lang === "es" ? "Única" : "Open",
      prizes: [],
      placements: [
        {
          rank: rank[0],
          prizes:
            lang === "es"
              ? [
                  "Full Pass Bachatanamá Italia",
                  "Full Pass Bachata Genova Festival 2026",
                  "Full Pass Bachata Explosion Berlin",
                  "$250.000 COP en efectivo",
                ]
              : [
                  "Full Pass Bachatanamá Italy",
                  "Full Pass Bachata Genova Festival 2026",
                  "Full Pass Bachata Explosion Berlin",
                  "$250,000 COP cash",
                ],
        },
        {
          rank: rank[1],
          prizes:
            lang === "es"
              ? ["$250.000 COP en efectivo"]
              : ["$250,000 COP cash"],
        },
        {
          rank: rank[2],
          prizes:
            lang === "es"
              ? ["$150.000 COP en efectivo"]
              : ["$150,000 COP cash"],
        },
      ],
      image: "/images/comp-2.jpg",
    },
    {
      title:
        lang === "es" ? "Mejor Lead y Mejor Follow" : "Best Lead & Best Follow",
      category: lang === "es" ? "Amateur" : "Amateur",
      prizes: [],
      placements: [
        {
          rank: rank[0],
          prizes:
            lang === "es"
              ? ["$200.000 COP en efectivo"]
              : ["$200,000 COP cash"],
        },
        {
          rank: rank[1],
          prizes:
            lang === "es"
              ? ["$100.000 COP en efectivo"]
              : ["$100,000 COP cash"],
        },
      ],
      featured: true,
      image: "/images/comp-3.jpg",
    },
    {
      title: lang === "es" ? "1 vs 1 Mixto" : "1 vs 1 Mixed",
      category: lang === "es" ? "Amateur" : "Amateur",
      prizes: [],
      placements: [
        {
          rank: rank[0],
          prizes:
            lang === "es"
              ? [
                  "Diamond Pass BSC 2027",
                  "Full Pass Bachata Explosion Berlin",
                  "$200.000 COP en efectivo",
                ]
              : [
                  "Diamond Pass BSC 2027",
                  "Full Pass Bachata Explosion Berlin",
                  "$200,000 COP cash",
                ],
        },
        {
          rank: rank[1],
          prizes:
            lang === "es"
              ? [
                  "50% descuento Diamond Pass BSC 2027",
                  "$50.000 COP en efectivo",
                ]
              : ["50% off Diamond Pass BSC 2027", "$50,000 COP cash"],
        },
      ],
      image: "/images/comp-3.jpg",
    },
  ];

  return (
    <section
      id="competition"
      aria-labelledby="competition-title"
      className="theme-light"
      style={{
        padding: "var(--space-section) var(--space-container)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Purple radial glow background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-section-glow)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <ScrollReveal>
          <SectionTitle
            id="competition-title"
            label={t("competition.label")}
            title={t("competition.title")}
          />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div
            style={{
              maxWidth: "760px",
              margin: "2rem auto 0",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                color: "var(--color-text-secondary)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {lang === "es"
                ? "Bachata Jam Session es una competencia de improvisación en formato batalla, donde se evalúan musicalidad, creatividad y conexión en tiempo real."
                : "Bachata Jam Session is an improvisation competition in battle format, where musicality, creativity, and connection are evaluated in real time."}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {lang === "es"
                  ? "• Mejor Leader y Mejor Follower (niveles Amateur y Única): se baila en pareja, pero avanza solo el mejor de cada rol."
                  : "• Best Leader & Best Follower (Amateur and Única levels): danced in pairs, but only the best in each role advances."}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {lang === "es"
                  ? "• ONE vs ONE Mixto (Amateur y Única): enfrentamientos individuales directos."
                  : "• ONE vs ONE Mixed (Amateur and Única): direct individual head-to-head battles."}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "var(--text-sm)",
                  color: "var(--color-text-primary)",
                  margin: 0,
                }}
              >
                {lang === "es"
                  ? "Un formato dinámico y auténtico, 100% improvisación."
                  : "A dynamic, authentic format — 100% improvisation."}
              </p>
            </div>

            <div
              style={{
                background: "rgba(139,60,247,0.08)",
                border: "1px solid rgba(139,60,247,0.25)",
                borderRadius: "var(--radius-md)",
                padding: "1rem 1.25rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "var(--text-sm)",
                  color: "var(--color-accent-bright)",
                  margin: "0 0 0.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {lang === "es" ? "Tarifas de inscripción" : "Registration fees"}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                <li
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {lang === "es"
                    ? "• Sin Diamond Pass: $75.000 COP por categoría · 2 categorías: $105.000 COP"
                    : "• Without Diamond Pass: $75,000 COP per category · 2 categories: $105,000 COP"}
                </li>
                <li
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-accent-gold)",
                  }}
                >
                  {lang === "es"
                    ? "• Con Diamond Pass: $45.000 COP por categoría"
                    : "• With Diamond Pass: $45,000 COP per category"}
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {competitions.map((comp, i) => (
            <ScrollReveal
              key={`${comp.title}-${comp.category}`}
              delay={i * 100}
            >
              <CompCard {...comp} ctaLabel={t("competition.cta")} lang={lang} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
