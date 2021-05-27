<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favourite)' : '' }}</h2>
    <div class="btn-container btn-containter--details">
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <button @click="toggleFavoriteFriend">
        Mark as Favorite Friend
      </button>
    </div>
    <div class="contact-details" v-if="detailsAreVisible">
      <ul>
        <li>
          <strong>Phone:</strong>
          {{ phoneNumber }}
        </li>
        <li>
          <strong>Email:</strong>
          {{ emailAddress }}
        </li>
      </ul>
      <button @click="$emit('delete-friend', id)">Delete Contact</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // },
    },
  },
  emits: {
    'toggle-favorite': function(id) {
      if (id) return true;
      else {
        console.warn('emit validation failed, id is missing');
        return false;
      }
    },
    'delete-friend': function(id) {
      if (id) return true;
      else {
        console.warn('emit validation failed, id is missing');
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    emitIdValidator(id) {
      if (id) return true;
      else {
        console.warn('emit validation failed, id is missing');
        return false;
      }
    },
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavoriteFriend() {
      this.$emit('toggle-favorite', this.id);
    },
    // deleteFriend() {
    //   this.$emit('delete-friend', this.id);
    // },
  },
};
</script>
