<template>
  <div
    :class="{ 'loading': loading, [preset]: preset }"
    class="vuepress-flowchart"
  >
    <Loading
      class="vuepress-flowchart-loading-icon"
      v-if="loading"
    />
  </div>
</template>

<script>
  import Loading from './Loading'
  import presets from './presets/index'

  export default {
  name: 'flowchart',

  components: {
    Loading
  },

  props: {
    id: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    preset: {
      type: String,
      default: 'vue'
    }
  },

  data () {
    return {
      loading: true,
    }
  },

  mounted () {
    const preset = presets[this.preset]
    if (!preset) {
      console.warn(`[vuepress-plugin-flowchart] Unknown preset: ${this.preset}`)
      return
    }

    const code = this.code
    this.$el.setAttribute('id', this.id)
    const delay = () => new Promise(resolve => setTimeout(resolve, 500))
    Promise.all([
      import(/* webpackChunkName: "flowchart" */ 'flowchart.js'),
      delay(),
    ]).then(([flowchart]) => {
      const { parse } = flowchart.default
      const svg = parse(code)
      svg.drawSVG(this.id, preset)
      this.loading = false
    })
  }
}
</script>

<style lang="stylus">
.vuepress-flowchart
  overflow scroll
  text-align center
  font-size 0px
  min-height 200px
  display flex
  justify-content center
  align-items center
  transition all 1s
  padding 10px
  & > svg
    max-width 100%
    height auto
  &.loading
    background-color #f3f6f8

.vuepress-flowchart
  &.vue
    .start-element, .end-element, .operation-element, .parallel-element
      rx 5px
      ry 5px

.vuepress-flowchart-loading-icon
  width 40px
  height 40px
  fill #3eaf7c
</style>
