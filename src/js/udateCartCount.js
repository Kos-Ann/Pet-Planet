import { cartCount } from "../index.js";

export const updateCartCount = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  cartCount.textContent = cartItems.reduce((acc, item) => acc + item.count, 0);
}