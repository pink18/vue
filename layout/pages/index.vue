<template>
  <div class="container">
    <h1>欢迎</h1>
    <el-button @click="$router.push({path:'/user'})">用户管理</el-button>
    <el-button @click="$router.push({path:'/ykt'})">一卡通</el-button>
    <el-button @click="$router.push({path:'/ylfw'})">养老服务</el-button>
    <el-button @click="$router.push({path:'/ylsj'})">养老数据</el-button>
  </div>
</template>

<script>
export default {}
</script>

<style>

</style>

