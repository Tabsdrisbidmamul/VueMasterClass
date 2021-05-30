<template>
  <li>
    <base-card type="resource">
      <header class="card-header">
        <h3>{{ title }}</h3>
        <base-button type="delete" @click="deleteResource(id)">
          Delete
        </base-button>
      </header>
      <section class="card-desc">
        <p>{{ description }}</p>
      </section>
      <nav class="card-nav">
        <a :href="link" target="_blank"><p>Find out more</p></a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  emits: ['delete-resource'],
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource'],
  methods: {}
};
</script>

<style scoped>
li {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

section {
  margin-bottom: 1rem;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

header h3 {
  margin-top: 1rem;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.15rem;
  font-size: 2rem;
}

nav a:link,
nav a:visited {
  font-size: 1rem;
  display: inline-block;
  padding: 0 0.25rem 0.25rem 0.25rem;
  border-bottom: 1px solid #27ae60;
  text-decoration: none;
  color: #27ae60;
  transition: all 200ms;
}

nav a:hover,
nav a:active {
  color: #fff;
  border-bottom: 1px solid transparent;
  background-color: #27ae60;
}
</style>
