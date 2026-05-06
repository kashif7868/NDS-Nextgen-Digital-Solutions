import { useState } from 'react';
import "../../assets/css/about/founderSection.css";

// Import founder images — replace these paths with actual image paths
// import hassanImg from "../../assets/images/founders/hassan.jpg";
// import kashifImg from "../../assets/images/founders/kashif.jpg";
// import areebImg from "../../assets/images/founders/areeb.jpg";
// import buttImg from "../../assets/images/founders/butt.jpg";

const founders = [
  {
    id: 1,
    name: "Hassan Shokat Ali",
    role: "Co-Founder & CEO",
    bio: "Visionary leader with a decade of experience in technology and product strategy. Hassan drives the company's mission with relentless focus on innovation and sustainable growth.",
    // image: hassanImg,
    image: "https://ui-avatars.com/api/?name=Hassan+Shokat+Ali&background=1a1a1a&color=c9a84c&size=400&font-size=0.35&bold=true",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Kashif Ali",
    role: "Co-Founder & CTO",
    bio: "Seasoned engineer and architect behind the company's core technology. Kashif specializes in scalable systems and champions a culture of technical excellence.",
    // image: kashifImg,
    image: "https://ui-avatars.com/api/?name=Kashif+Ali&background=1a1a1a&color=c9a84c&size=400&font-size=0.35&bold=true",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 3,
    name: "Areeb",
    role: "Co-Founder & CPO",
    bio: "Creative product mind who transforms complex user needs into seamless digital experiences. Areeb's human-centered approach shapes every product decision.",
    // image: areebImg,
    image: "https://ui-avatars.com/api/?name=Areeb&background=1a1a1a&color=c9a84c&size=400&font-size=0.35&bold=true",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 4,
    name: "Butt",
    role: "Co-Founder & COO",
    bio: "Operational powerhouse ensuring every initiative is executed with precision. Butt's strategic oversight keeps the company aligned, agile, and ahead of the curve.",
    // image: buttImg,
    image: "https://ui-avatars.com/api/?name=Butt&background=1a1a1a&color=c9a84c&size=400&font-size=0.35&bold=true",
    socials: { linkedin: "#", twitter: "#" },
  },
];

const FounderSection = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="founder-section">
      <div className="founder-container">
        <div className="founder-header">
          <div className="section-badge">THE FOUNDERS</div>
          <h2 className="founder-title">Minds Behind the Mission</h2>
          <p className="founder-subtitle">
            A quartet of visionaries who dared to build something different — and never stopped.
          </p>
        </div>

        <div className="founders-grid">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className={`founder-card ${activeId === founder.id ? 'founder-card--active' : ''}`}
              onMouseEnter={() => setActiveId(founder.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="founder-img-wrapper">
                <img src={founder.image} alt={founder.name} className="founder-img" />
                <div className="founder-img-overlay"></div>
                <div className="founder-number">0{founder.id}</div>
              </div>
              <div className="founder-info">
                <div className="founder-role">{founder.role}</div>
                <h3 className="founder-name">{founder.name}</h3>
                <p className="founder-bio">{founder.bio}</p>
                <div className="founder-socials">
                  <a href={founder.socials.linkedin} className="founder-social-link" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <a href={founder.socials.twitter} className="founder-social-link" aria-label="Twitter/X">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;