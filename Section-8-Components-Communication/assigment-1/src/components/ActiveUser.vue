<template>
  <div>
    <h2 class="header header--h2">Username: {{ userName }}</h2>
    <h3 class="header header--h3">Age: {{ age }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
