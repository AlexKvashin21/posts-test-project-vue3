import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style.scss'
import {api} from './api/api.js'

const app = createApp(App)

app.config.globalProperties.$api = api

app.use(store)
app.use(router)

app.mount('#app')