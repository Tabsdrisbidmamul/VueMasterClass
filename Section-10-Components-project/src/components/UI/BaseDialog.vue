<template>
  <teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <header :class="type">
        <h2>{{ title ? title : 'Dialog' }}</h2>
      </header>
      <slot></slot>
    </dialog>
  </teleport>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: true
    }
  },
  emits: ['close']
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100%;

  z-index: 9;

  background-color: rgba(0, 0, 0, 0.26);
}

dialog {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  backdrop-filter: blur(4px);
  background-color: #fff;
  border: none;

  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.26);
  width: 60vw;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.error-header {
  display: flex;
  justify-content: center;
  align-content: center;

  background-color: #c0392b;
  padding: 1rem;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.26);
  margin-bottom: 1rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.error-header h2 {
  font-weight: 300;
  font-size: 1.8rem;
  letter-spacing: 0.15rem;
  color: white;
  text-transform: uppercase;
}
</style>
