<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld qwe="App" msg="Welcome TypeScript" @click-handle="onClickHandle"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src


export default {
  components: {
    HelloWorld,
  },
  methods:{
    onClickHandle(data: any){
      console.log(data,'=======home')
    }
  },

}
</script>
