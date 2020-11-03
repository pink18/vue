<template>
  <div class="shop">
      <router-link to='/shop/list'>Shop-list</router-link>
      <router-link to='/shop/add'>Shop-add</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.shop>a{
    display: block;
}
</style>