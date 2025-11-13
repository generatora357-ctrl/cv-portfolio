import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer style={{ maxWidth: 900, margin: "40px auto", padding: "16px", color: "#666" }}>
        © {new Date().getFullYear()} – CV Portfolio
      </footer>
    </div>
  );
}
