import { renderProducts } from "./js/renderProducts.js";

export const API_URL = "https://almond-flat-rainstorm.glitch.me";
// /api/products/category


const buttons = document.querySelectorAll('.store__category-button');

const changeActiveBtn = (e) => {
  const t = e.target;
  buttons.forEach((button) => {
    button.classList.remove('store__category-button_active');
  });

  t.classList.add('store__category-button_active');
};


buttons.forEach((button) => {
  button.addEventListener('click', changeActiveBtn);
});


const fetchProductsByCategory = async (category) => {

  try {
    const response = await fetch(
      `${API_URL}/api/products/category/${category}`
    );

    if (!response.ok) {
      throw new Error(`Страница не найдена, ${response.status}`);
    }

    const products = await response.json();

    renderProducts(products);

  } catch (error) {
    console.error(`Ошибка запроса товаров: ${error}`);
  }
}
fetchProductsByCategory('Игрушки');