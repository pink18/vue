<template>
  <div>
    <Logo />
    <Hello />
    <!-- 能不能通过类似router-link 方式跳转 -->
    <el-button @click="$router.push({path:'/user'})">用户user</el-button>
    <a-button type="primary" @click="$router.push({name:'users'})">用户users</a-button>
    <nuxt-link to="/users/one">用户users/one</nuxt-link>
    <nuxt-link :to="{name:'users-id',params:{id:'123'}}">动态传参 id</nuxt-link>
    <el-button @click="$router.push({path:'/list'})">商品列表</el-button>
    <el-button @click="$router.push({name:'id',params:{id:'956'}})">商品ID</el-button>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "首页",
    };
  },
};
</script>

<style>
</style>