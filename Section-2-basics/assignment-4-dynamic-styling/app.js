const app = Vue.createApp({
  data() {
    return {
      cssClass: '',
      paraToggle: true,
      inlineBackgroundColor: '',
    };
  },
  computed: {
    inputCssClass() {
      return cssClass;
    },
    paraClass() {
      return this.paraToggle ? 'visible' : 'hidden';
    },
  },
  methods: {
    togglePara() {
      this.paraToggle = !this.paraToggle;
    },
  },
});

app.mount('#assignment');
