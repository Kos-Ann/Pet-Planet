import { updateCartCount } from "./udateCartCount.js";

export const addToCart = (productName) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  cartItems.push(productName);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  updateCartCount();
}