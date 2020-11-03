<template>
  <div id="app">
      <r-nav/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RNav from '@/layout/nav.vue'; // @ is an alias to /src

@Component({
  components: {
    RNav,
  },
})
export default class App extends Vue {}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}
#app>div{
  position: absolute;
  left: 200px;
  top: 0;
}
</style>
