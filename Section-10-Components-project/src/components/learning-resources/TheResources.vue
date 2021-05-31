<template>
  <base-card type="tabs">
    <base-button
      type="tabs"
      :active="activeResouceBtn"
      @click="setSelectedTab('stored-resources')"
      >All Resoucres</base-button
    >
    <base-button
      type="tabs"
      :active="activeAddResouceBtn"
      @click="setSelectedTab('add-resources')"
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
      deleteResource: this.deleteResource,
      addResource: this.addResource
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
    },
    addResource(resource) {
      this.storedResources.unshift(resource);
      this.selectedTab = 'stored-resources';
    },
    deleteResource(id) {
      const resId = this.storedResources.findIndex(res => res.id === id);
      this.storedResources.splice(resId, 1);
    }
  },
  computed: {
    activeResouceBtn() {
      return this.selectedTab === 'stored-resources' ? null : 'not-active';
    },
    activeAddResouceBtn() {
      return this.selectedTab === 'add-resources' ? null : 'not-active';
    }
  }
};
</script>
