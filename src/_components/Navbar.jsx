import { useEffect, useState } from "react";
import { navbar } from "../../_constants/navbar";
import "../styles/Navbar.styles.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      document.body.style.overflow = isMenuOpen ? "hidden" : "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar-shell">
      <nav className="navbar" aria-label="Principal">
        <a href="#section-hero" className="navbar-brand">
          <img src={navbar.logo} alt={navbar.brand} className="navbar-logo" />
          {navbar.brand}
        </a>

        <button
          type="button"
          className={`navbar-toggle ${isMenuOpen ? "is-open" : ""}`}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="navbar-links"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="navbar-links" className="navbar-list navbar-list-desktop">
          {navbar.items.map((item) => (
            <li key={item.name} className="navbar-item">
              <a href={item.url} className="navbar-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a href={navbar.cta.url} className="navbar-cta navbar-cta-desktop">
          {navbar.cta.name}
        </a>
      </nav>

      <div className={`navbar-mobile-overlay ${isMenuOpen ? "is-open" : ""}`}>
        <ul className="navbar-mobile-list">
          {navbar.items.map((item) => (
            <li key={item.name} className="navbar-mobile-item">
              <a href={item.url} className="navbar-mobile-link" onClick={closeMenu}>
                {item.name}
              </a>
            </li>
          ))}
          <li className="navbar-mobile-item">
            <a href={navbar.cta.url} className="navbar-mobile-link navbar-mobile-cta" onClick={closeMenu}>
              {navbar.cta.name}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}