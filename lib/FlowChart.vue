<template>
  <div
    :class="{ 'loading': loading }"
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

  export default {
  name: 'flowchart',

  components: {
    Loading
  },

  props: ['id', 'code'],

  data () {
    return {
      loading: true
    }
  },

  mounted () {
    const code = this.code
    this.$el.setAttribute('id', this.id)
    const delay = () => new Promise(resolve => setTimeout(resolve, 500))
    Promise.all([
      import(/* webpackChunkName: "flowchart" */ 'flowchart.js'),
      delay(),
    ]).then(([flowchart]) => {
      const { parse } = flowchart.default
      const svg = parse(code)
      svg.drawSVG(this.id, {
        'x': 0,
        'y': 0,
        'line-width': 2,
        'line-length': 50,
        'text-margin': 10,
        'font-size': 14,
        'font-color': '#8DA1AC',
        'line-color': '#8DA1AC',
        'element-color': 'black',
        'fill': 'white',
        'yes-text': 'yes',
        'no-text': 'no',
        'arrow-end': 'block',
        'scale': 1,
        // style symbol types
        'symbols': {
          start: {
            'class': 'start-element',
            'font-color': 'white',
            'fill': '#2F495F',
            'line-width': '0px'
          },
          end: {
            'class': 'end-element',
            'font-color': 'white',
            'fill': '#2F495F',
            'line-width': '0px'
          },
          operation: {
            'class': 'operation-element',
            'font-color': 'white',
            'fill': '#00BC7D',
            'line-width': '0px'
          },
          inputoutput: {
            'class': 'inputoutput-element',
            'font-color': 'white',
            'fill': '#EB4D5D',
            'line-width': '0px'
          },
          subroutine: {
            'class': 'subroutine-element',
            'font-color': 'white',
            'fill': '#937AC4',
            'element-color': '#fff',
            'line-color': 'red'
          },
          condition: {
            'class': 'condition-element',
            'font-color': 'white',
            'fill': '#FFB500',
            'line-width': '0px'
          },
          parallel: {
            'class': 'parallel-element',
            'font-color': 'white',
            'fill': '#2F495F',
            'line-width': '0px'
          }
        }
      })
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
  & > svg
    max-width 100%
  &.loading
    background-color #f3f6f8

.operation-element, .parallel-element
  rx 5px
  ry 5px

.vuepress-flowchart-loading-icon
  width 40px
  height 40px
  fill #3eaf7c
</style>
