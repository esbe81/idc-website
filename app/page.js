export default function Home() {
  return (
    <>
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <img src="/assets/logo.png" alt="Inspire Dance Complex" className="logo-img" />
          </div>
          <nav>
            <ul className="nav-menu">
              <li><a href="/" className="active">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/classes">Classes</a></li>
              <li><a href="/schedule">Schedule</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="https://app.jackrabbitclass.com/portal" target="_blank" className="parent-login">Parent Login</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero hero-home">
        <div className="hero-overlay"></div>
        <img src="/assets/hero-home.jpg" alt="Inspire Dance Complex Studio" className="hero-bg" />
        <div className="hero-content">
          <h1>INSPIRING THE<br /><span className="hero-accent">Next Generation</span></h1>
          <p>Corona's Premier Dance Studio • Ages 2-18</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Book Free Trial</a>
            <a href="/classes" className="btn btn-secondary">View Classes</a>
          </div>
        </div>
      </section>
      <section className="section awards-bar">
        <div className="awards-container">
          <div className="award-item">
            <i className="fas fa-trophy"></i>
            <span>3x National Grand Champions</span>
          </div>
          <div className="award-item">
            <i className="fas fa-star"></i>
            <span>2022 City's Best Awards</span>
          </div>
          <div className="award-item">
            <i className="fas fa-medal"></i>
            <span>Est. 2013</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">The IDC Experience</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Where Elegance Meets Excellence</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <img src="/assets/feature-training.jpg" alt="Elite Dance Training" className="feature-img" />
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Award Winning</h3>
              <p>3x National Grand Champions and recognized as Corona's Best Dance Studio</p>
            </div>
          </div>
          <div className="feature-card">
            <img src="/assets/feature-instructors.jpg" alt="Professional Instructors" className="feature-img" />
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Elite Instructors</h3>
              <p>World-class training from industry professionals and former company dancers</p>
            </div>
          </div>
          <div className="feature-card">
            <img src="/assets/feature-studio.jpg" alt="Luxury Dance Studio" className="feature-img" />
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Luxury Training</h3>
              <p>Premium facility with a family atmosphere where every dancer is valued</p>
            </div>
          </div>
          <div className="feature-card">
            <img src="/assets/feature-performance.jpg" alt="Performance Opportunities" className="feature-img" />
            <div className="feature-content">
              <div className="feature-icon">
                <i className="fas fa-film"></i>
              </div>
              <h3>Industry Access</h3>
              <p>Direct connections to Disney, Broadway, and major brand campaigns</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark section-cta">
        <h2 className="section-title">Ready to Begin?</h2>
        <div className="divider"></div>
        <p className="section-subtitle">Your first class is complimentary</p>
        <div className="cta-buttons">
          <a href="/contact" className="btn btn-primary">Book Your Free Trial</a>
          <a href="/schedule" className="btn btn-secondary">View Schedule</a>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="divider"></div>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"Inspire Dance Complex has been a very positive experience for my daughter. The instructors and coaches are kind and knowledgeable and wonderful with all the dancers."</p>
            <div className="testimonial-author">— IDC Parent</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"We are so glad we found Inspire. The older girls are great kids and my daughter has great role models to follow and learn from."</p>
            <div className="testimonial-author">— IDC Parent</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>"My girls love IDC. Always looking forward to class. The studio creates such a positive and inspiring environment for all the dancers."</p>
            <div className="testimonial-author">— IDC Parent</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Inspire Dance Complex</h3>
            <p>Inspiring the next generation of dancers in Corona, CA since 2013.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/inspiredancecomplex/" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/InspireDanceCorona/" target="_blank"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Navigation</h3>
            <p><a href="/about">About Us</a></p>
            <p><a href="/classes">Classes</a></p>
            <p><a href="/schedule">Schedule</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
          <div className="footer-section">
            <h3>Programs</h3>
            <p>Recreational Classes</p>
            <p>Competition Team</p>
            <p>Mini Movers</p>
            <p>Private Lessons</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>211 Dupont St, Suite 107</p>
            <p>Corona, CA 92879</p>
            <p>(951) 371-1700</p>
            <p>info@inspiredancecomplex.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Inspire Dance Complex. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}