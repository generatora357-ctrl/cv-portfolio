type Project = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  link?: string;
};

const demoProjects: Project[] = [
  {
    id: "cv-portfolio",
    title: "CV Portfolio SPA",
    summary: "Önéletrajz + projektek bemutató egyoldalas app React + TS + Router alapon.",
    tags: ["React", "TypeScript", "Vite"]
  },
  {
    id: "landing-redesign",
    title: "Landing oldal redesign (minta)",
    summary: "Egyszerű hero + feature szekció, reszponzív elrendezés.",
    tags: ["HTML", "CSS", "Responsive"]
  }
];

export default function Projects() {
  return (
    <section style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 32, marginBottom: 16 }}>Projektek</h1>
      <div style={{ display: "grid", gap: 16 }}>
        {demoProjects.map(p => (
          <article key={p.id} style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
            <h3 style={{ margin: "0 0 6px 0" }}>{p.title}</h3>
            <p style={{ margin: "0 0 8px 0", lineHeight: 1.6 }}>{p.summary}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {p.tags.map(t => (
                <span key={t} style={{ fontSize: 12, padding: "4px 8px", border: "1px solid #ddd", borderRadius: 999 }}>
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <div style={{ marginTop: 8 }}>
                <a href={p.link} target="_blank" rel="noreferrer">Megnyitás</a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
