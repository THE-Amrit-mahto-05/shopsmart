import React from 'react';
import { useCart } from '../../src/context/CartContext';
import './CybernetixCart.css';

const CybernetixCart = ({ isOpen, onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="hud-cart-overlay" onClick={onClose}></div>
      <div className={`hud-cart-drawer ${isOpen ? 'open' : ''}`}>

        <div className="cart-header">
          <div className="cart-title">
            <span className="brand-primary">SECURE</span> CART
          </div>
          <button className="cart-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="empty-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="hud-icon">
                  <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <p>NO ACTIVE PAYLOADS</p>
              <span>Scan products to add them to your manifest.</span>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image-wrapper">
                    <div className="item-image">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">${(item.price || 0).toFixed(2)}</div>

                    <div className="item-controls">
                      <div className="qty-control">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.cartItemId)}>-</button>
                        <span>{item.quantity.toString().padStart(2, '0')}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.cartItemId)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id, item.cartItemId)}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="summary-row">
              <span>MANIFEST TOTAL ({totalItems.toString().padStart(2, '0')})</span>
              <span className="summary-total">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">
              SECURE CHECKOUT
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CybernetixCart;
