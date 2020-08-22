<template>
    <div class="intro">
      <h1 class="is-size-2">
        {{ title }}
      </h1>
      <p class="is-size-5">
        {{ bodyText }}
      </p>
    </div>
</template>

<script>
export default {
  name: 'Intro',
  props: ['title', 'bodyText']
}
</script>

<style scoped>
h1, p {
  font-family: 'Cairo', sans-serif;
}
</style>