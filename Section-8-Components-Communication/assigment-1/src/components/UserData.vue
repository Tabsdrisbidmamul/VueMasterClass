<template>
  <div>
    <form class="form" @submit.prevent="newContact">
      <input class="input" type="text" v-model="enteredName" />
      <input class="input" type="number" v-model="enteredAge" />
      <button class="btn">New Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['new-contact'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    };
  },
  methods: {
    newContact() {
      this.$emit('new-contact', {
        name: this.enteredName,
        age: parseInt(this.enteredAge),
      });
    },
  },
};
</script>
