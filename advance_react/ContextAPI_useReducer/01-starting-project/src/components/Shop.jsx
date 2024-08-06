import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import Product from "./Product";

export default function Shop() {
  const { products,handleAddItemToCart } = useContext(CartContext)
  return (
    
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {products.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={handleAddItemToCart} />
          </li>
        ))}
      </ul>
    </section>
  );
}
