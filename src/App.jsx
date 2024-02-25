import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartProvider } from "./context/cart";
import { Cart } from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products />
      <Footer />
    </CartProvider>
  );
}

export default App;
