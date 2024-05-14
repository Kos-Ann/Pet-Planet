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