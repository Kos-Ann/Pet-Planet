import { renderCartItems } from "./renderCartItems.js";
import { updateCartCount } from "./udateCartCount.js";

export const updateCartItem = (productId, change) => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const itemIndex = cartItems.findIndex((item) => item.id === productId);

  if (itemIndex !== -1) {
    cartItems[itemIndex].count += change;

    if (cartItems[itemIndex].count <= 0) {
      cartItems.splice(itemIndex, 1);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateCartCount();
    renderCartItems();
  }
}