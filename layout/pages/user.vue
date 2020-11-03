<template>
  <div>
    <h2>用户界面 {{name}}</h2>
  </div>
</template>

<script>
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 123,
      });
    }, 500);
  });
}

export default {
  layout: "user",
  // asyncData 可能是在服务端运行 也可能在浏览器运行 第一次一定在服务端运行的
  async asyncData(context) {
    console.log("触发asyncData...");
    // let data = getUser().then((res)=>{
    //   // console.log(res);
    //   return res;
    // })
    try {
      let data = await getUser();
      console.log(data);
    }catch(err){
      console.log('error',err);
    }

    // console.log(context);
    // context 上下文对象 nuxt对象
    // 异步数据：这里的数据 一定是在页面渲染前就存在了
    // return 返回的数据 将于 vue 中data 合并到一起
    // ---> return 返回的数据可以作为当前组件的数据
    return { name: "123" };
  },
};
</script>

<style>
</style>