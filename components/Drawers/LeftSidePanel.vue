<template>
  <div>
    <md-drawer :md-active.sync="leftDrawer" md-fixed>
      <md-toolbar md-title :md-elevation="1">
        ドロワー
      </md-toolbar>
      <md-progress-bar md-mode="indeterminate" />
      <!--
      <md-field>
        <label for="country">Country</label>
        <md-select id="country" name="country">
          <md-option value="jp">
            日本
          </md-option>
          <md-option value="us">
            アメリカ
          </md-option>
          <md-option value="de">
            カナダ
          </md-option>
          <md-option value="ca">
            ドイツ
          </md-option>
        </md-select>
      </md-field>
      -->
      <!-- feed お気に入り -->
      <md-empty-state

        class="md-primary"
        md-icon="book"
        md-label="Feedはありません"
        md-description="ブックマークするにはログインして下さい"
      >
        <md-button
          class="md-primary md-raised"
          @click="$router.push('/login')"
        >
          ログイン
        </md-button>
      </md-empty-state>

      <md-empty-state

        class="md-accent"
        md-icon="bookmark"
        md-label="Feedはありません"
        md-description="ブックマークしたものは、ここに安全に保管されます"
      />
      <!-- 今回触るfeed list -->
      <md-list
        class="md-triple-line"
      >
        <md-list-item>
          <md-avatar>
            <img>
          </md-avatar>
          <div class="md-list-item-text">
            <span><a target="_blank">{{ }}</a></span>
            <span>{{ }}</span>
            <span>View Comments</span>
          </div>
          <md-button
            class="md-icon-button md-list-action"
          >
            <md-icon class="md-accent">
              delete
            </md-icon>
          </md-button>
        </md-list-item>
        <md-divider class="md-inset" />
      </md-list>

    <!-- 今回触るfeed list -->
    <!--
      <feed-list />
      -->
    </md-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      leftDrawer: false
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    open () {
      this.leftDrawer = true
    },
    close () {
      this.leftDrawer = false
    }
  }
}
</script>
