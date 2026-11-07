import { useState } from "react";


function ProductDetails({ product, onBack }) {
    const [selectedImage, setSelectedImage] = useState(
        product.images?.[0] || product.image
    );

    if (!product) return null;

    const images = product.images || [product.image];

    return (
        <section className="product-details-page">

            <button className="back-btn" onClick={onBack}>
                ← Back to Products
            </button>

            <div className="product-details-container">

                {/* LEFT SIDE - IMAGES */}
                <div className="product-gallery">

                    <div className="main-product-image">
                        <img
                            src={selectedImage}
                            alt={product.name}
                        />
                    </div>

                    {images.length > 1 && (
                        <div className="thumbnail-images">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${product.name} ${index + 1}`}
                                    className={
                                        selectedImage === image
                                            ? "active-thumbnail"
                                            : ""
                                    }
                                    onClick={() => setSelectedImage(image)}
                                />
                            ))}
                        </div>
                    )}

                </div>

                {/* RIGHT SIDE - PRODUCT INFO */}
                <div className="product-info">

                    <p className="product-brand">
                        {product.brand}
                    </p>

                    <h1>{product.name}</h1>

                    <p className="product-category">
                        {product.category}
                    </p>

                    <h3>Price on Request</h3>

                    <p className="product-description">
                        {product.description ||
                            "High-quality medical equipment available at Ajay Enterprises."}
                    </p>

                    <button
                        className="product-quote-btn"
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({
                                    behavior: "smooth"
                                })
                        }
                    >
                        Request a Quote →
                    </button>

                </div>

            </div>

        </section>
    );
}

export default ProductDetails;