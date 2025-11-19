import { Project } from "../types";

type Props = { item: Project };

export default function ProjectCard({ item }: Props) {
  return (
    <article style={{
      border: "1px solid #e5e7eb",
      borderRadius: 12,
      padding: 16,
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
      {item.image && (
        <img src={item.image} alt={item.title}
             style={{ width: "100%", borderRadius: 8, objectFit: "cover", maxHeight: 180 }} />
      )}

      <header>
        <h3 style={{ margin: 0, fontSize: 20 }}>{item.title}</h3>
        <small style={{ color: "#6b7280" }}>{item.year}</small>
      </header>

      <p style={{ margin: 0, lineHeight: 1.6 }}>{item.summary}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {item.tech.map(t => (
          <span key={t} style={{
            fontSize: 12,
            padding: "4px 8px",
            borderRadius: 999,
            background: "#f3f4f6",
            border: "1px solid #e5e7eb"
          }}>{t}</span>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
        {item.repo && (
          <a href={item.repo} target="_blank" rel="noreferrer"
             style={linkBtn}>Kód</a>
        )}
        {item.demo && (
          <a href={item.demo} target="_blank" rel="noreferrer"
             style={{ ...linkBtn, background: "black", color: "white" }}>Demo</a>
        )}
      </div>
    </article>
  );
}

const linkBtn: React.CSSProperties = {
  display: "inline-block",
  padding: "8px 12px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  textDecoration: "none",
  color: "#111827",
  background: "#fff",
  fontWeight: 600
};
