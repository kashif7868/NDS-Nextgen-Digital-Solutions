import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";
import CompanyLogo from "../assets/images/logo.jpeg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        !(target as Element).closest(".navbar__hamburger")
      ) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <NavLink to="/" className="navbar__logo" onClick={handleLinkClick}>
            <img
              src={CompanyLogo}
              alt="NDS Logo"
              className="navbar__logo-img"
            />
            <div className="navbar__logo-text">
              <span className="navbar__logo-nds">NDS</span>
              <span className="navbar__logo-full">Network Digital Solutions</span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="navbar__links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " navbar__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="navbar__cta">
              Get Started
            </NavLink>
          </nav>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu — outside header so it doesn't clip */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
            }
            onClick={handleLinkClick}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className="navbar__cta navbar__cta--mobile"
          onClick={handleLinkClick}
          tabIndex={menuOpen ? 0 : -1}
        >
          Get Started
        </NavLink>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;