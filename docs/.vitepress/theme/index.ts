import DefaultTheme from 'vitepress/theme'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import HoveyUI from '../../../src/index'
import 'vitepress-theme-demoblock/theme/styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(HoveyUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
