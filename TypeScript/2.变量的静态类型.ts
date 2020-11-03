// 1.ts 中数据类型有哪些呢
// 基础类型：布尔 数值 字符串 数组 对象 元组 void symbol(es6)
// 对象类型：{} / Class / 函数 / array
// 自定义类型：interface

// 2.变量的静态类型指
// 变量在声明的时候 指定变量赋值的数据类型
let num: number = 0;
// num = '11'; // 报错 赋值类型不对
num = 11;

let str: string = "";
let bool: boolean = true;

str = '123'

let some:any = 1;
some = 'abc';