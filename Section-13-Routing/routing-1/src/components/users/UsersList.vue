<template>
  <div>
    <button @click="confirmInput">Confirm</button>
  </div>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}

div {
  margin: 2rem auto;
  display: flex;
  justify-content: center;
}

button {
  display: inline-block;
  border: none;
  background-color: #2ecc71;
  color: white;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 1rem 2rem rgba(#000, 0.2);
  transition: all 200ms;
}

button:hover,
button:active {
  background-color: #27ae60;
  box-shadow: 0 1rem 5rem rgba(#000, 0.2);
}
</style>
