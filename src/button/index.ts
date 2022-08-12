import { App } from 'vue'
import Button from './Button'

// 导出Button组件
export { Button }

// 导出Vue插件
export default {
  install(app: App) {
    app.component(Button.name, Button)
  },
}
