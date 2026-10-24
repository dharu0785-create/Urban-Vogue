export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1 className="section-title">Our Story</h1>
          <p className="section-subtitle">
            From a vision to a movement — Urban Vogue is redefining accessible premium fashion across India.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Urban Vogue is a premium fashion brand and the trade name of <strong>Dharu ram</strong>,
              registered under GSTIN <strong>08DZEPR0476M1ZR</strong>. We believe that style shouldn't
              come with a hefty price tag — which is why every piece in our collection is priced between
              ₹1,500 and ₹3,000.
            </p>
            <p>
              Founded with the mission to democratize fashion, we curate collections that blend
              contemporary trends with timeless elegance. From everyday essentials to statement pieces,
              we ensure every garment meets our rigorous quality standards before it reaches you.
            </p>
            <p>
              Our team of designers draws inspiration from global runway trends and adapts them for
              the modern Indian wardrobe, creating pieces that are versatile, comfortable, and
              undeniably stylish.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
              alt="Urban Vogue fashion studio"
            />
          </div>
        </div>

        <div className="about-content" style={{ direction: 'rtl' }}>
          <div className="about-text" style={{ direction: 'ltr' }}>
            <h2>Our Vision</h2>
            <p>
              To become India's most trusted affordable-premium fashion destination, where quality
              meets accessibility. We envision a world where everyone can express their unique style
              without compromise.
            </p>
            <p>
              At Urban Vogue, sustainability isn't an afterthought — it's woven into our ethos.
              We are committed to responsible sourcing, eco-friendly packaging, and ethical
              manufacturing practices that respect both people and the planet.
            </p>
          </div>
          <div className="about-image" style={{ direction: 'ltr' }}>
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop"
              alt="Urban Vogue quality craftsmanship"
            />
          </div>
        </div>

        <h2 className="section-title" style={{ marginTop: '4rem' }}>What We Stand For</h2>
        <p className="section-subtitle">
          Our core values drive every decision we make.
        </p>

        <div className="about-values">
          <div className="about-value-card">
            <div className="about-value-icon">🎨</div>
            <h3>Design Excellence</h3>
            <p>Every piece is thoughtfully designed, blending global trends with Indian sensibilities for the perfect modern wardrobe.</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">💎</div>
            <h3>Premium Quality</h3>
            <p>We never compromise on quality. Every fabric, stitch, and finish is inspected to meet our exacting standards.</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">🌿</div>
            <h3>Sustainability</h3>
            <p>From responsible sourcing to eco-friendly packaging, we're committed to fashion that respects the planet.</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">💰</div>
            <h3>Affordable Luxury</h3>
            <p>Premium fashion shouldn't break the bank. All our products are priced between ₹1,500 – ₹3,000.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
