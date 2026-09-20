
import React from "react";

import ventilatorImage from "../assets/ventilatorImage.jpg";
import ecgImage from "../assets/ecg.jpg";
import fetalMonitorImage from "../assets/fetalmonitor.jpg";
import defibrillatorImage from "../assets/defibrillator.jpg";
import bipapImage from "../assets/BiPAPCPAP.jpg";
import patientMonitorImage from "../assets/PatientMonitor.jpg";
import pulseOximeterImage from "../assets/pulseoximeter.jpg";
import infusionPumpImage from "../assets/SyringeInfusion Pump.jpg";
import laproCameraImage from "../assets/Laparoscopy-Thumb.jpg";
import shaverImage from "../assets/shaversystem.jpg";
function Solutions() {


       
    const categories = [
  {
    name: "Ventilators",
    image: ventilatorImage,
    subcategories: [
      "Transport Ventilators",
      "ICU Ventilators"
    ]
  },

  {
    name: "Shaver Systems",
    image: shaverImage,
    subcategories: []
  },

  {
    name: "Endo / Lapro Cameras",
    image: laproCameraImage,
    subcategories: []
  },

  {
    name: "Patient Monitors",
    image: patientMonitorImage,
    subcategories: []
  },

  {
    name: "Defibrillators",
    image: defibrillatorImage,
    subcategories: []
  },

  {
    name: "BiPAP / CPAP",
    image: bipapImage,
    subcategories: []
  },

  {
    name: "Syringe / Infusion Pumps",
    image: infusionPumpImage,
    subcategories: []
  },

  {
    name: "Pulse Oximeters",
    image: pulseOximeterImage,
    subcategories: []
  },

  {
    name: "Fetal Monitors",
    image: fetalMonitorImage,
    subcategories: []
  },

  {
    name: "ECG Machines",
    image: ecgImage,
    subcategories: []
  }
];
  

  return (
    <section className="solutions" id="solutions">

      <div className="solutions-heading">
        <h2>Our Solutions</h2>
        <p>Explore our range of medical equipment</p>
      </div>

      <div className="categories-grid">

        {categories.map((category, index) => (

          <div className="category-card" key={index}>

            <div className="category-image">
              <img
                src={category.image}
                alt={category.name}
              />
            </div>

            <div className="category-content">

              <h3>{category.name}</h3>

              {category.subcategories.length > 0 && (
                <div className="subcategories">

                  {category.subcategories.map((sub, i) => (
                    <p key={i}>{sub}</p>
                  ))}

                </div>
              )}

              <button className="view-products">
                View Products →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Solutions;