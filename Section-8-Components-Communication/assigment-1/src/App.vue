<template>
  <section>
    <active-user user-name="Idris" :age="20" />
  </section>
</template>

<script>
import ActiveUser from './components/ActiveUser';

export default {
  components: {
    'active-user': ActiveUser,
  },
  data() {
    ActiveUser;
    return {
      activeUser: {},
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

* {
  box-sizing: border-box;
}
</style>
