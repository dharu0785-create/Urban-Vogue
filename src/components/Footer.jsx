import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Urban Vogue</div>
            <div className="footer-desc" style={{ fontSize: '0.88rem', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
              <p><strong>Owner:</strong> Dharu ram</p>
              <p><strong>GST No:</strong> 08DZEPR076M1ZR</p>
              <p><strong>State:</strong> Rajasthan</p>
              <p><strong>PIN:</strong> 342022</p>
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/shop">All Products</Link>
            <Link to="/shop">New Arrivals</Link>
            <Link to="/shop">Best Sellers</Link>
            <Link to="/shop">Sale</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <Link to="/contact">Help Center</Link>
            <Link to="/terms#shipping">Shipping Info</Link>
            <Link to="/terms#returns">Returns & Refunds</Link>
            <Link to="/contact#faq">FAQs</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Urban Vogue — A trade name of Dharu ram. All rights reserved. GSTIN: 08DZEPR0476M1ZR</p>
          <div className="footer-legal-links">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
