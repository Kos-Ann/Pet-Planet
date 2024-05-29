import { createProductCard } from "./createProductCard.js";


export const renderProducts = (products) => {
  const productsList = document.querySelector('.store__list');

  productsList.textContent = "";

  products.forEach((product) => {
    const productCard = createProductCard(product);

    productsList.append(productCard)
  })
}