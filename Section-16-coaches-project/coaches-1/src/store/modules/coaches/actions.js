export default {
  registerCoach(context, payload) {
    const coachData = {
      id: new Date().toISOString,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas
    };
    context.commit('newCoach', coachData);
  }
};
