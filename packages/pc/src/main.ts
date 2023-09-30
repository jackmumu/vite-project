import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import LinButton  from '@lin/components/src/components/button'
import App from './App.vue'
import router from './router'
console.log(LinButton)
const app = createApp(App)
app.use(LinButton)
app.use(createPinia())
app.use(router)

app.mount('#app')
