const app = Vue.createApp({
  data() {
    return {
      name: 'Idris',
      age: 21,
      rndNumber: Math.random(),
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
    };
  },
  methods: {
    incrementAge(value) {
      return this.age + value;
    },
  },
});

app.mount('#assignment');
