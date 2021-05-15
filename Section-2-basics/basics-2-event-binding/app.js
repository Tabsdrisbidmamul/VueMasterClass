const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      return this.counter++;
    },
    decrementCounter() {
      return this.counter--;
    },
  },
});

app.mount('#events');
