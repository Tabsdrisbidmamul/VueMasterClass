import axios from 'axios';

let timer;

export default {
  async login(context, { email, password }) {
    await context.dispatch('authenticate', { email, password, type: 'login' });
  },

  async signup(context, { email, password }) {
    await context.dispatch('authenticate', { email, password, type: 'signup' });
  },

  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearInterval(timer);

    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
  },

  async authenticate(context, { email, password, type }) {
    const APIKey = 'AIzaSyDonBHq0KmVEnF0_3YrlLkfDUMLmrM1GFg';
    const url =
      type === 'login'
        ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKey}`
        : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKey}`;

    const res = await axios
      .post(url, {
        email,
        password,
        returnSecureToken: true
      })
      .catch(error => {
        if (error.response) {
          throw new Error(
            error.response.data.error.message ||
              'Something went wrong. Could not authenticate'
          );
        }
        if (error.request) {
          throw new Error(
            'Something went wrong with sending the request to the server'
          );
        }
        throw new Error('Something went very wrong');
      });

    const expiresIn = +res.data.tokenExpiration * 1000; // to ms
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', res.data.idToken);
    localStorage.setItem('userId', res.data.localId);
    localStorage.setItem('tokenExpiration', expirationDate);

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    const credentials = {
      token: res.data.idToken,
      userId: res.data.localId,
      tokenExpiration: expirationDate
    };

    context.commit('setUser', credentials);
  },

  autoLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = tokenExpiration - new Date().getTime();

    if (expiresIn < 10000) {
      return;
    }

    timer = setTimeout(() => {
      context.dispatch('autoLogout');
    }, expiresIn);

    if (token && userId) {
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration: null
      });
    }
  },

  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};
