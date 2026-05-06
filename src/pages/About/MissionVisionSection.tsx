import  { useRef, useEffect, useState } from 'react';
import "../../assets/css/about/missionVisionSection.css";

const missionPoints = [
  "Deliver technology-driven solutions that create measurable value.",
  "Champion accessibility and inclusivity in every product we build.",
  "Foster long-term partnerships rooted in transparency and trust.",
];

const visionPoints = [
  "To be the region's most trusted digital innovation partner by 2030.",
  "Shaping a future where technology amplifies human potential.",
  "Building products that outlast trends and endure through time.",
];

const values = [
  { icon: "◈", label: "Innovation", desc: "We challenge the status quo every day." },
  { icon: "◉", label: "Integrity", desc: "Honesty and ethics are non-negotiable." },
  { icon: "◐", label: "Impact", desc: "Results that move the needle for our clients." },
  { icon: "◎", label: "Excellence", desc: "Craft and quality in everything we do." },
];

const MissionVisionSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`mv-section ${visible ? 'mv-section--visible' : ''}`} ref={sectionRef}>
      <div className="mv-container">
        <div className="mv-header">
          <div className="section-badge">MISSION & VISION</div>
          <h2 className="mv-main-title">Driven by Purpose,<br />Guided by Vision</h2>
        </div>

        <div className="mv-cards">
          {/* Mission Card */}
          <div className="mv-card mv-card--mission">
            <div className="mv-card-accent"></div>
            <div className="mv-card-label">Mission</div>
            <h3 className="mv-card-title">What We Do & Why We Do It</h3>
            <p className="mv-card-intro">
              Our mission is to harness the power of technology to solve real-world problems —
              building products and platforms that help organizations grow, adapt, and lead.
            </p>
            <ul className="mv-points">
              {missionPoints.map((point, i) => (
                <li key={i} className="mv-point">
                  <span className="mv-point-icon">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Divider */}
          <div className="mv-center-divider">
            <div className="mv-center-line"></div>
            <div className="mv-center-emblem">✦</div>
            <div className="mv-center-line"></div>
          </div>

          {/* Vision Card */}
          <div className="mv-card mv-card--vision">
            <div className="mv-card-accent"></div>
            <div className="mv-card-label">Vision</div>
            <h3 className="mv-card-title">Where We Are Headed</h3>
            <p className="mv-card-intro">
              We envision a world where every organization — regardless of size — has
              access to the tools and talent it needs to compete and thrive in the digital age.
            </p>
            <ul className="mv-points">
              {visionPoints.map((point, i) => (
                <li key={i} className="mv-point">
                  <span className="mv-point-icon">→</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values Row */}
        <div className="mv-values">
          <div className="mv-values-label">CORE VALUES</div>
          <div className="mv-values-grid">
            {values.map((v, i) => (
              <div key={i} className="mv-value-item">
                <div className="mv-value-icon">{v.icon}</div>
                <div className="mv-value-label">{v.label}</div>
                <div className="mv-value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;