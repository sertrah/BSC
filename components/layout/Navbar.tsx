"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { trackEvent } from "@/lib/analytics";

interface NavbarProps {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const { t } = useTranslation(lang);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#workshops", label: t("nav.workshops") },
    { href: "#artists", label: t("nav.artists") },
    { href: "#competition", label: t("nav.competition") },
    { href: "#passes", label: t("nav.passes") },
    { href: "#faq", label: t("nav.faq") },
  ];

  const handleLangChange = (newLang: "es" | "en") => {
    trackEvent("language_switch", { from: lang, to: newLang });
    setLang(newLang);
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navegación principal"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition:
            "background var(--transition-base), backdrop-filter var(--transition-base), border-color var(--transition-base)",
          background:
            scrolled || menuOpen ? "rgba(10,10,15,0.96)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--color-border)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            padding: "0 var(--space-container)",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── MOBILE: burger (left) ── DESKTOP: logo (left) ── */}
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Burger — mobile only */}
            <button
              className="md:hidden"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                color: "var(--color-text-primary)",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "var(--radius-sm)",
                transition: "background var(--transition-fast)",
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo — desktop only (left) */}
            <a
              href="#"
              aria-label="Bachata Social Congress - Inicio"
              className="hidden md:block"
            >
              <Image
                src="/logo.png"
                alt="BSC Logo"
                width={110}
                height={44}
                style={{ objectFit: "contain" }}
                priority
              />
            </a>
          </div>

          {/* ── MOBILE: logo (center) ── DESKTOP: nav links (center) ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Logo — mobile only (center) */}
            <a
              href="#"
              aria-label="Bachata Social Congress - Inicio"
              className="md:hidden"
            >
              <Image
                src="/logo.png"
                alt="BSC Logo"
                width={100}
                height={40}
                style={{ objectFit: "contain" }}
                priority
              />
            </a>

            {/* Nav links — desktop only */}
            <ul
              role="list"
              className="hidden md:flex"
              style={{
                gap: "2rem",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      color: "var(--color-text-secondary)",
                      textDecoration: "none",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "var(--text-sm)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      transition: "color var(--transition-fast)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color =
                        "var(--color-text-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "var(--color-text-secondary)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: lang toggle + CTA ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.75rem",
            }}
          >
            <LanguageToggle currentLang={lang} onChange={handleLangChange} />
            <a
              href="#passes"
              onClick={() => trackEvent("purchase_cta", { location: "navbar" })}
              className="hidden md:inline-flex"
              style={{
                background: "var(--gradient-accent)",
                color: "#fff",
                padding: "0.5rem 1.25rem",
                borderRadius: "var(--radius-full)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: "var(--text-sm)",
                textDecoration: "none",
                transition:
                  "transform var(--transition-fast), filter var(--transition-fast)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.filter = "brightness(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      </nav>

      {/* ── Full-screen mobile overlay ── */}
      <div
        className="md:hidden"
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(8,8,14,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0",
          transition: "opacity 300ms ease, transform 300ms ease",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-12px)",
          pointerEvents: menuOpen ? "auto" : "none",
          paddingTop: "68px",
        }}
      >
        {/* Glow accent */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,60,247,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <ul
          role="list"
          style={{
            listStyle: "none",
            margin: 0,
            padding: "0 2rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ width: "100%", textAlign: "center" }}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "var(--color-text-primary)",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1.75rem, 7vw, 2.5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "block",
                  padding: "0.65rem 0",
                  borderBottom:
                    i < navLinks.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent-bright)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text-primary)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#passes"
          onClick={() => {
            setMenuOpen(false);
            trackEvent("purchase_cta", { location: "navbar_mobile" });
          }}
          style={{
            marginTop: "2rem",
            background: "var(--gradient-accent)",
            color: "#fff",
            padding: "0.875rem 2.5rem",
            borderRadius: "var(--radius-full)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "var(--text-base)",
            textAlign: "center",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {t("nav.cta")}
        </a>
      </div>
    </>
  );
}
