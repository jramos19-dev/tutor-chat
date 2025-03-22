import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const error = ref(null)

const signup = async (email, password, displayName) => {
    error.value = null

    try {
        const userCredential = await createUserWithEmailAndPassword(projectAuth, email, password)
        if (!userCredential) {
            throw new Error('Could not complete the signup')
        }
        
        await updateProfile(userCredential.user, { displayName })
        error.value = null

        console.log(userCredential.user)
        return userCredential
    } catch (err) {
        console.log(err.message)
        error.value = err.message   
    }
}

const useSignup = () => {
    return { error, signup }
}

export default useSignup