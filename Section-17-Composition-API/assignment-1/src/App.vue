<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseRefObj.isCourseGoalVisible">
    {{ courseRefObj.courseGoal }}
  </h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleCourseGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref } from 'vue';
// import { reactive } from 'vue';

export default {
  setup() {
    // const courseGoalRed = ref(
    //   'Finish this course and start on fireblogs project then onto next.js'
    // );
    // const isCourseGoalVisibleRed = ref(true);

    // const toggleCourseGoal = () => {
    //   isCourseGoalVisibleRed.value = !isCourseGoalVisibleRed.value;
    // };

    const courseRefObj = ref({
      courseGoal:
        'Finish this course and start on fireblogs project then onto next.js',
      isCourseGoalVisible: true
    });

    const toggleCourseGoal = () => {
      courseRefObj.value.isCourseGoalVisible = !courseRefObj.value
        .isCourseGoalVisible;
    };

    // const courseReactiveObj = reactive({
    //   courseGoal:
    //     'Finish this course and start on fireblogs project then onto next.js',
    //   isCourseGoalVisible: true
    // });

    // const toggleCourseGoal = () => {
    //   courseReactiveObj.isCourseGoalVisible = !courseReactiveObj.isCourseGoalVisible;
    // };

    return {
      courseRefObj,
      toggleCourseGoal
    };
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
