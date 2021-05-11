<template>
  <div>
    <md-drawer class="md-right" md-fixed>
      <md-toolbar :md-elevation="1">
        <span class="md-title">News Categories</span>
      </md-toolbar>
      <md-progress-bar md-mode="indeterminate" />

      <md-list>
        <md-subheader class="md-primary">
          カテゴリー
        </md-subheader>
        <md-list-item />
      <!--
      <md-list-item
        v-for="(newsCategory, i) in newsCategories"
        :key="i"
        @click="loadCategory(newsCategory.path)"
      >
        <md-icon :class="newsCategory.path === category ? 'md-primary': ''">
          {{ newsCategory.icon }}
        </md-icon>
        <span class="md-list-item-text">{{ newsCategory.name }}</span>
      </md-list-item>
      -->
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
export default {
  props: {

  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
</template>

<script>

</script>
