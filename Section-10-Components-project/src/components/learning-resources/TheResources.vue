<template>
  <base-card type="tabs">
    <base-button type="tabs" @click="setSelectedTab('stored-resources')"
      >All Resoucres</base-button
    >
    <base-button type="tabs" @click="setSelectedTab('add-resources')"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"> </component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResources from './AddResource';
export default {
  components: {
    StoredResources,
    AddResources
  },
  provide() {
    return {
      storedResources: this.storedResources,
      deleteResource: this.deleteResource
    };
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Offical Guide',
          description: 'The official Vue js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  },
  methods: {
    setSelectedTab(cmp) {
      this.selectedTab = cmp;
    }
  }
};
</script>
