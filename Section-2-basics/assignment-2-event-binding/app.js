const app = Vue.createApp({
  data() {
    return {
      content: 'I am content',
      confirmedContent: 'I am confirmed content',
    };
  },
  methods: {
    showAlert() {
      alert('Alert has been called');
    },
    onChangeText(event) {
      this.content = event.target.value;
    },
    onConfirmedChange(event) {
      this.confirmedContent = event.target.value;
    },
  },
});

app.mount('#assignment');
