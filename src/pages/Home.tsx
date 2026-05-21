import React from 'react';
import { Link } from 'react-router-dom';
import { technicians } from '../mockData';

export const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', paddingBottom: '80px' }}>
      
      {/* 1. HERO SECTION WITH RICH AESTHETICS */}
      <section style={{
        position: 'relative',
        padding: '100px 0 80px 0',
        overflow: 'hidden',
        background: 'radial-gradient(circle at top right, rgba(255, 153, 51, 0.08), transparent 40%)'
      }}>
        <div className="container hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className="pulse-indicator"></span>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ff9933' }}>
                Live dispatch: active engineers on duty
              </span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
              Mixie & Wet Grinder Repairs <br/>
              <span className="gradient-text">Restored to OEM Spec.</span>
            </h1>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '550px' }}>
              High-speed coupler checks, pure copper rewinding, and stone calibrations for daily mixer grinders and tabletop wet grinders in Bengaluru.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
              <Link to="/booking" className="btn btn-primary" style={{ backgroundColor: '#ff9933' }}>
                Book Service Ticket
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Price Tiers
              </Link>
            </div>

            {/* Quick Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginTop: '24px',
              borderTop: '1px solid var(--glass-border)',
              paddingTop: '24px'
            }}>
              <div>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ff9933', display: 'block' }}>2 Hours</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Coupler swap turnaround</span>
              </div>
              <div>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ff9933', display: 'block' }}>2 Years</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Armature rewinding warranty</span>
              </div>
              <div>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ff9933', display: 'block' }}>₹99</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Waived checkup fee</span>
              </div>
            </div>
          </div>

          {/* Visual Graphic card representing kitchen blender/mixer dynamics */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div className="glass" style={{
              borderRadius: 'var(--border-radius-lg)',
              padding: '40px',
              width: '100%',
              maxWidth: '480px',
              boxShadow: 'var(--card-shadow)',
              position: 'relative',
              zIndex: 2,
              border: '1px solid var(--glass-border)',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #ff9933 0%, transparent 70%)',
                opacity: 0.2,
                filter: 'blur(20px)'
              }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>Mixie Diagnostics Monitor</span>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981',
                  fontWeight: '600'
                }}>System OK</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>🌀</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Preethi Jar Coupling Test</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>18000 RPM</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--bg-tertiary)', overflow: 'hidden' }}>
                      <div style={{ width: '92%', height: '100%', backgroundColor: '#ff9933', borderRadius: '3px' }}></div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>⚙️</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Ultra Stone Bush Alignment</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Perfect Sync</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--bg-tertiary)', overflow: 'hidden' }}>
                      <div style={{ width: '100%', height: '100%', backgroundColor: '#10b981', borderRadius: '3px' }}></div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem'
                  }}>💡</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>OLP Overload Reset Check</span>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>0.5ms response</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', borderRadius: '3px', backgroundColor: 'var(--bg-tertiary)', overflow: 'hidden' }}>
                      <div style={{ width: '85%', height: '100%', backgroundColor: 'var(--accent-secondary)', borderRadius: '3px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFIC HIGHLIGHT FEATURES */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, color: '#ff9933', letterSpacing: '0.1em' }}>
            Why choose MixieFix
          </span>
          <h2 style={{ fontSize: '2.2rem', marginTop: '8px' }}>Engineered for Indian Kitchen Needs</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          <div className="glass" style={{ padding: '32px', borderRadius: 'var(--border-radius-md)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🛠️</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>₹99 Waived Check-up Fee</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              We charge a minimal inspection charge only if you decide not to proceed with the repair. Proceeding completely waives the diagnostics fee.
            </p>
          </div>

          <div className="glass" style={{ padding: '32px', borderRadius: 'var(--border-radius-md)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💎</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Pure Copper & OEM Spares</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              No cheap aluminum-mix coils or plastic gears. We strictly install original brand couplings and heavy-duty double-insulated copper wiring.
            </p>
          </div>

          <div className="glass" style={{ padding: '32px', borderRadius: 'var(--border-radius-md)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🛡️</div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Seva Warranty Guarantees</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Every single mechanical overhaul is backed by our dedicated warranty cards: 90 days on carbon bush tuning up to 2 years on motors.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TECHNICIAN SPOTLIGHT / AVAILABILITY MATRIX */}
      <section className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="container tech-spotlight-grid">
          
          <div>
            <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 700, color: '#ff9933', letterSpacing: '0.1em' }}>
              Expert Engineers
            </span>
            <h2 style={{ fontSize: '2.2rem', marginTop: '8px', marginBottom: '16px' }}>Certified Mixie & Grinder Gurus</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '24px' }}>
              Our expert technicians are trained to work on high-torque wet grinders, delicate stand mixers, and high-frequency smart blenders. You can track their availability in real time.
            </p>
            <Link to="/booking" className="btn btn-secondary">
              Book a Specific Expert
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {technicians.map((tech) => (
              <div 
                key={tech.id}
                style={{
                  padding: '20px',
                  borderRadius: 'var(--border-radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  transition: 'transform var(--transition-speed) ease'
                }}
                className="glass tech-card-hover"
              >
                <img 
                  src={tech.avatar} 
                  alt={tech.name} 
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #ff9933'
                  }} 
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{tech.name}</h3>
                    <span style={{
                      fontSize: '0.75rem',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      backgroundColor: tech.status === 'available' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                      color: tech.status === 'available' ? '#10b981' : '#ef4444',
                      fontWeight: '600'
                    }}>
                      {tech.status}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#ff9933', fontWeight: '600' }}>
                    Specialty: {tech.specialty.join(', ')}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <span>⭐ {tech.rating} Rating</span>
                    <span>•</span>
                    <span>{tech.experienceYears} Years Experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION (CTA) */}
      <section className="container">
        <div className="glass" style={{
          padding: '64px 32px',
          borderRadius: 'var(--border-radius-lg)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(255, 153, 51, 0.05) 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Ready to Restore Your Appliance?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Don't compromise on daily kitchen conveniences. Book your MixieFix diagnostic online today. Choose your tier, select a technician, and enjoy swift repair services.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '12px' }}>
              <Link to="/booking" className="btn btn-primary" style={{ backgroundColor: '#ff9933' }}>Book Appointment Now</Link>
              <Link to="/faq" className="btn btn-secondary">Review Repair Policies</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
          .tech-spotlight-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .tech-card-hover:hover {
          transform: translateY(-4px);
          border-color: #ff9933 !important;
        }
      `}</style>
    </div>
  );
};
export default Home;
