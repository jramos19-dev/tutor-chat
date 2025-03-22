import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

//all of this is to make sure that the user
//doenst need to log on everytime they refresh the page,
//it prevents the router guard from kicking us back out to the login page by
//making sure that firebase is connected to the app before letting the
//routerguard handle the request to chatroom view
import { projectAuth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

// Create the app instance immediately
const app = createApp(App)

// Use router
app.use(router)

// Wait for Firebase auth to initialize before mounting
onAuthStateChanged(projectAuth, () => {
  // Mount the app only once
  if (!app._container) {
    app.mount('#app')
  }
})
