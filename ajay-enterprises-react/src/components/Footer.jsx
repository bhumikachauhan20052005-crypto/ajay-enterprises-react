function Footer() {
    return (
        <footer className="footer">

            <div className="footer-main">

                <div className="footer-about">

                    <img
                        src="/ajay-enterprises-logo.jpg"
                        alt="Ajay Enterprises"
                    />

                    <p>
                        Providing reliable medical and surgical
                        equipment solutions for hospitals,
                        clinics and healthcare facilities.
                    </p>

                </div>


                <div className="footer-links">

                    <h3>Quick Links</h3>

                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#solutions">Categories</a>
                    <a href="#manufacturers">Manufacturers</a>
                    <a href="#services">Repair & Service</a>
                    <a href="#deals">Deals</a>
                    <a href="#contact">Contact</a>

                </div>


                <div className="footer-contact">

                    <h3>Contact Us</h3>

                    <p>📞 +91 XXXXX XXXXX</p>
                    <p>✉️ info@ajayenterprises.com</p>
                    <p>📍 New Delhi, India</p>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 Ajay Enterprises. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;