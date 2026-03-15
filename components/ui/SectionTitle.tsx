interface SectionTitleProps {
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export default function SectionTitle({
  id,
  label,
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  return (
    <div style={{ textAlign: align }}>
      <span className={`section-label section-label--${align}`}>{label}</span>
      <h2 id={id} className="section-title" style={{ textAlign: align }}>
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: "var(--fw-regular)" as never,
            fontSize: "var(--text-lg)",
            color: "var(--color-text-secondary)",
            marginTop: "0.75rem",
            marginBottom: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
