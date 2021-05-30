<template>
  <button :class="`btn btn--${type} ${active}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'active']
};
</script>

<style scoped>
.btn {
  border: none;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  border-radius: 3px;
  color: rgba(255, 255, 255, 0.8);
  box-shadow: 0.05rem 0.1rem 0.25rem rgba(0, 0, 0, 0.2);
  transition: all 200ms;
  cursor: pointer;
}

.btn--tabs {
  background-color: #3498db;
  margin-right: 2rem;
}

.btn--tabs:active,
.btn--tabs:hover {
  color: rgba(255, 255, 255, 0.8);
  background-color: #2980b9;
}

.btn--delete {
  color: rgba(255, 255, 255, 0.8);
  background-color: #e74c3c;
}

.btn--delete:active,
.btn--delete:hover {
  background-color: #c0392b;
  box-shadow: 0.1rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
}

.not-active {
  background-color: transparent;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0 0 0 0;
}
</style>
