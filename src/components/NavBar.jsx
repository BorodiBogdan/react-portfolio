import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const links = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "work", label: "Work", href: "/#work" },
  { id: "blog", label: "Writing", href: "/blog" },
];

export const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (id) => {
    const path = location.pathname;
    const hash = location.hash;
    if (id === "blog") return path === "/blog" || path.startsWith("/blog/");
    if (path !== "/") return false;
    if (id === "home") return !hash || hash === "#home";
    return hash === `#${id}`;
  };

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <Link to="/" className="nav__brand" aria-label="Home">
          <span className="nav__brand-mark" aria-hidden="true">B</span>
          <span>Borodi Bogdan</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="nav__links">
            {links.map((l, i) => {
              const num = String(i + 1).padStart(2, "0");
              const active = isActive(l.id);
              return (
                <li key={l.id}>
                  <a
                    href={l.href}
                    className={`nav__link${active ? " is-active" : ""}`}
                  >
                    <span className="nav__link-num">{num}.</span>
                    <span>{l.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="https://docs.google.com/document/d/1vNJN-hetdqFCq2M7hYQS_vlkZDVqULwkp6OcizwAgi8/edit?tab=t.0"
          target="_blank"
          rel="noreferrer"
          className="nav__cta"
        >
          resume.pdf
        </a>

        <button
          type="button"
          className={`nav__toggle${open ? " is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__toggle-bar" />
        </button>
      </header>

      <div className={`nav__mobile${open ? " is-open" : ""}`} aria-hidden={!open}>
        {links.map((l, i) => {
          const num = String(i + 1).padStart(2, "0");
          return (
            <a key={l.id} href={l.href} className="nav__link">
              <span className="nav__link-num">{num}.</span>
              <span>{l.label}</span>
            </a>
          );
        })}
        <a
          href="https://docs.google.com/document/d/1vNJN-hetdqFCq2M7hYQS_vlkZDVqULwkp6OcizwAgi8/edit?tab=t.0"
          target="_blank"
          rel="noreferrer"
          className="nav__cta"
        >
          resume.pdf
        </a>
      </div>
    </>
  );
};

export default NavBar;
