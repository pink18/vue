<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 ref="msg">你好世界</h2>
    <h3>{{testStore}}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from "vue-property-decorator"
import {State} from 'vuex-class'

@Component({
  components:{

  }
})

// 装饰器 相当于一个函数并且带有返回值
// ts 中的变量 看见冒号(:)作用：限制变量赋值
export default class About extends Vue{
  // @Ref() readonly msg!: string;
  // @Ref() readonly qwe!: string;
  // created() {
  //   console.log(this.msg)
  // }
  @State(state=>state.test) testStore!: any
}
</script>