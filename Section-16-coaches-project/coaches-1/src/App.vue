<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader
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
  font-size: 62.5%;
}

body {
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
}
</style>
