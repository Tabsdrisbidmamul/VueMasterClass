<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput" @keyup.enter="addUser" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Alice', 'Micheal']
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userNameInput.value);
      this.$refs.userNameInput.value = '';
    },
    removeUser(userToRemove) {
      this.users = this.users.filter(user => user !== userToRemove);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.user-list-enter-active {
  transition: opacity 200ms ease-in, transform 300ms ease-in;
}

.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: opacity 200ms ease-out, transform 300ms ease-out;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.user-list-move {
  transition: all 300ms ease-in-out;
}
</style>
