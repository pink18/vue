<template>
  <div>
      <h3>注册</h3>
  </div>
</template>

<script>
export default {
  beforeRouteLeave (to, from, next) {
    let bl = window.confirm('是否要离开');
    next(bl)
  }
}
</script>

<style>

</style>