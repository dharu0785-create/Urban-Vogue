import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '★';
    if (hasHalf) stars += '★';
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&auto=format&fit=crop&q=80";
          }}
        />
        <div className="product-card-overlay">
          <button
            className={`add-to-cart-btn ${added ? 'added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓ Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <div className="product-card-body">
        <div className="product-card-category">{product.category}</div>
        <h3 className="product-card-name">{product.name}</h3>
        <div className="product-card-footer">
          <div className="product-card-price">
            ₹{product.price.toLocaleString('en-IN')}
          </div>
          <div className="product-card-rating">
            {renderStars(product.rating)} <span style={{ color: 'var(--color-text-secondary)' }}>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
