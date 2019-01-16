<template>
  <v-container grid-list-md text-xs-center id="home">
    <v-layout row wrap>
      <v-flex lg4>
          <h1 id="header">&nbsp;Engage Your<br>Viewers 👉</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue { }
</script>

<style lang="css" scoped>
  #home {
    height: 2000px;
  }

  #header {
    font-size: 92px;
  }
</style>