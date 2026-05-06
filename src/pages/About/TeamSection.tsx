import  { useState } from 'react';
import "../../assets/css/about/teamSection.css";

const departments = ["All", "Engineering", "Design", "Marketing", "Operations"];

const teamMembers = [
  { id: 1, name: "Zaid Malik", role: "Lead Engineer", dept: "Engineering", initials: "ZM", color: "#2a2a2a" },
  { id: 2, name: "Sana Riaz", role: "UX Designer", dept: "Design", initials: "SR", color: "#1e2a1e" },
  { id: 3, name: "Omar Farooq", role: "Backend Dev", dept: "Engineering", initials: "OF", color: "#2a1e1e" },
  { id: 4, name: "Hina Baig", role: "Brand Strategist", dept: "Marketing", initials: "HB", color: "#1e1e2a" },
  { id: 5, name: "Tariq Jameel", role: "DevOps Engineer", dept: "Engineering", initials: "TJ", color: "#2a2a1e" },
  { id: 6, name: "Ayesha Noor", role: "UI Designer", dept: "Design", initials: "AN", color: "#1e2a2a" },
  { id: 7, name: "Bilal Siddiqui", role: "Growth Lead", dept: "Marketing", initials: "BS", color: "#2a1e2a" },
  { id: 8, name: "Maryam Shah", role: "Project Manager", dept: "Operations", initials: "MS", color: "#222222" },
];

const TeamSection = () => {
  const [activeDept, setActiveDept] = useState("All");

  const filtered = activeDept === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.dept === activeDept);

  return (
    <section className="team-section">
      <div className="team-section-container">
        <div className="team-header">
          <div className="section-badge">THE TEAM</div>
          <h2 className="team-title">The People Powering Progress</h2>
          <p className="team-subtitle">
            Behind every great product is a remarkable team. Meet the talented individuals
            who bring our vision to life — day after day.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="team-filters">
          {departments.map((dept) => (
            <button
              key={dept}
              className={`team-filter-btn ${activeDept === dept ? 'team-filter-btn--active' : ''}`}
              onClick={() => setActiveDept(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {filtered.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-card-avatar" style={{ background: member.color }}>
                <span className="team-card-initials">{member.initials}</span>
                {/* Replace above with <img src={member.image} alt={member.name} /> when images are available */}
                <div className="team-card-dept-tag">{member.dept}</div>
              </div>
              <div className="team-card-info">
                <h4 className="team-card-name">{member.name}</h4>
                <span className="team-card-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="team-cta">
          <div className="team-cta-inner">
            <span className="team-cta-text">Want to be part of the team?</span>
            <a href="/careers" className="team-cta-btn">
              View Open Positions
              <span className="team-cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;