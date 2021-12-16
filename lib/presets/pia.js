import base from './base'

export default Object.assign({}, base, {
  // style symbol types
  'line-width': 1,
  'symbols': {
    start: {
      'class': 'start-element',
      'fill': '#ccc',
      'line-width': '1px',
      'line-color': '#5c6ac4',
      'font-color': '#000',
    },
    end: {
      'class': 'end-element',
      'fill': '#ccc',
      'line-width': '1px',
      'line-color': '#5c6ac4',
      'font-color': '#000',
    },
    operation: {
      'class': 'operation-element',
      'font-color': 'white',
      'fill': '#f1f1f1',
      'line-width': '1px',
      'line-color': '#5c6ac4',
      'font-color': '#000',
    },
    inputoutput: {
      'class': 'inputoutput-element',
      'font-color': 'white',
      'fill': '#f1f1f1',
      'line-width': '1px',
      'line-color': '#5c6ac4',
      'font-color': '#000',
    },
    subroutine: {
      'class': 'subroutine-element',
      'font-color': 'white',
      'fill': '#f1f1f1',
      'line-width': '1px',
      'line-color': '#5c6ac4',
      'font-color': '#000',
    },
    condition: {
      'class': 'condition-element',
      'font-color': 'white',
      'fill': '#f1f1f1',
      'line-width': '1px',
      'line-color': '#5c6ac4',
      'font-color': '#000',
    },
    parallel: {
      'class': 'parallel-element',
      'font-color': 'white',
      'fill': '#f1f1f1',
      'line-width': '1px',
      'line-color': '#5c6ac4',
      'font-color': '#000',
    }
  }
})
