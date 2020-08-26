<template>
  <div class="home">
    <Hero/>
    <div class="hero is-light">
       <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title is-size-1">
              Create a replica of your target API on the fly
            </h1>
            <p class="">You need the APIs. We have the capability to help make them happen. See how our <nuxt-link to="/faq">FQAs</nuxt-link></p>
          </div>
       </div>
     </div>

<div style="padding: 1rem 1rem;">
          <b-message type="is-info" has-icon>
            <p>Local installation using NPM and Docker image is not available in <strong>Beta release</strong>. Use our <a href="https://cloud.mockgee.com" target="_blank">Mockgee on cloud</a> service instead.</p>
        </b-message>
</div>

  <section class="section">
    <div class="container">
      <div class="intro">
          <div class="columns is-vcentered detail-spacing">
             <div class="column" >
               <Intro :title="intros[0].title" :bodyText="intros[0].bodyText" />
             </div>
             <div class="column">
               <AppImage :src="intros[0].imgURL" :imgWidth="550" :imgHeight="275" />
             </div>
          </div>
          <div class="columns is-vcentered detail-spacing reverse-columns">
             <div class="column">
               <AppImage :src="intros[1].imgURL" :imgWidth="550" :imgHeight="275" />
             </div>
             <div class="column" >
               <Intro :title="intros[1].title" :bodyText="intros[1].bodyText" />
             </div>
          </div>
          <div class="columns is-vcentered detail-spacing">
             <div class="column" >
               <Intro :title="intros[2].title" :bodyText="intros[2].bodyText" />
             </div>
             <div class="column">
               <AppImage :src="intros[2].imgURL" :imgWidth="550" :imgHeight="275" />
             </div>
          </div>
          <br>
          <br>
          <hr>
          <div class="columns detail-spacing">
                <div class="column is-three-fifths">
                  <h1 class="is-size-2">Ready to get started?</h1>
                  <p>Use Mockgee on cloud as service!</p>
                </div>
                <div class="column has-text-left">
                  <!-- <button class="button is-primary is-medium" >Get Started</button> -->
                  <a class="button is-primary is-medium" href="https://cloud.mockgee.com" target="_blank" >Sign Up</a>
                </div>
          </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import config from '../config'
import Intro from '~/components/Intro'
import AppImage from '~/components/AppImage'

export default {
  components: {
    Hero,
    Intro,
    AppImage
  },
  data() {
    return {
      intros: [
        {
          id: 1,
          title: "Get Consumable APIs Ready",
          bodyText: "Mockgee provides consumable API ready to developers within seconds.  Your backend APIs is still under development. No worries. Try Mockgee that can create a replica of your target API on the fly.",
          imgURL: config.images.describeOne
        },
        {
          id: 2,
          title: "Increase Developers Productivity",
          bodyText: "With Mockgee's APIs mock server overall effectiveness of a development team and their ability to produce results can be significantly increased. Developers can take advantage of mock APIs during development to deliver software much faster.",
          imgURL: config.images.describeTwo
        },
        {
          id: 3,
          title: "Support 100% Techincal Capbility",
          bodyText: "Mock APIs should have the same capability as target APIs. It should be accessible exactly like the original service and not require any special tooling or libraries. Mockgee supports all standard technical capabilities for an HTTP based API.",
          imgURL: config.images.describeThree
        }
      ]
    }
  },
  head() {
    return {
      title: "Mockgee: Create Mock APIs in seconds",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Mockgee is a web based API mock server that provides user interface for working with mock APIs. It is designed to provide consumable APIs available to developers even before actual APIs are ready."
        }
      ]
    }
  }
}
</script>

<style scoped>
h1, h2, p {
  font-family: 'Cairo', sans-serif;
}
.hero-body {
    padding: 6rem 3rem;
}
.detail-spacing {
  margin: 0% 5%;
}

@media(max-width: 767px) { /* <== You can change this break point as per your  needs */
  .reverse-columns {
    flex-direction: column-reverse;
    display: flex;
  }
}
</style>
