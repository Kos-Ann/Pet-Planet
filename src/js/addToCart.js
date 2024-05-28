import { updateCartCount } from "./udateCartCount.js";

export const addToCart = (productId) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

  const existingItem = cartItems.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.count += 1;
  } else {
    cartItems.push({ id: productId, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCartCount();
}