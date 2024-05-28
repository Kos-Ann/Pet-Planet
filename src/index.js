import { changeCategory } from "./js/changeCategory.js";
import { addToCart } from "./js/addToCart.js";
import { fetchProductsByCategory } from "./js/fetchProductsByCategory.js";
import { updateCartCount } from "./js/udateCartCount.js";
import { renderCartItems } from "./js/renderCartItems.js";
import { fetchCartItems } from "./js/fetchCartItems.js";

export const API_URL = "https://almond-flat-rainstorm.glitch.me";
// /api/products/category
export const productList = document.querySelector(".store__list");
export const buttons = document.querySelectorAll('.store__category-button');
export const cartBtn = document.querySelector('.store__cart-button');
export const cartCount = cartBtn.querySelector(".store__cart-cnt");
export const modalOverlay = document.querySelector('.modal-overlay');
export const cartItemsList = document.querySelector('.modal__cart-items');

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
  const ids = cartItems.map(item => item.id)

  if (!ids.length) {
    const listItem = document.createElement('li');
    listItem.textContent = 'Корзина пуста';
    cartItemsList.append(listItem);
    return;
  }

  const products = await fetchCartItems(ids);
  localStorage.setItem('cartProductDetails', JSON.stringify(products));
  renderCartItems();
})

modalOverlay.addEventListener('click', ({ target }) => {
  if (target === modalOverlay || target.closest('.modal-overlay_close-btn')) {
    modalOverlay.style.display = "none";
  }
})

productList.addEventListener("click", ({ target }) => {
  if (target.closest('.product__btn-add-cart')) {
    const productId = target.dataset.id;
    addToCart(productId);
  }
})
