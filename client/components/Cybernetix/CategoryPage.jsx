import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CybernetixNavbar from './CybernetixNavbar';
import { getProductsByCategory, getCategoryName } from '../../src/data/mockProducts';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const categoryName = getCategoryName(categoryId);

  useEffect(() => {
    const fetchedProducts = getProductsByCategory(categoryId);
    setProducts(fetchedProducts);
  }, [categoryId]);

  return (
    <div className="category-page-container minimal-dark">
      <div className="minimal-bg"></div>
      <CybernetixNavbar />

      <div className="category-main">
        <aside className="category-filters">
          <h2 className="filter-title">FILTERS //</h2>

          <div className="filter-section">
            <h3 className="filter-title" style={{ fontSize: '0.8rem', color: '#fff' }}>STOCK STATUS</h3>
            <label className="filter-option">
              <input type="checkbox" defaultChecked /> In Stock
            </label>
            <label className="filter-option">
              <input type="checkbox" defaultChecked /> Out of Stock
            </label>
          </div>

          <div className="filter-section">
            <h3 className="filter-title" style={{ fontSize: '0.8rem', color: '#fff' }}>PRICE RANGE</h3>
            <label className="filter-option">
              <input type="checkbox" /> Under $50
            </label>
            <label className="filter-option">
              <input type="checkbox" /> $50 - $200
            </label>
            <label className="filter-option">
              <input type="checkbox" /> $200+
            </label>
          </div>
        </aside>

        <section style={{ flex: 1 }}>
          <h1 className="category-header">{categoryName}</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontFamily: 'monospace' }}>
            [ SYSTEM.LOG: {products.length} ENTITIES FOUND IN CLUSTER ]
          </p>

          <div className="product-grid">
            {products.length === 0 ? (
              <div className="empty-state">
                <div>[ NO DATA_PACKETS RECEIVED FOR THIS SECTOR ]</div>
              </div>
            ) : (
              products.map(product => (
                <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                  <div className="product-card">
                    <div className="product-image-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(0,242,255,0.05)', border: '1px dashed var(--neon-blue)', borderRadius: '8px', overflow: 'hidden' }}>
                      <code style={{ fontSize: '0.7rem', color: 'var(--neon-blue)', wordBreak: 'break-all' }}>{product.image}</code>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">{product.name}</h3>
                      <div className="product-price">${product.price.toFixed(2)}</div>

                      <div className="product-specs">
                        {Object.entries(product.specs).slice(0, 3).map(([key, val]) => (
                          <div className="spec-line" key={key}>
                            <span>{key}</span>
                            <span style={{ color: 'var(--text-primary)' }}>{val}</span>
                          </div>
                        ))}
                      </div>

                      <button className="view-btn">ACCESS_DATA // </button>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CategoryPage;
