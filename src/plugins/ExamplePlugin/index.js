/**
 * Dependencies
 */
import ExamplePlugin from './components/ExamplePlugin'

/**
 * Plugin Definition
 * @type {Object}
 */
const Plugin = {
  install (Vue, options) {
    Vue.component('example-plugin', ExamplePlugin)
  }
}

export default Plugin
