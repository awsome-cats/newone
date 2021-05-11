<template>
  <div>
    <div v-for="headline in headlines" :key="headline.id">
      <nuxt-link :to="`headlines/${headline.slug}`">
        <div @click.prevent="submitHeadline(headline)">
          {{ headline.title }}
          {{ headline.source }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>

export default {
  /* fetch
   *  - ニュース全体のロード
   * headlines
   *  - 表示される全体のニュース
   * submitHeadline
   *  - 引数にニュース記事
  */
  async fetch ({ store }) {
    const apiUrl = '/api/top-headlines?country=jp'
    await store.dispatch('headlines/loadHeadlines', apiUrl)
  },
  computed: {
    headlines () {
      return this.$store.getters['headlines/headlines']
    }
  },
  methods: {
    submitHeadline (headline) {
      // console.log(headline)
      this.$store.dispatch('headlines/submitHeadline', headline)
        .then(() => {
          this.$router.push('/headlines/' + headline.slug)
        })
    }
  }
}
</script>

<style>

</style>
