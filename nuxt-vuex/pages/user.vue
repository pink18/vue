<template>
  <div>
      <h3>用户</h3>
  </div>
</template>

<script>
export default {
  middleware({redirect}){
    redirect('/login')
  }
}
</script>

<style>

</style>