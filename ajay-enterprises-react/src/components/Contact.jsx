import { useState } from "react";

function Contact() {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
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

                        <div className="contact-icon">
                            📞
                        </div>

                        <div>
                            <h3>Call Us</h3>
                            <p>+91 XXXXX XXXXX</p>
                        </div>

                    </div>


                    <div className="contact-item">

                        <div className="contact-icon">
                            ✉️
                        </div>

                        <div>
                            <h3>Email Us</h3>
                            <p>info@ajayenterprises.com</p>
                        </div>

                    </div>


                    <div className="contact-item">

                        <div className="contact-icon">
                            📍
                        </div>

                        <div>
                            <h3>Visit Us</h3>
                            <p>New Delhi, India</p>
                        </div>

                    </div>

                </div>

            </div>


            <div className="contact-form">

                <h3>
                    Request a Quote
                </h3>

                <form onSubmit={handleSubmit}>

                    <div className="form-row">

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                        />

                    </div>


                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                    />


                    <input
                        type="text"
                        placeholder="Company / Hospital Name"
                    />


                    <select defaultValue="" required>

                        <option value="" disabled>
                            Select Equipment
                        </option>

                        <option>
                            ICU Equipment
                        </option>

                        <option>
                            OT Equipment
                        </option>

                        <option>
                            NICU Equipment
                        </option>

                        <option>
                            Hospital Equipment
                        </option>

                        <option>
                            Other
                        </option>

                    </select>


                    <textarea
                        rows="5"
                        placeholder="Tell us about your requirements..."
                        required
                    ></textarea>


                    <button type="submit">
                        Send Enquiry
                    </button>


                    {submitted && (
                        <p className="success-message">
                            Your enquiry has been submitted successfully!
                        </p>
                    )}

                </form>

            </div>

        </section>
    );
}

export default Contact;