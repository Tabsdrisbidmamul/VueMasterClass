<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goal')">Active Goal</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent"> </component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ActiveGoal from './components/ActiveGoal';
import ManageGoals from './components/ManageGoals';

export default {
  components: {
    TheHeader,
    ActiveGoal,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goal',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap');

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}
</style>
