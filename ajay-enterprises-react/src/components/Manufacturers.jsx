function Manufacturers() {

    const brands = [
        "STRYKER",
        "STORZ",
        "OLYMPUS",
        "PHILIPS",
        "BPL Medical",
        "Johnson & Johnson"
    ];

    return (
        <section id="manufacturers" className="manufacturers">

            <div className="section-heading">

                <p className="section-tag">
                    OUR MANUFACTURERS
                </p>

                <h2>
                    Brands We Deal In
                </h2>

                <p>
                    We work with trusted healthcare equipment
                    manufacturers and medical brands.
                </p>

            </div>


            <div className="brands-grid">

                {brands.map((brand, index) => (

                    <div
                        className="brand-card"
                        key={index}
                    >
                        {brand}
                    </div>

                ))}

            </div>

        </section>
    );
}

export default Manufacturers;