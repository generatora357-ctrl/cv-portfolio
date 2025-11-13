export default function Resume() {
  return (
    <section style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ fontSize: 32, marginBottom: 16 }}>Önéletrajz</h1>

      <div style={{ display: "grid", gap: 16 }}>
        <div>
          <h2 style={{ fontSize: 22 }}>Rövid bemutatkozás</h2>
          <p style={{ lineHeight: 1.6 }}>
            Junior webfejlesztő, aki React/TypeScript irányba épít portfóliót. 
            Cél: tiszta kód, gyors tanulás, valódi projektek.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: 22 }}>Készségek</h2>
          <ul style={{ lineHeight: 1.8 }}>
            <li>JavaScript/TypeScript (alap → középhaladó cél)</li>
            <li>React, Vite, komponens alapú fejlesztés</li>
            <li>HTML5, modern CSS (flex/grid), reszponzív gondolkodás</li>
            <li>Git/GitHub munkafolyamat</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: 22 }}>Tapasztalat / Projektek (rövid)</h2>
          <ul style={{ lineHeight: 1.8 }}>
            <li>CV-Portfolio SPA (ez az oldal) – React + TS + Router</li>
          </ul>
        </div>

        <div>
          <a
            href="/cv.pdf"
            download
            style={{
              display: "inline-block",
              padding: "10px 16px",
              borderRadius: 8,
              background: "black",
              color: "white",
              textDecoration: "none",
              fontWeight: 600
            }}
          >
            CV letöltése (PDF)
          </a>
          <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
            Helyezd el a saját PDF-edet a <code>public/cv.pdf</code> helyre.
          </p>
        </div>
      </div>
    </section>
  );
}
