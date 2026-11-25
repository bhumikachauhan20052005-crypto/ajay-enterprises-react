
import { useState } from "react";
import products from "../data/products";
import ProductDetails from "./ProductDetails";
import "./solutions.css";

function Solutions({ searchQuery, clearSearch }) {
  const [activeCategory, setActiveCategory] = useState("Ventilators");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = Object.keys(products);

  // All products from every category
  const allProducts = Object.entries(products).flatMap(
    ([category, items]) =>
      items.map((product) => ({
        ...product,
        category
      }))
  );

  // Search across name, brand, description and category
  const filteredProducts = allProducts.filter((product) => {
    const query = searchQuery.trim().toLowerCase();

    return (
      product.name?.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query) ||
      product.category?.toLowerCase().includes(query)
    );
  });

  // Show search results or selected category products
  const currentProducts = searchQuery.trim()
    ? filteredProducts
    : products[activeCategory] || [];

  // Product Details
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
              onClick={() => {
                setActiveCategory(category);
                if (clearSearch) clearSearch();
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SEARCH RESULTS */}
        {searchQuery.trim() && (
          <p className="search-results-count">
            {filteredProducts.length} products found for "{searchQuery}"
          </p>
        )}

        {/* PRODUCTS GRID */}
        <div className="products-grid">

          {currentProducts.map((product, index) => (
            <div className="product-card" key={index}>

              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

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

        {/* NO RESULTS */}
        {currentProducts.length === 0 && (
          <div className="no-products">
            <h3>No Products Found</h3>
            <p>
              Try searching with another product name, brand or category.
            </p>

            {searchQuery.trim() && (
              <button
                className="view-details-btn"
                onClick={clearSearch}
              >
                Clear Search
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
}

export default Solutions;
