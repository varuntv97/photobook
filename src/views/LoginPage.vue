<template>
  <div class="home">
    <!-- <authenticator>
      <template v-slot="{ user, signOut }">
        <h1>Hello {{ user.username }}!</h1>
        <button @click="signOut">Sign Out</button>
      </template>
    </authenticator> -->
    <login-component/>
  </div>
</template>

<script>
// @ is an alias to /src
// import { Authenticator } from "@aws-amplify/ui-vue";
// import "@aws-amplify/ui-vue/styles.css";
import LoginComponent from '@/components/LoginComponent.vue'

export default {
  name: "HomeView",
  components: {
    // Authenticator,
    LoginComponent
  },
};
</script>

<style lang="scss">

</style>
