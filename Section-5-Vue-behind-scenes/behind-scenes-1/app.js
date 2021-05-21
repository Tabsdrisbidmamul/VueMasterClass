const app = Vue.createApp({
  //   template: `<h2>How Vue Works</h2>
  //   <input type="text" @input="saveInput" />
  //   <button @click="setText">Set Text</button>
  //   <p>{{ message }}</p>
  // `,
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
      favoriteMeal: 'Rice',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()...');
  },
  created() {
    console.log('created()...');
  },
  beforeMount() {
    console.log('beforeMount()...');
  },
  mounted() {
    console.log('mounted()...');
  },
  beforeUpdate() {
    console.log('beforeUpdated()...');
  },
  updated() {
    console.log('updated()...');
  },
  beforeUnmount() {
    console.log('beforeUnmount()...');
  },
  unmounted() {
    console.log('unmounted()...');
  },
});

app.mount('#app');

app.unmount();
