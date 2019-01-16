<template>
  <v-app id="app"> 
    <v-content id="bg">
      <router-view class="view"/>
      <Nav/>
    </v-content>
  </v-app>
</template>
  
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from '@/components/common/Nav.vue'; // @ is an alias to /src

@Component({
  components: {
    Nav
  },
})
export default class App extends Vue { }
</script>

<style lang="css">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#bg {
  background: linear-gradient(
    to right,
    hsl(0, 0%, 96%) 0%,
    hsl(269.31, 1.63%, 95.74%) 18.7%,
    hsl(269.34, 5.33%, 94.99%) 34.9%,
    hsl(269.39, 9.36%, 93.81%) 48.8%,
    hsl(269.46, 12.86%, 92.28%) 60.6%,
    hsl(269.55, 15.66%, 90.45%) 70.4%,
    hsl(269.65, 17.88%, 88.37%) 78.4%,
    hsl(269.77, 19.65%, 86.11%) 84.8%,
    hsl(269.91, 21.09%, 83.74%) 89.8%,
    hsl(270.07, 22.29%, 81.34%) 93.6%,
    hsl(270.23, 23.31%, 78.99%) 96.3%,
    hsl(270.39, 24.16%, 76.8%) 98.1%,
    hsl(270.55, 24.87%, 74.88%) 99.2%,
    hsl(270.68, 25.4%, 73.34%) 99.8%,
    hsl(270.78, 25.75%, 72.33%) 100%,
    hsl(270.81, 25.87%, 71.96%) 100%
  );
};

</style>

