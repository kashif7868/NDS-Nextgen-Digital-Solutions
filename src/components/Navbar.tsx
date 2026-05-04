import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo" onClick={handleLinkClick}>
          <img
            src={CompanyLogo}
            alt="NDS Logo"
            className="navbar__logo-img"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="navbar__links">
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
          <a href="/contact" className="navbar__cta">
            Get Started
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              `navbar__mobile-link${isActive ? " navbar__mobile-link--active" : ""}`
            }
            onClick={handleLinkClick}
          >
            {link.label}
          </NavLink>
        ))}
        <a href="/contact" className="navbar__cta navbar__cta--mobile" onClick={handleLinkClick}>
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Navbar;