import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js';
import './assets/main.css'

// createApp(App).use(router).mount('#app');

const app=createApp(App)
app.use(router)
app.mount('#app') // without using mount it will not render the application on the browser
