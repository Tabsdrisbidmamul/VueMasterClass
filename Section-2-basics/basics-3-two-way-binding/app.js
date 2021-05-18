const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      lastname: '',
      // fullname: '',
    };
  },
  watch: {
    counter(value) {
      if (this.counter > 50) {
        this.counter = 0;
      }
    },
    // name(newValue, oldValue) {
    //   this.fullname = newValue === '' ? '' : `${newValue} ${this.lastname}`;
    // },
    // lastname(newValue) {
    //   this.fullname = newValue === '' ? '' : `${this.name} ${newValue}`;
    // },
  },
  computed: {
    counterCompute() {
      return this.counter < 50 ? this.counter : (this.counter = 0);
    },
    fullname() {
      return this.name === '' || this.lastname === ''
        ? ''
        : `${this.name} ${this.lastname}`;
    },
  },
  methods: {
    incrementCounter(value) {
      this.counter += value;
    },
    decrementCounter(value) {
      this.counter -= value;
    },
    onChangeText(event) {
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
      this.lastname = '';
    },
    outputFullName() {
      return this.name === '' ? '' : `${this.name} Khan`;
    },
  },
});

app.mount('#events');
