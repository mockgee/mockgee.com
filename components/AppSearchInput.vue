<template>
  <div>
    <b-input
      v-model="searchQuery"
      type="search"
      icon="magnify"
      icon-clickable
      placeholder="Search..."
    />
    <ul v-if="guides.length">
      <li v-for="guide of guides" :key="guide.slug">
        <NuxtLink :to="{ name: 'guide-slug', params: { slug: guide.slug } }">
          {{ guide.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        searchQuery: '',
        guides: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.guides = []
          return
        }
        this.guides = await this.$content('guide')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
  }
</script>