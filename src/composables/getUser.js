import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

const user = ref(projectAuth.currentUser)

onAuthStateChanged(projectAuth, (_user) => {
  console.log('user state changed current user', _user)
  user.value = _user
})

const getUser = () => {
  return { user }
}

export default getUser
