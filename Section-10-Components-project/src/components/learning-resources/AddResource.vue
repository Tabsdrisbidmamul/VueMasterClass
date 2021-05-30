<template>
  <base-card type="form">
    <form @submit.prevent="submitForm">
      <div class="form--control">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter a Title"
          autocomplete="off"
          v-model="enteredTitle"
          ref="title"
        />
      </div>

      <div class="form--control">
        <label for="description">Description</label>
        <textarea
          maxlength="200"
          id="description"
          placeholder="Enter a description"
          autocomplete="off"
          v-model="enteredDesc"
        />
      </div>

      <div class="form--control">
        <label for="link">Link</label>
        <input
          type="url"
          id="link"
          placeholder="Enter a link"
          autocomplete="off"
          v-model="enteredLink"
        />
      </div>
      <div class="form--control-btn">
        <base-button type="save">Save</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      enteredTitle: '',
      enteredDesc: '',
      enteredLink: ''
    };
  },
  methods: {
    submitForm() {
      const title = this.$refs.title.value;

      this.addResource({
        id: this.enteredTitle,
        title,
        description: this.enteredDesc,
        link: this.enteredLink
      });

      this.enteredTitle = '';
      this.enteredDesc = '';
      this.enteredLink = '';
    }
  }
};
</script>

<style scoped>
.form--control {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  font-size: 1.2rem;
}

.form--control-btn {
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
}

.form--control label {
  font-family: inherit;
  margin-right: 2rem;
  align-self: center;
  display: inline-block;
  flex: 1;
}

.form--control input,
.form--control textarea {
  display: inline-block;
  border: none;
  border-radius: 3px;
  padding: 1rem 2rem;
  font-family: inherit;
  font-size: inherit;
  border-bottom: 5px solid transparent;
  transition: all 200ms;
  outline: none;
  margin-top: 0.5rem;
  background-color: rgb(245, 245, 245);
  flex: 2;
}

.form--control input::placeholder,
.form--control textarea::placeholder {
  color: rgb(165, 165, 165);
}

.form--control input:focus {
  border-bottom: 5px solid #27ae60;
}
</style>
