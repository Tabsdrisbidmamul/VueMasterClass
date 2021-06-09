<template>
  <section>
    <base-dialog :show="!!error" title="An Error Occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <form v-else-if="!isLoading" @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Your E-mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>

      <div class="form-control">
        <label for="message">Message</label>
        <textarea rows="5" id="message" v-model.trim="message"></textarea>
      </div>

      <p class="errors" v-if="!formIsInvalid">
        Please ensure that message and email are correctly filled in
      </p>

      <div class="actions">
        <base-button>Send message</base-button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      formIsInvalid: true,
      isLoading: false,
      error: null
    };
  },
  methods: {
    async submitForm() {
      this.formIsInvalid = true;
      if (
        !this.email.includes('@') ||
        this.email === '' ||
        this.message === ''
      ) {
        this.formIsInvalid = false;
        return;
      }

      const coachRequest = {
        coachId: this.$route.params.id,
        email: this.email,
        message: this.message
      };

      this.isLoading = true;

      try {
        await this.$store.dispatch('requests/contactCoach', coachRequest);
        this.isLoading = false;
        this.$router.replace('/coaches');
      } catch (error) {
        this.isLoading = false;
        this.error = `${error.message} 🙈` || 'Something went wrong 🙈';
      }
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
