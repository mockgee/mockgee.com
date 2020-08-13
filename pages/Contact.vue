<template>
  <section class="section contact">
    <div class="container">
      <b-loading :is-full-page="true" :active.sync="isLoading" :can-cancel="true"></b-loading>
      <div class="columns is-vcentered">
        <div class="column is-half">
          <h1 class="is-size-2 has-text-grey-dark">Contact</h1>
          <p>Please fill out the quick form and we will be in touch with you
          lightening speed.</p>
          <br>
          <AppImage :src="imageURL" width="400" height="200"/>
        </div>
        <div class="column">
          <div class="form"
          >
            <b-field label="Name" label-position="on-border">
              <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Email" label-position="on-border">
              <b-input type="email" v-model="email"></b-input>
            </b-field>
            <b-field label="Subject" label-position="on-border">
              <b-input v-model="subject"></b-input>
            </b-field>

            <b-field label="Message" label-position="on-border">
              <b-input type="textarea" v-model="message"></b-input>
            </b-field>

            <div class="field">
               <b-checkbox v-model="tac">
                 I agree to the <a href="#">terms and conditions</a>
               </b-checkbox>
            </div>

            <div class="field is-grouped">
              <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" />
              <div class="control">
                  <button class="button is-primary" type="submit" @click="onSubmit">Submit</button>
              </div>
              <div class="control">
                <button class="button is-link is-light" @click="cancel">Cancel</button>
              </div>
            </div>
            <p v-if="errors.length > 0">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key="error.id">{{ error }}</li>
              </ul>
            </p>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import config from '../config'
import AppImage from '~/components/AppImage'
export default {
  components: {
     AppImage
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      isLoading: false,
      errors: [],
      tac: false,
      // success: true,
      imageURL: config.images.constact
    };
  },
  methods: {
    async sendMessage() {
      this.isLoading = !this.isLoading
      const messageBody = `
       Name: ${this.name}
       Email: ${this.email}
       Message: ${this.message}
       `
      try {
        const result = await this.$axios.$post(config.apiURL, {
          message: messageBody,
          subject: "Mockgee: " + this.subject
        })
        if (result == "success") {
          this.success = true
          // reset fields value
          this.name = ''
          this.email = ''
          this.message = ''
          this.tac = false
          this.$buefy.toast.open({
              duration: 5000,
              message: 'Your message has been successfully submitted to concern person. We will shortly get back to you.',
              type: 'is-success'
          })
        } else {
          this.errors.push(result.data)
        }
      } catch (error) {
        this.errors.push(error.message)
      }
      this.isLoading = !this.isLoading
    },
    cancel() {
      this.$router.push('/')
    },
    checkForm() {
      // reset errors
      this.errors = []

      let isValid = false
      if (this.name && this.email && this.message && this.subject && this.tac) {
      // validate email
        const re = /\S+@\S+\.\S+/
        if(re.test(this.email)) {
         isValid = false
         this.errors.push('Invalid email.')
        }
        isValid = true
      }
      if (!this.name) {
        this.errors.push('Name is required.')
      }
      if (!this.email) {
        this.errors.push('Email is required.')
      }
      if (!this.subject) {
        this.errors.push('Subject is required.')
      }
      if (!this.message) {
        this.errors.push('Message is required.')
      }
      if (!this.tac) {
        this.errors.push("Please agree to terms and condition.")
      }
      return isValid
      
    },
    onError(error) {
      console.log('Error happened:', error)
    },
    async onSubmit() {
      try {
        if(!this.checkForm()){
          return
        }
        const token = await this.$recaptcha.getResponse()
        // console.log('ReCaptcha token:', token)
        await this.$recaptcha.reset()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Login error:', error)
      }
    },
    onSuccess(token) {
      // console.log('Succeeded:', token)
      // here you submit the form
      this.sendMessage() // submit form
    },
    onExpired() {
      console.log('Expired')
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  min-height: 70vh;
}
li {
  color: red;
}
</style>