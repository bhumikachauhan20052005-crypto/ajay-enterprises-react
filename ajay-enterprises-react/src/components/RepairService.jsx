import React from "react";
import "./RepairService.css";

const services = [
  {
    icon: "🔧",
    title: "Equipment Repair",
    description:
      "Professional repair and troubleshooting for medical and surgical equipment to keep your operations running smoothly.",
  },
  {
    icon: "⚙️",
    title: "Preventive Maintenance",
    description:
      "Regular inspection and maintenance to improve equipment reliability and reduce unexpected breakdowns.",
  },
  {
    icon: "🛠️",
    title: "Technical Support",
    description:
      "Expert technical assistance for equipment-related issues, diagnostics and operational support.",
  },
  {
    icon: "🏥",
    title: "Installation & Setup",
    description:
      "Safe installation, configuration and setup of medical equipment at your hospital or healthcare facility.",
  },
  {
    icon: "📋",
    title: "AMC Services",
    description:
      "Annual Maintenance Contract solutions designed to keep your essential medical equipment maintained.",
  },
  {
    icon: "🔄",
    title: "Equipment Refurbishment",
    description:
      "Inspection and refurbishment support to extend the useful life of selected medical equipment.",
  },
];

function RepairService() {
  return (
    <section className="repair-section" id="repair-service">

      <div className="repair-container">

        {/* Heading */}
        <div className="repair-heading">
          <span className="repair-label">REPAIR & SERVICE</span>

          <h2>
            Reliable Service & <span>Technical Support</span>
          </h2>

          <p>
            We provide dependable repair, maintenance and technical support
            services for medical and surgical equipment.
          </p>
        </div>

        {/* Service Cards */}
        <div className="repair-grid">
          {services.map((service, index) => (
            <div className="repair-card" key={index}>

              <div className="repair-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button className="repair-btn">
                Know More <span>→</span>
              </button>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="repair-cta">

          <div>
            <span className="cta-small">NEED TECHNICAL ASSISTANCE?</span>

            <h3>
              Keep Your Medical Equipment
              <br />
              Running Reliably
            </h3>

            <p>
              Contact our team for repair, maintenance or technical support.
            </p>
          </div>

          <button className="service-request-btn">
            Request Service <span>→</span>
          </button>

        </div>

      </div>

    </section>
  );
}

export default RepairService;