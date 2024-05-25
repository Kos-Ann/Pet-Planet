import { cartItemsList } from "../index.js"

export const renderCartItems = () => {
  cartItemsList.textContent = "";
  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

  cartItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    cartItemsList.append(listItem);
  });

}