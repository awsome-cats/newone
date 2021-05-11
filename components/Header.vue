<template>
  <div>
    <md-toolbar class="fixed-toolbar" elevation="1">
      <!-- toggle button -->
      <md-button class="md-icon-button" @click.stop="openLeftDrawer()">
        <md-icon>menu</md-icon>
      </md-button>
      <!-- toggle button -->
      <nuxt-link class="md-primary md-title" to="/">
        ヘッダー
      </nuxt-link>
      <div class="md-toolbar-section-end">
        <template>
          <md-button>
            ログアウト
          </md-button>
        </template>
        <template>
          <md-button @click="$router.push('/login')">
            ログイン
          </md-button>
          <md-button @click="$router.push('/register')">
            登録
          </md-button>
        </template>
        <md-button
          class="md-primary"
          @click="openSearchDialog()"
        >
          検索
        </md-button>
        <md-button @click.stop="show = true">
          カテゴリー
        </md-button>
      </div>
    </md-toolbar>
    <template>
      <LeftSidePanel ref="leftDrawer" />
    </template>
    <!--
    <template>
      <RightSidePanel />
    </template>
    -->
    <SearchModal ref="dialog" />
  </div>
</template>

<script>
import LeftSidePanel from '@/components/Drawers/LeftSidePanel'
// import RightSidePanel from '@/components/Drawers/RightSidePanel'
import SearchModal from '@/components/modals/SearchModal'
export default {
  components: {
    LeftSidePanel,
    SearchModal
    // RightSidePanel
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    openLeftDrawer () {
      this.$refs.leftDrawer.open()
    },
    openSearchDialog () {
      this.$refs.dialog.open()
    }
  }
}
</script>

<style>

</style>
