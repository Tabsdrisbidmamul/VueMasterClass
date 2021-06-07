export default {
  addProductToCart(context, payload) {
    const products = context.rootGetters['productsModule/getProducts'];
    const { prodId } = { ...payload };
    const productData = products.find(prod => prod.id === prodId);
    
    context.commit('addProductToCart', { productData });
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  }
};
