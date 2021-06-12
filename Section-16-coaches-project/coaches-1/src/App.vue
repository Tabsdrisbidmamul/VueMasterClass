<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  created() {
    this.$store.dispatch('autoLogin');
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.route-enter-active {
  transition: all 0.2s ease-out;
}

.route-leave-from,
.route-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.route-leave-active {
  transition: all 0.2s ease-in;
}
</style>
