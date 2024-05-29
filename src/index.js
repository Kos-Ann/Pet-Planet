import { changeCategory } from "./js/changeCategory.js";
import { addToCart } from "./js/addToCart.js";
import { fetchProductsByCategory } from "./js/fetchProductsByCategory.js";
import { updateCartCount } from "./js/udateCartCount.js";
import { renderCartItems } from "./js/renderCartItems.js";
import { fetchCartItems } from "./js/fetchCartItems.js";
import { updateCartItem } from "./js/updateCartItem.js";
import { submitOrder } from "./js/submitOrder.js";

export const API_URL = "https://almond-flat-rainstorm.glitch.me";
// /api/products/category
export const productList = document.querySelector(".store__list");
export const buttons = document.querySelectorAll('.store__category-button');
export const cartBtn = document.querySelector('.store__cart-button');
export const cartCount = cartBtn.querySelector(".store__cart-cnt");
export const modalOverlay = document.querySelector('.modal-overlay');
export const cartItemsList = document.querySelector('.modal__cart-items');
export const cartTotalPriceEl = document.querySelector('.modal__cart-price');
export const cartForm = document.querySelector('.modal__cart-form');
const clearCart = document.querySelector(".modal__clear-cart");

export const orderMessageElement = document.createElement('div');
orderMessageElement.classList.add('order-message');

export const orderMessageText = document.createElement('p');
orderMessageText.classList.add('order-message__text');

export const orderMessageCloseBtn = document.createElement('button');
orderMessageCloseBtn.classList.add('order-message__close-btn');
orderMessageCloseBtn.textContent = 'Закрыть';

orderMessageElement.append(orderMessageText, orderMessageCloseBtn);

orderMessageCloseBtn.addEventListener('click', () => {
  orderMessageElement.remove();
})

updateCartCount();

buttons.forEach((button) => {
  button.addEventListener('click', changeCategory);

  if (button.classList.contains('store__category-button_active')) {
    fetchProductsByCategory(button.textContent);
  }
});

cartBtn.addEventListener('click', async () => {
  cartItemsList.textContent = "";
  modalOverlay.style.display = "flex";

  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const ids = cartItems.map(item => item.id);

  if (!ids.length) {
    const listItem = document.createElement('li');
    listItem.textContent = 'Корзина пуста';
    cartItemsList.append(listItem);
    return;
  };

  const products = await fetchCartItems(ids);
  localStorage.setItem('cartProductDetails', JSON.stringify(products));
  renderCartItems();
});

modalOverlay.addEventListener('click', ({ target }) => {
  if (target === modalOverlay || target.closest('.modal-overlay_close-btn')) {
    modalOverlay.style.display = "none";
  };
});

productList.addEventListener("click", ({ target }) => {
  if (target.closest('.product__btn-add-cart')) {
    const productId = target.dataset.id;
    addToCart(productId);
  };
});

cartItemsList.addEventListener('click', ({ target }) => {
  if (target.classList.contains('modal__plus')) {
    const productId = target.dataset.id;
    updateCartItem(productId, 1)
  }

  if (target.classList.contains('modal__minus')) {
    const productId = target.dataset.id;
    updateCartItem(productId, -1);
  };
});

clearCart.addEventListener('click', () => {
  if (localStorage.getItem("cartItems")) {
    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartProductDetails');

    updateCartCount();
    renderCartItems();
  };
});

cartForm.addEventListener('click', submitOrder);