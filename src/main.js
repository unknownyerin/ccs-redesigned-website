
import { createApp } from 'vue'
import { RouterView } from 'vue-router'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const app = createApp(App)

app.component('RouterView', RouterView)

app.use(router)
app.mount('#app')
