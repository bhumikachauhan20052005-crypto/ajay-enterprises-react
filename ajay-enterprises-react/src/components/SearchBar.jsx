
import { useState } from "react";
import { Search, X } from "lucide-react";
import "./SearchBar.css";

export default function SearchBar({ products = [], onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(value) {
    setQuery(value);

    const filtered = products.filter((product) =>
      `${product.name} ${product.brand || ""} ${product.category || ""}`
        .toLowerCase()
        .includes(value.trim().toLowerCase())
    );

    onSearch?.(filtered);
  }

  return (
    <div className="search-bar">
      <Search size={20} />
      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search medical equipment, brands..."
        aria-label="Search medical equipment"
      />
      {query && (
        <button
          type="button"
          onClick={() => handleChange("")}
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
