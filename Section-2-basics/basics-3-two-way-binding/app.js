const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    incrementCounter(value) {
      this.counter += value;
    },
    decrementCounter(value) {
      this.counter -= value;
    },
    onChangeText(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
    onSubmitForm() {
      alert('Submitted');
    },
    onConfirmChange() {
      this.confirmedName = this.name;
    },
    onResetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
