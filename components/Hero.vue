<template>
  <section class="hero is-medium is-bold is-primary">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column hero-text is-7">
            <h1 class="is-size-1 has-text-weight-bold has-text-grey-dark">
              Mock <span class="has-text-light">Your</span> APIs with Mockgee
            </h1>
            <h6
              class="is-size-5 has-text-weight-bold has-text-light"
            >Create the mock API endpoint with multiple combinations of request and response. Simulate like true backend API server.</h6>
            <br />
            <b-button
              type="is-warning is-medium"
              @click="openApp"
              style="font-family: 'Cairo', sans-serif;"
            >Try Mockgee now!</b-button>
          </div>
          <div class="column">
            <div class="image" style="width: 400px; heigth: 200px;text-align: right;">
              <AppImage :src="imgURL" alt="Mockgee" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import AppImage from "./AppImage";
import config from "../config";

export default {
  data() {
    return {
      appURL: config.app.url,
      imgURL: config.images.hero,
    };
  },
  components: {
    AppImage,
  },
  methods: {
    openApp() {
      window.open(this.appURL);
    },
  },
};
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
h1,
h2 {
  font-family: "Cairo", sans-serif;
}
</style>