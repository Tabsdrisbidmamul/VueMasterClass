<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style scoped>
header {
  background-color: #2c3e50;
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0.2rem 0 1rem rgba(0, 0, 0, 0.2);
}

header h1 {
  font-weight: 300;
  font-size: 2.5rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}
</style>
