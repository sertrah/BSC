"use client";

import { Trophy, Globe, Star } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface QualifierSectionProps {
  lang: "es" | "en";
}

export default function QualifierSection({ lang }: QualifierSectionProps) {
  const { t } = useTranslation(lang);

  const stats = [
    { num: t("qualifier.stats_1_num"), label: t("qualifier.stats_1_label") },
    { num: t("qualifier.stats_2_num"), label: t("qualifier.stats_2_label") },
    { num: t("qualifier.stats_3_num"), label: t("qualifier.stats_3_label") },
  ];

  const prizes = [
    t("qualifier.prize_1"),
    t("qualifier.prize_2"),
    t("qualifier.prize_3"),
  ];

  return (
    <section
      id="qualifier"
      aria-labelledby="qualifier-title"
      className="theme-light"
      style={{
        padding: "var(--space-section) var(--space-container)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <ScrollReveal>
          <SectionTitle
            id="qualifier-title"
            label={t("qualifier.label")}
            title={t("qualifier.title")}
            align="left"
          />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            marginTop: "3rem",
            alignItems: "center",
          }}
        >
          <ScrollReveal delay={100}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-lg)",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                {t("qualifier.body")}
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "var(--text-2xl)",
                  letterSpacing: "0.05em",
                  color: "var(--color-accent-gold)",
                  marginBottom: "1rem",
                }}
              >
                {t("qualifier.prize_title")}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                {prizes.map((prize, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-base)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    <Star
                      size={16}
                      style={{
                        color: "var(--color-accent-gold)",
                        marginTop: "3px",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    {prize}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1rem 1.5rem",
                  background: "var(--color-bg-elevated)",
                  borderRadius: "var(--radius-md)",
                  borderLeft: "3px solid var(--color-accent-primary)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {t("qualifier.format_title")}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-base)",
                    color: "var(--color-text-secondary)",
                    margin: 0,
                  }}
                >
                  {t("qualifier.format")}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    marginTop: "0.25rem",
                  }}
                >
                  {t("qualifier.criteria")}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--gradient-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.5rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.5rem",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "var(--text-4xl)",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      background: "var(--gradient-gold)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      minWidth: "80px",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-base)",
                      color: "var(--color-text-secondary)",
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
              <div
                style={{
                  background: "var(--gradient-card)",
                  border: "1px solid rgba(245,158,11,0.3)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "var(--shadow-glow-gold)",
                }}
              >
                <Trophy
                  size={48}
                  style={{
                    color: "var(--color-accent-gold)",
                    margin: "0 auto 1rem",
                  }}
                  aria-hidden="true"
                />
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "var(--text-xl)",
                    color: "var(--color-accent-gold)",
                    margin: 0,
                  }}
                >
                  Bachata Social World Cup
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-muted)",
                    marginTop: "0.5rem",
                  }}
                >
                  Geneva, Switzerland · Oct 10-11, 2026
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                  }}
                >
                  <Globe
                    size={14}
                    style={{ color: "var(--color-text-muted)" }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--text-xs)",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    50+ Countries · World Finals
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
