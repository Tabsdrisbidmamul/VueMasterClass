const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  computed: {
    fullname() {
      console.log('Running again...');
      return this.name === '' ? '' : `${this.name} Khan`;
    },
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
    outputFullName() {
      return this.name === '' ? '' : `${this.name} Khan`;
    },
  },
});

app.mount('#events');
