import { ref } from "@vue/reactivity";
import { projectAuth } from "../firebase/config";
import { signOut } from 'firebase/auth';

const error = ref(null)

const logout = async () => {
    error.value = null
    try {
        await signOut(projectAuth)
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useLogout = () => {
    return { logout, error }
}

export default useLogout