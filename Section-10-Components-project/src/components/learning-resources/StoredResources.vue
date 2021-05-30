<template>
  <ul>
    <resource-item
      v-for="resource in storedResources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    >
    </resource-item>
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem';

export default {
  components: {
    ResourceItem
  },
  inject: ['storedResources']
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: auto;
  padding: 0;
  max-width: 50rem;
}
</style>
