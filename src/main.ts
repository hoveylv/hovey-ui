import { createApp } from 'vue'
import App from './App.vue'
import { Button, JSXButton, SFCButton } from './index'

const app = createApp(App)

app.component(Button.name, Button)
app.component(SFCButton.name, SFCButton)
app.component(JSXButton.name, JSXButton)

app.mount('#app')
