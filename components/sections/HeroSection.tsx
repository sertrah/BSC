"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";
import CountdownTimer from "@/components/ui/CountdownTimer";
import { trackEvent } from "@/lib/analytics";

interface HeroSectionProps {
  lang: "es" | "en";
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const { t } = useTranslation(lang);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.play().catch(() => setVideoError(true))
    }
  }, []);

  return (
    <section
      id="hero"
      aria-label="Bachata Social Congress 2026 Hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#08080E",
      }}
    >
      {/* Video / image background */}
      {!videoError ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          onError={() => setVideoError(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
          }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
      )}

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--gradient-hero)",
        }}
      />
      {/* Purple radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(139,60,247,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "6rem var(--space-container) 4rem",
          maxWidth: "var(--max-width)",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Gold badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          style={{
            display: "inline-block",
            background: "rgba(245,158,11,0.12)",
            border: "1px solid rgba(245,158,11,0.4)",
            borderRadius: "var(--radius-full)",
            padding: "0.4rem 1.25rem",
            marginBottom: "2rem",
            color: "var(--color-accent-gold)",
            fontFamily: "var(--font-body)",
            fontWeight: "var(--fw-bold)" as never,
            fontSize: "var(--text-sm)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          🏆 {t("hero.badge")}
        </motion.div>

        {/* Title: BACHATA (white) */}
        <div className="w-fit  justify-self-center m-auto">
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-dopestyle)",
              fontWeight: 900,
              fontSize: "var(--text-hero)",
              lineHeight: 0.95,
              letterSpacing: "0.01em",
              textTransform: "capitalize",
              margin: 0,
              padding: 30,
            }}
          >
            {t("hero.title_line1")}
            <p className="block text-lg sm:text-6xl text-right">
              {t("hero.title_line2")}
            </p>
          </motion.h1>
        </div>

        {/* Date + Location */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "var(--text-lg)",
              color: "var(--color-text-secondary)",
              letterSpacing: "0.04em",
              margin: 0,
            }}
          >
            {t("hero.date")} · {t("hero.location")}
          </p>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          style={{ marginTop: "2.5rem" }}
        >
          <CountdownTimer targetDate="2026-06-26T00:00:00-05:00" lang={lang} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.3,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          style={{
            marginTop: "2.5rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#passes"
            onClick={() => trackEvent("purchase_cta", { location: "hero" })}
            aria-label={t("hero.cta_primary")}
            style={{
              background: "var(--gradient-accent)",
              color: "#fff",
              padding: "1rem 2.5rem",
              borderRadius: "var(--radius-full)",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "var(--text-base)",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              transition:
                "transform var(--transition-fast), filter var(--transition-fast)",
              boxShadow: "var(--shadow-glow)",
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
            {t("hero.cta_primary")}
          </a>
          <a
            href="#workshops"
            aria-label={t("hero.cta_secondary")}
            style={{
              background: "transparent",
              color: "var(--color-text-primary)",
              padding: "1rem 2.5rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid rgba(255,255,255,0.2)",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "var(--text-base)",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              transition:
                "border-color var(--transition-fast), background var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-accent-primary)";
              e.currentTarget.style.background = "rgba(139,60,247,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {t("hero.cta_secondary")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--color-text-muted)",
        }}
        aria-hidden="true"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
