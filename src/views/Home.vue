<template>
  <div class="mt-4 flex flex-col justify-center items-center">
    <UndrawWelcome primary-color="#4c51bf" height="24em" />
    <h1 class="text-6xl font-hairline text-indigo-900">Welcome</h1>
    <p class="text-blue-900 text-xl tracking-widest">
      Simple example of how to register and access a website, there is a public
      and private page.
    </p>
  </div>
</template>

<script>
import UndrawWelcome from "vue-undraw/UndrawWelcome";

export default {
  name: "Home",
  components: {
    UndrawWelcome
  }
};
</script>
