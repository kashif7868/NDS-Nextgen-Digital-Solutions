import "../../assets/css/home/WhyChooseUs.css";

const reasons = [
  { icon: "⚡", stat: "6 Weeks", label: "Avg. Delivery Time",   desc: "Fast, efficient delivery without compromising quality. Your deadlines are our priority." },
  { icon: "🌍", stat: "20+",     label: "Countries Served",     desc: "We work with clients globally — remote, international, and enterprise-level projects." },
  { icon: "🏆", stat: "120+",    label: "Happy Clients",        desc: "A growing family of satisfied clients across industries, from startups to enterprises." },
  { icon: "🔐", stat: "100%",    label: "Secure & Confidential",desc: "Your data and IP are fully protected. We sign NDAs and follow strict security protocols." },
  { icon: "🧩", stat: "4",       label: "Expert Departments",   desc: "Development, Marketing, Branding, and Cyber Security — all under one roof." },
  { icon: "📊", stat: "24/7",    label: "Client Dashboard",     desc: "Track your project progress, access reports, and communicate with your team anytime." },
];

const WhyChooseUs = () => {
  return (
    <section className="why" id="why-us">
      <div className="why__inner">
        {/* Left — text */}
        <div className="why__left">
          <span className="why__eyebrow">Why NDS</span>
          <h2 className="why__title">
            Why Choose <span className="why__title--accent">Us?</span>
          </h2>
          <p className="why__desc">
            At NDS, we don't just build digital products — we build long-term
            partnerships. Our department-based workflow, dedicated experts, and
            integrated client dashboard make us the smarter choice for your
            digital transformation.
          </p>
          <div className="why__badges">
            <span className="why__badge">✅ NDA Protected</span>
            <span className="why__badge">✅ Agile Workflow</span>
            <span className="why__badge">✅ Post-Launch Support</span>
          </div>
        </div>

        {/* Right — stats grid */}
        <div className="why__grid">
          {reasons.map((r) => (
            <div className="why__card" key={r.label}>
              <div className="why__card-icon">{r.icon}</div>
              <div className="why__card-stat">{r.stat}</div>
              <div className="why__card-label">{r.label}</div>
              <p className="why__card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;