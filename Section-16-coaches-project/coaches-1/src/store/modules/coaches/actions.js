import axios from 'axios';

export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };

    const res = await axios.put(
      `https://vue-http-demo-d2475-default-rtdb.firebaseio.com/coaches/${userId}.json`,
      coachData
    );

    if (res.statusCode !== 'OK') {
      // error
    }

    context.commit('newCoach', {
      ...coachData,
      id: userId
    });
  },
  async loadCoaches(context) {
    const res = await axios.get(
      'https://vue-http-demo-d2475-default-rtdb.firebaseio.com/coaches/.json'
    );

    if (res.statusCode !== 'OK') {
      //error
    }

    const coaches = [];
    for (const key in res.data) {
      const coachData = {
        id: key,
        firstName: res.data[key].firstName,
        lastName: res.data[key].lastName,
        description: res.data[key].description,
        hourlyRate: res.data[key].hourlyRate,
        areas: res.data[key].areas
      };
      coaches.push(coachData);
    }

    context.commit('setCoaches', coaches);
  }
};
