import { Link } from "react-router-dom";
import "../../assets/css/home/CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta" id="hire-us">
      <div className="cta__inner">
        {/* Glow rings */}
        <div className="cta__ring cta__ring--1" />
        <div className="cta__ring cta__ring--2" />

        <div className="cta__content">
          <span className="cta__eyebrow">Ready to Start?</span>

          <h2 className="cta__title">
            Let's Build Something <br />
            <span className="cta__title--accent">Extraordinary</span>
          </h2>

          <p className="cta__desc">
            Whether you need a high-performance website, a digital marketing
            strategy, a bold new brand, or rock-solid security — NDS has the
            expertise to deliver. Let's talk about your project today.
          </p>

          {/* Stats row */}
          <div className="cta__stats">
            {[
              { val: "120+", label: "Projects Delivered" },
              { val: "20+",  label: "Countries" },
              { val: "4.9★", label: "Avg. Rating" },
              { val: "6wk",  label: "Avg. Delivery" },
            ].map((s) => (
              <div className="cta__stat" key={s.label}>
                <span className="cta__stat-val">{s.val}</span>
                <span className="cta__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="cta__actions">
            <Link to="/contact" className="cta__btn cta__btn--primary">
              🚀 Hire Us Now
            </Link>
            <Link to="/services" className="cta__btn cta__btn--ghost">
              View Services →
            </Link>
          </div>

          {/* Trust line */}
          <p className="cta__trust">
            ✅ Free consultation &nbsp;·&nbsp; ✅ NDA on request &nbsp;·&nbsp; ✅ No upfront fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;