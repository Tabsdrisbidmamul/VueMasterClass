<template>
  <h3>{{ counter }}</h3>
  <h3>{{ normalizedCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.counter;
    // },
    // normalCounter() {
    //   return this.$store.getters.normalizedCounter;
    // }
    ...mapGetters(['counter', 'normalizedCounter'])
  }
};
</script>
