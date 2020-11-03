<template>
    <nav>
      <!-- 跳转 声明式跳转 router-link -->
      <!-- 可以用严格模式exact-active-class 解决首页一直active -->
      <nuxt-link to="/index" active-class="app_header--active">首页</nuxt-link>
      <nuxt-link to="/goods" active-class="app_header--active">商品</nuxt-link>
      <nuxt-link to="/user" active-class="app_header--active">用户</nuxt-link>
      <nuxt-link to="/login" active-class="app_header--active">登录</nuxt-link>
      <nuxt-link to="/reg" active-class="app_header--active">注册</nuxt-link>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.app_header--active{
    background-color: aqua;
    color: #fff;
}
</style>