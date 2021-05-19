const app = Vue.createApp({
  data() {
    return {
      task: '',
      tasks: [],
      isListVisible: true,
    };
  },
  computed: {
    listClass() {
      if (this.isListVisible) {
        return { display: 'block' };
      }
      return { display: 'none' };
    },
    buttonName() {
      if (this.isListVisible && this.tasks.length === 0) {
        return 'Add a task';
      }
      return this.isListVisible ? 'Hide' : 'Show';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      this.task = '';
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleList() {
      this.isListVisible = !this.isListVisible;
    },
  },
});

app.mount('#assignment');
