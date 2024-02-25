/* eslint-disable react/prop-types */
import { useId } from "react";
import "./Filters.css";

import { products } from "../mocks/products.json";
import { useFilters } from "../hooks/useFilters";

export function Filters() {
  const categories = products.map((prod) => prod.category);

  const { filters, setFilters } = useFilters();
  const priceId = useId();
  const categoryId = useId();

  const handleMinPrice = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: event.target.value,
    }));
  };

  const handleCategory = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={priceId}>Precio</label>
        <input
          type="range"
          id={priceId}
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>Categoria</label>
        <select id={categoryId} onChange={handleCategory}>
          <option key="all" value="all">
            Todas
          </option>
          {Array.from(new Set(categories)).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
