import { buttons } from "../index.js";
import { fetchProductsByCategory } from "./fetchProductsByCategory.js";

export const changeCategory = ({ target }) => {
  const category = target.textContent;

  buttons.forEach((button) => {
    button.classList.remove('store__category-button_active');
  });

  target.classList.add('store__category-button_active');

  fetchProductsByCategory(category);
};