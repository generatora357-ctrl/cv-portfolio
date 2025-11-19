import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section style={{ maxWidth: 1100, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 32, marginBottom: 16 }}>Projektek</h1>
      <p style={{ color: "#6b7280", marginBottom: 24 }}>
        Ide kerül minden olyan munka, ami portfólió-szintű. Új projekt hozzáadásához
        csak vegyél fel egy új objektumot a <code>src/data/projects.ts</code> fájlban.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 16
      }}>
        {projects.map(p => <ProjectCard key={p.id} item={p} />)}
      </div>
    </section>
  );
}
