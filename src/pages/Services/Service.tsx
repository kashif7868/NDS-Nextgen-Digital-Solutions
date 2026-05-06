import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/service/servicePage.css';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const Service: React.FC = () => {
  const navigate = useNavigate();

  const services: Service[] = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom websites, web apps, and e-commerce solutions with modern tech stacks.',
      icon: '🌐',
    },
    {
      id: 'seo',
      title: 'SEO & Analytics',
      description: 'Boost your rankings, drive organic traffic, and track performance with data-driven SEO.',
      icon: '📈',
    },
    {
      id: 'content',
      title: 'Content Creation',
      description: 'Engaging blogs, copywriting, and multimedia content that tells your brand story.',
      icon: '✍️',
    },
    {
      id: 'cyber-security',
      title: 'Cyber Security',
      description: 'Protect your digital assets with advanced threat monitoring and security audits.',
      icon: '🔒',
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      description: 'Professional video production, editing, and motion graphics for any platform.',
      icon: '🎬',
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Stunning visuals, logos, and branding materials that leave a lasting impression.',
      icon: '🎨',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Designer',
      description: 'User‑centric interfaces, wireframes, and prototypes for seamless digital experiences.',
      icon: '📱',
    },
  ];

  const handleServiceClick = (serviceId: string) => {
    // Navigate to the project page for the selected service
    // You can build these routes later (e.g., /projects/web-development)
    navigate(`/projects/${serviceId}`);
    // Optional: log for debugging
    console.log(`Navigating to projects for: ${serviceId}`);
  };

  return (
    <div className="service-page">
      <div className="service-container">
        <div className="service-header">
          <h1>Our Services</h1>
          <p>Innovative digital solutions tailored to your business needs</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-hover-effect">
                <span>Explore Projects →</span>
              </div>
            </div>
          ))}
        </div>

        <div className="service-footer">
          <p>Need a custom solution? <a href="/contact">Contact us</a> for a free consultation.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;