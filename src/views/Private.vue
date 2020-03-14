<template>
  <div
    class="flex flex-col items-center bg-white rounded-lg p6 w-1/3 mx-auto mt-8"
  >
    <img
      :src="user.photoURL || defaultPicture"
      class="bg-indigo-200 h-32 w-32 rounded-full mx-auto m-8"
    />
    <h1 class="text-blue-900 font-medium text-2xl">
      {{ user.displayName }}
    </h1>
    <h6>
      Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
        >Freepik</a
      >
      from
      <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </h6>

    <h3 class="text-teal-700 mb-8"></h3>
  </div>
</template>

<script>
import defaultPicture from "../assets/user.png";

export default {
  name: "Private",
  data() {
    return {
      defaultPicture
    };
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>
