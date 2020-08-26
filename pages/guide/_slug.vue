<template>
  <section class="section">
    <div class="columns">
      <div class="column is-2 is-hidden-mobile">
        <aside class="menu">
          <AppSearchInput />
          <p class="menu-label">Pages</p>
          <ul>
            <li v-for="page in pages" class="menu-list" :key="page.id">
              <NuxtLink :to="`/guide/${page.path}`">{{ page.title }}</NuxtLink>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <div class="container">
          <h1 class="is-size-2 has-text-grey">{{ guide.title }}</h1>
          <br>
          <nuxt-content :document="guide" />
          <prev-next :prev="prev" :next="next" />
        </div>
      </div>
      <div class="column is-2 is-hidden-mobile">
        <aside class="menu">
          <p class="menu-label">On this page</p>
          <ul>
            <li v-for="link in guide.toc" class="menu-list" :key="link.id">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    // const pages = await $content("guide").fetch()
    const guide = await $content("guide", params.slug).fetch()

    const [prev, next] = await $content("guide")
      .only(["title", "slug"])
      .sortBy("page", "asc")
      .surround(params.slug)
      .fetch()

    return { guide, prev, next }
  },
  data() {
    return {
      pages: [
        { id: 1, path: "introduction", title: "Introduction" },
        { id: 2, path: "installation", title: "Installation" },
        { id: 3, path: "get-started", title: "Get Started" },
        // { id: 3, path: "quick-start", title: "Quick Start" }
      ]
    }
  },
  head() {
    return {
      title: "Guide | Mockgee"
    }
  }
}
</script>


<style>
h1 {
  font-family: "Cairo", sans-serif;
  /* color: #5f6368; */
}
.nuxt-content h2 {
  /* font-weight: bold; */
  font-size: 28px;
  font-family: "Cairo", sans-serif;
}
.nuxt-content h3 {
  /* font-weight: bold; */
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 14px;
  font-family: "Cairo", sans-serif;
}
.nuxt-content ul {
  list-style-type: square;
  margin-left: 1.5rem;
  font-family: "Cairo", sans-serif;
}
.nuxt-content a {
  color: #1068bf;
  font-size: 15px;
  font-family: "Cairo", sans-serif;
}
a {
  color: #1068bf;
  font-size: 15px;
  font-family: "Cairo", sans-serif;
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
  font-family: "Cairo", sans-serif;
  font-size: 18px;
}
</style>