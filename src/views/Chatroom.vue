<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<script>
import getUser from '../composables/getUser'
import NavBar from '../components/NavBar.vue'
import { watch } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
export default {
  components: { NavBar },
  setup() {
    const router = useRouter()
    const { user } = getUser()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' })
      }
    })

    return { user }
  },
}
</script>

<style></style>
