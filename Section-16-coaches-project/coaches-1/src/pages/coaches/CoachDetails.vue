<template>
  <section>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Are you interested? Reach out now</h2>
          <div v-if="!isOnContact">
            <base-button link :to="contactLink">Contact</base-button>
          </div>
        </header>
        <router-view v-slot="slotProps">
          <transition name="contact" mode="out-in">
            <component :is="slotProps.Component"></component>
          </transition>
        </router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    },
    rate() {
      return `${this.selectedCoach.hourlyRate}`;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return `${this.selectedCoach.description}`;
    },
    contactLink() {
      return `${this.$route.path}/contact`;
    },
    isOnContact() {
      return this.$route.path.endsWith('/contact');
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id === this.id
    );
  }
};
</script>

<style scoped>
.contact-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.contact-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.contact-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.contact-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.contact-enter-active {
  transition: all 250ms ease-in;
}

.contact-leave-active {
  transition: all 250ms ease-out;
}
</style>
