<template>
  <section class="section">
        <div class="container">
          <h1 class="is-size-2 has-text-grey-dark">{{ about.title }}</h1>
          <nuxt-content :document="about" />
          <img src="https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/mockgee_profile.png" width="600" height="400" />
        </div>
  </section>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    // const pages = await $content("guide").fetch()
    const about = await $content("about").fetch()

    return { about }
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
</style>