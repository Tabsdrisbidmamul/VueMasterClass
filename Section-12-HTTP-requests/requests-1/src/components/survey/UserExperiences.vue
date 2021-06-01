<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="isError">{{ isError }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No experience results found 🤯, please enter some experiences
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.userName"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult
  },
  data() {
    return {
      results: [],
      isLoading: false,
      isError: null
    };
  },
  methods: {
    async loadExperiences() {
      try {
        this.isLoading = true;
        this.isError = null;
        const res = await axios.get(
          'https://vue-http-demo-d2475-default-rtdb.firebaseio.com/surveys.json'
        );
        this.isLoading = false;
        const responseData = [];
        for (const id in res.data) {
          responseData.push({
            id,
            userName: res.data[id].userName,
            rating: res.data[id].rating
          });
        }
        this.results = responseData;
      } catch (e) {
        this.isLoading = false;
        this.isError =
          'Was not able to fetch data 🤕. Start by adding an new experience.';
      }
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

p {
  margin-top: 2rem;
  text-align: center;
}
</style>
