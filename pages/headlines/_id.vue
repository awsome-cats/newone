<template>
  <div>
    <div>
      <h3>{{ headline.title }}</h3>
      <p>{{ headline.description }}</p>
      <img :src="headline.urlToImage">
    </div>
    {{ this.$route.params.id }}
  </div>
</template>

<script>
export default {
  // async fetch ({ store, params }) {
  //   const apiUrl = '/api/top-headlines?country=jp' + params.slug
  //   await store.dispatch('headlines/loadHeadlines', apiUrl)
  // },
  computed: {
    headline () {
      return this.$store.getters['headlines/headline']
    }
  },
  mounted () {
    // console.log('headline', this.headline)
  }
}

</script>
