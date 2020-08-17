<template>
  <div class="home">
    <Hero/>
    <div class="intro-first hero is-light">
       <div class="hero-body">
          <div class="container">
            <h1 class="title is-size-1 has-text-centered">
              Build Higher Quality APIs
            </h1>
          </div>
       </div>
     </div>
  <section class="section">
    <div class="container">
      <div class="intro">
          <div class="columns is-vcentered">
             <div class="column" >
               <Intro :title="intros[0].title" :bodyText="intros[0].bodyText" />
             </div>
             <div class="column">
               <AppImage :src="intros[0].imgURL" :imgWidth="550" :imgHeight="275" />
             </div>
          </div>
          <div class="columns is-vcentered">
             <div class="column">
               <AppImage :src="intros[1].imgURL" :imgWidth="550" :imgHeight="275" />
             </div>
             <div class="column" >
               <Intro :title="intros[1].title" :bodyText="intros[1].bodyText" />
             </div>
          </div>
          <div class="columns is-vcentered">
             <div class="column" >
               <Intro :title="intros[2].title" :bodyText="intros[2].bodyText" />
             </div>
             <div class="column">
               <AppImage :src="intros[2].imgURL" :imgWidth="550" :imgHeight="275" />
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
          title: "Shorten Time to Production",
          bodyText: "Work more efficiently with Mockgee's API mock servers. Mockgee mocks support split-stack development so front-end and back-end developers can work in parallel and view responses without spinning up the back end.",
          imgURL: config.images.describeOne
        },
        {
          id: 2,
          title: "Increase Developers Productivity",
          bodyText: "With Mockgee's API mock server overall effectiveness of a development team and their ability to produce results can be significantly increased. Developers can take the advantage of mocking during development that integrates with other system components via APIs.",
          imgURL: config.images.describeTwo
        },
        {
          id: 3,
          title: "Support 100% Techincal Capbility",
          bodyText: "A mock should support the same transport protocols, schemas, etc as the actual API, and be. The mock API should be accessible exactly like the original service and not require any special tooling or libraries.",
          imgURL: config.images.describeThree
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
</style>
