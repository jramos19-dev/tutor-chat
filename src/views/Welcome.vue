<template>
  <div class="welcome container">
    <p>Welcome</p>

    <div v-if="showLogin">
          <h2>Login</h2>
          <LoginForm @login="enterChat"/>
          <p>Dont Have an Account ? <span @click="showLogin = false">Create One </span>Instead</p>
    </div>
    <div v-else>
      <h2>Sign UP</h2>
     <SignupForm @signup="enterChat"/> 
        <p>Already have an Account ? <span @click="showLogin = true">Login </span>Instead</p>

    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
export default {
  components: {SignupForm , LoginForm},
  setup(){

    const router = useRouter()
    const showLogin = ref(true)

    const enterChat = () => {
      router.push({name: 'Chatroom'})
    }
    return{showLogin, enterChat }

  }

}
</script>

<style>

.welcome {
  text-align: center;
  padding: 20px 0 ;
  
}
/* form styles */

.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label{
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto; 
}
</style>