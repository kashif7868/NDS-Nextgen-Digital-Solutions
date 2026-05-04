import { NavLink } from "react-router-dom";
import "../assets/css/footer.css";

const services = ["Web Development", "SEO & Digital Marketing", "Content & Branding", "Cyber Security"];
const company  = [
  { label: "Home",     path: "/" },
  { label: "About",    path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Career",   path: "/career" },
  { label: "Contact",  path: "/contact" },
];
const socials = [
  { label: "LinkedIn",  href: "#" },
  { label: "Twitter",   href: "#" },
  { label: "GitHub",    href: "#" },
  { label: "Instagram", href: "#" },
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top glow line */}
      <div className="footer__topline" />

      <div className="footer__inner">
        {/* Brand column */}
        <div className="footer__col footer__col--brand">
          <div className="footer__logo">
            <span className="footer__logo-nds">NDS</span>
            <span className="footer__logo-dot">.</span>
          </div>
          <p className="footer__tagline">
            Nextgen Digital Solutions — transforming ideas into powerful digital
            products from Lahore, Pakistan.
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="footer__social" aria-label={s.label}>
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div className="footer__col">
          <h4 className="footer__heading">Services</h4>
          <ul className="footer__list">
            {services.map((s) => (
              <li key={s}>
                <span className="footer__list-item">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Company column */}
        <div className="footer__col">
          <h4 className="footer__heading">Company</h4>
          <ul className="footer__list">
            {company.map((c) => (
              <li key={c.path}>
                <NavLink to={c.path} className="footer__link">
                  {c.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__list footer__list--contact">
            <li>📍 Lahore, Pakistan</li>
            <li>🌐 Remote & International Projects</li>
            <li>
              <a href="mailto:hello@nds.com" className="footer__link">
                ✉️ hello@nds.com
              </a>
            </li>
            <li>
              <a href="tel:+923000000000" className="footer__link">
                📞 +92 300 0000000
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} NDS – Nextgen Digital Solutions. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#" className="footer__link">Privacy Policy</a>
          <a href="#" className="footer__link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;