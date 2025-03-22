import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const error = ref(null)

const login = async (email, password) => {
    error.value = null 
     
    try {
        const userCredential = await signInWithEmailAndPassword(projectAuth, email, password)
        error.value = null
        console.log(userCredential)
        return userCredential
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin 