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

let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app')
  }
})
