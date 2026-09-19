function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <img
                    src="/ajay-enterprises-logo.jpg"
                    alt="Ajay Enterprises"
                />
            </div>

            <div className="nav-links">

                <a href="#home">Home</a>

                <a href="#about">About Us</a>

                <a href="#solutions">
                    Categories
                </a>

                <a href="#manufacturers">
                    Manufacturers
                </a>

                <a href="#services">
                    Repair & Service
                </a>

                <a
                    href="#deals"
                    className="deals-link"
                >
                    Deals
                </a>

                <a href="#contact">
                    Contact
                </a>

            </div>

          <button
            className="quote-btn"
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

        </nav>
    );
}

export default Navbar;