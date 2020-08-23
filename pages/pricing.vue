<template>
  <section class="section">
    <div class="container pricing-offering">
      <div class="columns has-text-centered">
        <div class="column">
          <h1 class="is-size-2">Pricing</h1>
          <p
            class="is-size-6"
          >We offer a Mockgee as service and subscriptions for deploying on-premises or in your private cloud</p>
        </div>
      </div>
      <div class="columns has-text-centered">
        <div class="column">
          <div class="card" v-bind:class="{ 'cloud-card': isCloud }" @click="toggleCloud(true)">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">Cloud</p>
                  <p class="subtitle is-6">Mockgee as service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card" v-bind:class="{ 'cloud-card': !isCloud }" @click="toggleCloud(false)">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                    <a @click="toggleCloud(false)"></a>
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">On-Primises</p>
                  <p class="subtitle is-6">In your enviroment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="columns has-text-centered">
        <div class="column">
          <h1 class="is-size-2">{{ priceTitle }}</h1>
          <p>{{ priceSubTitle }}</p>
        </div>
      </div>
    </div>

    <br />

    <!-- Mockgee Cloud -->
    <div v-if="isCloud" class="container pricing-plan">
      <div class="columns has-text-centered">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Basic</p>
            </header>
            <div class="card-content">
              <p class="is-size-7">Starting at</p>
              <p class="is-size-2 has-text-primary">Free</p>
              <a class="button is-primary is-medium" href="https://cloud.mockgee.com/" target="_blank">Start Free</a>
              <br />
              <br />
              <p
                class="is-size-6"
              >For individuals developing applications that require consuming internet based API.</p>
            </div>
            <footer class="card-footer">
              <a @click="viewMsg('basic')" class="card-footer-item">View Details</a>
            </footer>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Advance</p>
            </header>
            <div class="card-content">
              <p class="is-size-7">As low as</p>
              <p class="is-size-2 has-text-primary">$1.99/mo</p>
              <button class="button is-primary is-medium is-medium" @click="alertMessage">Get Started</button>
              <br />
              <br />
              <p
                class="is-size-6"
              >For teams building applications that need advanced API functionality and provide other extra features.</p>
            </div>
            <footer class="card-footer">
              <a @click="viewMsg('advance')" class="card-footer-item">View Details</a>
            </footer>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Enterprise</p>
            </header>
            <div class="card-content">
              <p class="is-size-7">As low as</p>
              <p class="is-size-2 has-text-primary">$19/yr</p>
              <button class="button is-primary is-medium" @click="alertMessage">Get Started</button>
              <br />
              <br />
              <p
                class="is-size-6"
              >For teams building applications that need advanced API functionality and provide other extra features.</p>
            </div>
            <footer class="card-footer">
              <a @click="viewMsg('enterprise')" class="card-footer-item">View Details</a>
            </footer>
          </div>
        </div>
      </div>

      <!-- View Details -->
      <div class="columns">
        <div class="column">
          <article v-if="isMsgView" class="message is-primary">
            <div class="message-header">
              <p>{{ viewDetails.title}}</p>
              <button @click="closeMsgView" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">{{ viewDetails.messageBody }}</div>
          </article>
        </div>
      </div>
    </div>

    <!-- Mockgee On prem -->
    <div v-else class="container onprem-plan">
      <div class="columns has-text-centered">
        <div class="column">
          <div class="card">
            <div class="card-content" style="padding: 5% 10%;">
              <h1 class="is-size-3">Featured Highlights</h1>
              <br />
              <div class="columns has-text-left">
                <div class="column">
                  <div class="content">
                    <ul>
                      <li>Web based accessible using any browser</li>
                      <li>It supports content JSON, XML, HTML and Text</li>
                      <li>Signle place to view all mock's APIs and reuse it</li>
                      <li>Support for 100% techincal capbility of REST API</li>
                      <li>Logs trail for recently invoked endpoint</li>
                    </ul>
                  </div>
                </div>
                <div class="column">
                  <div class="content">
                    <ul>
                      <li>It supports modification of content, method and resource path</li>
                      <li>Temporaroy enable and disable functionlity</li>
                      <li>Auto genration of endpoint</li>
                      <li>Dashboard to see all stats</li>
                    </ul>
                  </div>
                </div>
              </div>
                      <button class="button is-primary is-outlined is-medium">Learn More</button>
                      <button class="button is-primary is-medium">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <!-- Common Container -->
    <div class="container onprem-plan">
      <div class="columns">
        <div class="column is-three-fifths">
          <h1 class="is-size-2">Ready to get started?</h1>
          <p>Read our get started guide now!</p>
        </div>
        <div class="column">
          <nuxt-link class="button is-primary is-medium" to="/guide/get-started">Get Started</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      isCloud: true,
      isMsgView: false,
      viewMsgName: "",
    };
  },
  methods: {
    toggleCloud(value) {
      console.log(value)
      this.isCloud = value
    },
    viewMsg(msgType) {
      this.isMsgView = true
      this.viewMsgName = msgType
    },
    closeMsgView() {
      this.isMsgView = false
    },
    alertMessage() {
                this.$buefy.toast.open({
                    message: 'Mockgee paid subscritpion is not available in beta release',
                    type: 'is-danger'
                })
    }
  },
  computed: {
    priceTitle() {
      return this.isCloud ? "Mockgee Cloud" : "Mockgee On Premises"
    },
    priceSubTitle() {
      return this.isCloud ? "Fully managed, highly avaiable as a service" : "The best way to run Mockgee on-premises or in your private cloud"
    },
    viewDetails() {
      let details = {};
      if (this.viewMsgName == "basic") {
        details.title = "Basic";
        details.messageBody =
          "For individuals developing applications that require consuming internet based API."
      }
      if (this.viewMsgName == "advance") {
        details.title = "Advance";
        details.messageBody =
          "Mockgee paid subscritpion is not available in beta release"
      }
      if (this.viewMsgName == "enterprise") {
        details.title = "Enterprise";
        details.messageBody =
          "Mockgee paid subscritpion is not available in beta release"
      }

      return details
    }
  }
}
</script>

<style scoped>
.pricing-offering {
  margin: 0% 20%;
}
.pricing-plan {
  margin: 0% 10%;
}
.onprem-plan {
  margin: 0% 10%;
}
.cloud-card {
  border-left-style: solid;
  border-left-color: #00d1b2;
}
ul {
  list-style-type: square;
}
</style>