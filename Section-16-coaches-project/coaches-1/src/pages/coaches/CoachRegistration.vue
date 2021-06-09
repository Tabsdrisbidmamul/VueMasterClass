<template>
  <section>
    <base-dialog :show="!!error" title="An Error Occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <base-card v-else-if="!isLoading">
      <h2>Register as a Coach Now!</h2>
      <coaches-form @save-data="saveData"></coaches-form>
    </base-card>
  </section>
</template>

<script>
import CoachesForm from '../../components/coaches/CoachesForm.vue';
import BaseDialog from '../../components/UI/BaseDialog.vue';

export default {
  components: {
    CoachesForm,
    BaseDialog
  },
  data() {
    return {
      error: null,
      isLoading: false
    };
  },
  methods: {
    async saveData(formData) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/registerCoach', formData);
      } catch (error) {
        this.isLoading = false;
        this.error = `${error.message} 🙈` || 'Something went wrong 🙈';
      }
      this.isLoading = false;
      this.$router.replace('/coaches');
    },
    handleError() {
      this.error = null;
    }
  }
};
</script>
