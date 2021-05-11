<template>
  <div>
    <md-button class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle (open) {
      this.$emit('openToggle', open)
    }
  }
}
</script>
