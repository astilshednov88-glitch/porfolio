"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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

      setSubmitted(true);
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage("");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <CheckCircle2 size={48} className="success-icon" />
            <h3 className="modal-title">Message Sent!</h3>
            <p className="modal-description">
              Thank you for reaching out, {formData.firstName || "friend"}. Astil will get back to you shortly.
            </p>
            <button className="primary-btn submit-btn" onClick={handleReset}>
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="modal-header">
              <span className="dot dot-magenta" />
              <h3 id="modal-title" className="modal-title">
                Let&apos;s Connect
              </h3>
            </div>
            <p className="modal-description">
              Have a visionary project or collaboration in mind? Send a message directly.
            </p>

            <form onSubmit={handleSubmit} className="contact-form modal-form">
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="modal-fn" className="form-label">
                    First name *
                  </label>
                  <input
                    id="modal-fn"
                    type="text"
                    required
                    className="form-input"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-ln" className="form-label">
                    Last name *
                  </label>
                  <input
                    id="modal-ln"
                    type="text"
                    required
                    className="form-input"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-email" className="form-label">
                  Email *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  className="form-input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-msg" className="form-label">
                  Project Details / Message *
                </label>
                <textarea
                  id="modal-msg"
                  rows={4}
                  required
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {errorMessage && (
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#fee2e2",
                    color: "#b91c1c",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    marginBottom: "16px",
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="primary-btn submit-btn"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
