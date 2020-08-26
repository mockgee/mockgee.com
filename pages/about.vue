<template>
  <section class="section">
        <div class="container about">
          <div class="columns is-vcentered">
            <div class="column is-7 about-desc">
                <h1 class="is-size-2 has-text-grey-dark">About</h1>
                <p>Mockgee is an API mock server that is designed to provide consumable APIs available to developers even before actual APIs are ready. It is designed and developed by <a href="http://tanveeriqbal.info">Tanveer Iqbal</a> and is now maintained by <a href="https://elfedge.com" target="_blank">Elfedge Solutions Pvt. Ltd.</a></p>
                <img :src="src" width="600" height="400" />
            </div>
            <div class="column">
              <h1 class="is-size-4 has-text-grey-dark">Office, New Delhi</h1>
              <p>ElfEdge Pvt. Ltd</p>
              <p>A-33, Saidulajab, Saket MB Road</p>
              <p>New Delhi-110030</p>
              <br>
              <br>
              <h1 class="is-size-4 has-text-grey-dark">Office, Noida</h1>
              <p>ElfEdge Pvt. Ltd</p>
              <p>Plot No.50, Block - C, 1st Floor, Sector-6</p>
              <p>Noida, Uttar Pradesh-201301</p>
            </div>
          </div>
        </div>
  </section>
</template>


<script>
export default {
  name: "About",
  data() {
    return {
      src: 'https://s3-eu-west-1.amazonaws.com/mockgee.io/images/public/mockgee_profile.png'
    }
  },
  head() {
    return {
      title: "About | Mockgee",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Mockgee is an API mock server that is designed to provide consumable APIs available to developers even before actual APIs are ready. It is designed and developed by Tanveer Iqbal</a> and is now maintained by Elfedge Solutions Pvt. Ltd."
        }
      ]
    }
  }
}
</script>


<style scoped>
.about {
  margin-bottom: 3%;
}
h1, h2, p {
  font-family: 'Cairo', sans-serif;
}
.about-desc {
  padding: 1rem 2rem;
}
</style>