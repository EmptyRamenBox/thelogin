<template>
  <nav
    class="flex 
    bg-indigo-700 text-white 
    items-center h-16 px-8 justify-between"
  >
    <div>
      <router-link class="logo font-bold text-xl tracking-tight" to="/"
        >The Login</router-link
      >
    </div>
    <div>
      <span v-if="user" class="text-white font-bold mr-8"
        >Welcome
        <span class="font-normal">
          {{ user.displayName }}
        </span></span
      >
      <router-link
        v-if="!user"
        class="p-2 mx-1 hover:text-indigo-700 hover:bg-white"
        to="/login"
        >Login</router-link
      >
      <button
        v-if="user"
        class="p-2 mx-1 hover:text-indigo-700 hover:bg-white"
        @click="logOut"
      >
        Logout
      </button>
      <router-link
        class="p-2 mx-1 hover:text-indigo-700 hover:bg-white"
        to="/public"
        >Public</router-link
      >
      <router-link
        v-if="user"
        class="p-2 mx-1 hover:text-indigo-700 hover:bg-white"
        to="/private"
        >Private</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    logOut() {
      this.$firebase.auth().signOut(); // logout from account
      this.$store.dispatch("setUser", "");
      this.$router.push("/"); // redirect user to main site
    }
  }
};
</script>

<style lang="scss" scoped>
:not(.logo).router-link-exact-active {
  @apply font-bold text-indigo-700 bg-white;
}
</style>
