import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Vue3Lottie from 'vue3-lottie'

library.add(faEye, faEyeSlash)

const app = createApp(App)

app.use(Vue3Lottie)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
