<template>
  <div>
    <h2>Manage Goal</h2>
    <input type="text" v-model="goalText" />
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid</h2>
      <p>Please enter a input</p>
      <button @click="confirmGoal">Okay!</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert';
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
      goalText: '',
    };
  },
  methods: {
    setGoal() {
      if (this.goalText === '') {
        this.inputIsInvalid = true;
      }
    },
    confirmGoal() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
