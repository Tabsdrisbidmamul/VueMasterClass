<template>
  <section>
    <base-card>
      <header>
        <h2>Received Requests</h2>
      </header>
      <ul v-if="hasRequests">
        <requests-item
          v-for="request in requestsRecieved"
          :key="request.id"
          :email="request.email"
          :message="request.message"
        ></requests-item>
      </ul>
      <h3 v-else>You haven't received any requests</h3>
    </base-card>
  </section>
</template>

<script>
import RequestsItem from '../../components/requests/RequestsItem.vue';
export default {
  components: { RequestsItem },
  computed: {
    requestsRecieved() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
