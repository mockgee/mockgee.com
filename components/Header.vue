<template>
  <b-navbar spaced fixed-top>
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img src="../assets/mockgee.png" alt="Create Mock APIs in seconds" />
      </b-navbar-item>
      <b-navbar-item
        tag="a"
        href="https://www.facebook.com/api.mockgee"
        target="_blank"
      >
        <b-icon icon="facebook" type="is-dark"></b-icon>
      </b-navbar-item>
      <b-navbar-item
        tag="a"
        href="https://www.twitter.com/mockgee"
        target="_blank"
      >
        <b-icon icon="twitter" type="is-info"></b-icon>
      </b-navbar-item>
      <b-navbar-item
        tag="a"
        href="https://www.linkedin.com/company/mockgee"
        target="_blank"
      >
        <b-icon icon="linkedin" type="is-info"></b-icon>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item href="/">HOME</b-navbar-item>

      <b-navbar-dropdown label="TOOLS">
                <b-navbar-item href="/guide/installation">
                    Mockgee
                </b-navbar-item>
                <b-navbar-item href="https://velocity.mockgee.com" target="_blank">
                    Try Velocity (Free)
                </b-navbar-item>
       </b-navbar-dropdown>
             <b-navbar-item tag="nuxt-link" :to="{ path: '/guide/installation' }"
        >INSTALL</b-navbar-item
      >
      <b-navbar-item tag="nuxt-link" :to="{ path: '/guide/introduction' }"
        >GUIDE</b-navbar-item
      >
      <b-navbar-item tag="nuxt-link" :to="{ path: '/faq' }">FAQ</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/contact' }"
        >CONTACT</b-navbar-item
      >
      <b-navbar-item tag="nuxt-link" :to="{ path: '/about' }"
        >ABOUT</b-navbar-item
      >
      <!-- <b-navbar-item tag="a" href="https://cloud.mockgee.com" target="_blank">LOGIN</b-navbar-item> -->
    </template>

    <!-- <template slot="end">
      <b-navbar-item tag="a" href="https://github.com/mockgee/mockgee" target="_blank">
        <b-icon icon="github" type="is-dark"></b-icon>
      </b-navbar-item>
    </template> -->
  </b-navbar>
</template>