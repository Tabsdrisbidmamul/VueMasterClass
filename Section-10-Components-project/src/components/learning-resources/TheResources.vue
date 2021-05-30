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
      console.log(resource);
      this.storedResources.push(resource);
    },
    deleteResource(id) {
      this.storedResources = this.storedResources.filter(res => res.id !== id);
      console.log(this.$data.storedResources);
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
