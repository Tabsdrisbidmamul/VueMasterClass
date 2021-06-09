<template>
  <section>
    <base-dialog
      :show="!!error"
      title="Failed to fetch requests"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Received Requests</h2>
        </header>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="!isLoading && hasRequests">
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
  </section>
</template>

<script>
import RequestsItem from '../../components/requests/RequestsItem.vue';
export default {
  components: { RequestsItem },
  data() {
    return {
      isLoading: false,
      error: null
    };
  },
  computed: {
    requestsRecieved() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.isLoading = false;
        this.error = `${error.message} 🙈` || 'Something went wrong 🙈';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadRequests();
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
