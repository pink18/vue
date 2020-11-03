<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
#app{
  height: 100%;
}
</style>
