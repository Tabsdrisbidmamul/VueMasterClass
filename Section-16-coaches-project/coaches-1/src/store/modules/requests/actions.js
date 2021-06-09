import axios from 'axios';

export default {
  async contactCoach(context, { coachId, email, message }) {
    const newRequest = {
      email,
      message
    };

    const res = await axios
      .post(
        `https://vue-http-demo-d2475-default-rtdb.firebaseio.com/requests/${coachId}.json`,
        newRequest
      )
      .catch(e => {
        if (e.response) {
          throw new Error(e.response.data ?? 'Failed to send request');
        }
        throw new Error('Something went wrong');
      });

    newRequest.id = res.data.id;
    newRequest.coachId = coachId;

    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const res = await axios
      .get(
        `https://vue-http-demo-d2475-default-rtdb.firebaseio.com/requests/${coachId}.json`
      )
      .catch(e => {
        if (e.response) {
          throw new Error(e.response.data ?? 'Failed to fetch requests');
        }
        throw new Error('Something went wrong');
      });

    const requests = [];

    for (const key in res.data) {
      const request = {
        id: key,
        coachId,
        email: res.data[key].email,
        message: res.data[key].message
      };
      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};
