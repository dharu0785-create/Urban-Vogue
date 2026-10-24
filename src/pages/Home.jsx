import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/products.js'

export default function Home() {
  const featuredProducts = products.slice(0, 10);

  const valueProps = [
    {
      icon: '🚚',
      title: 'Free Delivery over ₹1,999',
      desc: 'Enjoy free shipping on all orders above ₹1,999 across India.'
    },
    {
      icon: '🔒',
      title: 'Secure Payments',
      desc: 'Your transactions are protected with 256-bit SSL encryption.'
    },
    {
      icon: '↩️',
      title: 'Easy Returns',
      desc: '7-day hassle-free returns and exchanges on all products.'
    },
    {
      icon: '⭐',
      title: 'Premium Quality',
      desc: 'Every piece is crafted with the finest materials and attention to detail.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">✨ New Collection 2026</div>
          <h1 className="hero-title">
            Redefine Your <span>Style</span> With Urban Vogue
          </h1>
          <p className="hero-subtitle">
            Discover premium gents clothing curated for the modern gentleman. From crisp shirts
            and tailored jackets to premium denim and ethnic wear — all between ₹1,500 and ₹3,000.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-primary">Shop Now →</Link>
            <Link to="/about" className="btn btn-outline">Our Story</Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-subtitle">
            Hand-picked styles that define the season. Explore our top 10 curated picks.
          </p>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/shop" className="btn btn-primary">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="value-props">
        <div className="container">
          <h2 className="section-title">Why Urban Vogue?</h2>
          <p className="section-subtitle">
            We go the extra mile to ensure your shopping experience is nothing short of exceptional.
          </p>
          <div className="value-props-grid">
            {valueProps.map((prop, i) => (
              <div className="value-prop-card" key={i}>
                <div className="value-prop-icon">{prop.icon}</div>
                <h3 className="value-prop-title">{prop.title}</h3>
                <p className="value-prop-desc">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
