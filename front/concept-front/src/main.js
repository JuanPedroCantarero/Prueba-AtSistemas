import { createApp } from 'vue'
import App from './ui/views/app/App.vue'
import router from './ui/router'
import './assets/styles/index.css'
import '@vueform/multiselect/themes/default.css'
import './assets/styles/tailwind.css'
import { i18n } from './infraestructure/i18n'

createApp(App).use(i18n).use(router).mount('#app')
