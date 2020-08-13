<template>
  <img :src="src" :alt="alt" :width="imgWidth" :height="imgHeight">
</template>


<script>
export default {
  props: {
    src: {
      type: String
    },
    alt: {
      type: String,
      default: "Default name"
    },
    imgWidth: {
      type: [Number, String],
      default:300
    },
    imgHeight: {
      type: [Number, String],
      default: 150
    }
  }
}
</script>