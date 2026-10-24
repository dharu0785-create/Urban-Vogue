import { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import products from '../data/products.js'

export default function Shop() {
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sort, setSort] = useState('default');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }

    result = result.filter(p => p.price <= maxPrice);

    if (sort === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [category, maxPrice, sort]);

  return (
    <div className="shop-page">
      <div className="container">
        <div className="shop-header">
          <h1 className="section-title">Shop All</h1>
          <p className="section-subtitle">
            Browse our complete collection of {products.length} premium gents clothing items, all priced between ₹1,500 and ₹3,000.
          </p>
        </div>

        <div className="shop-filters">
          <div className="filter-group">
            <label htmlFor="category-filter">Category</label>
            <select
              id="category-filter"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="price-filter">Max Price: <span className="price-range-display">₹{maxPrice.toLocaleString('en-IN')}</span></label>
            <input
              id="price-filter"
              type="range"
              min="1500"
              max="3000"
              step="50"
              value={maxPrice}
              onChange={e => setMaxPrice(Number(e.target.value))}
            />
          </div>

          <div className="filter-group">
            <label htmlFor="sort-filter">Sort By</label>
            <select
              id="sort-filter"
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <p className="product-count">
          Showing {filtered.length} of {products.length} products
        </p>

        <div className="product-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-secondary)' }}>
            <p style={{ fontSize: '1.2rem' }}>No products found matching your filters.</p>
            <button
              className="btn btn-outline"
              style={{ marginTop: '1rem' }}
              onClick={() => { setCategory('All'); setMaxPrice(3000); setSort('default'); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
