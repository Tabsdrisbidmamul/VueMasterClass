<template>
  <base-card>
    <h2>Register as a Coach Now!</h2>
    <coaches-form @save-data="saveData"></coaches-form>
  </base-card>
</template>

<script>
import CoachesForm from '../../components/coaches/CoachesForm.vue';

export default {
  components: {
    CoachesForm
  },
  methods: {
    saveData(formData) {
      this.$store.dispatch('registerCoach', formData);
    }
  }
};
</script>
