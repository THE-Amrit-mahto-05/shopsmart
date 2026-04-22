import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CybernetixNavbar from './CybernetixNavbar';
import { getProductById, getCategoryName } from '../../src/data/mockProducts';
import { useCart } from '../../src/context/CartContext';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addToCart, setIsCartOpen } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchedProduct = getProductById(productId);
    setProduct(fetchedProduct);
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setIsCartOpen(true);
    }
  };

  if (!product) {
    return (
      <div className="pdp-container minimal-dark">
        <div className="minimal-bg"></div>
        <CybernetixNavbar />
        <div className="not-found-container">
          <h1 style={{ color: 'var(--neon-blue)', fontFamily: 'var(--hud-font)', fontSize: '2rem' }}>
            [ ERROR: ENTITY NOT FOUND ]
          </h1>
          <Link to="/" style={{ color: 'white', textDecoration: 'underline' }}>Return to Base</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pdp-container minimal-dark">
      <div className="minimal-bg"></div>
      <CybernetixNavbar />

      <main className="pdp-main">
        <section className="pdp-gallery">
          <div className="pdp-main-image-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', background: 'rgba(0,242,255,0.03)', border: '2px dashed var(--neon-blue)', borderRadius: '12px', padding: '2rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>SOURCE_URL //</span>
            <code style={{ color: 'var(--neon-blue)', fontSize: '1rem', wordBreak: 'break-all', textAlign: 'center' }}>{product.image}</code>
          </div>
        </section>

        <section className="pdp-info">
          <Link to={`/category/${product.categoryId}`} className="pdp-category-link">
            &larr; BACK TO {getCategoryName(product.categoryId)}
          </Link>
          
          <h1 className="pdp-title">{product.name}</h1>
          
          <div className="pdp-rating">
            <span className="pdp-rating-stars">★★★★☆</span>
            <span>{product.rating} / 5.0</span>
            <span>({product.reviews} reviews)</span>
          </div>

          <div className="pdp-price">${product.price.toFixed(2)}</div>
          
          <p className="pdp-description">{product.description}</p>
          
          <div className="pdp-specs-grid">
            {Object.entries(product.specs).map(([key, val]) => (
              <div className="pdp-spec-item" key={key}>
                <span className="pdp-spec-label">{key}</span>
                <span className="pdp-spec-value">{val}</span>
              </div>
            ))}
            <div className="pdp-spec-item">
              <span className="pdp-spec-label">STATUS</span>
              <span className="pdp-spec-value" style={{color: product.stockStatus === 'In Stock' ? '#00ffaa' : '#ff3366'}}>
                {product.stockStatus}
              </span>
            </div>
          </div>

          <div className="pdp-actions">
            <div className="qty-selector">
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >-</button>
              <input 
                type="number" 
                className="qty-input" 
                value={quantity}
                readOnly
              />
              <button 
                className="qty-btn" 
                onClick={() => setQuantity(quantity + 1)}
              >+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              ACQUIRE_ASSET // ADD TO CART
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetailPage;

