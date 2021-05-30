<template>
  <div :class="`card card--${type}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['type']
};
</script>

<style scoped>
.card {
  border-radius: 5px;
  box-shadow: 0.15rem 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
}

.card--resource {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.card--form {
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: auto;
  padding: 2rem;
}

.card--tabs {
  display: flex;
  justify-content: center;
  box-shadow: 0 0 0 0;
  margin-bottom: 2rem;
}
</style>
