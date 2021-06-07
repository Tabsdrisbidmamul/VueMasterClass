<template>
  <base-container title="Vuex" v-if="isAuth !== null">
    <the-counter></the-counter>
    <button @click="inc">Add 1</button>
    <button @click="increaseByVal({ value: 5 })">Add 5</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    UserAuth
  },
  computed: {
    ...mapGetters('authModule', ['isAuth'])
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // addByValue(value) {
    //   // this.$store.commit('incrementByValue', { value });
    //   this.$store.dispatch({
    //     type: 'incrementByValue',
    //     value
    //   });
    // },
    // ...mapActions(['increment', 'incrementByValue'])
    ...mapActions('counterModule', {
      inc: 'increment',
      increaseByVal: 'incrementByValue'
    })
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
