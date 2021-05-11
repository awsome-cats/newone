<template>
  <div>about page</div>
</template>

<script>
export default {
  asyncData () {
    if (process.server) {
      // eslint-disable-next-line no-console
      console.log('asyncData')
    }
  }
}
</script>

<style>

</style>
