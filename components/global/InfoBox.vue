<template>
  <b-message :type="type || 'is-success'">
    <slot name="info-box">This is default message</slot>
  </b-message>
</template>

<script>
export default {
  name: "InfoBox",
  props: {
    type: {
      type: String,
      required: false,
    }
  }
}
</script>