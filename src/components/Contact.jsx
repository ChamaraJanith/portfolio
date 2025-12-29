import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder submit
    setTimeout(() => {
        setLoading(false);
        alert("Transmission sent!");
        setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div
      style={{
          display: "flex",
          flexDirection: "column-reverse",
          gap: "2.5rem",
          overflow: "hidden"
      }}
      className="xl:mt-12 xl:flex-row"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="glass-panel"
        style={{ flex: 0.75, padding: "3rem", borderRadius: "2rem", border: "1px solid rgba(255, 255, 255, 0.1)" }}
      >
        <p className="sub-text">Get in touch</p>
        <h3 className="head-text">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "3rem" }}
        >
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontWeight: "600", marginBottom: "0.75rem", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Ex: Elon Musk"
              style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "1rem 1.5rem",
                  color: "white",
                  borderRadius: "12px",
                  outline: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "16px",
                  transition: "all 0.3s"
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--nebula-blue)"}
              onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontWeight: "600", marginBottom: "0.75rem", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Ex: chamara@example.com"
              style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "1rem 1.5rem",
                  color: "white",
                  borderRadius: "12px",
                  outline: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "16px",
                  transition: "all 0.3s"
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--nebula-blue)"}
              onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontWeight: "600", marginBottom: "0.75rem", fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell me about your project...'
              style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "1rem 1.5rem",
                  color: "white",
                  borderRadius: "12px",
                  outline: "none",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  fontSize: "16px",
                  resize: "none",
                  transition: "all 0.3s"
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--nebula-blue)"}
              onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
            />
          </label>

          <button
            type='submit'
            style={{
                background: "linear-gradient(90deg, var(--nebula-blue), var(--nebula-purple))",
                padding: "1rem 3rem",
                outline: "none",
                width: "fit-content",
                color: "white",
                fontWeight: "bold",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(0, 255, 157, 0.3)",
                transition: "all 0.3s"
            }}
            onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          >
            {loading ? "Transmitting..." : "Send Message"}
          </button>
        </form>

        <div style={{ marginTop: '3rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem' }}>
          <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Social Transmission</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <motion.a
                href="https://github.com/ChamaraJanith"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="glass-panel"
                style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '15px' }}
            >
                <span style={{ fontSize: '20px' }}>🐙</span> GitHub
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/chamara-abeyrathna-a22353376/"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="glass-panel"
                style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'white', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '15px' }}
            >
                <span style={{ fontSize: '20px' }}>💼</span> LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        style={{ flex: 1, height: "auto", minHeight: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
