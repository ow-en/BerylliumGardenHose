<template>
  <div>
    <v-toolbar fixed app dense flat>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Some Application Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/register" v-show="!isAuthenticated">Sign Up</v-btn>
        
        <v-btn flat to="/dashboard/home" v-show="isAuthenticated">Dashboard</v-btn>
        <v-btn flat @click="logoff" v-show="isAuthenticated">Log Out {{profile.firstName}}</v-btn>
      </v-toolbar-items>
      <v-btn color="primary" to="/login" v-show="!isAuthenticated">Login</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex text-xs-center>
            
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { EventBus } from "../.././event-bus";
import { mapGetters } from "vuex";

@Component({
  computed: mapGetters({
    isAuthenticated: "auth/isAuthenticated",
    profile: "user/profile"
  })
})

export default class Nav extends Vue {
  @Prop(String) source: string

  drawer: boolean = null;
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

