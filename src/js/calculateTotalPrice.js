export const calculateTotalPrice = (cartItems, products) => {
  return cartItems.reduce((acc, item) => {
    const product = products.find(prod => prod.id === item.id);
    return acc + product.price * item.count;
  }, 0)
}