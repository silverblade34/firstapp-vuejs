import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Crear una aplicacion Vue y la junta en el index html <div id="app">
createApp(App).use(router).mount('#app')
