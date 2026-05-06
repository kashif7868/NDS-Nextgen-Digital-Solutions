import "../../assets/css/about/companySection.css";

const CompanySection = () => {
  return (
    <section className="company-section">
      <div className="company-bg-text">ABOUT</div>
      <div className="company-container">
        <div className="company-badge">WHO WE ARE</div>
        <div className="company-content">
          <div className="company-left">
            <h1 className="company-heading">
              Building the <span className="company-highlight">Future</span><br />
              of Digital Innovation
            </h1>
            <div className="company-divider"></div>
          </div>
          <div className="company-right">
            <p className="company-desc">
              We are a forward-thinking technology company dedicated to crafting
              digital solutions that empower businesses to thrive in an ever-evolving
              landscape. Founded on the principles of innovation, integrity, and impact,
              we bridge the gap between complex challenges and elegant solutions.
            </p>
            <p className="company-desc">
              Our multidisciplinary team of designers, engineers, and strategists
              collaborates relentlessly to deliver products that are not just functional —
              but transformative. Every project we undertake is a testament to our
              commitment to quality and our passion for pushing boundaries.
            </p>
            <div className="company-stats">
              <div className="stat-item">
                <span className="stat-number">120+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Global Clients</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;