/* eslint-disable react/prop-types */
import "./Products.css";

import { products } from "../../mocks/products.json";
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons.jsx";
import { useFilters } from "../../hooks/useFilters.jsx";
import { useCart } from "../../hooks/useCart.jsx";

export function Products() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  const { cart, removeProduct, addProductToCart } = useCart();
  const checkIfInCart = (product) => {
    return cart.some((prod) => prod.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
              <div>
                <button
                  style={{
                    backgroundColor: checkIfInCart(product) ? "red" : "#09f",
                  }}
                  onClick={() =>
                    checkIfInCart(product)
                      ? removeProduct(product)
                      : addProductToCart(product)
                  }
                >
                  {checkIfInCart(product) ? (
                    <RemoveFromCartIcon />
                  ) : (
                    <AddToCartIcon />
                  )}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
