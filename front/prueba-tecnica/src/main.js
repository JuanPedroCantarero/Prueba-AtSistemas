import { createApp } from 'vue'
import App from './ui/views/app/App.vue'
import router from './ui/router'
import './assets/styles/index.css'
import './assets/styles/tailwind.css'

createApp(App).use(router).mount('#app')
