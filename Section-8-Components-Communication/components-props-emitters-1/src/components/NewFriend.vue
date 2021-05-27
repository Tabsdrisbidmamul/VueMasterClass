<template>
  <button class="btn btn--add-new-friend" @click="toggleAddFriend">
    {{ isAddNewFriend ? 'Close' : 'Add a new Friend' }}
  </button>
  <form v-show="isAddNewFriend" @submit.prevent="saveContact">
    <input type="text" v-model="name" placeholder="Enter a name" />
    <input type="tel" v-model="phone" placeholder="Enter a phone number" />
    <input type="email" v-model="email" placeholder="Enter a email address" />
    <div>
      <label for="isFavoriteTrue">True</label>
      <input
        type="radio"
        name="favorite"
        id="isFavoriteTrue"
        :value="true"
        v-model="isFavorite"
      />
      <label for="isFavoriteFalse">False</label>
      <input
        type="radio"
        name="favorite"
        id="isFavoriteFalse"
        :value="false"
        v-model="isFavorite"
      />
    </div>
    <button>
      Save Contact
    </button>
  </form>
</template>

<script>
export default {
  emits: {
    'new-contact': function(friendObj) {
      if (friendObj) return true;
      else {
        console.warn('Emit validation warning no friend object was provided');
        return false;
      }
    },
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      isFavorite: false,
      isAddNewFriend: false,
    };
  },
  methods: {
    saveContact() {
      this.$emit('new-contact', {
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: this.isFavorite,
      });
      this.name = '';
      this.phone = '';
      this.email = '';
      this.isFavorite = false;
    },
    toggleAddFriend() {
      this.isAddNewFriend = !this.isAddNewFriend;
    },
  },
};
</script>
