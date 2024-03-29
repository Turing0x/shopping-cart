/* eslint-disable react/prop-types */
import "./Cart.css";

import { useId } from "react";
import { CartIcon, ClearCartIcon } from "../Icons.jsx";
import { useCart } from "../../hooks/useCart.jsx";

function CartItem({ price, title, quantity, addToCart }) {
  return (
    <li>
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, addProductToCart, cleanCart, totalAmount } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addProductToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <div>
          <label>Monto de la compra: </label>
          <label>${totalAmount()}</label>
        </div>

        <br />
        <button onClick={cleanCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
