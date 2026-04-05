import React from 'react';
import './CybernetixNavbar.css';

const CybernetixNavbar = () => {
  return (
    <nav className="hud-navbar">
      <div className="hud-bracket-left"></div>
      <div className="hud-bracket-right"></div>
      <div className="hud-island">
        <div className="hud-brand-section">
          <img src="/assets/logo.png" alt="Logo" className="hud-logo" />
          <div className="hud-brand-text">
            <span className="brand-primary">CYBERNETIX</span>

          </div>
        </div>
        <div className="hud-search-container">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="hud-search-icon">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search for drones or parts..."
            className="hud-search-input"
          />
          <div className="hud-search-line"></div>
        </div>
        <div className="hud-nav-links">
          <a href="#" className="hud-link">
            <span className="link-hover-frame">[</span>
            DRONES
            <span className="link-hover-frame">]</span>
          </a>
          <a href="#" className="hud-link">
            <span className="link-hover-frame">[</span>
            FLEET
            <span className="link-hover-frame">]</span>
          </a>
          <a href="#" className="hud-link">
            <span className="link-hover-frame">[</span>
            INTEL
            <span className="link-hover-frame">]</span>
          </a>
        </div>
        <div className="commerce-bay">
          <div className="commerce-port cart-port">
            <div className="port-icon-frame">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hud-icon">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <span className="port-label">CART.LOG</span>
            <div className="port-badge">03</div>
          </div>
          <div className="commerce-port user-port">
            <div className="port-icon-frame">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hud-icon">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <span className="port-label">PROFILE.SYS</span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default CybernetixNavbar;
