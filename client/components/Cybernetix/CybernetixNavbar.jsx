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
        <div className="hud-nav-links">
          <a href="#" className="hud-link active">
            <span className="link-hover-frame">[</span>
            STORE
            <span className="link-hover-frame">]</span>
          </a>
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
        <div className="hud-access-section">
          <div className="hud-scanner-bar"></div>
          <button className="hud-access-btn">ESTABLISH_LINK</button>
        </div>
      </div>
    </nav>
  );
};

export default CybernetixNavbar;
