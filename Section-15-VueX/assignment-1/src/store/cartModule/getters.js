export default {
  getCart(state) {
    return state.cart;
  },
  getCartQuantity(_, getters) {
    const cart = getters.getCart;
    return cart.qty;
  },
  getCartItems(_, getters) {
    const cart = getters.getCart;
    return cart.items;
  },
  getCartTotal(_, getters) {
    const cart = getters.getCart;
    return cart.total.toFixed(2);
  }
};
