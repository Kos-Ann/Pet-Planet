import { API_URL, cartForm, modalOverlay, orderMessageElement, orderMessageText } from "../index.js";
import { updateCartCount } from "./udateCartCount.js";

export const submitOrder = async (e) => {
  e.preventDefault();

  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
  const storeId = cartForm.store.value;

  const products = cartItems.map(({ id, count }) => ({
    id,
    quantity: count,
  }));

  try {
    const response = await fetch(`${API_URL}/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ storeId, products }),
    });

    if (!response.ok) {
      throw new Error(response.status);
    };

    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartProductDetails');

    const { orderId } = await response.json();

    orderMessageText.textContent = `Ваш заказ оформлен, номер ${orderId}`;
    document.body.append(orderMessageElement);

    modalOverlay.style.display = 'none';

    updateCartCount();

  } catch (error) {
    console.error(`Ошибка отправки: ${error}`);
  }
};

// export function submitOrder()