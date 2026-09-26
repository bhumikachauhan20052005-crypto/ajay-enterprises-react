import React from "react";
import "../hero.css";

const Hero = () => {

  const scrollToSolutions = () => {
    document
      .getElementById("solutions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">

      <div className="hero-overlay">

        <div className="hero-content">

          <div className="company-name">
            AJAY ENTERPRISES
          </div>

          <h1>
            Complete Medical
            <br />
            <span>Solutions</span>
            <br />
            for a Healthier Tomorrow
          </h1>

          <p>
            Trusted partner in supplying high-quality medical equipment
            to hospitals, clinics and healthcare professionals across India.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-btn primary-btn"
              onClick={scrollToSolutions}
            >
              Explore Our Products
              <span>→</span>
            </button>

            <button
              className="hero-btn secondary-btn"
              onClick={scrollToContact}
            >
              Request a Quote
            </button>

          </div>

          <div className="hero-features">

            <div className="hero-feature">
              <div className="feature-icon">✓</div>
              <div>
                <strong>Trusted</strong>
                <span>Brands</span>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">⚙</div>
              <div>
                <strong>Quality</strong>
                <span>Assurance</span>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">🚚</div>
              <div>
                <strong>Timely</strong>
                <span>Delivery</span>
              </div>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">♧</div>
              <div>
                <strong>Dedicated</strong>
                <span>Support</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;