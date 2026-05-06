import React from 'react';
import '../../assets/css/career/career.css';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Remote' | 'Contract';
  description: string;
}

const Career: React.FC = () => {
  const jobOpenings: JobOpening[] = [
    {
      id: 'frontend-dev',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      description: 'Build responsive, high-performance web apps using React, TypeScript, and Tailwind CSS.'
    },
    {
      id: 'seo-specialist',
      title: 'SEO Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and execute SEO strategies to boost organic growth, analyze performance, and optimize content.'
    },
    {
      id: 'graphic-designer',
      title: 'Graphic Designer',
      department: 'Creative',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      description: 'Create stunning visuals, brand identities, and marketing materials that captivate audiences.'
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Design intuitive user interfaces and experiences, conduct user research, and prototype solutions.'
    },
    {
      id: 'cyber-security-analyst',
      title: 'Cyber Security Analyst',
      department: 'Security',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      description: 'Monitor and protect digital assets, perform vulnerability assessments, and respond to incidents.'
    },
    {
      id: 'video-editor',
      title: 'Video Editor',
      department: 'Media',
      location: 'Remote',
      type: 'Contract',
      description: 'Edit and produce engaging video content for social media, ads, and client projects.'
    }
  ];

  const handleApply = (jobTitle: string) => {
    // You can replace this with a modal or navigate to an application form
    alert(`Application process for ${jobTitle} will open soon. Please send your CV to careers@nextgen.com`);
    // Example: window.location.href = `/apply?job=${encodeURIComponent(jobTitle)}`;
  };

  return (
    <div className="career-page">
      <div className="career-container">
        {/* Header Section */}
        <div className="career-header">
          <h1>Join Our Team</h1>
          <p>Build the future of digital innovation with us. Explore exciting career opportunities.</p>
        </div>

        {/* Why Join Us Section */}
        <div className="why-join">
          <h2>Why Work With Us?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Growth Mindset</h3>
              <p>Learn, upskill, and grow with cutting-edge projects.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🏠</div>
              <h3>Flexible Work</h3>
              <p>Remote, hybrid, or office – you choose what works best.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎉</div>
              <h3>Great Culture</h3>
              <p>Collaborative, inclusive, and fun environment.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Innovative Projects</h3>
              <p>Work on next-gen digital solutions for global clients.</p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="openings-section">
          <h2>Open Positions</h2>
          <div className="jobs-grid">
            {jobOpenings.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className={`job-type ${job.type.toLowerCase().replace('-', '')}`}>
                    {job.type}
                  </span>
                </div>
                <div className="job-meta">
                  <span className="job-dept">{job.department}</span>
                  <span className="job-location">{job.location}</span>
                </div>
                <p className="job-description">{job.description}</p>
                <button 
                  className="apply-btn"
                  onClick={() => handleApply(job.title)}
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action / Contact */}
        <div className="career-cta">
          <p>Don't see the perfect role? <a href="/contact">Send us your resume</a> and we’ll keep you in mind.</p>
        </div>
      </div>
    </div>
  );
};

export default Career;