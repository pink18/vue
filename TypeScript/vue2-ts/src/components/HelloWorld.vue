<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h2>{{child}}</h2> -->
    <input type="text" placeholder="请输入内容，按下回车新增" @keyup.enter="addItem($event)" />
    <div>{{ qwe }}</div>

    <ul>
      <li v-for="item in list" :key="item.p">{{item.name}}</li>
    </ul>
    <button @click="clickHandle">点击通知父组件</button>
  </div>
</template>

<script lang="ts">
// Emit 作用：子传父
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";

interface ListItem {
  name: string;
  id: number;
}
// interface Data {
//   list: { name: string; id: number }[];
// }
// 使用装饰器
// @Component({
//   props:{
//     msg:{
//       type:String,
//       required:true
//     },
//     qwe:{
//       type:String,
//       required:true
//     }
//   }
// })
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private qwe!: string;

  created() {
    console.log(this.msg);
  }
  // list 相当于 data 中list
  list: ListItem[] = [
    { name: "123", id: 1 },
    { name: "321", id: 2 },
  ];
  // data() {
  //   const data: Data = {
  //     list: [
  //       { name: "123", id: 1 },
  //       { name: "321", id: 2 },
  //     ],
  //   };
  //   return data;
  // }

  addItem(event: any): void {
    let count = 3;
    this.list.push({
      name: event.target.value,
      id: count++,
    });
    event.target.value = ''
  }

  // 装饰器：触发父组件中自定义事件
  // 默认：事件为 方法名 click-handle
  // 传参：return 返回值
  @Emit()
  private clickHandle(){
    return '返回值为子传父数据'
  }

  // 用装饰器做监听
  @Watch('child')
  onChildChange(val: string,oldVal: string){
    console.log('watch 监听生效');
    console.log(val,oldVal);
  }

  @Watch('list',{ deep: true })
  onListChange(val: ListItem,oldVal: ListItem){
    console.log('监听数组内容',val,oldVal);
  }

  // 监听路由变化
  @Watch('$route')
  onRouteChange(){
    console.log('路由发生变化');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
