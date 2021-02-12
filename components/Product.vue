<template>
    <!-- Mockgee Cloud -->
    <div class="container product-card">
      <div class="columns has-text-centered">
        <div class="column is-4 is-vcentered">
          <section class="section">
              <p
                class="is-size-3 mt-4 pt-4 has-text-grey-light"
              >"For developers and testers looking to simulate a target API endpoint. It provides developers and testers a user interface to create fake API in SOAP/XML, JSON, and Text."
            </p>
          </section>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="is-size-3 has-text-primary">Mockgee Community Edition</p>
               <p class="is-size-2 has-text-grey-light">FREE !!</p>
              <br />
              <ul class="has-text-left" style="font-size: 0.9rem;">
                <li> - Mimic your Real Web Services without having to wait for them to be ready</li>
                <li> - Support SOAP/XML, JSON, Text and HMTL</li>
                <li> - Create multiple request-response combinations - Like a real API</li>
                <li> - Web App based. Access Mockgee server from your favorite browsers</li>
                <li> - Support multiple users. User access management</li>
                <li> - Support 100% technical capability of a real-world API</li>
                <li> - Auto-generation of endpoint URL and copy to clipboard supports</li>
                <li> - Mockgee's Request Interceptor captures system-generated requests</li>
              </ul>
              <div class="mt-5">
                <a class="button is-primary" href="/guide/installation">Install Mockgee in Docker container</a>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="is-size-3 has-text-primary">Mockgee Enterprise Edition</p>
               <p class="is-size-2 has-text-grey-light">$59</p>
               <span>PER YEAR</span>
              <br />
              <br>
              <p class="has-text-left">An advanced version of Mockgee. For teams building applications that need advanced API functionality and provide other extra features.</p>
              <br>
              <ul class="has-text-left" style="font-size: 0.9rem;">
                <li> - Get all the features from Mockgee Community Edition, plus</li>
                <li> - Create a Mock API with custom headers</li>
                <li> - Create a Mock API with standard HTTP status codes</li>
                <li> - Option to use MongoDB for persistence data storage</li>
                <li> - Get premier supports from our technical team</li>
              </ul>
              <div class="mt-5">
                <a class="button is-primary" href="/contact">BUY A LICENSE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Intro',
  computed: {
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
.product-card {
  margin: 0% 5%;
}
.section {
  height: 100%;
}
h1, p {
  font-family: 'Cairo', sans-serif;
}
li {
  margin: 0 0 5px 0;
}
</style>