import React, { useEffect, useRef, useState } from 'react';
import './AppleStyleLanding.css';

const AppleStyleLanding = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);

    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = scrollPos / windowHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const specs = [
    { label: "Propulsion", value: "1800KV Motors", top: '20%', left: '15%' },
    { label: "Flight Time", value: "45 Min", top: '15%', right: '15%' },
    { label: "Weight", value: "480g", top: '45%', left: '10%' },
    { label: "Max Speed", value: "72 KM/H", top: '55%', right: '15%' }
  ];

  return (
    <div className="apple-landing-container">
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '0.75rem 0',
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        borderBottom: '1px solid #111'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '1400px', width: '100%', padding: '0 1rem' }}>
          <img src="/assets/logo.png" alt="Logo" style={{ height: '30px' }} />
          <div className="brand-font neon-text" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2rem' }}>
            CYBERNETIX
          </div>
          <div style={{ flex: 1 }}></div>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>STORE</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>DRONES</a>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>SUPPORT</a>
          </div>
        </div>
      </nav>
      <section className="section hero-section" ref={heroRef} style={{ height: '100vh', width: '100vw', padding: 0, position: 'relative', overflow: 'hidden' }}>
        <div className={`hero-3d-container ${isVisible ? 'visible' : ''}`} style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
          <img
            src="/assets/drone_hero_final.png"
            alt="Cybernetix Hero Drone"
            className="no-watermark"
            style={{
              width: '100vw',
              height: '100vh',
              objectFit: 'cover'
            }}
          />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {specs.map((spec, index) => (
              <div
                key={index}
                className={`spec-callout ${isVisible && scrollProgress > 0.05 ? 'visible' : ''}`}
                style={{
                  position: 'absolute',
                  top: spec.top,
                  left: spec.left,
                  right: spec.right,
                  transitionDelay: `${index * 0.15}s`,
                  zIndex: 20
                }}
              >
                <div className="spec-label">{spec.label}</div>
                <div className="spec-value">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-indicator" style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 1 - scrollProgress * 5,
          color: '#fff',
          zIndex: 30,
          fontSize: '0.8rem',
          letterSpacing: '0.2rem'
        }}>
          EXPLORE ↓
        </div>
      </section>
      <section className="section feature-section" style={{ padding: '4rem 0' }}>
        <div className="feature-grid" style={{ maxWidth: '1400px', width: '90%', margin: '0 auto' }}>
          <div className="feature-content" style={{ opacity: scrollProgress > 0.4 ? 1 : 0, transform: `translateY(${scrollProgress > 0.4 ? 0 : 50}px)`, transition: 'all 0.8s' }}>
            <h3 className="neon-text" style={{ fontSize: '1rem', letterSpacing: '0.2em' }}>PRECISION</h3>
            <h2>Gimbal Stabilizer Unit</h2>
            <p>Experience cinematic stability with our next-gen 3-axis stabilizer. Ultra-HD sensors capture every detail with surgical precision.</p>
            <a href="#" className="apple-cta">Learn more</a>
          </div>
          <div className="feature-image img-container" style={{ 
            opacity: scrollProgress > 0.5 ? 1 : 0, 
            transform: `scale(${scrollProgress > 0.5 ? 1 : 0.85})`, 
            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src="/assets/gimbal_3d.png" alt="Gimbal" className="no-watermark" style={{ maxHeight: '100%', objectFit: 'contain' }} />
          </div>
        </div>
      </section>
      <section className="section feature-section" style={{ background: '#050505', padding: '4rem 0' }}>
        <div className="feature-grid" style={{ gridTemplateColumns: 'minmax(0, 1fr) 1.2fr', maxWidth: '1400px', width: '90%', margin: '0 auto', alignItems: 'center' }}>
          <div className="feature-image img-container" style={{ 
            order: 2,
            opacity: scrollProgress > 1.3 ? 1 : 0, 
            transform: `scale(${scrollProgress > 1.3 ? 1 : 0.85})`, 
            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src="/assets/drone_pedestal_3d.png" alt="Drone Unit" className="no-watermark" style={{ maxHeight: '100%', objectFit: 'contain' }} />
          </div>
          <div className="feature-content" style={{ 
            order: 1,
            opacity: scrollProgress > 1.3 ? 1 : 0, 
            transform: `translateY(${scrollProgress > 1.3 ? 0 : 40}px)`, 
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <h3 className="neon-text" style={{ fontSize: '1rem', letterSpacing: '0.2em' }}>POWER</h3>
            <h2>Dual-Battery System</h2>
            <p>Extended flight times up to 45 minutes. Intelligent power management ensures you never miss a shot during critical missions.</p>
            <a href="#" className="apple-cta" style={{ background: 'var(--neon-blue)', color: '#000' }}>Pre-Order 2026</a>
          </div>
        </div>
      </section>
      <section className="section" style={{ padding: '8rem 2rem' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '4rem' }}>Technical Specifications</h2>
        <div style={{ width: '100%', maxWidth: '1000px', borderTop: '1px solid #333' }}>
          {[
            { label: 'Motors', value: '1800KV Brushless' },
            { label: 'Dimensions', value: '350 x 350 x 145 mm' },
            { label: 'Weight', value: '480g (including battery)' },
            { label: 'Range', value: '10km (FCC)' },
            { label: 'Controller', value: 'Wrist Mounted Haptic' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 0', borderBottom: '1px solid #333' }}>
              <div style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>{item.label}</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: '4rem', textAlign: 'center', background: '#000', borderTop: '1px solid #111' }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
          © 2026 CYBERNETIX AEROSPACE. Designed for the Future.
        </div>
      </footer>
    </div>
  );
};

export default AppleStyleLanding;
