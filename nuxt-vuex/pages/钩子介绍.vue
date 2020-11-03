<template>
  <div>
      <h1>
        {{a}}/{{b}}
      </h1>
  </div>
</template>

<script>
export default {
  // SSR
  // middleware:'auth'
  middleware(){
    console.log('middleware pages');
  },
  //参数的有效性
  validate(params,query){
    //校验业务
    console.log('validate');
    return true;
    // return false;
  },

  //读数据，返回给组件
  asyncData(context) {
    //异步业务逻辑，读取服务端数据
    console.log('asyncData');
    return {
      b:2
    }
  },

  //读数据，返回给vuex
  fetch({store}){
    //异步业务逻辑，读取服务端数据提交给vuex
    console.log('fetch');
  },

  // SSR && CSR
  beforeCreate(){
    console.log('beforeCreate');
  },

  created(){
    console.log('created');
  },

  // CSR  window this指向组件
  beforeMount(){console.log('beforeMount')},
  mounted(){console.log('mounted')},
  beforeUpdate(){console.log('beforeUpdate')},
  updated(){console.log('updated')},
  beforeDestroy(){console.log('beforeDestroy')},
  destroyed(){console.log('destroyed')},

  //服务端渲染 激活、失活 不存在
  // activated(){},
  // deactivated(){},
  
  data(){
    return{
      a:1
    }
  }
}
</script>

<style>

</style>
