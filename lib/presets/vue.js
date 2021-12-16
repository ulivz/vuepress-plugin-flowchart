import base from './base'

export default Object.assign({}, base, {
  // style symbol types
  'symbols': {
    start: {
      'class': 'start-element',
      'font-color': 'white',
      'fill': '#2F495F',
      'line-width': '0px',
      'rx': '10px',
      'ry': '10px'
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
