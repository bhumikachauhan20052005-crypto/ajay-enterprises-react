import companyBanner from "../assets/company-banner.jpeg";

function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-content">

                <p className="hero-tag">
                    SURGICAL EQUIPMENT SPECIALIST
                </p>

                <h1>
                    Complete Healthcare
                    <span> Solutions</span>
                </h1>

                <p className="hero-description">
                    Providing reliable medical and surgical
                    equipment solutions for hospitals,
                    clinics and healthcare facilities.
                </p>

                <div className="hero-buttons">

                    <button
                      className="primary-btn"
                        onClick={() => {
                            document
                         .getElementById("solutions")
                          .scrollIntoView({
                           behavior: "smooth"
            });
    }}
>
    Explore Solutions
</button>

                    <button
    className="secondary-btn"
    onClick={() => {
        document
            .getElementById("contact")
            .scrollIntoView({
                behavior: "smooth"
            });
    }}
>
    Request a Quote
</button>

                </div>

            </div>


            <div className="hero-image">

                <img
                    src={companyBanner}
                    alt="Ajay Enterprises Medical Equipment"
                />

            </div>

        </section>
    );
}

export default Hero;