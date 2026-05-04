import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/home/heroSection.css";

const clients = [
  {
    name: "Ahmed Raza",
    company: "TechVenture PK",
    rating: 5,
    review: "NDS delivered our e-commerce platform on time with exceptional quality. Their team is highly professional and responsive.",
    avatar: "AR",
  },
  {
    name: "Sara Khan",
    company: "BrandLift Agency",
    rating: 5,
    review: "The SEO results were outstanding! Our organic traffic tripled in just 3 months. Highly recommend NDS for digital marketing.",
    avatar: "SK",
  },
  {
    name: "James Miller",
    company: "FinEdge Solutions",
    rating: 5,
    review: "Their cyber security audit found critical vulnerabilities we didn't know about. Saved our business from a potential disaster.",
    avatar: "JM",
  },
  {
    name: "Fatima Malik",
    company: "GreenLeaf Retail",
    rating: 4,
    review: "Stunning branding and content strategy. NDS understood our vision perfectly and executed it beautifully.",
    avatar: "FM",
  },
  {
    name: "David Chen",
    company: "CloudSync Inc.",
    rating: 5,
    review: "World-class web development team. Our SaaS dashboard looks and performs better than we ever imagined.",
    avatar: "DC",
  },
  {
    name: "Usman Tariq",
    company: "LogiTrack Ltd.",
    rating: 5,
    review: "From concept to launch in 6 weeks. NDS is the most efficient digital agency we've worked with — truly nextgen!",
    avatar: "UT",
  },
];

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated particle grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const dots: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 80; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connect nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 180, 255, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 180, 255, 0.45)";
        ctx.fill();

        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="hero__content">
        {/* Badge */}
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Lahore, Pakistan — Digital Agency
        </div>

        {/* Heading */}
        <h1 className="hero__title">
          <span className="hero__title-line">Nextgen</span>
          <span className="hero__title-line hero__title-line--accent">
            Digital
          </span>
          <span className="hero__title-line">Solutions</span>
        </h1>

        {/* Subtext */}
        <p className="hero__sub">
          We transform ideas into powerful digital products —{" "}
          <br className="hero__br" />
          Web Development, SEO, Branding & Cyber Security.
        </p>

        {/* Services pills */}
        <div className="hero__pills">
          {["Web Dev", "SEO", "Branding", "Cyber Security"].map((s) => (
            <span key={s} className="hero__pill">
              {s}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hero__actions">
          <Link to="/services" className="hero__btn hero__btn--primary">
            Explore Services
          </Link>
          <Link to="/contact" className="hero__btn hero__btn--ghost">
            Contact Us →
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>

      {/* Client Ratings Strip */}
      <div className="hero__ratings">
        <div className="hero__ratings-header">
          <span className="hero__ratings-label">What Our Clients Say</span>
          <div className="hero__ratings-summary">
            <span className="hero__ratings-stars">★★★★★</span>
            <span className="hero__ratings-score">4.9 / 5</span>
            <span className="hero__ratings-count">from 120+ clients</span>
          </div>
        </div>
        <div className="hero__ratings-track-wrap">
          <div className="hero__ratings-fade hero__ratings-fade--left" />
          <div className="hero__ratings-track">
            {[...clients, ...clients].map((c, i) => (
              <div className="hero__rating-card" key={i}>
                <div className="hero__rating-top">
                  <div className="hero__rating-avatar">{c.avatar}</div>
                  <div>
                    <div className="hero__rating-name">{c.name}</div>
                    <div className="hero__rating-company">{c.company}</div>
                  </div>
                  <div className="hero__rating-stars">
                    {"★".repeat(c.rating)}{"☆".repeat(5 - c.rating)}
                  </div>
                </div>
                <p className="hero__rating-review">"{c.review}"</p>
              </div>
            ))}
          </div>
          <div className="hero__ratings-fade hero__ratings-fade--right" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;