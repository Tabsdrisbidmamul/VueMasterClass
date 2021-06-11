<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !email.isValid }">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model.trim="email.val"
          @blur="clearValidity('email')"
        />
        <p class="errors" v-if="!email.isValid">Email must not be empty</p>
      </div>

      <div class="form-control" :class="{ invalid: !password.isValid }">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model.trim="password.val"
          @blur="clearValidity('password')"
        />
        <p class="errors" v-if="!password.isValid">
          Password must not be empty and must be 6 characters long
        </p>
      </div>

      <p v-if="!formIsValid">Please correct the above errors</p>

      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">{{
        switchAuthModeButtonCaption
      }}</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: {
        val: '',
        isValid: true
      },
      password: {
        val: '',
        isValid: true
      },
      formIsValid: true,
      authMode: 'login'
    };
  },
  computed: {
    submitButtonCaption() {
      return this.authMode === 'login' ? 'Login' : 'Signup';
    },
    switchAuthModeButtonCaption() {
      return this.authMode === 'login' ? 'Signup instead' : 'Login Instead';
    }
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      this.email.isValid = true;
      this.password.isValid = true;

      if (this.email.val === '') {
        this.email.isValid = false;
        this.formIsValid = false;
      }

      if (this.password.val === '' || this.password.val.length < 6) {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    switchAuthMode() {
      this.authMode = this.authMode === 'login' ? 'signup' : 'login';
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        email: this.email.val,
        password: this.password.val
      };

      console.log(formData);
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.errors {
  font-weight: bold;
  color: red;
}
</style>
