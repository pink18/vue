<template>
  <div>
      <h3>首页</h3>

      <h3>同域资源</h3>
      <!-- <h3>{{title}}</h3> -->
  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    let res = await $axios({url:'/data/list.json'});
    // console.log('读取到的静态资源',res);
    return {
      // title:res.data.title
    }
  },

  async fetch({$axios}){
    let res = await $axios({url:'/data/list.json'})
    // console.log('res',res.data.title);
  }
}
</script>

<style>

</style>