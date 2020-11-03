<template>
  <div>{{this.$route.params.id}}</div>
</template>

<script>
export default {
  // validate()验证数据 这里可以验证动态路由的参数
  validate({params}){
    // console.log(params);
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>
  
</style>