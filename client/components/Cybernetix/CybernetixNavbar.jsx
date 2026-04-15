import React from 'react';
import { useCart } from '../../src/context/CartContext';
import CybernetixCart from './CybernetixCart';
import './CybernetixNavbar.css';

const CybernetixNavbar = () => {
  const { totalItems, isCartOpen, setIsCartOpen } = useCart();
  
  return (
    <>
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
            <div className="hud-link categories-container">
              <span className="link-hover-frame">[</span>
              CATEGORIES
              <span className="link-hover-frame">]</span>
              <div className="hud-dropdown mega-menu">
                <div className="mega-menu-grid">
                  <div className="mega-menu-column">
                    <div className="mega-menu-title">Drones</div>
                    <a href="#" className="mega-menu-item">Camera Drones</a>
                    <a href="#" className="mega-menu-item">Racing Drones</a>
                    <a href="#" className="mega-menu-item">FPV Drones</a>
                    <a href="#" className="mega-menu-item">Beginner Drones</a>
                  </div>
                  <div className="mega-menu-column">
                    <div className="mega-menu-title">Robotics Kits</div>
                    <a href="#" className="mega-menu-item">Beginner Kits</a>
                    <a href="#" className="mega-menu-item">Advanced Kits</a>
                    <a href="#" className="mega-menu-item">STEM Learning</a>
                    <a href="#" className="mega-menu-item">AI / ML Robots</a>
                  </div>
                  <div className="mega-menu-column">
                    <div className="mega-menu-title">Components</div>
                    <a href="#" className="mega-menu-item">Motors & Servos</a>
                    <a href="#" className="mega-menu-item">Sensors</a>
                    <a href="#" className="mega-menu-item">Microcontrollers</a>
                    <a href="#" className="mega-menu-item">Batteries & Power</a>
                  </div>
                  <div className="mega-menu-column">
                    <div className="mega-menu-title">Controllers & FPV</div>
                    <a href="#" className="mega-menu-item">Remote Controllers</a>
                    <a href="#" className="mega-menu-item">FPV Goggles</a>
                    <a href="#" className="mega-menu-item">Transmitters & RX</a>
                  </div>
                  <div className="mega-menu-column">
                    <div className="mega-menu-title">AI & Smart Systems</div>
                    <a href="#" className="mega-menu-item">Vision Modules</a>
                    <a href="#" className="mega-menu-item">AI Boards</a>
                    <a href="#" className="mega-menu-item">Automation</a>
                  </div>
                  <div className="mega-menu-column">
                    <div className="mega-menu-title">Parts & Accessories</div>
                    <a href="#" className="mega-menu-item">Frames & Chassis</a>
                    <a href="#" className="mega-menu-item">Propellers</a>
                    <a href="#" className="mega-menu-item">Landing Gear</a>
                    <a href="#" className="mega-menu-item">Wires & Connectors</a>
                  </div>
                  <div className="mega-menu-column">
                    <div className="mega-menu-title">Tools & Equipment</div>
                    <a href="#" className="mega-menu-item">Soldering Kits</a>
                    <a href="#" className="mega-menu-item">Repair Tools</a>
                    <a href="#" className="mega-menu-item">Testing Equipment</a>
                  </div>
                  <div className="mega-menu-column">
                    <div className="mega-menu-title">Combos & Bundles</div>
                    <a href="#" className="mega-menu-item">Drone + Accessories</a>
                    <a href="#" className="mega-menu-item">Robotics Starters</a>
                  </div>
                  <div className="mega-menu-column">
                    <div className="mega-menu-title">Learning & DIY</div>
                    <a href="#" className="mega-menu-item">DIY Projects</a>
                    <a href="#" className="mega-menu-item">Tutorial Kits</a>
                    <a href="#" className="mega-menu-item">Educational Packs</a>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="commerce-port cart-port" onClick={() => setIsCartOpen(!isCartOpen)} style={{ cursor: 'pointer' }}>
              <div className="port-icon-frame">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hud-icon">
                  <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
              <span className="port-label">CART</span>
              <div className="port-badge">{(totalItems || 0).toString().padStart(2, '0')}</div>
            </div>
            <div className="commerce-port user-port">
              <div className="port-icon-frame">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hud-icon">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="port-label">PROFILE</span>
            </div>
          </div>
        </div>
      </nav>
      <CybernetixCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default CybernetixNavbar;
