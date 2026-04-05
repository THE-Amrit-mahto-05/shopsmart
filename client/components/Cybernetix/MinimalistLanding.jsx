import React, { useEffect, useState, useRef } from 'react';
import './CybernetixMinimal.css';
import CybernetixNavbar from './CybernetixNavbar';

const MinimalistLanding = () => {
  const [showHUD, setShowHUD] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {

    const timer = setTimeout(() => setShowHUD(true), 1200);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 35;
      const y = (e.clientY - innerHeight / 2) / 35;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const specs = [
    { label: "RANGE", value: "45 KM", top: '22%', left: '12%', startX: '-20px', startY: '20px' },
    { label: "SPEED", value: "155 KM/H", top: '68%', left: '15%', startX: '-20px', startY: '-20px' },
    { label: "CAMERA", value: "4K HDR", top: '25%', right: '12%', startX: '20px', startY: '20px' },
    { label: "STORAGE", value: "1 TB SSD", top: '72%', right: '10%', startX: '20px', startY: '-20px' }
  ];

  return (
    <div className="minimalist-cyber-page" ref={containerRef}>
      <div className="minimal-bg"></div>
      <CybernetixNavbar />

      <main className="main-content">
        <div style={{
          position: 'absolute',
          fontSize: '18vw',
          color: 'rgba(0, 242, 255, 0.02)',
          fontFamily: 'Orbitron',
          fontWeight: 900,
          whiteSpace: 'nowrap',
          zIndex: 0,
          pointerEvents: 'none',
          transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`
        }}>CYBERNETIX</div>
        <div className="hero-wrapper" style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) rotateX(${mousePos.y * -0.3}deg) rotateY(${mousePos.x * 0.3}deg)`
        }}>
          <img
            src="/assets/drone.png"
            alt="Cybernetix Elite Drone"
            className="drone-hero-img"
          />
        </div>
        <div className="hud-layer">
          {showHUD && specs.map((spec, index) => (
            <div key={index} className="hud-spec" style={{
              top: spec.top,
              left: spec.left,
              right: spec.right,
              textAlign: spec.right ? 'left' : 'right',
              animationDelay: `${index * 0.2}s`,
              '--startX': spec.startX,
              '--startY': spec.startY,
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
            }}>
              <div className="hud-label">{spec.label}</div>
              <div className="hud-value">{spec.value}</div>
              <div className="hud-line" style={{
                background: spec.right ? 'linear-gradient(90deg, var(--neon-blue), transparent)' : 'linear-gradient(270deg, var(--neon-blue), transparent)',
                marginLeft: spec.right ? '0' : 'auto'
              }}></div>
            </div>
          ))}
        </div>
        <button className="initiate-btn">INITIATE_PURCHASE.LOG</button>

      </main>
      <div style={{ position: 'absolute', top: '100px', left: '40px', width: '2px', height: '100px', background: 'var(--glass-border)' }}></div>
      <div style={{ position: 'absolute', top: '100px', left: '40px', width: '100px', height: '2px', background: 'var(--glass-border)' }}></div>
      <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '2px', height: '100px', background: 'var(--glass-border)' }}></div>
      <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '100px', height: '2px', background: 'var(--glass-border)' }}></div>
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '4rem',
        fontSize: '0.6rem',
        color: 'rgba(0, 242, 255, 0.4)',
        fontFamily: 'monospace',
        letterSpacing: '2px'
      }}>
        [ STATUS: STEADY // SIGNAL: 100% // LINK: SECURED ]
      </div>

    </div>
  );
};

export default MinimalistLanding;
