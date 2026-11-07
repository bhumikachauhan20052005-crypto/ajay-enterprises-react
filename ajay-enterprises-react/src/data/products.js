
// PRODUCT IMAGE IMPORTS

import astral100Image from "../assets/ventilators/astral100-1.webp";
import astral150Image from "../assets/ventilators/astral150-1.png";

import astral150Image1 from "../assets/ventilators/astral150-1.png";
import astral150Image2 from "../assets/ventilators/astral150-2.png";
import astral150Image3 from "../assets/ventilators/astral150-3.png";

import astral100Image1 from "../assets/ventilators/astral100-1.webp";
import astral100Image2 from "../assets/ventilators/astral100-2.webp";
import astral100Image3 from "../assets/ventilators/astral100-3.webp";

import trilogy1 from "../assets/ventilators/trilogy-ev300-1.png";
import trilogy2 from "../assets/ventilators/trilogy-ev300-2.png";
import trilogy3 from "../assets/ventilators/trilogy-ev300-3.png";

import trilogy100Image1 from "../assets/ventilators/trilogy100-1.png";

import trilogy202Image1 from "../assets/ventilators/trilogy202-1.png";
import trilogy202Image2 from "../assets/ventilators/trilogy202-2.png";

import servoNImage1 from "../assets/ventilators/servo-n-1.png";
import servoNImage2 from "../assets/ventilators/servo-n-2.png";

import servoi1 from "../assets/ventilators/servoi.1.png";
import servoi2 from "../assets/ventilators/servoi.2.png";
import servoi3 from "../assets/ventilators/servoi.3.png";

import geDash4000Image from "../assets/patientmonitor/GE Dash 4000 Patient Monitor.png";

import contecCMS8500Image1 from "../assets/patientmonitor/Contec CMS 8500 Patient Monitor 5 Parameter1.png";
import contecCMS8500Image2 from "../assets/patientmonitor/Contec CMS 8500 Patient Monitor 5 Parameter2.png";
import contecCMS8500Image3 from "../assets/patientmonitor/Contec CMS 8500 Patient Monitor 5 Parameter3.png";
import contecCMS8500Image4 from "../assets/patientmonitor/Contec CMS 8500 Patient Monitor 5 Parameter4.png";
import contecCMS8500Image5 from "../assets/patientmonitor/Contec CMS 8500 Patient Monitor 5 Parameter5.png";

import contecCMS8000Image1 from "../assets/patientmonitor/Contec CMS 8000 Patient Monitor  5 Parameter 1.png";
import contecCMS8000Image2 from "../assets/patientmonitor/Contec CMS 8000 Patient Monitor  5 Parameter 2.png";
import contecCMS8000Image3 from "../assets/patientmonitor/Contec CMS 8000 Patient Monitor  5 Parameter 3.png";

import contecCMS5100Image1 from "../assets/patientmonitor/Contec CMS 5100 Patient Monitor 3 Parameter1.png";
import contecCMS5100Image2 from "../assets/patientmonitor/Contec CMS 5100 Patient Monitor 3 Parameter2.png";
import contecCMS5100Image3 from "../assets/patientmonitor/Contec CMS 5100 Patient Monitor 3 Parameter3.png";
import contecCMS5100Image4 from "../assets/patientmonitor/Contec CMS 5100 Patient Monitor 3 Parameter4.png";


// CATEGORY IMAGES USED BY RESTORED PRODUCTS
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


// ==========================================
// PRODUCTS
// ==========================================

