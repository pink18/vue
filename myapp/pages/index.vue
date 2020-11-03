<template>
  <div class="container">
    <el-button @click="$router.push('/ylfw')">社区养老服务</el-button>
    <el-button @click="$router.push('/ylsj')">养老数据</el-button>
    <el-button @click="$router.push('/ykt')">一卡通</el-button>
    <el-button @click="$router.push('/user?id=1+')">用户管理</el-button>
        <el-button @click="$router.push({name:'users-id',params:{id:1}})">用户列表</el-button>

  </div>
</template>

<script>
export default {
  head: {
    title: "养老综合平台",
  },
};
</script>

<style>
</style>
