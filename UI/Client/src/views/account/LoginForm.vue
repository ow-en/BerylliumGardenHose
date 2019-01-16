


<template>
  <v-app id="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn slot="activator" to="register" icon large>
                    <v-icon large>account_box</v-icon>
                  </v-btn>
                  <span>Register</span>
                </v-tooltip>
                <v-tooltip right>
                  <v-btn slot="activator" icon large target="_blank">
                    <v-icon large>power</v-icon>
                  </v-btn>
                  <span>Test 2</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-title primary-title v-if="$route.query.new">
                <div>
                  <div class="headline">You're all set!</div>
                  <span
                    class="grey--text"
                  >Thanks, {{$route.query.firstName}}. Login with your password to proceed.</span>
                </div>
              </v-card-title>
              <v-card-text>
                <v-form @submit.prevent="handleSubmit" id="loginForm">
                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Username"
                    type="text"
                    v-model="credentials.userName"
                    required
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="credentials.password"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <div class="errors-container" v-if="errors">{{errors}}</div>
                <v-btn
                  color="primary"
                  type="submit"
                  form="loginForm"
                  :loading="isBusy"
                  :disabled="isBusy"
                >Login</v-btn>
              </v-card-actions>
              <p class="has-text-grey"></p>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Credentials } from "../../models/credentials.interface";
// this.$route.query.page

@Component({
  components: {

  }
})
export default class LoginForm extends Vue {
  private isBusy: boolean = false;
  private errors: string = "";
  private credentials: any = {} as Credentials;
  private showThis: boolean = false;


  private created() {
    if (this.$route.query.new) {
      this.credentials.userName = this.$route.query.userName;
    }
  }


  private handleSubmit() {
    this.isBusy = true;
    this.$store
      .dispatch("auth/authRequest", this.credentials)
      .then(result => {
        this.$router.push("/dashboard/home");
      })
      .catch(err => {
        this.errors = err;
      })
      .then(() => {
        this.isBusy = false;
      });
  }
}
</script>

<style lang="scss" scoped>
</style>
 