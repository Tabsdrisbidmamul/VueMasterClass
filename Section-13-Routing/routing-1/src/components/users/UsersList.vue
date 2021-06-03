<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save Changes</button>
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
  data() {
    return {
      savedChanges: false
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.saveChanges = true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('UserList cmp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UserList cmp beforeRouteLeave');
    console.log(to, from);

    if (this.saveChanges) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'Are you sure? You have unsaved changes'
      );
      next(userWantsToLeave);
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
  align-items: center;
  flex-direction: column;
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
  margin-bottom: 1rem;
}

button:hover,
button:active {
  background-color: #27ae60;
  box-shadow: 0 1rem 5rem rgba(#000, 0.2);
}
</style>
