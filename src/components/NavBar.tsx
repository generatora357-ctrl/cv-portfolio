import { NavLink } from "react-router-dom";

export default function NavBar() {
  const base = "px-3 py-2 rounded-md text-sm font-medium";
  const active = "bg-black text-white";
  const idle = "text-black hover:bg-black/10";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${base} ${isActive ? active : idle}`;

  return (
    <nav style={{
      display: "flex",
      gap: "8px",
      alignItems: "center",
      padding: "12px 16px",
      borderBottom: "1px solid #eee",
      position: "sticky",
      top: 0,
      background: "white",
      zIndex: 10
    }}>
      <div style={{ fontWeight: 800 }}>CV Portfolio</div>
      <div style={{ flex: 1 }} />
      <NavLink to="/" className={linkClass} end>Főoldal</NavLink>
      <NavLink to="/resume" className={linkClass}>Önéletrajz</NavLink>
      <NavLink to="/projects" className={linkClass}>Projektek</NavLink>
      <NavLink to="/contact" className={linkClass}>Kapcsolat</NavLink>
    </nav>
  );
}
