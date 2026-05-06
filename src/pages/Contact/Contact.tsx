import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import "../../assets/css/contact/contact.css"; // adjust path if needed

/* ─── Animation variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 36 },
  show: (d: number = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/* ─── Services list ─── */
const services = [
  "Web Development",
  "Mobile App Development",
  "UI / UX Design",
  "Cloud Solutions",
  "Cybersecurity",
  "Data Analytics",
  "Digital Marketing",
  "Other",
];

/* ─── Contact info ─── */
const infoItems = [
  {
    icon: "📧",
    title: "Email Us",
    value: "hello@nextgen-digital.com",
    href: "mailto:hello@nextgen-digital.com",
  },
  {
    icon: "📞",
    title: "Call Us",
    value: "+92 300 000 0000",
    href: "tel:+923000000000",
  },
  {
    icon: "📍",
    title: "Office",
    value: "Lahore, Punjab, Pakistan",
    href: null,
  },
  {
    icon: "🕐",
    title: "Business Hours",
    value: "Mon – Sat, 9 AM – 7 PM PKT",
    href: null,
  },
];

/* ─── Form types ─── */
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  service?: string;
  message?: string;
}

const WHATSAPP_NUMBER = "923000000000"; // replace with real number

const Contact: React.FC = () => {
  const pageRef  = useRef<HTMLDivElement>(null);
  const formRef  = useRef<HTMLDivElement>(null);
  const isInView = useInView(pageRef,  { once: true, margin: "-60px" });
  const formInView = useInView(formRef, { once: true, margin: "-60px" });

  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "",
    phone: "", service: "", budget: "", message: "",
  });
  const [errors, setErrors]   = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* Validation */
  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim())  e.lastName  = "Last name is required";
    if (!form.email.trim())     e.email     = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 20)
      e.message = "Message should be at least 20 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate API call — replace with your real endpoint
    await new Promise((res) => setTimeout(res, 1800));
    setLoading(false);
    setSuccess(true);
  };

  const handleReset = () => {
    setSuccess(false);
    setForm({ firstName: "", lastName: "", email: "", phone: "", service: "", budget: "", message: "" });
    setErrors({});
  };

  /* WhatsApp message */
  const waMessage = encodeURIComponent(
    `Hi NextGen Digital Solutions! I'm interested in ${form.service || "your services"}. My name is ${form.firstName} ${form.lastName}.`
  );

  return (
    <div className="contact-page" ref={pageRef}>
      {/* Background */}
      <div className="contact-page__glow-1" aria-hidden />
      <div className="contact-page__glow-2" aria-hidden />
      <div className="contact-page__grid"   aria-hidden />

      <div className="contact-page__inner">
        {/* ── Header ── */}
        <motion.div
          className="contact-page__header"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={stagger}
        >
          <motion.div className="contact-page__badge" variants={fadeUp} custom={0}>
            <span className="contact-page__badge-dot" />
            <span className="contact-page__badge-text">Get In Touch</span>
          </motion.div>

          <motion.h1 className="contact-page__title" variants={fadeUp} custom={0.1}>
            Let's Build Something{" "}
            <span className="contact-page__title-gradient">Great Together</span>
          </motion.h1>

          <motion.p className="contact-page__subtitle" variants={fadeUp} custom={0.2}>
            Have a project in mind? We'd love to hear from you. Drop us a message
            and our team will get back to you within 24 hours.
          </motion.p>
        </motion.div>

        {/* ── Main layout ── */}
        <div className="contact-page__layout">

          {/* ══ LEFT ══ */}
          <motion.div
            className="contact-page__left"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={stagger}
          >
            {/* Info card */}
            <motion.div
              className="contact-info-card"
              variants={fadeUp}
              custom={0.1}
              whileHover={{ borderColor: "rgba(0,180,255,0.28)", transition: { duration: 0.25 } }}
            >
              <p className="contact-info-card__label">Contact Information</p>

              {infoItems.map((item) => (
                <motion.div
                  key={item.title}
                  className="contact-info-item"
                  whileHover={{ paddingLeft: 8, transition: { duration: 0.2 } }}
                >
                  <div className="contact-info-item__icon">{item.icon}</div>
                  <div className="contact-info-item__body">
                    <div className="contact-info-item__title">{item.title}</div>
                    {item.href ? (
                      <a href={item.href} className="contact-info-item__value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-info-item__value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* WhatsApp button */}
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp"
              variants={fadeUp}
              custom={0.2}
              whileHover={{ y: -3, boxShadow: "0 0 48px rgba(37,211,102,0.38)", transition: { duration: 0.22 } }}
              whileTap={{ scale: 0.97 }}
            >
              {/* WhatsApp SVG icon */}
              <svg className="contact-whatsapp__icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </motion.a>

            {/* Map card */}
            <motion.div
              className="contact-map-card"
              variants={fadeUp}
              custom={0.3}
              whileHover={{ borderColor: "rgba(0,180,255,0.28)", transition: { duration: 0.25 } }}
            >
              <div className="contact-map-card__header">
                <span className="contact-map-card__pin">📍</span>
                <div>
                  <div className="contact-map-card__title">Our Office</div>
                  <div className="contact-map-card__sub">Lahore, Punjab, Pakistan</div>
                </div>
              </div>
              <iframe
                className="contact-map-card__iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435199.5826855278!2d73.87208925!3d31.4825192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NextGen Digital Solutions - Lahore Office"
              />
            </motion.div>
          </motion.div>

          {/* ══ RIGHT: Form ══ */}
          <motion.div
            ref={formRef}
            className="contact-form-card"
            initial="hidden"
            animate={formInView ? "show" : "hidden"}
            variants={fadeLeft}
            custom={0.1}
            whileHover={{ borderColor: "rgba(0,180,255,0.22)", transition: { duration: 0.3 } }}
          >
            <p className="contact-form-card__label">Send Us a Message</p>

            {success ? (
              /* Success state */
              <motion.div
                className="contact-form__success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="contact-form__success-icon"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                >
                  ✅
                </motion.div>
                <div className="contact-form__success-title">Message Sent!</div>
                <p className="contact-form__success-sub">
                  Thank you for reaching out! Our team will review your message
                  and get back to you within 24 hours.
                </p>
                <button className="contact-form__reset" onClick={handleReset}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>

                {/* Name row */}
                <div className="contact-form__row">
                  <motion.div
                    className="contact-form__group"
                    variants={fadeUp} custom={0.15}
                    initial="hidden" animate={formInView ? "show" : "hidden"}
                  >
                    <label className="contact-form__label" htmlFor="firstName">
                      First Name <span style={{ color: "var(--c-error)" }}>*</span>
                    </label>
                    <input
                      id="firstName" name="firstName" type="text"
                      className={`contact-form__input${errors.firstName ? " contact-form__input--error" : ""}`}
                      placeholder="Ali"
                      value={form.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                    />
                    {errors.firstName && <span className="contact-form__error">{errors.firstName}</span>}
                  </motion.div>

                  <motion.div
                    className="contact-form__group"
                    variants={fadeUp} custom={0.2}
                    initial="hidden" animate={formInView ? "show" : "hidden"}
                  >
                    <label className="contact-form__label" htmlFor="lastName">
                      Last Name <span style={{ color: "var(--c-error)" }}>*</span>
                    </label>
                    <input
                      id="lastName" name="lastName" type="text"
                      className={`contact-form__input${errors.lastName ? " contact-form__input--error" : ""}`}
                      placeholder="Ahmed"
                      value={form.lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                    />
                    {errors.lastName && <span className="contact-form__error">{errors.lastName}</span>}
                  </motion.div>
                </div>

                {/* Email & Phone row */}
                <div className="contact-form__row">
                  <motion.div
                    className="contact-form__group"
                    variants={fadeUp} custom={0.25}
                    initial="hidden" animate={formInView ? "show" : "hidden"}
                  >
                    <label className="contact-form__label" htmlFor="email">
                      Email <span style={{ color: "var(--c-error)" }}>*</span>
                    </label>
                    <input
                      id="email" name="email" type="email"
                      className={`contact-form__input${errors.email ? " contact-form__input--error" : ""}`}
                      placeholder="ali@example.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <span className="contact-form__error">{errors.email}</span>}
                  </motion.div>

                  <motion.div
                    className="contact-form__group"
                    variants={fadeUp} custom={0.3}
                    initial="hidden" animate={formInView ? "show" : "hidden"}
                  >
                    <label className="contact-form__label" htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone" name="phone" type="tel"
                      className="contact-form__input"
                      placeholder="+92 300 0000000"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </motion.div>
                </div>

                {/* Service & Budget row */}
                <div className="contact-form__row">
                  <motion.div
                    className="contact-form__group"
                    variants={fadeUp} custom={0.35}
                    initial="hidden" animate={formInView ? "show" : "hidden"}
                  >
                    <label className="contact-form__label" htmlFor="service">
                      Service Needed <span style={{ color: "var(--c-error)" }}>*</span>
                    </label>
                    <div className="contact-form__select-wrap">
                      <select
                        id="service" name="service"
                        className={`contact-form__select${errors.service ? " contact-form__select--error" : ""}`}
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    {errors.service && <span className="contact-form__error">{errors.service}</span>}
                  </motion.div>

                  <motion.div
                    className="contact-form__group"
                    variants={fadeUp} custom={0.4}
                    initial="hidden" animate={formInView ? "show" : "hidden"}
                  >
                    <label className="contact-form__label" htmlFor="budget">Budget Range</label>
                    <div className="contact-form__select-wrap">
                      <select
                        id="budget" name="budget"
                        className="contact-form__select"
                        value={form.budget}
                        onChange={handleChange}
                      >
                        <option value="" disabled>Select budget</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-2000">$500 – $2,000</option>
                        <option value="2000-5000">$2,000 – $5,000</option>
                        <option value="5000-15000">$5,000 – $15,000</option>
                        <option value="15000+">$15,000+</option>
                      </select>
                    </div>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  className="contact-form__group"
                  variants={fadeUp} custom={0.45}
                  initial="hidden" animate={formInView ? "show" : "hidden"}
                >
                  <label className="contact-form__label" htmlFor="message">
                    Your Message <span style={{ color: "var(--c-error)" }}>*</span>
                  </label>
                  <textarea
                    id="message" name="message"
                    className={`contact-form__textarea${errors.message ? " contact-form__textarea--error" : ""}`}
                    placeholder="Tell us about your project — goals, timeline, and any details you'd like to share..."
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="contact-form__error">{errors.message}</span>}
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  className="contact-form__submit"
                  disabled={loading}
                  variants={fadeUp} custom={0.52}
                  initial="hidden" animate={formInView ? "show" : "hidden"}
                  whileHover={!loading ? { y: -2, boxShadow: "0 0 44px rgba(0,180,255,0.44)" } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <>
                      <span className="contact-form__spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span>→</span>
                    </>
                  )}
                </motion.button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;