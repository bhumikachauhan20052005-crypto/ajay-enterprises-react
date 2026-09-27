import React, { useState } from "react";

import ventilatorImage from "../assets/ventilatorImage.jpg";
import ecgImage from "../assets/ecg.jpg";
import fetalMonitorImage from "../assets/fetalmonitor.jpg";
import defibrillatorImage from "../assets/defibrillator.jpg";
import bipapImage from "../assets/BiPAPCPAP.jpg";
import patientMonitorImage from "../assets/PatientMonitor.jpg";
import pulseoximeterImage from "../assets/pulseoximeter.jpg";
import infusionPumpImage from "../assets/SyringeInfusion Pump.jpg";
import laproCameraImage from "../assets/Laparoscopy-Thumb.jpg";
import shaverImage from "../assets/shaversystem.jpg";

function Solutions() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);


  // =========================
  // MAIN CATEGORIES
  // =========================

  const categories = [
    {
      name: "Ventilators",
      image: ventilatorImage,
      subcategories: [ ]
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
      image: pulseoximeterImage,
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


  // =========================
  // PRODUCTS
  // =========================

  const products = {

    // -------------------------
    // VENTILATORS
    // -------------------------

    "Ventilators": [

      {
        brand: "Philips",
        name: "Philips Ventilator",
        image: ventilatorImage,

        images: [
          ventilatorImage,
          ventilatorImage,
          ventilatorImage
        ],

        price: "₹1,25,000",

        description:
          "Advanced ventilator system designed for critical care and respiratory support.",

        quality:
          "Hospital-grade equipment with reliable performance and durable construction.",

        features: [
          "Multiple ventilation modes",
          "Clear digital display",
          "Patient monitoring support",
          "Easy-to-use interface"
        ],

        delivery: "7–10 business days",

        availability: "Available"
      },


      {
        brand: "Dräger",
        name: "Dräger ICU Ventilator",
        image: ventilatorImage,

        images: [
          ventilatorImage,
          ventilatorImage,
          ventilatorImage
        ],

        price: "₹2,10,000",

        description:
          "ICU-grade ventilator designed for controlled and assisted ventilation in critical care environments.",

        quality:
          "Professional medical equipment designed for continuous hospital use.",

        features: [
          "Advanced ventilation modes",
          "Digital monitoring",
          "User-friendly interface",
          "ICU suitable design"
        ],

        delivery: "10–15 business days",

        availability: "Available"
      },


      {
        brand: "Hamilton",
        name: "Hamilton Medical Ventilator",
        image: ventilatorImage,

        images: [
          ventilatorImage,
          ventilatorImage,
          ventilatorImage
        ],

        price: "₹2,50,000",

        description:
          "High-performance medical ventilator designed for intensive care applications.",

        quality:
          "High-quality professional equipment suitable for demanding clinical environments.",

        features: [
          "Advanced ventilation support",
          "Multiple operating modes",
          "Digital display",
          "Easy controls"
        ],

        delivery: "10–15 business days",

        availability: "Available"
      },


      {
        brand: "Mindray",
        name: "Mindray Ventilator",
        image: ventilatorImage,

        images: [
          ventilatorImage,
          ventilatorImage,
          ventilatorImage
        ],

        price: "₹1,80,000",

        description:
          "Modern ventilator system suitable for hospital and critical-care environments.",

        quality:
          "Reliable medical equipment with durable construction.",

        features: [
          "Multiple ventilation modes",
          "Large display",
          "Patient monitoring",
          "Simple controls"
        ],

        delivery: "7–12 business days",

        availability: "Available"
      },


      {
        brand: "Medtronic",
        name: "Medtronic Ventilator",
        image: ventilatorImage,

        images: [
          ventilatorImage,
          ventilatorImage,
          ventilatorImage
        ],

        price: "₹2,20,000",

        description:
          "Professional respiratory support system designed for clinical environments.",

        quality:
          "Hospital-grade construction designed for dependable performance.",

        features: [
          "Advanced respiratory support",
          "Multiple modes",
          "Digital monitoring",
          "Clinical controls"
        ],

        delivery: "10–15 business days",

        availability: "Available"
      },


      {
        brand: "Getinge",
        name: "Getinge Ventilator",
        image: ventilatorImage,

        images: [
          ventilatorImage,
          ventilatorImage,
          ventilatorImage
        ],

        price: "₹2,40,000",

        description:
          "Professional ventilator designed for critical care and intensive care applications.",

        quality:
          "Premium hospital equipment designed for demanding clinical environments.",

        features: [
          "Advanced ventilation",
          "Digital display",
          "Multiple operating modes",
          "Patient monitoring"
        ],

        delivery: "10–15 business days",

        availability: "Available"
      }

    ],


    // -------------------------
    // ECG
    // -------------------------

    "ECG Machines": [

      {
        brand: "Philips",
        name: "Philips ECG Machine",
        image: ecgImage,

        images: [
          ecgImage,
          ecgImage,
          ecgImage
        ],

        price: "₹65,000",

        description:
          "Professional ECG machine designed for accurate cardiac monitoring and clinical diagnosis.",

        quality:
          "Reliable hospital-grade diagnostic equipment.",

        features: [
          "High-resolution display",
          "12-lead ECG",
          "Easy operation",
          "Compact design"
        ],

        delivery: "5–8 business days",

        availability: "Available"
      },


      {
        brand: "GE Healthcare",
        name: "GE Healthcare ECG Machine",
        image: ecgImage,

        images: [
          ecgImage,
          ecgImage,
          ecgImage
        ],

        price: "₹85,000",

        description:
          "Advanced ECG system designed for reliable cardiac monitoring.",

        quality:
          "Professional diagnostic equipment suitable for hospitals and clinics.",

        features: [
          "12-lead ECG",
          "Digital display",
          "Data storage",
          "Easy operation"
        ],

        delivery: "7–10 business days",

        availability: "Available"
      },


      {
        brand: "Schiller",
        name: "Schiller ECG Machine",
        image: ecgImage,

        images: [
          ecgImage,
          ecgImage,
          ecgImage
        ],

        price: "₹72,000",

        description:
          "Compact ECG system designed for efficient cardiac examinations.",

        quality:
          "Professional diagnostic equipment with durable construction.",

        features: [
          "12-lead ECG",
          "Portable design",
          "Digital recording",
          "Easy controls"
        ],

        delivery: "5–8 business days",

        availability: "Available"
      },


      {
        brand: "BPL",
        name: "BPL ECG Machine",
        image: ecgImage,

        images: [
          ecgImage,
          ecgImage,
          ecgImage
        ],

        price: "₹45,000",

        description:
          "Reliable ECG machine designed for clinics and healthcare facilities.",

        quality:
          "Durable and practical medical diagnostic equipment.",

        features: [
          "12-lead ECG",
          "Compact design",
          "Digital display",
          "Easy operation"
        ],

        delivery: "5–7 business days",

        availability: "Available"
      },


      {
        brand: "Nihon Kohden",
        name: "Nihon Kohden ECG Machine",
        image: ecgImage,

        images: [
          ecgImage,
          ecgImage,
          ecgImage
        ],

        price: "₹90,000",

        description:
          "Advanced ECG system for professional cardiac monitoring.",

        quality:
          "Hospital-grade diagnostic equipment.",

        features: [
          "12-lead ECG",
          "High-quality recording",
          "Digital display",
          "Data management"
        ],

        delivery: "7–12 business days",

        availability: "Available"
      }

    ],


    // -------------------------
    // PATIENT MONITORS
    // -------------------------

    "Patient Monitors": [

      {
        brand: "Philips",
        name: "Philips Patient Monitor",
        image: patientMonitorImage,

        images: [
          patientMonitorImage,
          patientMonitorImage
        ],

        price: "₹95,000",

        description:
          "Patient monitoring system designed for continuous monitoring in clinical environments.",

        quality:
          "Hospital-grade monitoring equipment.",

        features: [
          "ECG monitoring",
          "SpO2 monitoring",
          "Blood pressure monitoring",
          "Large digital display"
        ],

        delivery: "7–10 business days",

        availability: "Available"
      },


      {
        brand: "Mindray",
        name: "Mindray Patient Monitor",
        image: patientMonitorImage,

        images: [
          patientMonitorImage,
          patientMonitorImage
        ],

        price: "₹80,000",

        description:
          "Multi-parameter patient monitoring system for hospitals and clinics.",

        quality:
          "Reliable medical monitoring equipment.",

        features: [
          "ECG",
          "SpO2",
          "NIBP",
          "Temperature monitoring"
        ],

        delivery: "7–10 business days",

        availability: "Available"
      }

    ],


    // -------------------------
    // DEFIBRILLATORS
    // -------------------------

    "Defibrillators": [

      {
        brand: "Philips",
        name: "Philips Defibrillator",
        image: defibrillatorImage,

        images: [
          defibrillatorImage,
          defibrillatorImage
        ],

        price: "₹1,50,000",

        description:
          "Professional defibrillator designed for emergency cardiac care.",

        quality:
          "Hospital-grade emergency medical equipment.",

        features: [
          "Defibrillation",
          "ECG monitoring",
          "Digital display",
          "Portable design"
        ],

        delivery: "7–12 business days",

        availability: "Available"
      },


      {
        brand: "Mindray",
        name: "Mindray Defibrillator",
        image: defibrillatorImage,

        images: [
          defibrillatorImage,
          defibrillatorImage
        ],

        price: "₹1,35,000",

        description:
          "Emergency cardiac care device designed for clinical environments.",

        quality:
          "Reliable professional emergency equipment.",

        features: [
          "Defibrillation",
          "ECG monitoring",
          "Battery operation",
          "Digital display"
        ],

        delivery: "7–10 business days",

        availability: "Available"
      }

    ],


    // -------------------------
    // PULSE OXIMETERS
    // -------------------------

    "Pulse Oximeters": [

      {
        brand: "BPL",
        name: "BPL Pulse Oximeter",
        image: pulseoximeterImage,

        images: [
          pulseoximeterImage,
          pulseoximeterImage
        ],

        price: "₹2,500",

        description:
          "Compact pulse oximeter designed for measuring oxygen saturation and pulse rate.",

        quality:
          "Reliable and lightweight monitoring device.",

        features: [
          "SpO2 measurement",
          "Pulse rate measurement",
          "Portable design",
          "Digital display"
        ],

        delivery: "3–5 business days",

        availability: "Available"
      },


      {
        brand: "Mindray",
        name: "Mindray Pulse Oximeter",
        image: pulseoximeterImage,

        images: [
          pulseoximeterImage,
          pulseoximeterImage
        ],

        price: "₹4,000",

        description:
          "Professional pulse oximetry device for healthcare monitoring.",

        quality:
          "Durable professional monitoring equipment.",

        features: [
          "SpO2 monitoring",
          "Pulse rate",
          "Digital display",
          "Portable design"
        ],

        delivery: "3–7 business days",

        availability: "Available"
      }

    ],


    // -------------------------
    // FETAL MONITORS
    // -------------------------

    "Fetal Monitors": [

      {
        brand: "Philips",
        name: "Philips Fetal Monitor",
        image: fetalMonitorImage,

        images: [
          fetalMonitorImage,
          fetalMonitorImage
        ],

        price: "₹1,10,000",

        description:
          "Fetal monitoring system designed for maternal and fetal monitoring.",

        quality:
          "Professional obstetric monitoring equipment.",

        features: [
          "Fetal heart rate monitoring",
          "Maternal monitoring",
          "Digital display",
          "Data recording"
        ],

        delivery: "7–12 business days",

        availability: "Available"
      },


      {
        brand: "GE Healthcare",
        name: "GE Fetal Monitor",
        image: fetalMonitorImage,

        images: [
          fetalMonitorImage,
          fetalMonitorImage
        ],

        price: "₹1,25,000",

        description:
          "Advanced fetal monitoring equipment designed for clinical use.",

        quality:
          "Hospital-grade fetal monitoring system.",

        features: [
          "Fetal heart rate",
          "Maternal monitoring",
          "Digital display",
          "Data recording"
        ],

        delivery: "7–12 business days",

        availability: "Available"
      }

    ],


    // -------------------------
    // BIPAP / CPAP
    // -------------------------

    "BiPAP / CPAP": [

      {
        brand: "Philips",
        name: "Philips BiPAP / CPAP",
        image: bipapImage,

        images: [
          bipapImage,
          bipapImage
        ],

        price: "₹55,000",

        description:
          "Respiratory support system designed for non-invasive ventilation.",

        quality:
          "Professional respiratory care equipment.",

        features: [
          "BiPAP support",
          "CPAP support",
          "Digital display",
          "Compact design"
        ],

        delivery: "5–10 business days",

        availability: "Available"
      },


      {
        brand: "ResMed",
        name: "ResMed CPAP",
        image: bipapImage,

        images: [
          bipapImage,
          bipapImage
        ],

        price: "₹48,000",

        description:
          "CPAP system designed to provide continuous positive airway pressure.",

        quality:
          "Reliable respiratory care equipment.",

        features: [
          "CPAP therapy",
          "Digital controls",
          "Compact design",
          "Easy operation"
        ],

        delivery: "5–8 business days",

        availability: "Available"
      }

    ],


    // -------------------------
    // SHAVER SYSTEMS
    // -------------------------

    "Shaver Systems": [

      {
        brand: "Stryker",
        name: "Stryker Shaver System",
        image: shaverImage,

        images: [
          shaverImage,
          shaverImage
        ],

        price: "₹2,00,000",

        description:
          "Professional surgical shaver system designed for orthopedic and arthroscopic procedures.",

        quality:
          "Professional surgical equipment designed for clinical environments.",

        features: [
          "High-speed operation",
          "Precision control",
          "Multiple attachments",
          "Durable construction"
        ],

        delivery: "10–15 business days",

        availability: "Available"
      },


      {
        brand: "Arthrex",
        name: "Arthrex Shaver System",
        image: shaverImage,

        images: [
          shaverImage,
          shaverImage
        ],

        price: "₹2,20,000",

        description:
          "Advanced surgical shaver system for orthopedic procedures.",

        quality:
          "Professional surgical equipment.",

        features: [
          "Precision control",
          "Multiple attachments",
          "High-speed operation",
          "Easy controls"
        ],

        delivery: "10–15 business days",

        availability: "Available"
      }

    ],


    // -------------------------
    // LAPRO CAMERAS
    // -------------------------

    "Endo / Lapro Cameras": [

      {
        brand: "Karl Storz",
        name: "Karl Storz Laparoscopy Camera",
        image: laproCameraImage,

        images: [
          laproCameraImage,
          laproCameraImage
        ],

        price: "₹3,50,000",

        description:
          "Professional laparoscopic imaging system designed for minimally invasive procedures.",

        quality:
          "High-quality surgical imaging equipment.",

        features: [
          "High-resolution imaging",
          "Clear visualization",
          "Digital processing",
          "Professional surgical use"
        ],

        delivery: "10–20 business days",

        availability: "Available"
      },


      {
        brand: "Olympus",
        name: "Olympus Endoscopy Camera",
        image: laproCameraImage,

        images: [
          laproCameraImage,
          laproCameraImage
        ],

        price: "₹3,25,000",

        description:
          "Advanced endoscopic imaging system for minimally invasive procedures.",

        quality:
          "Professional medical imaging equipment.",

        features: [
          "High-resolution image",
          "Digital processing",
          "Clear visualization",
          "Surgical application"
        ],

        delivery: "10–20 business days",

        availability: "Available"
      }

    ],


    // -------------------------
    // INFUSION PUMPS
    // -------------------------

    "Syringe / Infusion Pumps": [

      {
        brand: "B. Braun",
        name: "B. Braun Infusion Pump",
        image: infusionPumpImage,

        images: [
          infusionPumpImage,
          infusionPumpImage
        ],

        price: "₹45,000",

        description:
          "Infusion pump designed for controlled delivery of fluids and medications.",

        quality:
          "Professional hospital-grade infusion equipment.",

        features: [
          "Accurate infusion control",
          "Digital display",
          "Alarm system",
          "Easy operation"
        ],

        delivery: "5–10 business days",

        availability: "Available"
      },


      {
        brand: "Baxter",
        name: "Baxter Infusion Pump",
        image: infusionPumpImage,

        images: [
          infusionPumpImage,
          infusionPumpImage
        ],

        price: "₹50,000",

        description:
          "Professional infusion system designed for controlled fluid delivery.",

        quality:
          "Reliable medical infusion equipment.",

        features: [
          "Accurate flow control",
          "Digital display",
          "Safety alarms",
          "Easy operation"
        ],

        delivery: "5–10 business days",

        availability: "Available"
      }

    ]

  };


  // =========================================================
  // PRODUCT DETAIL PAGE
  // =========================================================

  if (selectedProduct) {

    const productImages =
      selectedProduct.images || [selectedProduct.image];

    return (

      <section className="solutions" id="solutions">

        <div className="solutions-heading">

          <button
            onClick={() => {
              setSelectedProduct(null);
              setSelectedImage(null);
            }}
            className="back-button"
          >
            ← Back to Products
          </button>

        </div>


        <div className="product-details-card">


          {/* IMAGE SECTION */}

          <div className="product-gallery">

            <div className="main-product-image">

              <img
                src={selectedImage || productImages[0]}
                alt={selectedProduct.name}
              />

            </div>


            <div className="product-thumbnails">

              {productImages.map((image, index) => (

                <img
                  key={index}
                  src={image}
                  alt={`${selectedProduct.name} ${index + 1}`}
                  className="product-thumbnail"
                  onClick={() => setSelectedImage(image)}
                />

              ))}

            </div>

          </div>


          {/* PRODUCT INFORMATION */}

          <div className="product-info">

            <p className="product-brand">
              {selectedProduct.brand}
            </p>


            <h2>
              {selectedProduct.name}
            </h2>


            <h3 className="product-detail-price">
              {selectedProduct.price}
            </h3>


            <div className="product-detail-section">

              <h4>Description</h4>

              <p>
                {selectedProduct.description}
              </p>

            </div>


            <div className="product-detail-section">

              <h4>Product Quality</h4>

              <p>
                {selectedProduct.quality}
              </p>

            </div>


            <div className="product-detail-section">

              <h4>Key Features</h4>

              <ul>

                {selectedProduct.features.map((feature, index) => (

                  <li key={index}>
                    {feature}
                  </li>

                ))}

              </ul>

            </div>


            <div className="product-delivery">

              <div>

                <strong>
                  Delivery
                </strong>

                <p>
                  {selectedProduct.delivery}
                </p>

              </div>


              <div>

                <strong>
                  Availability
                </strong>

                <p>
                  {selectedProduct.availability}
                </p>

              </div>

            </div>


            <button className="enquire-button">
              Enquire Now
            </button>

          </div>

        </div>

      </section>

    );

  }


  // =========================================================
  // CATEGORY PRODUCTS PAGE
  // =========================================================

  if (selectedCategory) {

    const selectedProducts =
      products[selectedCategory] || [];

    return (

      <section className="solutions" id="solutions">


        <div className="solutions-heading">

          <button
            onClick={() => setSelectedCategory(null)}
            className="back-button"
          >
            ← Back to Categories
          </button>


          <h2>
            {selectedCategory}
          </h2>


          <p>
            Explore our range of {selectedCategory}
          </p>

        </div>


        <div className="categories-grid">

          {selectedProducts.map((product, index) => (

            <div
              className="category-card"
              key={index}
            >


              <div className="category-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              <div className="category-content">

                <p className="product-brand">
                  {product.brand}
                </p>


                <h3>
                  {product.name}
                </h3>


                <p className="product-price">
                  {product.price}
                </p>


                <button
                  className="view-products"
                  onClick={() => {
                    setSelectedProduct(product);
                    setSelectedImage(null);
                  }}
                >
                  View Details →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    );

  }


  // =========================================================
  // MAIN CATEGORY PAGE
  // =========================================================

  return (

    <section
      className="solutions"
      id="solutions"
    >


      <div className="solutions-heading">

        <h2>
          Our Solutions
        </h2>

        <p>
          Explore our range of medical equipment
        </p>

      </div>


      <div className="categories-grid">

        {categories.map((category, index) => (

          <div
            className="category-card"
            key={index}
          >


            <div className="category-image">

              <img
                src={category.image}
                alt={category.name}
              />

            </div>


            <div className="category-content">

              <h3>
                {category.name}
              </h3>


              {category.subcategories.length > 0 && (

                <div className="subcategories">

                  {category.subcategories.map(
                    (sub, i) => (

                      <p key={i}>
                        {sub}
                      </p>

                    )
                  )}

                </div>

              )}


              <button
                className="view-products"
                onClick={() =>
                  setSelectedCategory(category.name)
                }
              >
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