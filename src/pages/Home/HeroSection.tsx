import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/home/heroSection.css";

const clients = [
  { name: "Ahmed Raza", company: "TechVenture PK", rating: 5, avatar: "AR", review: "NDS delivered our e-commerce platform on time with exceptional quality. Highly professional team." },
  { name: "Sara Khan", company: "BrandLift Agency", rating: 5, avatar: "SK", review: "Our organic traffic tripled in 3 months. Outstanding SEO results — highly recommend NDS!" },
  { name: "James Miller", company: "FinEdge Solutions", rating: 5, avatar: "JM", review: "Their cyber security audit found critical vulnerabilities. Saved our business from a potential disaster." },
  { name: "Fatima Malik", company: "GreenLeaf Retail", rating: 4, avatar: "FM", review: "Stunning branding and content strategy. NDS understood our vision and executed it beautifully." },
  { name: "David Chen", company: "CloudSync Inc.", rating: 5, avatar: "DC", review: "World-class web development. Our SaaS dashboard looks and performs better than we ever imagined." },
  { name: "Usman Tariq", company: "LogiTrack Ltd.", rating: 5, avatar: "UT", review: "From concept to launch in 6 weeks. The most efficient digital agency we've worked with — truly nextgen!" },
];

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.4 + 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,180,255,${0.1 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(dots[i].x, dots[i].y, dots[i].r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,180,255,0.4)";
        ctx.fill();
        dots[i].x += dots[i].vx;
        dots[i].y += dots[i].vy;
        if (dots[i].x < 0 || dots[i].x > canvas.width) dots[i].vx *= -1;
        if (dots[i].y < 0 || dots[i].y > canvas.height) dots[i].vy *= -1;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div>
      <section className="hero">
        {/* Background */}
        <canvas ref={canvasRef} className="hero__canvas" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />

        {/* ── Main Content ── */}
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Lahore, Pakistan — Digital Agency
          </div>

          <h1 className="hero__title">
            <span>Nextgen</span>
            <span className="hero__title--accent">Digital</span>
            <span>Solutions</span>
          </h1>

          <p className="hero__sub">
            We transform ideas into powerful digital products —
            Web Development, SEO, Branding &amp; Cyber Security.
          </p>

          <div className="hero__pills">
            {["Web Dev", "SEO", "Branding", "Cyber Security"].map((s) => (
              <span key={s} className="hero__pill">{s}</span>
            ))}
          </div>

          <div className="hero__actions">
            <Link to="/services" className="hero__btn hero__btn--primary">
              Explore Services
            </Link>
            <Link to="/contact" className="hero__btn hero__btn--ghost">
              Contact Us →
            </Link>
          </div>
        </div>

        {/* ── Ratings Strip ── */}
        <div className="hero__ratings">
          <div className="hero__ratings-header">
            <span className="hero__ratings-label">What Our Clients Say</span>
            <div className="hero__ratings-meta">
              <span className="hero__ratings-stars">★★★★★</span>
              <span className="hero__ratings-score">4.9 / 5</span>
              <span className="hero__ratings-count">from 120+ clients</span>
            </div>
          </div>

          <div className="hero__track-wrap">
            <div className="hero__fade hero__fade--l" />
            <div className="hero__track">
              {[...clients, ...clients].map((c, i) => (
                <div className="hero__card" key={i}>
                  <div className="hero__card-top">
                    <div className="hero__avatar">{c.avatar}</div>
                    <div className="hero__card-info">
                      <span className="hero__card-name">{c.name}</span>
                      <span className="hero__card-company">{c.company}</span>
                    </div>
                    <span className="hero__card-stars">
                      {"★".repeat(c.rating)}{"☆".repeat(5 - c.rating)}
                    </span>
                  </div>
                  <p className="hero__card-review">"{c.review}"</p>
                </div>
              ))}
            </div>
            <div className="hero__fade hero__fade--r" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;