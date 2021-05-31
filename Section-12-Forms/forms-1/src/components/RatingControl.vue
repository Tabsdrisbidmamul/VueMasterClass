<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">
        Poor
      </button>
    </li>
    <li :class="{ active: modelValue === 'okay' }">
      <button type="button" @click="activate('okay')">
        Okay
      </button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // data() {
  //   return {
  //     activeOption: this.modelValue
  //   };
  // },
  // computed: {
  //   activeOption() {
  //     return this.modelValue;
  //   }
  // },
  methods: {
    activate(option) {
      // this.activeOption = option;
      this.$emit('update:modelValue', option);
    }
  }
};
</script>

<style scoped>
.active {
  border-color: rgb(189, 10, 189);
}

.active button {
  color: rgb(189, 10, 189);
}

ul {
  list-style-type: none;
  margin: 1rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
