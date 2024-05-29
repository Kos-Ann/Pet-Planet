import { API_URL } from "../index.js";
import { renderProducts } from "./renderProducts.js";

export const fetchProductsByCategory = async (category) => {
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