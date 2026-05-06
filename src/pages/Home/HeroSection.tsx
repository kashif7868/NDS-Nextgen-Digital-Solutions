import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Variants } from "framer-motion";
import "../../assets/css/home/heroSection.css";

/* ─────────────────────────────────────────
   Animation variants
───────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 48 },
  show: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const chipVariant: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const statVariant: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const avatarVariant: Variants = {
  hidden: { opacity: 0, x: -12, scale: 0.85 },
  show: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

/* ─────────────────────────────────────────
   Magnetic button hook
───────────────────────────────────────── */
function useMagnetic(strength = 0.35) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };
  const onMouseLeave = () => { x.set(0); y.set(0); };

  return { ref, springX, springY, onMouseMove, onMouseLeave };
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const clients = [
  { name: "Sarah M.",  initials: "SM", color: "#0057ff" },
  { name: "James T.",  initials: "JT", color: "#00b4ff" },
  { name: "Aisha K.",  initials: "AK", color: "#0070e0" },
  { name: "Omar R.",   initials: "OR", color: "#0040c0" },
];

const services = [
  { icon: "🌐", label: "Web Development"  },
  { icon: "📱", label: "Mobile Apps"      },
  { icon: "☁️", label: "Cloud Solutions"  },
  { icon: "🎨", label: "UI / UX Design"   },
  { icon: "🔒", label: "Cybersecurity"    },
  { icon: "📊", label: "Data Analytics"   },
];

const stats = [
  { number: "150+", label: "Projects Delivered"  },
  { number: "98%",  label: "Client Satisfaction" },
  { number: "5★",   label: "Average Rating"       },
];

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
const HeroSection = () => {
  const sectionRef   = useRef<HTMLElement>(null);
  const visualRef    = useRef<HTMLDivElement>(null);
  const isInView     = useInView(sectionRef, { once: true, margin: "-80px" });
  const visualInView = useInView(visualRef,  { once: true, margin: "-60px" });

  /* Magnetic buttons */
  const primary   = useMagnetic(0.3);
  const secondary = useMagnetic(0.3);

  /* Parallax mouse glow */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glow1X = useTransform(mouseX, [-1, 1], [-30, 30]);
  const glow1Y = useTransform(mouseY, [-1, 1], [-20, 20]);
  const glow2X = useTransform(mouseX, [-1, 1], [20, -20]);
  const glow2Y = useTransform(mouseY, [-1, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - left) / width) * 2 - 1);
    mouseY.set(((e.clientY - top) / height) * 2 - 1);
  };

  return (
    <section
      className="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      aria-label="Hero"
    >
      {/* ── Background ── */}
      <motion.div className="hero__glow-1" style={{ x: glow1X, y: glow1Y }} aria-hidden />
      <motion.div className="hero__glow-2" style={{ x: glow2X, y: glow2Y }} aria-hidden />
      <div className="hero__glow-3" aria-hidden />
      <div className="hero__grid"   aria-hidden />
      <div className="hero__noise"  aria-hidden />

      <div className="hero__inner">
        {/* ══════════════════════════════════
            LEFT — Content
        ══════════════════════════════════ */}
        <motion.div
          className="hero__content"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {/* Badge */}
          <motion.div className="hero__badge" variants={fadeUp} custom={0}>
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">Next-Gen Digital Agency</span>
          </motion.div>

          {/* Heading — word-by-word */}
          <motion.h1
            className="hero__heading"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {[
              { text: "We Build",     gradient: false },
              { text: "Digital",      gradient: true  },
              { text: "Solutions",    gradient: true  },
              { text: "That Scale",   gradient: false },
            ].map((word, i) => (
              <motion.span
                key={i}
                className={`hero__heading-line${word.gradient ? " hero__heading-gradient" : ""}`}
                variants={fadeUp}
                custom={0.1 + i * 0.08}
              >
                {word.text}{" "}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sub */}
          <motion.p className="hero__sub" variants={fadeUp} custom={0.38}>
            NextGen Digital Solutions crafts high-performance web, mobile, and
            cloud products — turning your vision into seamless digital
            experiences that drive real growth.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero__ctas" variants={fadeUp} custom={0.48}>
            {/* Primary — magnetic */}
            <motion.a
              ref={primary.ref}
              style={{ x: primary.springX, y: primary.springY }}
              onMouseMove={primary.onMouseMove}
              onMouseLeave={primary.onMouseLeave}
              whileTap={{ scale: 0.96 }}
              className="hero__btn-primary"
              href="/contact"
            >
              Get Started
              <span className="hero__btn-arrow">→</span>
            </motion.a>

            {/* Secondary — magnetic */}
            <motion.a
              ref={secondary.ref}
              style={{ x: secondary.springX, y: secondary.springY }}
              onMouseMove={secondary.onMouseMove}
              onMouseLeave={secondary.onMouseLeave}
              whileTap={{ scale: 0.96 }}
              className="hero__btn-secondary"
              href="/services"
            >
              Our Services
            </motion.a>
          </motion.div>

          {/* Clients */}
          <motion.div className="hero__clients" variants={fadeUp} custom={0.56}>
            {/* Avatars with stagger */}
            <motion.div
              className="hero__client-avatars"
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              variants={staggerContainer}
            >
              {clients.map((c, i) => (
                <motion.div
                  key={c.name}
                  className="hero__client-avatar hero__client-avatar--initials"
                  style={{ background: `${c.color}22` }}
                  title={c.name}
                  variants={avatarVariant}
                  custom={0.6 + i * 0.07}
                  whileHover={{ y: -5, scale: 1.12, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                >
                  {c.initials}
                </motion.div>
              ))}
            </motion.div>

            <div className="hero__client-info">
              <motion.div
                className="hero__client-stars"
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={staggerContainer}
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="hero__star"
                    variants={chipVariant}
                    custom={0.7 + i * 0.05}
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>
              <p className="hero__client-meta">
                <strong>500+ happy clients</strong> — rated 5/5
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════
            RIGHT — Visual
        ══════════════════════════════════ */}
        <motion.div
          className="hero__visual"
          ref={visualRef}
          initial="hidden"
          animate={visualInView ? "show" : "hidden"}
        >
          {/* Services card */}
          <motion.div
            className="hero__card"
            variants={fadeLeft}
            custom={0}
            whileHover={{
              borderColor: "rgba(0,180,255,0.28)",
              boxShadow: "0 0 48px rgba(0,87,255,0.12)",
              transition: { duration: 0.3 },
            }}
          >
            <p className="hero__card-label">What We Do</p>
            <motion.div
              className="hero__card-services"
              variants={staggerContainer}
              initial="hidden"
              animate={visualInView ? "show" : "hidden"}
            >
              {services.map((s) => (
                <motion.div
                  key={s.label}
                  className="hero__service-chip"
                  variants={chipVariant}
                  whileHover={{
                    y: -3,
                    background: "rgba(0,180,255,0.1)",
                    borderColor: "rgba(0,180,255,0.28)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="hero__service-chip-icon">{s.icon}</span>
                  {s.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="hero__stats"
            initial="hidden"
            animate={visualInView ? "show" : "hidden"}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="hero__stat"
                variants={statVariant}
                custom={0.25 + i * 0.1}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(0,180,255,0.32)",
                  boxShadow: "0 8px 32px rgba(0,87,255,0.15)",
                  transition: { type: "spring", stiffness: 300, damping: 18 },
                }}
              >
                <div className="hero__stat-number">{s.number}</div>
                <div className="hero__stat-label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;