/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "add": {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        return newState;
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }
    case "remove": {
      return state.filter((prod) => prod.id !== actionPayload.id);
    }
    case "clear":
      return initialState;
  }

  return state;
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addProductToCart = (product) =>
    dispatch({
      type: "add",
      payload: product,
    });

  const removeProduct = (product) =>
    dispatch({
      type: "remove",
      payload: product,
    });

  const totalAmount = () => {
    let sum = 0;
    state.forEach((product) => {
      sum += product.price;
    });

    return sum;
  };

  const cleanCart = () => dispatch({ type: "clear" });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addProductToCart,
        cleanCart,
        removeProduct,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
