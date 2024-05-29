import { API_URL, cartItemsList, cartTotalPriceEl } from "../index.js"
import { calculateTotalPrice } from "./calculateTotalPrice.js";

export const renderCartItems = async () => {
  cartItemsList.textContent = "";

  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const products = JSON.parse(localStorage.getItem("cartProductDetails") || "[]");

  products.forEach(({ id, photoUrl, name, price }) => {
    const cartItem = cartItems.find((item) => item.id === id);

    if (!cartItem) return;

    const listItem = document.createElement("li");
    listItem.classList.add('modal__cart-item')
    listItem.innerHTML = `
      <img class="modal__cart-item-img" src="${API_URL}${photoUrl}" alt="${name}">

      <h3 class="modal__cart-item-title">${name}</h3>

      <div class="modal__cart-item-count">
        <button class="modal__minus" data-id="${id}">-</button>
        <span class="modal__count">${cartItem.count}</span>
        <button class="modal__plus" data-id="${id}">+</button>
      </div>

      <p class="modal__cart-item-price">${price * cartItem.count}&nbsp;₽</p>
    `

    cartItemsList.append(listItem);

    const totalPrice = calculateTotalPrice(cartItems, products);
    cartTotalPriceEl.innerHTML = `${totalPrice}&nbsp;₽`;
  });
}