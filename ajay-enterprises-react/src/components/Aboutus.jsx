function About() {
    return (
        <section id="about" className="about">

            <div className="about-image">
                <img
                    src="/ajay-enterprises-logo.jpg"
                    alt="Ajay Enterprises"
                />
            </div>

            <div className="about-content">

                <p className="about-tag">
                    ABOUT AJAY ENTERPRISES
                </p>

                <h2>
                    Your Trusted Healthcare
                    <span> Equipment Partner</span>
                </h2>

                <p>
                    Ajay Enterprises provides medical and surgical
                    equipment solutions for hospitals, clinics and
                    healthcare facilities.
                </p>

                <p>
                    We focus on providing reliable equipment,
                    professional support and complete healthcare
                    solutions according to customer requirements.
                </p>

                <div className="about-stats">

                    <div className="stat">
                        <h3>10+</h3>
                        <p>Years Experience</p>
                    </div>

                    <div className="stat">
                        <h3>50+</h3>
                        <p>Products</p>
                    </div>

                    <div className="stat">
                        <h3>100+</h3>
                        <p>Clients</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;