export default {
  increment(state) {
    state.counter++;
  },
  incrementByValue(state, payload) {
    console.log(state);
    state.counter += payload.value;
  }
};
