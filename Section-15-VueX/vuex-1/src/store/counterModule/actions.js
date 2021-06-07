export default {
  increment(context) {
    setTimeout(() => {
      context.commit('increment');
    }, 2000);
  },
  incrementByValue(context, payload) {
    // setTimeout(() => {}, 2000);
    context.commit('incrementByValue', payload);
  }
};
