import { NavLink } from "react-router-dom";

/* példa */
<NavLink to="/projects"
  style={({ isActive }) => ({
    padding: "8px 12px",
    borderRadius: 8,
    textDecoration: "none",
    color: isActive ? "white" : "#111827",
    background: isActive ? "black" : "transparent"
  })}
>
  Projects
</NavLink>
