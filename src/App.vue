<template>
  <div class="min-h-screen bg-gray-400 text-indigo-900 text-lg">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
