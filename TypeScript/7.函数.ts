const foo = function () {};

// :void 不能有返回值
function bar(): void {
  // return 1 //报错
}

// 这个函数永远不能执行到最后
function err(): never {
  throw new Error();
  console.log(111);
}

// 函数
// 1.形参a为number
// 2.形参b为string
// 3.return 返回值为字符串
function get(a: number, b: string): string {
  return "123";
}
get(1, "11");

const foo1 = function(a,b){
    console.log(a);
    console.log(b);
}

foo1(1,'1');
foo1(2,'2')

// 参数为 object 类型数据结构赋值
function bar1({name,age}:{name:string,age:number}):string{
    return name
}
bar1({
    name:'li',
    age:123
})
// :作用 :指定 变量形参 key 数组元素 返回值 的静态类型