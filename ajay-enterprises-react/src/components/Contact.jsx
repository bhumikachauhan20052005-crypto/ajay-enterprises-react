
import "./Contact.css";
import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        equipment: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "919717071038";

        const whatsappMessage = `
Hello Ajay Enterprises!

I want to request a quote for medical equipment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Company / Hospital: ${formData.company}
Equipment Required: ${formData.equipment}

Requirements:
${formData.message}

Please contact me with further details.
        `;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

        setSubmitted(true);
    };

    return (
        <section id="contact" className="contact">

            <div className="contact-content">

                <p className="contact-tag">
                    GET IN TOUCH
                </p>

                <h2>
                    Let's Discuss Your
                    <span> Requirements</span>
                </h2>

                <p className="contact-description">
                    Looking for medical or surgical equipment?
                    Tell us what you need and our team will
                    get back to you.
                </p>

                <div className="contact-details">

                    <div className="contact-item">
                        <div className="contact-icon">📞</div>
                        <div>
                            <h3>Call Us</h3>
                            <p>+91 XXXXX XXXXX</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">✉️</div>
                        <div>
                            <h3>Email Us</h3>
                            <p>info@ajayenterprises.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div>
                            <h3>Visit Us</h3>
                            <p>New Delhi, India</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="contact-form">

                <h3>Request a Quote</h3>

                <form onSubmit={handleSubmit}>

                    <div className="form-row">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="company"
                        placeholder="Company / Hospital Name"
                        value={formData.company}
                        onChange={handleChange}
                    />

                    <select
                        name="equipment"
                        value={formData.equipment}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>
                            Select Equipment
                        </option>

                        <option value="ICU Equipment">ICU Equipment</option>
                        <option value="OT Equipment">OT Equipment</option>
                        <option value="NICU Equipment">NICU Equipment</option>
                        <option value="Hospital Equipment">Hospital Equipment</option>
                        <option value="Other">Other</option>

                    </select>

                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Send Enquiry
                    </button>

                    {submitted && (
                        <p className="success-message">
                            WhatsApp opened! Please send your enquiry to Ajay Enterprises.
                        </p>
                    )}

                </form>

            </div>

        </section>
    );
}

export default Contact;
