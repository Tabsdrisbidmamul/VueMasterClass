<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @new-contact="saveContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend?.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-friend="deleteFriend"
      />
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact';
import NewFriend from './components/NewFriend';

export default {
  components: {
    'friend-contact': FriendContact,
    'new-friend': NewFriend,
  },
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel@localhost.com',
          isFavorite: true,
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987 654421 21',
          email: 'julie@localhost.com',
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    saveContact(friend) {
      this.friends.push({ ...friend, id: friend.name });
    },
    deleteFriend(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: 'Jost', sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app .btn-container {
  display: flex;
  justify-content: space-evenly;
}

#app .contact-details *:not(:last-child) {
  margin-bottom: 2rem;
}

#app button {
  font: inherit;
  cursor: pointer;
  font-size: 0.875rem;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.15rem 1rem;
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app .btn--add-new-friend {
  display: flex;
  margin: 0 auto 2rem auto;
}

#app form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app form *:not(:last-child) {
  margin-bottom: 1rem;
}

#app form button {
  margin-bottom: 2rem;
}

#app form input[type='text'],
#app form input[type='tel'],
#app form input[type='email'] {
  display: block;
  padding: 1.15rem 2rem;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  font-family: inherit;
  font-size: inherit;
  color: #58004d;
}

#app form input[type='text']::placeholder,
#app form input[type='tel']::placeholder,
#app form input[type='email']::placeholder {
  font-family: inherit;
  font-size: inherit;
  color: #aaa;
}

#app form div {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app form div #isFavoriteFalse {
  margin-top: -13px;
}
</style>
