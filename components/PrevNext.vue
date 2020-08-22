<template>
  <div class="columns">
    <div class="column is-four-fifths">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'guide-slug', params: { slug: prev.slug } }"
        class="text-primary font-bold hover:underline"
      >
       &lt;- {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="column">
    <NuxtLink
      v-if="next"
      :to="{ name: 'guide-slug', params: { slug: next.slug } }"
      class="font-bold hover:underline"
    >
      {{ next.title }} -&gt;
    </NuxtLink>
    <span v-else>&nbsp;</span>
    </div>
  </div>
</template>


<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>