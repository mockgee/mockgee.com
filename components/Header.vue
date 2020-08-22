<template>
  <b-navbar spaced fixed-top>
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img src="../assets/mockgee.png" alt="Create Mock APIs in seconds" />
      </b-navbar-item>
        <b-navbar-item tag="a" href="https://github.com/mockgee/mockgee" target="_blank">
         <b-icon icon="github" type="is-dark"></b-icon>
      </b-navbar-item>
        <b-navbar-item tag="a" href="https://www.twitter.com/mockgee" target="_blank">
         <b-icon icon="twitter" type="is-info"></b-icon>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">HOME</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/guide/introduction' }">GUIDE</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/faq' }">FAQ</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/pricing' }">PRICING</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/contact' }">CONTACT</b-navbar-item>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/about' }">ABOUT</b-navbar-item>
    </template>

    <!-- <template slot="end">
      <b-navbar-item tag="a" href="https://github.com/mockgee/mockgee" target="_blank">
        <b-icon icon="github" type="is-dark"></b-icon>
      </b-navbar-item>
    </template> -->
  </b-navbar>
</template>