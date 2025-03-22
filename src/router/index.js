import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

// router guard is just a function
// to protect the chatroom from unauthorized access
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser
  console.log('current user ', user)
  if (!user) {
    next({ name: 'Welcome' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
