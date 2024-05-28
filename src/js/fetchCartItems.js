import { API_URL } from "../index.js"

export const fetchCartItems = async (ids) => {
  try {
    const response = await fetch(
      `${API_URL}/api/products/list/${ids.join(',')}`
    )

    if (!response.ok) throw new Error(response.status)

    return await response.json()
  } catch (error) {
    console.log(`Ошибка запроса товаров для корзины: ${error}`);
    return []
  }
}