
import { useState } from "react";
import "../Navbar.css";

function Navbar({ searchQuery, onSearch }) {

    const [menuOpen, setMenuOpen] = useState(false);

    function handleSearch(value) {
        onSearch?.(value);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    function scrollToContact() {
        document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });

        closeMenu();
    }

    return (
        <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>

            <div className="navbar-logo">
                <img
                    src="/ajay-enterprises-logo.jpg"
                    alt="Ajay Enterprises"
                />
            </div>

            {/* MOBILE MENU BUTTON */}

            
<button
    type="button"
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={menuOpen}
    aria-controls="main-navigation"
>
    {menuOpen ? "✕" : "☰"}
</button>


            {/* NAVIGATION LINKS */}

            <div className="nav-links" id="main-navigation">
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About Us</a>
                <a href="#solutions" onClick={closeMenu}>Products</a>
                <a href="#manufacturers" onClick={closeMenu}>Manufacturers</a>
                <a href="#services" onClick={closeMenu}>Repair & Service</a>

                <a
                    href="#deals"
                    className="deals-link"
                    onClick={closeMenu}
                >
                    Deals
                </a>

                <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>

            {/* SEARCH */}

            <div className="navbar-search">

                <span className="search-icon">⌕</span>

                <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
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

            {/* QUOTE BUTTON */}

            <button
                className="quote-btn"
                onClick={scrollToContact}
            >
                Request a Quote
            </button>

        </nav>
    );
}

export default Navbar;
