import { createApp } from 'vue'
import App from './App.vue'
import BaseIcon from './Lesson5/BaseIcon.vue'
import './Lesson5/css/main.css'

const app = createApp(App)
app.component('BaseIcon', BaseIcon)
app.mount('#app')
