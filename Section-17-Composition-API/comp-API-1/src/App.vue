<template>
  <section class="container">
    <h2>{{ user.userName }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
  </section>
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  setup() {
    // const userName = ref('Maximilian');
    // const age = ref(31);
    const user = reactive({
      userName: 'Maximilian',
      age: 31
      // setAge() {
      //   this.age = 32;
      // }
    });

    const setAge = () => {
      user.age = 32;
    };

    // setTimeout(() => {
    //   // userName.value = 'Max';
    //   // age.value = 21;

    //   // user.value.userName = 'Max';
    //   // user.value.age = 21;

    //   user.userName = 'Max';
    //   user.age = 21;
    // }, 2000);

    return {
      user,
      setAge
    };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
