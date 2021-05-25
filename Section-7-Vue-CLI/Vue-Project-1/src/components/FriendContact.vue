<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleFriend">
      {{ isToggleFriend ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-show="isToggleFriend">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isToggleFriend: true,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    toggleFriend() {
      this.isToggleFriend = !this.isToggleFriend;
    },
  },
};
</script>
