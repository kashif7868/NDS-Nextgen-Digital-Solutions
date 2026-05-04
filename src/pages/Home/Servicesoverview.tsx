import { Link } from "react-router-dom";
import "../../assets/css/home/serviceOverview.css";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "High-performance websites and web applications built with cutting-edge technology — scalable, secure, and tailored to your business goals.",
    tags: ["React", "Node.js", "TypeScript", "REST APIs"],
    color: "blue",
  },
  {
    icon: "📈",
    title: "SEO & Digital Marketing",
    desc: "Boost your online visibility and drive qualified traffic. From keyword strategy to paid campaigns, we help your brand grow digitally.",
    tags: ["On-Page SEO", "Google Ads", "Analytics", "Content"],
    color: "cyan",
  },
  {
    icon: "✏️",
    title: "Content & Branding",
    desc: "Build a brand that stands out. We craft compelling visual identities, content strategies, and creative assets that leave lasting impressions.",
    tags: ["Logo Design", "Copywriting", "Social Media", "UI/UX"],
    color: "purple",
  },
  {
    icon: "🔒",
    title: "Cyber Security",
    desc: "Protect your digital assets with enterprise-grade security solutions. Penetration testing, audits, and digital forensics for peace of mind.",
    tags: ["Pen Testing", "VAPT", "Forensics", "Compliance"],
    color: "green",
  },
];

const ServicesOverview = () => {
  return (
    <section className="svc" id="services">
      <div className="svc__inner">
        {/* Header */}
        <div className="svc__header">
          <span className="svc__eyebrow">What We Do</span>
          <h2 className="svc__title">
            Our Core <span className="svc__title--accent">Services</span>
          </h2>
          <p className="svc__sub">
            End-to-end digital solutions designed to transform your business —
            from idea to execution, we handle it all.
          </p>
        </div>

        {/* Cards */}
        <div className="svc__grid">
          {services.map((s) => (
            <div className={`svc__card svc__card--${s.color}`} key={s.title}>
              <div className="svc__card-icon">{s.icon}</div>
              <h3 className="svc__card-title">{s.title}</h3>
              <p className="svc__card-desc">{s.desc}</p>
              <div className="svc__tags">
                {s.tags.map((t) => (
                  <span className="svc__tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="svc__card-glow" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="svc__footer">
          <Link to="/services" className="svc__btn">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;