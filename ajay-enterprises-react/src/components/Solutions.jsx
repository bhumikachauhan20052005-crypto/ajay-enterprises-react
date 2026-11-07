import { useState } from "react";
import products from "../data/products";
import ProductDetails from "./ProductDetails";

function Solutions() {
  const [activeCategory, setActiveCategory] = useState("Ventilators");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = Object.keys(products);

  const currentProducts = products[activeCategory] || [];

  // Agar View Details click hua hai,
  // toh Products section ki jagah Product Details dikhao
  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-container">

        {/* HEADER */}
        <div className="solutions-header">
          <p className="section-tag">OUR PRODUCTS</p>

          <h2>
            Complete Medical Equipment <span>Solutions</span>
          </h2>

          <p>
            Explore our wide range of high-quality medical and healthcare
            equipment.
          </p>
        </div>

        {/* CATEGORY BUTTONS */}
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="products-grid">
          {currentProducts.map((product, index) => (
            <div className="product-card" key={index}>

              {/* PRODUCT IMAGE */}
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              {/* PRODUCT INFO */}
              <div className="product-content">

                <p className="product-brand">
                  {product.brand}
                </p>

                <h3 className="product-name">
                  {product.name}
                </h3>

                <p className="product-description">
                  {product.description}
                </p>

                <p className="product-price">
                  {product.price || "Price on Request"}
                </p>

                {/* VIEW DETAILS */}
                <button
                  className="view-details-btn"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details →
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Solutions;