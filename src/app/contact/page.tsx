"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Side: Contact Info & Statement */}
        <div className="contact-left-col">
          <div className="contact-black-box">
            <h1 className="contact-title">Contact</h1>
          </div>

          <p className="contact-intro">
            Let’s create something bold together. Reach out for
            collaborations, inquiries, or just to say hello.
          </p>

          <div className="contact-methods-grid">
            {/* Address */}
            <div className="contact-method-item">
              <div className="pill-badge contact-pill">
                <span className="dot dot-lime" />
                <span className="pill-text">Address</span>
              </div>
              <p className="contact-method-detail">
                Kochi, Kerala
              </p>
            </div>

            {/* Telephone */}
            <div className="contact-method-item">
              <div className="pill-badge contact-pill">
                <span className="dot dot-blue" />
                <span className="pill-text">Ph no</span>
              </div>
              <p className="contact-method-detail">
                <a href="tel:+918138087163" className="contact-link">
                  +91 8138087163
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="contact-method-item">
              <div className="pill-badge contact-pill">
                <span className="dot dot-magenta" />
                <span className="pill-text">Email id</span>
              </div>
              <p className="contact-method-detail">
                <a href="mailto:astilshednov88@gmail.com" className="contact-link">
                  astilshednov88@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-right-col">
          <div className="contact-form-card">
            {isSubmitted ? (
              <div className="contact-form-success">
                <CheckCircle2 size={54} className="success-icon" />
                <h3 className="success-title">Message Received</h3>
                <p className="success-body">
                  Thank you, {formData.firstName}. Your inquiry has been sent
                  to Astil Shednov. Expect a response within 24-48 business
                  hours.
                </p>
                <button
                  className="primary-btn submit-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-inner">
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="fn" className="form-label">
                      First name *
                    </label>
                    <input
                      id="fn"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ln" className="form-label">
                      Last name *
                    </label>
                    <input
                      id="ln"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="long-answer" className="form-label">
                    Long answer
                  </label>
                  <textarea
                    id="long-answer"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="form-input form-textarea"
                  />
                </div>

                {errorMessage && (
                  <div
                    style={{
                      padding: "12px 16px",
                      borderRadius: "8px",
                      backgroundColor: "#fee2e2",
                      color: "#b91c1c",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      marginBottom: "16px",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="primary-btn submit-btn"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
