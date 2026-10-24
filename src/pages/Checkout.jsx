import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const FREE_SHIPPING_THRESHOLD = 1999;
  const STANDARD_SHIPPING_FEE = 99;
  const isFreeShipping = cartTotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = cartTotal > 0 ? (isFreeShipping ? 0 : STANDARD_SHIPPING_FEE) : 0;
  const grandTotal = cartTotal + shippingFee;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Rajasthan',
    pincode: '',
    paymentMethod: 'upi'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderId = `UV-${Math.floor(100000 + Math.random() * 900000)}`;
    const details = {
      orderId,
      items: [...cartItems],
      subtotal: cartTotal,
      shipping: shippingFee,
      total: grandTotal,
      customer: { ...formData },
      date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
    };
    setOrderDetails(details);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced && orderDetails) {
    return (
      <div className="legal-page" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
        <div className="container">
          <div className="legal-content" style={{ textAlign: 'center', maxWidth: '700px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Order Confirmed!</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              Thank you for shopping with Urban Vogue. Your order has been placed successfully.
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              textAlign: 'left',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.8rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Order ID:</span>
                <strong>{orderDetails.orderId}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.8rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Order Date:</span>
                <span>{orderDetails.date}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.8rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Delivery Address:</span>
                <span>{orderDetails.customer.address}, {orderDetails.customer.city}, {orderDetails.customer.state} - {orderDetails.customer.pincode}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.8rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Estimated Delivery:</span>
                <span>5–7 Business Days</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.8rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Payment Mode:</span>
                <span style={{ textTransform: 'uppercase' }}>{orderDetails.customer.paymentMethod}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '700', marginTop: '1rem' }}>
                <span>Total Paid:</span>
                <span style={{ color: 'var(--color-accent)' }}>₹{orderDetails.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Billing Entity: <strong>Dharu ram</strong> (Trade Name: Urban Vogue) · GSTIN: <strong>08DZEPR0476M1ZR</strong>
            </div>

            <Link to="/shop" className="btn btn-primary" style={{ padding: '0.9rem 2.5rem' }}>
              Continue Shopping →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="legal-page" style={{ paddingTop: 'calc(var(--header-height) + 4rem)', textAlign: 'center' }}>
        <div className="container">
          <div className="legal-content" style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
            <h2>Your Cart is Empty</h2>
            <p style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
              You don't have any items in your cart to checkout.
            </p>
            <Link to="/shop" className="btn btn-primary">
              Explore Our Collection →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="legal-page" style={{ paddingTop: 'calc(var(--header-height) + 2rem)' }}>
      <div className="container">
        <h1 className="section-title">Checkout</h1>
        <p className="section-subtitle">
          Complete your purchase securely. All items are verified and processed under GSTIN: 08DZEPR0476M1ZR.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
          {/* Shipping & Payment Form */}
          <div className="contact-form">
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>
              1. Delivery Details
            </h2>
            <form onSubmit={handlePlaceOrder}>
              <div className="form-group">
                <label htmlFor="chk-name">Full Name</label>
                <input
                  type="text"
                  id="chk-name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="chk-email">Email Address</label>
                  <input
                    type="email"
                    id="chk-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="chk-phone">Phone Number (+91)</label>
                  <input
                    type="tel"
                    id="chk-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="chk-address">Shipping Address</label>
                <input
                  type="text"
                  id="chk-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House/Flat No., Street, Landmark"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label htmlFor="chk-city">City</label>
                  <input
                    type="text"
                    id="chk-city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="chk-state">State</label>
                  <input
                    type="text"
                    id="chk-state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="chk-pincode">PIN Code</label>
                  <input
                    type="text"
                    id="chk-pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="302001"
                    pattern="[0-9]{6}"
                    title="Please enter a valid 6-digit Indian PIN code"
                    required
                  />
                </div>
              </div>

              <h2 style={{ fontSize: '1.3rem', margin: '2rem 0 1rem', color: 'var(--color-text)' }}>
                2. Payment Method
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem' }}>
                {[
                  { id: 'upi', label: 'UPI (Google Pay, PhonePe, Paytm, BHIM)' },
                  { id: 'card', label: 'Credit / Debit Card (Visa, MasterCard, RuPay)' },
                  { id: 'netbanking', label: 'Net Banking (All Indian Banks)' },
                  { id: 'cod', label: 'Cash on Delivery (COD)' }
                ].map(opt => (
                  <label
                    key={opt.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.85rem 1rem',
                      background: formData.paymentMethod === opt.id ? 'rgba(233, 69, 96, 0.12)' : 'var(--color-bg)',
                      border: formData.paymentMethod === opt.id ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer'
                    }}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={opt.id}
                      checked={formData.paymentMethod === opt.id}
                      onChange={handleChange}
                    />
                    <span style={{ fontSize: '0.95rem', color: 'var(--color-text)' }}>{opt.label}</span>
                  </label>
                ))}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.05rem' }}>
                Place Order (₹{grandTotal.toLocaleString('en-IN')}) →
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="contact-info">
            <div className="contact-info-card" style={{ padding: '1.8rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text)', marginBottom: '1.2rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.8rem' }}>
                Order Summary ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)
              </h3>

              <div style={{ maxHeight: '280px', overflowY: 'auto', marginBottom: '1.2rem', paddingRight: '0.5rem' }}>
                {cartItems.map(item => (
                  <div key={item.id} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.8rem', alignItems: 'center' }}>
                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: '4px', objectFit: 'cover' }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.85rem', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Qty: {item.quantity} × ₹{item.price.toLocaleString('en-IN')}</div>
                    </div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  <span>Subtotal</span>
                  <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                  <span>Delivery Charges</span>
                  <span style={{ color: isFreeShipping ? '#10b981' : 'var(--color-text)', fontWeight: isFreeShipping ? '700' : 'normal' }}>
                    {isFreeShipping ? 'FREE' : `₹${STANDARD_SHIPPING_FEE}`}
                  </span>
                </div>
                {isFreeShipping && (
                  <div style={{ fontSize: '0.78rem', color: '#10b981', textAlign: 'right' }}>
                    ✓ Qualified for Free Delivery (Order &gt; ₹1,999)
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '700', marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px dashed var(--color-border)' }}>
                  <span>Total Payable</span>
                  <span style={{ color: 'var(--color-accent)' }}>₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '0.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                🔒 256-bit SSL encrypted checkout. Issued by <strong>Dharu ram</strong> (GSTIN: 08DZEPR0476M1ZR).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
