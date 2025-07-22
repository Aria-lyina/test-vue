// import './assets/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'

// const app = createApp(App)

// app.use(createPinia())

// app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css' // Import MDI icons

const pinia = createPinia()

const app = createApp(App)

app.use(vuetify)
app.use(pinia)
app.mount('#app')