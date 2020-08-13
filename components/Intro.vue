<template>
    <div class="intro">
      <h1 class="title">
        {{ title }}
      </h1>
      <p class="subtitle">
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