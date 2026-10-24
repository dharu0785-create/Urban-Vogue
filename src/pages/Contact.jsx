import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-subtitle">
          Have a question, feedback, or need support? We'd love to hear from you.
        </p>

        <div className="contact-grid">
          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <p>Thank you! Your message has been sent successfully.</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                  We'll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your query..."
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div className="contact-info-card">
              <h3>📧 Email Support</h3>
              <p>support@urbanvogue.in</p>
              <p>info@urbanvogue.in</p>
            </div>
            <div className="contact-info-card">
              <h3>📞 Phone</h3>
              <p>+91 99817 82579</p>
              <p>Mon – Sat, 10:00 AM – 7:00 PM IST</p>
            </div>
            <div className="contact-info-card">
              <h3>🏢 Operating Address</h3>
              <p><strong>Dharu ram</strong></p>
              <p>(Trade Name: Urban Vogue)</p>
              <p>GSTIN: 08DZEPR076M1ZR</p>
              <p style={{ marginTop: '0.5rem' }}>
                Rajasthan, India — PIN: 342022
              </p>
            </div>
            <div className="contact-info-card">
              <h3>⏰ Business Hours</h3>
              <p>Monday – Saturday</p>
              <p>10:00 AM – 7:00 PM IST</p>
              <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* FAQs & Help Center */}
        <div id="faq" style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border)' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about our products, orders, shipping, and policies.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            <div className="contact-info-card">
              <h3>💰 What is your price range?</h3>
              <p>All items on Urban Vogue are strictly priced between ₹1,500 and ₹3,000, ensuring accessible premium quality without compromise.</p>
            </div>
            <div className="contact-info-card">
              <h3>🚚 What are your shipping charges?</h3>
              <p>We provide <strong>FREE Delivery</strong> on all orders above ₹1,999 across India. A nominal standard shipping fee of ₹99 applies to orders below ₹1,999.</p>
            </div>
            <div className="contact-info-card">
              <h3>📦 How long does delivery take?</h3>
              <p>Orders are dispatched within 1–2 business days. Standard transit across India typically takes 5–7 business days.</p>
            </div>
            <div className="contact-info-card">
              <h3>↩️ What is your return policy?</h3>
              <p>We offer a 7-day hassle-free return and exchange policy from the date of delivery. Items must be in original condition with tags intact.</p>
            </div>
            <div className="contact-info-card">
              <h3>🏢 What is the legal operating entity?</h3>
              <p>Urban Vogue is the official trade name of <strong>Dharu ram</strong>, registered in Rajasthan, India under GSTIN: <strong>08DZEPR0476M1ZR</strong>.</p>
            </div>
            <div className="contact-info-card">
              <h3>💳 What payment methods are accepted?</h3>
              <p>We accept all major Credit/Debit Cards, UPI (GPay, PhonePe, Paytm), Net Banking, and Cash on Delivery (COD).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
