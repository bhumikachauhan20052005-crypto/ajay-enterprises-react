
import "./ProductDetails.css";
import { useState, useEffect } from "react";

function ProductDetails({ product, onBack }) {

    const [selectedImage, setSelectedImage] = useState(
        product?.images?.[0] || product?.image
    );

    useEffect(() => {
        setSelectedImage(product?.images?.[0] || product?.image);
    }, [product]);

    if (!product) return null;

    const images = product.images?.length
        ? product.images
        : product.image
            ? [product.image]
            : [];

    return (
        <section className="product-details-page">

            <button className="back-btn" onClick={onBack}>
                ← Back to Products
            </button>

            <div className="product-details-container">

                {/* LEFT SIDE - PRODUCT IMAGES */}
                <div className="product-gallery">

                    <div className="main-product-image">
                        {selectedImage && (
                            <img
                                src={selectedImage}
                                alt={product.name}
                            />
                        )}
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

                {/* RIGHT SIDE - PRODUCT INFORMATION */}
                <div className="product-info">

                    <p className="product-brand">
                        {product.brand}
                    </p>

                    <h1>{product.name}</h1>

                    {product.category && (
                        <p className="product-category">
                            {product.category}
                        </p>
                    )}

                    <h3>{product.price || "Price on Request"}</h3>

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

            {/* PRODUCT QUALITY */}
            {product.quality && (
                <div className="product-extra-section">
                    <h2>Product Overview</h2>
                    <p>{product.quality}</p>
                </div>
            )}

            {/* PRODUCT FEATURES */}
            {product.features?.length > 0 && (
                <div className="product-extra-section">
                    <h2>Key Features</h2>

                    <ul className="product-features-list">
                        {product.features.map((feature, index) => (
                            <li key={index}>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* PRODUCT SPECIFICATIONS */}
            {product.specifications &&
                Object.keys(product.specifications).length > 0 && (

                <div className="product-extra-section">
                    <h2>Technical Specifications</h2>

                    <div className="specifications-table">
                        {Object.entries(product.specifications).map(
                            ([key, value]) => (
                                <div
                                    className="specification-row"
                                    key={key}
                                >
                                    <span>{key}</span>
                                    <strong>{value}</strong>
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}

            {/* DELIVERY AND AVAILABILITY */}
            {(product.delivery || product.availability) && (
                <div className="product-extra-section">
                    <h2>Availability & Delivery</h2>

                    {product.delivery && (
                        <p>
                            <strong>Delivery:</strong> {product.delivery}
                        </p>
                    )}

                    {product.availability && (
                        <p>
                            <strong>Availability:</strong> {product.availability}
                        </p>
                    )}
                </div>
            )}

        </section>
    );
}

export default ProductDetails;
