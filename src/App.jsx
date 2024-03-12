import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CartProvider } from "./context/cart";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Resgister";

import { Products } from "./components/Products/Products";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
                <Products />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
