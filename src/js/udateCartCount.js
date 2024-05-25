import { cartCount } from "../index.js";

export const updateCartCount = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  cartCount.textContent = cartItems.length;
}