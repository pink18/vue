<template>
  <div>
      <h1>用户界面</h1>
      <nuxt-link to="/user">用户users/one</nuxt-link>
      <nuxt-link :to="{name:'user-id',params:{id:'123'}}">动态传参 id</nuxt-link>
      <nuxt-child />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "用户界面",
    };
  }
}
</script>

<style>

</style>