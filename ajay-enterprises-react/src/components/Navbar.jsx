import "../Navbar.css";

function Navbar({ searchQuery, onSearch }) {

    function handleSearch(value) {
        onSearch?.(value);
    }

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
                <a href="#solutions">Categories</a>
                <a href="#manufacturers">Manufacturers</a>
                <a href="#services">Repair & Service</a>

                <a
                    href="#deals"
                    className="deals-link"
                >
                    Deals
                </a>

                <a href="#contact">Contact</a>
            </div>

            <div className="navbar-search">

                <span className="search-icon">
                    ⌕
                </span>

                <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) =>
                        handleSearch(e.target.value)
                    }
                    placeholder="Search equipment..."
                    aria-label="Search medical equipment"
                />

                {searchQuery && (
                    <button
                        type="button"
                        className="clear-search"
                        onClick={() => handleSearch("")}
                        aria-label="Clear search"
                    >
                        ×
                    </button>
                )}

            </div>

            <button
                className="quote-btn"
                onClick={() => {
                    document
                        .getElementById("contact")
                        ?.scrollIntoView({
                            behavior: "smooth",
                        });
                }}
            >
                Request a Quote
            </button>

        </nav>
    );
}

export default Navbar;