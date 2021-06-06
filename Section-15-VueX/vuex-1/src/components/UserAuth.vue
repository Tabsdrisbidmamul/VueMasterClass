<template>
  <button @click="login({ username: 'Idris' })" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isAuth'])
  },
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>
