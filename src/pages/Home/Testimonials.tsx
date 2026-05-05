import { useState } from "react";
import "../../assets/css/home/Testimonials.css";

const testimonials = [
  { name: "Ahmed Raza", company: "TechVenture PK", country: "🇵🇰", avatar: "AR", rating: 5, service: "Web Development", review: "NDS delivered our e-commerce platform ahead of schedule with outstanding quality. The team was transparent, communicative, and genuinely invested in our success. We saw a 40% increase in conversions after launch." },
  { name: "Sara Khan", company: "BrandLift Agency", country: "🇦🇪", avatar: "SK", rating: 5, service: "SEO & Marketing", review: "Our organic traffic tripled within 3 months of working with NDS. Their SEO team is data-driven, strategic, and incredibly responsive. Best digital marketing investment we've ever made." },
  { name: "James Miller", company: "FinEdge Solutions", country: "🇬🇧", avatar: "JM", rating: 5, service: "Cyber Security", review: "The security audit NDS conducted revealed critical vulnerabilities that could have cost us millions. Their forensics team is world-class. I sleep much better at night knowing our systems are protected." },
  { name: "Fatima Malik", company: "GreenLeaf Retail", country: "🇵🇰", avatar: "FM", rating: 4, service: "Content & Branding", review: "NDS completely transformed our brand identity. The visual language they created resonated perfectly with our audience. Our social engagement went up by 200% within the first month of rebranding." },
  { name: "David Chen", company: "CloudSync Inc.", country: "🇺🇸", avatar: "DC", rating: 5, service: "Web Development", review: "We hired NDS to build our SaaS dashboard — the result was absolutely exceptional. Clean code, intuitive UI, and delivered on time. They are now our long-term development partner." },
  { name: "Usman Tariq", company: "LogiTrack Ltd.", country: "🇵🇰", avatar: "UT", rating: 5, service: "Web Development", review: "From concept to launch in just 6 weeks. NDS's workflow is transparent and efficient. The client dashboard made it easy to track every milestone. Truly the most professional agency we've partnered with." },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <div>
      <section className="testi" id="testimonials">
        <div className="testi__inner">
          {/* Header */}
          <div className="testi__header">
            <span className="testi__eyebrow">Client Stories</span>
            <h2 className="testi__title">
              What Our <span className="testi__title--accent">Clients Say</span>
            </h2>
            <p className="testi__sub">
              Real results, real relationships. Here's what businesses say about working with NDS.
            </p>
          </div>

          {/* Main testimonial */}
          <div className="testi__spotlight">
            <div className="testi__quote-icon">"</div>
            <p className="testi__quote" key={active}>{t.review}</p>
            <div className="testi__author">
              <div className="testi__avatar">{t.avatar}</div>
              <div className="testi__author-info">
                <span className="testi__author-name">{t.name} {t.country}</span>
                <span className="testi__author-company">{t.company}</span>
                <span className="testi__author-service">{t.service}</span>
              </div>
              <div className="testi__stars">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>
            </div>
          </div>

          {/* Selector cards */}
          <div className="testi__cards">
            {testimonials.map((item, i) => (
              <button
                key={i}
                className={`testi__card${active === i ? " testi__card--active" : ""}`}
                onClick={() => setActive(i)}
              >
                <div className="testi__card-avatar">{item.avatar}</div>
                <div className="testi__card-info">
                  <span className="testi__card-name">{item.name}</span>
                  <span className="testi__card-co">{item.company}</span>
                </div>
                <span className="testi__card-stars">{"★".repeat(item.rating)}</span>
              </button>
            ))}
          </div>

          {/* Dots */}
          <div className="testi__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testi__dot${active === i ? " testi__dot--active" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;