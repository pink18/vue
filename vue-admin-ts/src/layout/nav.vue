<template>
    <nav>
      <router-link to='/'>Home</router-link>
      <router-link to='/about'>About</router-link>
      <router-link to='/shop/list'>Shop</router-link>
    </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav{
    width: 100px;
    height: 200px;
}
nav>a{
    display: block;
}
</style>