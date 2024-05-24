import { createProductCard } from "./createProductCard.js";

const productsList = document.querySelector('.store__list');

export const renderProducts = (products) => {
  productsList.textContent = "";

  products.forEach((product) => {
    const productCard = createProductCard(product);

    productsList.append(productCard)
  })
}