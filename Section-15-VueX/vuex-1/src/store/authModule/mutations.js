export default {
  login(state, payload) {
    state.currentUser = payload;
  },
  logout(state) {
    state.currentUser = null;
  }
};
