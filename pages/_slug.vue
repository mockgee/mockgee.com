<template>
 <section class="section">
  <div class="container">
    <h1 class="is-size-2 has-text-grey-dark">{{ page.title }}</h1>
    <p>{{ page.description }}</p>
    <nuxt-content :document="page"/>
  </div>
 </section>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "faq"
    const page = await $content(slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" })
      });

    return {
      page
    }
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
    margin-bottom: 20px;
    
  }
  .nuxt-content ul {
    list-style-type: square;
    margin-left: 1.5rem
  }
</style>
