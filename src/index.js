const buttons = document.querySelectorAll('.store__category-button');

const changeActiveBtn = (event) => {
  const t = event.target;
  buttons.forEach((button) => {
    button.classList.remove('store__category-button_active');
  });

  t.classList.add('store__category-button_active');
};

buttons.forEach((button) => {
  button.addEventListener('click', changeActiveBtn);
});
// ------------------------------------------------------------------------------------
const API_URL = 'cream-thorn-chickadee.glitch.me';
// /api/products/category

const productsList = document.querySelector('.store__list');

const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_URL}/api/products/category/${category}`);
    console.log('response: ', response);

    if (!response.ok) {
      throw new Error(`Something went wrong, ${response.status}`);
    }

    console.log();

  } catch (error) {
    console.log(`Ошибка запроса товаров: ${error.message}`);
  }
}
fetchProductsByCategory('Корма')