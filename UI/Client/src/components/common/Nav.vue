<template>
  <v-toolbar fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/register" v-show="!isAuthenticated">Sign Up</v-btn>
      <v-btn flat to="/login" v-show="!isAuthenticated">Login</v-btn>
      <v-btn flat to="/dashboard/home" v-show="isAuthenticated">Dashboard</v-btn>
      <v-btn flat @click="logoff" v-show="isAuthenticated">Log Out {{profile.firstName}}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "../.././event-bus";
import { mapGetters } from "vuex";

@Component({
  computed: mapGetters({
    isAuthenticated: "auth/isAuthenticated",
    profile: "user/profile"
  })
})
export default class Nav extends Vue {
  private logoff() {
    this.$store.dispatch("auth/authLogout").then(() => {
      this.$router.push("/");
    });
  }
  private created() {
    EventBus.$on("logged-in", (payLoad: any) => {
      // this doesn't currently do anything in this demo but does get fired on successful login.
      // leaving it here to show how to allow communication between unrelated components - ie. Store -> Component
      console.log("logged-in message received...");
    });
  }

  private destroyed() {
    EventBus.$off("logged-in");
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-exact-active {
  color: #209cee !important;
}
</style>

