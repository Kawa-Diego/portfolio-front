import { navbar } from "../../_constants/navbar";
import "../styles/Navbar.styles.css";

export default function Navbar() {
  return (
    <header className="navbar-shell">
      <nav className="navbar" aria-label="Principal">
        <a href="#section-hero" className="navbar-brand">
          {navbar.brand}
        </a>

        <ul className="navbar-list">
          {navbar.items.map((item) => (
            <li key={item.name} className="navbar-item">
              <a href={item.url} className="navbar-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a href={navbar.cta.url} className="navbar-cta">
          {navbar.cta.name}
        </a>
      </nav>
    </header>
  );
}