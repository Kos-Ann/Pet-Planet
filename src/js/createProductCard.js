import { API_URL } from "../index.js";

export const createProductCard = ({ name, price, photoUrl }) => {
  const storeItem = document.createElement('li');
  storeItem.classList.add('store__item');
  storeItem.innerHTML = `
    <article class="store__product product">
      <img class="product__image" src="${API_URL}${photoUrl}" alt="${name}">
      <h3 class="product__title">${name}</h3>
      <p class="product__price">${price}&nbsp;₽</p>
      <button class="product__btn-add-cart">Заказать</button>
    </article>

  `
  return storeItem;
}