const products = {

  // ==========================================
  // VENTILATORS
  // ==========================================

  Ventilators: [
    {
      name: "ResMed Astral 100",
      brand: "ResMed",
      image: astral100Image,
      images: [
        astral100Image1,
        astral100Image2,
        astral100Image3,
      ],
      price: "Price on Request",
      description:
        "A versatile life-support ventilator designed for reliable respiratory support.",
      quality:
        "High-quality medical equipment designed for professional healthcare environments.",
      features: [
        "Portable and lightweight design",
        "Reliable respiratory support",
        "Easy-to-use interface",
        "Suitable for hospital and home care",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },

    {
      name: "ResMed Astral 150",
      brand: "ResMed",
      image: astral150Image,
      images: [
        astral150Image1,
        astral150Image2,
        astral150Image3,
      ],
      price: "Price on Request",
      description:
        "An advanced life-support ventilator offering flexible respiratory care solutions.",
      quality:
        "Professional-grade medical equipment built for dependable respiratory support.",
      features: [
        "Advanced ventilation modes",
        "Portable design",
        "User-friendly interface",
        "Suitable for multiple care environments",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },

    {
      name: "Trilogy EV300",
      brand: "Philips",
      image: trilogy1,
      images: [
        trilogy1,
        trilogy2,
        trilogy3,
      ],
      price: "Price on Request",
      description:
        "A versatile ventilator designed to support a wide range of respiratory care requirements.",
      quality:
        "Professional medical-grade equipment for reliable respiratory support.",
      features: [
        "Advanced respiratory support",
        "Multiple ventilation modes",
        "Intuitive operation",
        "Designed for clinical use",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },

    {
      name: "Trilogy 100",
      brand: "Philips",
      image: trilogy100Image1,
      images: [
        trilogy100Image1,
      ],
      price: "Price on Request",
      description:
        "A portable ventilator designed for dependable respiratory support.",
      quality:
        "Reliable medical equipment suitable for professional healthcare use.",
      features: [
        "Portable design",
        "Multiple therapy options",
        "Easy operation",
        "Reliable performance",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },

    {
      name: "Trilogy 202",
      brand: "Philips",
      image: trilogy202Image1,
      images: [
        trilogy202Image1,
        trilogy202Image2,
      ],
      price: "Price on Request",
      description:
        "A respiratory care ventilator designed for flexible and reliable patient support.",
      quality:
        "High-quality equipment built for dependable clinical performance.",
      features: [
        "Versatile respiratory support",
        "Multiple ventilation options",
        "User-friendly design",
        "Reliable operation",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },

    {
      name: "Servo N",
      brand: "Getinge",
      image: servoNImage1,
      images: [
        servoNImage1,
        servoNImage2,
      ],
      price: "Price on Request",
      description:
        "A neonatal ventilator designed to provide advanced respiratory support.",
      quality:
        "Professional-grade equipment designed for critical healthcare environments.",
      features: [
        "Designed for neonatal care",
        "Advanced respiratory support",
        "Reliable monitoring",
        "Professional clinical use",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },

    {
      name: "Servo-i Ventilator",
      brand: "Getinge",
      image: servoi1,
      images: [
        servoi1,
        servoi2,
        servoi3,
      ],
      price: "Price on Request",
      description:
        "An advanced critical care ventilator designed for professional healthcare facilities.",
      quality:
        "High-performance medical equipment suitable for intensive care environments.",
      features: [
        "Advanced ventilation modes",
        "Suitable for critical care",
        "Intuitive controls",
        "Reliable clinical performance",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },
  ],
  
    // ==========================================
  // PATIENT MONITORS
  // ==========================================

  "Patient Monitors": [
    {
      name: "GE Dash 4000 Patient Monitor",
      brand: "GE Healthcare",
      image: geDash4000Image,
      images: [
        geDash4000Image,
      ],
      price: "Price on Request",
      description:
        "A professional patient monitoring system designed for continuous clinical monitoring.",
      quality:
        "Reliable hospital-grade monitoring equipment.",
      features: [
        "Continuous patient monitoring",
        "Clear clinical display",
        "Reliable performance",
        "Suitable for hospital environments",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },

    {
      name: "Contec CMS 8500 Patient Monitor",
      brand: "Contec",
      image: contecCMS8500Image1,
      images: [
        contecCMS8500Image1,
        contecCMS8500Image2,
        contecCMS8500Image3,
        contecCMS8500Image4,
        contecCMS8500Image5,
      ],
      price: "Price on Request",
      description:
        "A 5-parameter patient monitor designed for efficient clinical monitoring.",
      quality:
        "Reliable medical monitoring equipment for professional healthcare use.",
      features: [
        "5-parameter monitoring",
        "Clear display",
        "Real-time patient data",
        "Suitable for clinical environments",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },

    {
      name: "Contec CMS 8000 Patient Monitor",
      brand: "Contec",
      image: contecCMS8000Image1,
      images: [
        contecCMS8000Image1,
        contecCMS8000Image2,
        contecCMS8000Image3,
      ],
      price: "Price on Request",
      description:
        "A multi-parameter patient monitoring system for healthcare environments.",
      quality:
        "Professional-grade monitoring equipment designed for reliable operation.",
      features: [
        "Multi-parameter monitoring",
        "Real-time patient information",
        "Clear display",
        "Reliable clinical performance",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },

    {
      name: "Contec CMS 5100 Patient Monitor",
      brand: "Contec",
      image: contecCMS5100Image1,
      images: [
        contecCMS5100Image1,
        contecCMS5100Image2,
        contecCMS5100Image3,
        contecCMS5100Image4,
      ],
      price: "Price on Request",
      description:
        "A 3-parameter patient monitor designed for essential patient monitoring requirements.",
      quality:
        "Reliable medical equipment suitable for professional healthcare use.",
      features: [
        "3-parameter monitoring",
        "Real-time patient information",
        "Easy-to-read display",
        "Suitable for clinical use",
      ],
      delivery: "Available across India",
      availability: "Contact us for availability",
    },
  ],


  // ==========================================
  // SHAVER SYSTEMS
  // ==========================================

  "Shaver Systems": [
    {
      brand: "Stryker",
      name: "Stryker Shaver System",
      image: shaverImage,

      images: [
        shaverImage,
        shaverImage,
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
        "Durable construction",
      ],

      delivery: "10–15 business days",

      availability: "Available",
    },

    {
      brand: "Arthrex",
      name: "Arthrex Shaver System",
      image: shaverImage,

      images: [
        shaverImage,
        shaverImage,
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
        "Easy controls",
      ],

      delivery: "10–15 business days",

      availability: "Available",
    },
  ],
    // ==========================================
  // ENDO / LAPRO CAMERAS
  // ==========================================

  "Endo / Lapro Cameras": [

    // KARL STORZ - CAMERA SYSTEMS

    {
      brand: "Karl Storz",
      name: "Karl Storz Image 1 Camera Hub",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Karl Storz endoscopic imaging system. Exact model and configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "Image 1 camera system",
        "Endoscopic imaging",
        "Configuration subject to confirmation"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Karl Storz",
      name: "Karl Storz Telecam System",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Karl Storz Telecam system. Exact model and configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "Telecam system",
        "Endoscopic imaging",
        "Model to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Karl Storz",
      name: "Karl Storz TVI Cam",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "TVI Cam entry based on the supplied product list. Verify the exact model before publishing.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "TVI Cam",
        "Endoscopic camera equipment",
        "Exact model to be verified"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Karl Storz",
      name: "Karl Storz SPIES System",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Karl Storz SPIES imaging system. Exact configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "SPIES imaging system",
        "Endoscopic visualization",
        "Configuration to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Karl Storz",
      name: "Karl Storz RUBINA System",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Karl Storz RUBINA system. Exact model and configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "RUBINA system",
        "Surgical imaging equipment",
        "Configuration to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Karl Storz",
      name: "Karl Storz RUBINA 3D System",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Karl Storz RUBINA 3D system. Exact model and configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "RUBINA 3D system",
        "3D surgical visualization",
        "Configuration to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },


    // STRYKER - CAMERA SYSTEMS

    {
      brand: "Stryker",
      name: "Stryker 1188 Camera System",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Stryker 1188 camera system listed for endoscopic imaging.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "1188 camera system",
        "Endoscopic imaging",
        "Configuration to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Stryker",
      name: "Stryker 1288 Camera System",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Stryker 1288 camera system. Exact model and configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "1288 camera system",
        "Endoscopic imaging",
        "Configuration to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Stryker",
      name: "Stryker 1488 Camera System",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Stryker 1488 camera system. Exact model and configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "1488 camera system",
        "Endoscopic imaging",
        "Configuration to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Stryker",
      name: "Stryker 1588 Camera System",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Stryker 1588 camera system. Exact model and configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "1588 camera system",
        "Endoscopic imaging",
        "Configuration to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Stryker",
      name: "Stryker 1688 Camera System",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Stryker 1688 camera system. Exact model and configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "1688 camera system",
        "Endoscopic imaging",
        "Configuration to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },


    // STRYKER - LIGHT SOURCES

    {
      brand: "Stryker",
      name: "Stryker L10 Light Source",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Stryker L10 light source listed in the supplied product notes. Verify the exact model.",
      quality: "Condition and compatibility to be confirmed.",
      features: [
        "L10 light source",
        "Endoscopic illumination",
        "Compatibility to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Stryker",
      name: "Stryker L11 Light Source",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Stryker L11 light source listed in the supplied product notes. Verify the exact model.",
      quality: "Condition and compatibility to be confirmed.",
      features: [
        "L11 light source",
        "Endoscopic illumination",
        "Compatibility to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },


    // OLYMPUS - CAMERA PROCESSORS

    {
      brand: "Olympus",
      name: "Olympus CV-70 Camera Processor",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Olympus CV-70 endoscopic video processor. Exact configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "CV-70 video processor",
        "Endoscopic imaging",
        "Compatibility to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Olympus",
      name: "Olympus CV-120 Camera Processor",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Olympus CV-120 endoscopic video processor. Exact configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "CV-120 video processor",
        "Endoscopic imaging",
        "Compatibility to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Olympus",
      name: "Olympus CV-150 Camera Processor",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Olympus CV-150 endoscopic video processor. Exact configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "CV-150 video processor",
        "Endoscopic imaging",
        "Compatibility to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Olympus",
      name: "Olympus CV-160 Camera Processor",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Olympus CV-160 endoscopic video processor. Exact configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "CV-160 video processor",
        "Endoscopic imaging",
        "Compatibility to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Olympus",
      name: "Olympus CV-170 Camera Processor",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Olympus CV-170 endoscopic video processor. Exact configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "CV-170 video processor",
        "Endoscopic imaging",
        "Compatibility to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Olympus",
      name: "Olympus CV-190 Camera Processor",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Olympus CV-190 endoscopic video processor. Exact configuration to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "CV-190 video processor",
        "Endoscopic imaging",
        "Compatibility to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },

    {
      brand: "Smith & Nephew",
      name: "Smith & Nephew 4K Lens",
      image: laproCameraImage,
      images: [laproCameraImage],
      price: "Contact for Price",
      description:
        "Smith & Nephew 4K surgical imaging lens for endoscopic procedures. Exact model and compatibility to be confirmed.",
      quality: "Condition and configuration to be confirmed.",
      features: [
        "4K surgical imaging",
        "Endoscopic visualization",
        "Lens compatibility to be confirmed"
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability"
    },
  ],

    // ==========================================
  // DEFIBRILLATORS
  // ==========================================

  Defibrillators: [
    {
      brand: "ZOLL",
      name: "ZOLL M Series Defibrillator",
      image: defibrillatorImage,
      images: [defibrillatorImage],
      price: "Contact for Price",
      description:
        "Professional defibrillator and patient monitoring system for clinical environments.",
      quality: "Professional medical equipment.",
      features: [
        "Defibrillation capability",
        "Patient monitoring",
        "Suitable for emergency care",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },

    {
      brand: "ZOLL",
      name: "ZOLL R Series Defibrillator",
      image: defibrillatorImage,
      images: [defibrillatorImage],
      price: "Contact for Price",
      description:
        "Advanced defibrillator designed for professional emergency and critical-care environments.",
      quality: "Professional medical equipment.",
      features: [
        "Advanced defibrillation",
        "Patient monitoring",
        "Emergency care support",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },

    {
      brand: "Philips",
      name: "Philips HeartStart XL Defibrillator",
      image: defibrillatorImage,
      images: [defibrillatorImage],
      price: "Contact for Price",
      description:
        "Professional defibrillator and monitoring system for hospital and emergency applications.",
      quality: "Professional medical equipment.",
      features: [
        "Defibrillation",
        "Patient monitoring",
        "Clinical use",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },

    {
      brand: "Physio-Control",
      name: "LIFEPAK 20 Defibrillator",
      image: defibrillatorImage,
      images: [defibrillatorImage],
      price: "Contact for Price",
      description:
        "Defibrillator and patient monitoring equipment for emergency medical environments.",
      quality: "Professional medical equipment.",
      features: [
        "Defibrillation support",
        "Patient monitoring",
        "Emergency care use",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },
  ],


  // ==========================================
  // BIPAP / CPAP
  // ==========================================

  "BiPAP / CPAP": [
    {
      brand: "ResMed",
      name: "ResMed AirCurve BiPAP",
      image: bipapImage,
      images: [bipapImage],
      price: "Contact for Price",
      description:
        "Non-invasive respiratory support device designed for professional respiratory care.",
      quality: "Reliable respiratory care equipment.",
      features: [
        "Bi-level pressure support",
        "Non-invasive ventilation",
        "User-friendly operation",
      ],
      delivery: "Available across India",
      availability: "Enquire for Availability",
    },

    {
      brand: "ResMed",
      name: "ResMed AirSense CPAP",
      image: bipapImage,
      images: [bipapImage],
      price: "Contact for Price",
      description:
        "CPAP therapy device designed to provide continuous positive airway pressure support.",
      quality: "Reliable respiratory care equipment.",
      features: [
        "Continuous pressure support",
        "Compact design",
        "Easy operation",
      ],
      delivery: "Available across India",
      availability: "Enquire for Availability",
    },

    {
      brand: "Philips",
      name: "Philips DreamStation BiPAP",
      image: bipapImage,
      images: [bipapImage],
      price: "Contact for Price",
      description:
        "BiPAP respiratory support system designed for dependable non-invasive ventilation.",
      quality: "Professional respiratory care equipment.",
      features: [
        "Bi-level therapy",
        "Respiratory support",
        "User-friendly controls",
      ],
      delivery: "Available across India",
      availability: "Enquire for Availability",
    },

    {
      brand: "Philips",
      name: "Philips DreamStation CPAP",
      image: bipapImage,
      images: [bipapImage],
      price: "Contact for Price",
      description:
        "CPAP therapy equipment for continuous positive airway pressure support.",
      quality: "Reliable respiratory therapy equipment.",
      features: [
        "CPAP therapy",
        "Compact design",
        "Easy operation",
      ],
      delivery: "Available across India",
      availability: "Enquire for Availability",
    },
  ],


  // ==========================================
  // SYRINGE / INFUSION PUMPS
  // ==========================================

  "Syringe / Infusion Pumps": [
    {
      brand: "B Braun",
      name: "B Braun Perfusor Syringe Pump",
      image: infusionPumpImage,
      images: [infusionPumpImage],
      price: "Contact for Price",
      description:
        "Professional syringe infusion pump designed for controlled medication delivery.",
      quality: "Professional-grade infusion equipment.",
      features: [
        "Controlled infusion",
        "Accurate delivery",
        "Clinical use",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },

    {
      brand: "B Braun",
      name: "B Braun Infusomat Infusion Pump",
      image: infusionPumpImage,
      images: [infusionPumpImage],
      price: "Contact for Price",
      description:
        "Infusion pump designed for controlled and reliable fluid administration.",
      quality: "Professional-grade medical equipment.",
      features: [
        "Controlled fluid delivery",
        "Reliable operation",
        "Suitable for clinical environments",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },

    {
      brand: "Fresenius Kabi",
      name: "Fresenius Kabi Agilia Syringe Pump",
      image: infusionPumpImage,
      images: [infusionPumpImage],
      price: "Contact for Price",
      description:
        "Professional syringe pump for controlled infusion applications.",
      quality: "Reliable clinical infusion equipment.",
      features: [
        "Accurate syringe infusion",
        "Controlled delivery",
        "Clinical use",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },

    {
      brand: "Fresenius Kabi",
      name: "Fresenius Kabi Volumat Infusion Pump",
      image: infusionPumpImage,
      images: [infusionPumpImage],
      price: "Contact for Price",
      description:
        "Professional infusion pump designed for controlled fluid administration.",
      quality: "Reliable professional medical equipment.",
      features: [
        "Controlled infusion",
        "Reliable performance",
        "Clinical use",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },
  ],
    // ==========================================
  // PULSE OXIMETERS
  // ==========================================

  "Pulse Oximeters": [
    {
      brand: "Masimo",
      name: "Masimo Radical-7 Pulse Oximeter",
      image: pulseoximeterImage,
      images: [pulseoximeterImage],
      price: "Contact for Price",
      description:
        "Professional pulse oximeter designed for continuous monitoring of oxygen saturation and pulse rate.",
      quality: "Professional patient monitoring equipment.",
      features: [
        "SpO2 monitoring",
        "Pulse rate monitoring",
        "Clear clinical display",
      ],
      delivery: "Available across India",
      availability: "Enquire for Availability",
    },

    {
      brand: "Masimo",
      name: "Masimo Radical-7 Rainbow SET",
      image: pulseoximeterImage,
      images: [pulseoximeterImage],
      price: "Contact for Price",
      description:
        "Advanced pulse oximetry monitoring system for professional healthcare environments.",
      quality: "Professional medical monitoring equipment.",
      features: [
        "Advanced SpO2 monitoring",
        "Real-time patient data",
        "Clinical monitoring",
      ],
      delivery: "Available across India",
      availability: "Enquire for Availability",
    },

    {
      brand: "Nellcor",
      name: "Nellcor N-600x Pulse Oximeter",
      image: pulseoximeterImage,
      images: [pulseoximeterImage],
      price: "Contact for Price",
      description:
        "Professional bedside pulse oximeter for continuous patient monitoring.",
      quality: "Reliable patient monitoring equipment.",
      features: [
        "SpO2 monitoring",
        "Pulse rate monitoring",
        "Bedside monitoring",
      ],
      delivery: "Available across India",
      availability: "Enquire for Availability",
    },

    {
      brand: "Contec",
      name: "Contec CMS50D Pulse Oximeter",
      image: pulseoximeterImage,
      images: [pulseoximeterImage],
      price: "Contact for Price",
      description:
        "Compact pulse oximeter for monitoring oxygen saturation and pulse rate.",
      quality: "Reliable medical monitoring equipment.",
      features: [
        "SpO2 monitoring",
        "Pulse rate display",
        "Compact design",
      ],
      delivery: "Available across India",
      availability: "Enquire for Availability",
    },
  ],


  // ==========================================
  // FETAL MONITORS
  // ==========================================

  "Fetal Monitors": [
    {
      brand: "GE Healthcare",
      name: "GE Corometrics Fetal Monitor",
      image: fetalMonitorImage,
      images: [fetalMonitorImage],
      price: "Contact for Price",
      description:
        "Professional fetal monitoring system designed for obstetric care environments.",
      quality: "Professional-grade fetal monitoring equipment.",
      features: [
        "Fetal heart monitoring",
        "Maternal monitoring support",
        "Clinical display",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },

    {
      brand: "Philips",
      name: "Philips Avalon Fetal Monitor",
      image: fetalMonitorImage,
      images: [fetalMonitorImage],
      price: "Contact for Price",
      description:
        "Advanced fetal monitoring system for professional obstetric care.",
      quality: "Professional healthcare equipment.",
      features: [
        "Fetal monitoring",
        "Maternal monitoring",
        "Clinical use",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },

    {
      brand: "Bionet",
      name: "Bionet FC 1400 Fetal Monitor",
      image: fetalMonitorImage,
      images: [fetalMonitorImage],
      price: "Contact for Price",
      description:
        "Fetal monitoring system designed for reliable obstetric monitoring.",
      quality: "Reliable professional medical equipment.",
      features: [
        "Fetal heart monitoring",
        "Clinical display",
        "Easy operation",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },
  ],


  // ==========================================
  // ECG MACHINES
  // ==========================================

  "ECG Machines": [
    {
      brand: "GE Healthcare",
      name: "GE MAC 1200 ECG Machine",
      image: ecgImage,
      images: [ecgImage],
      price: "Contact for Price",
      description:
        "Professional ECG machine designed for reliable cardiac monitoring and recording.",
      quality: "Professional diagnostic medical equipment.",
      features: [
        "Multi-channel ECG",
        "Cardiac monitoring",
        "Clinical recording",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },

    {
      brand: "GE Healthcare",
      name: "GE MAC 2000 ECG Machine",
      image: ecgImage,
      images: [ecgImage],
      price: "Contact for Price",
      description:
        "Advanced ECG system designed for professional cardiac diagnostics.",
      quality: "Reliable professional diagnostic equipment.",
      features: [
        "Advanced ECG recording",
        "Clinical diagnostics",
        "Clear display",
      ],
      delivery: "Confirm with supplier",
      availability: "Enquire for Availability",
    },

    {
      brand: "BPL",
      name: "BPL Cardiart ECG Machine",
      image: ecgImage,
      images: [ecgImage],
      price: "Contact for Price",
      description:
        "Professional ECG machine designed for routine cardiac examination and recording.",
      quality: "Reliable diagnostic medical equipment.",
      features: [
        "ECG recording",
        "Cardiac monitoring",
        "Clinical use",
      ],
      delivery: "Available across India",
      availability: "Enquire for Availability",
    },

    {
      brand: "Contec",
      name: "Contec ECG Machine",
      image: ecgImage,
      images: [ecgImage],
      price: "Contact for Price",
      description:
        "Professional ECG system designed for cardiac monitoring and diagnostic recording.",
      quality: "Reliable medical diagnostic equipment.",
      features: [
        "ECG monitoring",
        "Cardiac recording",
        "Professional use",
      ],
      delivery: "Available across India",
      availability: "Enquire for Availability",
    },
  ],
};

export default products;