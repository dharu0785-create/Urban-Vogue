import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  const FREE_SHIPPING_THRESHOLD = 1999;
  const STANDARD_SHIPPING_FEE = 99;
  const isFreeShipping = cartTotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = cartTotal > 0 ? (isFreeShipping ? 0 : STANDARD_SHIPPING_FEE) : 0;
  const grandTotal = cartTotal + shippingFee;
  const amountNeededForFreeShipping = FREE_SHIPPING_THRESHOLD - cartTotal;
  const shippingProgress = Math.min(100, Math.round((cartTotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <h2>Your Cart ({cartCount})</h2>
          <button className="cart-close-btn" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {cartItems.length > 0 && (
          <div className="cart-shipping-notice">
            {isFreeShipping ? (
              <div className="shipping-unlocked">
                🎉 <strong>FREE Delivery Unlocked!</strong> (Orders above ₹1,999)
              </div>
            ) : (
              <div className="shipping-progress-wrap">
                <div className="shipping-text">
                  🚚 Add <strong>₹{amountNeededForFreeShipping.toLocaleString('en-IN')}</strong> more for <strong>FREE Delivery</strong>
                </div>
                <div className="shipping-progress-bar">
                  <div
                    className="shipping-progress-fill"
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <div className="cart-drawer-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛒</div>
              <p>Your cart is empty</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
                Add items to your cart to get started!
              </p>
            </div>
          ) : (
            cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</div>
                  <div className="cart-item-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span className="cart-item-qty">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`}>
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <span>₹{cartTotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="cart-summary-row">
              <span>Delivery Fee</span>
              <span className={isFreeShipping ? "free-delivery-badge" : ""}>
                {isFreeShipping ? "FREE" : `₹${STANDARD_SHIPPING_FEE}`}
              </span>
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span className="cart-total-price">₹{grandTotal.toLocaleString('en-IN')}</span>
            </div>
            <button className="checkout-btn" onClick={handleProceedToCheckout}>
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
