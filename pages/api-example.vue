<template>
  <section class="section">
    <div class="columns">
      <div class="column is-2  is-hidden-mobile">
        <aside class="menu">
          <p class="menu-label">On this page</p>
          <ul>
            <li v-for="link in api_example.toc" class="menu-list" :key="link.id">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column is-8">
        <div class="container">
          <h1 class="is-size-2 has-text-grey-dark">{{ api_example.title }}</h1>
          <nuxt-content :document="api_example" />
        </div>
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    // const pages = await $content("guide").fetch()
    const api_example = await $content("mv-api-example").fetch()

    return { api_example }
  },
head: {
    title: 'Mockgee Velocity',
    meta: [
      {
        hid: 'velocity',
        name: 'description',
        content: 'Velocity'
      }
    ],
  }
}
</script>


<style>
.nuxt-content h2 {
  /* font-weight: bold; */
  font-size: 28px;
}
.nuxt-content h3 {
  /* font-weight: bold; */
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 14px;
}
.nuxt-content ul {
  list-style-type: square;
  margin-left: 1.5rem;
}
.menu {
  position: sticky;
  display: inline-block;
  vertical-align: top;
  max-height: 100vh;
  overflow-y: auto;
  top: 0;
  bottom: 0;
  padding: 30px;
}
</style>