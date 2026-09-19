import { useEffect, useRef } from "react";

function Deals() {

    const sliderRef = useRef(null);

    const products = [
        {
            name: "Patient Monitor",
            category: "Monitoring Equipment",
            price: "Request Quote"
        },
        {
            name: "Operating Table",
            category: "OT Equipment",
            price: "Request Quote"
        },
        {
            name: "Surgical Light",
            category: "OT Equipment",
            price: "Request Quote"
        },
        {
            name: "Ventilator",
            category: "ICU Equipment",
            price: "Request Quote"
        },
        {
            name: "Infusion Pump",
            category: "ICU Equipment",
            price: "Request Quote"
        },
        {
            name: "ECG Machine",
            category: "Diagnostic Equipment",
            price: "Request Quote"
        }
    ];

    useEffect(() => {

        const slider = sliderRef.current;

        if (!slider) return;

        const interval = setInterval(() => {

            slider.scrollLeft += 305;

            if (
                slider.scrollLeft + slider.clientWidth
                >= slider.scrollWidth
            ) {
                slider.scrollLeft = 0;
            }

        }, 2000);

        return () => clearInterval(interval);

    }, []);

    return (
        <section id="deals" className="deals">

            <div className="section-heading">

                <p className="section-tag">
                    SPECIAL DEALS
                </p>

                <h2>
                    Top Sellers
                </h2>

                <p>
                    Explore some of our popular healthcare
                    equipment and solutions.
                </p>

            </div>

            <div
                className="top-sellers-grid"
                ref={sliderRef}
            >

                {products.map((product, index) => (

                    <div
                        className="seller-card"
                        key={index}
                    >

                        <div className="product-image">
                            <span>
                                Medical Equipment
                            </span>
                        </div>

                        <div className="product-info">

                            <p className="product-category">
                                {product.category}
                            </p>

                            <h3>
                                {product.name}
                            </h3>

                            <p className="product-price">
                                {product.price}
                            </p>
<button
    onClick={() => {
        document
            .getElementById("contact")
            .scrollIntoView({
                behavior: "smooth"
            });
    }}
>
    Request Quote
</button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Deals;