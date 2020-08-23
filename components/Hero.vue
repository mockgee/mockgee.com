<template>
  <section class="hero is-medium is-bold is-primary">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column hero-text">
          <h1 class="is-size-2 has-text-weight-bold has-text-grey-dark">
           Mock APIs with Mockgee
          </h1>
          <h2 class="is-size-3 has-text-weight-semibold has-text-light">
           Create Mock APIs in seconds
          </h2>
          <br>
          <b-button type="is-dark is-medium" @click="openApp" style="font-family: 'Cairo', sans-serif;">Try Mockgee on cloud</b-button>
        </div>
        <div class="column">
          <div class="image" style="width: 400px; heigth: 200px;text-align: right;">
            <AppImage :src="imgURL"
             alt="Mockgee"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>


<script>
import AppImage from './AppImage'
import config from '../config'

export default {
  data() {
    return {
      appURL: config.app.url,
      imgURL: config.images.hero
    }
  },
  components: {
    AppImage
  },
  methods: {
    openApp() {
      window.open(this.appURL)
    }
  }
  
}
</script>

<style lang="scss" scoped>
.image {
  text-align: right;
}
.hero.is-medium .hero-body {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.hero-text {
  padding-top: 5rem;
}
h1, h2{
  font-family: 'Cairo', sans-serif;
}
</style>