<template>
  <header class="header-details">
    <h1 class="header header--h1">Active Users</h1>
  </header>
  <section class="user-form">
    <user-data @new-contact="newContact" />
  </section>
  <section class="user-details">
    <active-user :user-name="activeUser.name" :age="activeUser.age" />
  </section>
</template>

<script>
import ActiveUser from './components/ActiveUser';
import UserData from './components/UserData';

export default {
  components: {
    'active-user': ActiveUser,
    'user-data': UserData,
  },
  data() {
    ActiveUser;
    return {
      activeUser: {
        name: '',
        age: '0',
      },
    };
  },
  methods: {
    newContact(userObj) {
      this.activeUser = { ...userObj };
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 62.5%;
  font-weight: 400;
  color: #ecf0f1;
  padding: 0 1rem 1rem 1rem;
}

#app {
}

.user-details {
  display: flex;
  justify-content: center;
  background-color: #27ae60;
  box-shadow: 0.25rem 0 0.5rem rgba(0, 0, 0, 0.25);
}

.header-details {
  padding: 1rem 0;
  background-color: #d35400;
  margin-bottom: 2rem;
  box-shadow: 0.25rem 0 0.5rem rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.header {
  font-size: 2rem;
}

.header--h1 {
  font-size: 3rem;
  font-weight: 400;
}

.header--h2 {
  font-weight: 200;
}

.header--h3 {
  font-weight: 300;
}

.form {
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 2rem;
}

.form *:not(:last-child) {
  margin-bottom: 1rem;
}

.input {
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0.25rem 0.25rem 0.1rem rgba(0, 0, 0, 0.15);
  font-family: inherit;
  font-size: inherit;
}

.btn {
  padding: 0.8rem 1rem;
  border: none;
  background-color: #2980b9;
  border-radius: 3px;
  color: inherit;
  cursor: pointer;
}

.btn:hover,
.btn:active {
  background-color: #3498db;
}
</style>
