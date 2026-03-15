import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { trackEvent } from "@/lib/analytics";

interface FooterProps {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
}

export default function Footer({ lang, setLang }: FooterProps) {
  const { t } = useTranslation(lang);

  const handleLangChange = (newLang: "es" | "en") => {
    trackEvent("language_switch", { from: lang, to: newLang });
    setLang(newLang);
  };

  return (
    <footer
      style={{
        background: "var(--color-bg-secondary)",
        borderTop: "1px solid var(--color-border)",
        padding: "3rem var(--space-container)",
      }}
    >
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div className="text-center">
            <Image
              className="m-auto"
              src="/logo.png"
              alt="BSC Logo"
              width={100}
              height={40}
              style={{ objectFit: "contain", marginBottom: "1rem" }}
            />
            <p
              className="m-auto"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                lineHeight: 1.6,
                maxWidth: "240px",
              }}
            >
              {t("footer.tagline")}
            </p>
            <p
              style={{
                color: "var(--color-accent-gold)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-sm)",
                marginTop: "0.75rem",
              }}
            >
              Junio 26 · 27 · 28, 2026
            </p>
          </div>

          {/* Social */}
          <div className="text-center">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-lg)",
                letterSpacing: "0.05em",
                marginBottom: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              SOCIAL
            </h3>
            <div
              className="items-center flex"
              style={{
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                { icon: Instagram, label: "@bachataSocialCongress", href: "#" },
                { icon: Facebook, label: "Bachata Social Congress", href: "#" },
                { icon: Youtube, label: "BSC Official", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color =
                      "var(--color-accent-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      "var(--color-text-secondary)")
                  }
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-lg)",
                letterSpacing: "0.05em",
                marginBottom: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              {t("footer.contact")}
            </h3>
            <a
              href="mailto:info@bachataSocialCongress.com"
              style={{
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-sm)",
                textDecoration: "none",
                transition: "color var(--transition-fast)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-secondary)")
              }
            >
              info@bachataSocialCongress.com
            </a>
            <div style={{ marginTop: "1.5rem" }}>
              <LanguageToggle currentLang={lang} onChange={handleLangChange} />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
            }}
          >
            © 2026 Bachata Social Congress · Bogotá, Colombia ·{" "}
            {t("footer.rights")}
          </p>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
            }}
          >
            Bachata Social World Cup Qualifier — Latinoamérica
          </p>
        </div>
      </div>
    </footer>
  );
}
