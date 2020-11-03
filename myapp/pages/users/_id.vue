<template>
  <div>用户页面 {{name}}</div>
</template>

<script>
export default {
  layout: "user",
  async asyncData(context) {
    // context 上下文对象；nuxt对象
    // 异步数据；这里的数据，一定是在页面渲染前就存在了；
    // 这里的代表的是服务端的数据。
    let { params, $axios } = context;
    
    try {
      // ？？？？ 404 不是服务端没有响应  
      let data =await $axios.$get(`/api/users/${params.id}`,);
      // data 不是 respone对象；而是服务器响应的json 数据
      console.log(data)
      if (data) {
        return data;
      }
    //   error({statusCode:404,message:'id不存在'})
    } catch (err) {
      throw new Error(err);
    }
  },
};
</script>

<style>
</style>