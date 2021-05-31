<template>
  <base-card type="form">
    <form
      @submit.prevent="submitForm"
      ref="form"
      @invalid.capture.prevent="openDialog"
    >
      <div class="form--control">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Enter a Title"
          autocomplete="off"
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
          ref="desc"
        />
      </div>

      <div class="form--control">
        <label for="link">Link</label>
        <input
          type="url"
          id="link"
          placeholder="Enter a link"
          autocomplete="off"
          ref="link"
        />
      </div>
      <div class="form--control-btn">
        <base-button type="save">Save</base-button>
      </div>
    </form>
  </base-card>
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    type="error-header"
    @close="closeDialog"
  >
    <main class="error-body">
      <p>
        The input for the form was invalid or empty.
      </p>
      <p>please re-enter the values into the form</p>
    </main>
    <menu class="error-menu">
      <base-button type="close" @click="closeDialog">
        Close
      </base-button>
    </menu>
  </base-dialog>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    };
  },
  methods: {
    openDialog() {
      this.inputIsInvalid = true;
    },
    submitForm() {
      const title = this.$refs.title.value;
      const description = this.$refs.desc.value;
      const link = this.$refs.link.value;

      if (
        title.trim() === '' ||
        description.trim() === '' ||
        link.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }

      this.addResource({
        id: this.enteredTitle,
        title,
        description,
        link
      });

      this.$refs.title.value = '';
      this.$refs.desc.value = '';
      this.$refs.link.value = '';
    },
    closeDialog() {
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
.error-body {
  padding: 1rem;
  margin-bottom: 1rem;
}

.error-body p {
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
}

.error-menu {
  align-self: flex-end;
  padding: 1rem;
}

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

.form--control input:focus:valid,
.form--control textarea:focus:valid {
  border-bottom: 5px solid #27ae60;
}

.form--control input:focus:invalid,
.form--control textarea:focus:invalid {
  border-bottom: 5px solid #e74c3c;
}
</style>
