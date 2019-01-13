<template>
  <v-app>
    <div>
      <Nav/>
      <router-view/>
    </div>
  </v-app>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/common/Nav.vue'; // @ is an alias to /src
@Component({
  components: {
    Nav,
  },
})
export default class App extends Vue { }
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>