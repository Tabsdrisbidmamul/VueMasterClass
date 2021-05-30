<template>
  <the-header :title="title"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './layout/TheHeader';
import TheResources from './learning-resources/TheResources';

export default {
  components: {
    TheHeader,
    TheResources
  },
  data() {
    return {
      title: 'Learning Resources'
    };
  },
  methods: {
    deleteResource(id) {
      this.storedResources = this.storedResources.filter(res => res.id !== id);
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 62.5%;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
}
</style>
