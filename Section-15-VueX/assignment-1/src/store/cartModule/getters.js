export default {
  getCart(state) {
    return state.cart;
  },
  getCartQuantity(_, getters) {
    return getters.getCart.qty;
  },
  getCartItems(_, getters) {
    return getters.getCart.items;
  },
  getCartTotal(_, getters) {
    return getters.getCart.total.toFixed(2);
  }
};
