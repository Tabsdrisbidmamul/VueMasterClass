const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  computed: {
    showResult() {
      if (this.result < 37) {
        return 'Not there yet';
      } else if (this.result === 37) {
        return this.result;
      } else {
        return 'Too much!';
      }
    },
  },
  watch: {
    // result(newValue, oldValue) {
    //   if (newValue !== oldValue) {
    //     setTimeout(() => {
    //       this.result = 0;
    //     }, 5000);
    //   }
    // },
    showResult() {
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
  methods: {
    incrementValue(value) {
      this.result += value;
    },
  },
});

app.mount('#assignment');
