## ts 基础入门

#### 认识ts

- ts 是一个js 的超级集群；他不会被浏览器解析；需要先编译为js在进行使用

[官方文档](https://www.typescriptlang.org/play/ )

[中文文档]( https://www.tslang.cn/ )

#### ts带来了什么呢？

优势：

- 优势1：js需要运行就可以看到错误，ts在开发阶段可以快速发现潜在问题
-  优势2： 编写代码提示准确到 对象下 key 
- 优势3：通过静态类型的定义大家可以更好的阅读代码了
- 注意事项：

-   .ts  .定义变量不能与其他  .js  .ts 定义的变量重名  ，函数也是一样  报错

~~~js

~~~



####  运行环境

- 安装 ndoe  
- 安装typeScript 

~~~
npm i typescript@3.6.4  -g
~~~

- 运行

~~~
tsc 1denmo.ts    // 使用typeScript 对  1demo.ts 进行编译
node 1demo.js     // 运行 1demo.ts 文件

简化过程
npm i -g ts-node@8.4.1 

ts-node 1demo.ts  // 直接于运行
~~~



### 变量静态类型

变量声明时候；需要指定是什么静态类型的数据，

静态类型分为：基本类型；对象类型  自定义类型

核心：

- 变量静态类型一旦确定；只能赋值为该J静态类型数据；不然报错
- 变量静态类型一旦确定，不能修改
- ***  变量在指定类型时，同时具备该类型上的所有属性和方法 （深度解析）

~~~ts
// 静态类型深度解析
// 1count 变量不仅仅只能为number 静态类型
// 2:count会具备number 类型下所有的属性和方法
const count:number = 22020;
// count.toString()

// 自定义Point[静态类型]
interface Point {
    x:number,
    y:number
}

// point 变量是 是自定义Point静态类型
// poion 变量也同时具备了Poin静态类型中属性
const poion: Point = {
    x:3,
    y:4
}
console.log(poion.x) // 证明 point 变量中具有Point静态类型的属性
~~~

#### 基本类型与对象类型

静态类型； 可以直观判断变量属性的作用是什么

基础类型:number  string null undefined  sybol  boolean void  

对象类型： {} / Class / 函数/ array

~~~ts
// 对象类型：指定对象中属性的静态类型，并进行赋值处理
const sage : {
    name:sting,
    age:number
}={
    name:'yanqi',
    age:12
}
// 数组:数组中元素为 number
const objs:number[] = [1,2,4]

// 构造的对象类型
class Person = {}
const perphon:Person = new Person()

// getSage 函数的返回值为 Number 静态类型  返回值为123
const getSage:()=>number=(){
    return 123 
}
~~~

00

#### 类型注解与类型推断

type amotation  类型注释：我们老告诉 TS 变量是什么类型

type inference 类型推断 TS 会自动去尝试分析变量的类型

如果 TS  能偶自动分析变量类型，我们就什么也不需要做了

如果 TS 无法分析变量类型的化，我们就需要使用类型注解

~~~ts
let count :number;   // 声明变量并指定静态类型
count = 123  //  给变量赋值number类型数据
let countInference = 123  // 类型推断

// 类型推断
const firstNumber = 1;
const soendNumber = 2;
const total = firstNumber + soendNumber;  // ----> 类型推断为 number类型

// 如果不夹类型注解，那么 f和s is any 表示任意一个类型
// function getTotal(f,s){}
function getTotal(f:number,s:number){  // ---> 类型注解

    return f+s
}
const to =getTotal(1,2) // 可以自动推断为nuMber 类型---> 类型推断
~~~



注意：函数的形参 没办法判断 是什么类型，所以需要使用【类型注解】的方式



#### 函数相关类型

- 定义方式与js一样
- 形参如何类型注解？ 返回值符合规定类型注解？ 解构赋值如何类型注解？ 
- 注意 形参为undefined  报错

~~~ts
function hellow(){}
const hell = function(){}
// 如果没有指定返回值的惊天类型，---> 函数可以推断初返回值的类型
// 如果需要；确定返回值的类型；就需要其他的处理

// ----> 以下代码解决；返回值如何类型注解；形参如何类型注解
function add(a:number,b:number):number{
   //  return a+b+'' // 坑  因为指定了返回值为number
    return a+b
}
const total = add(2,1)

// void 指的是 函数没有返回值
function say ()：void{
    console.log('aaaa')
    // return 1 // 坑: 因为 :void 设置没有返回值 
}

// 这个函数永远不可能执行到最后
function errEmiter():never{
    // throw new Error(); // 场景1 有错误了；所以不可能执行完毕
    // while(true){}     //  场景2 一直为true 所以下面一直不可能执行完毕
}
~~~

~~~ts
// js 代码；问题：如何给解构语法 静态类型呢
/*
function add({first,s}){
    return first + s
}
const total = add({first:1,s>2})
*/

/* 注意：坑： 这里写法错误的 必须按找下面写法
function getNum({a:;number}):number{
    return a
}*/

// 以下为解构赋值类型注解的写法
function add({first,s}:{first:number,s:number}):number{
    return first + s
}
const total = add({first:1,s>2})

~~~



#### 基本语法练习

基础类型 bool num str void undefined symbol null

- 坑一: 类型为 any 所以只能鞋子在一

~~~ts
/* 坑一:  类型为 any 所以只能这在一样  
let count;
count = 123; 
*/
let count:number;
count = 123
~~~

对象类型 class {} class funciton array

- 函数总结
  - 函数:形参;一般需要夹 定义静态类型 
  - 返回值一般是 类型推断

~~~ts
const fun = (str:string):number =>{
    return parseInt(str,10)
}  
// 另一个写法
// = 后为函数体;集体函数的的实现
const  fun1 :(str:string)=>number =(str)=>{
    return parseInt(str,10)
}
~~~

- 坑三：其他的case 

~~~ts
  const row = '{name:"yanqi"}'
 // const rowData = JSON.parse(row) // 坑:: rowSata any
  // 正确
interface Person {
    name:"string"
}
const rouData:Person = JSON.parse(row)
~~~

-    

~~~ts
let tmp :number|string = 123
tmp = '将来的字符串类型'
~~~





#### 数组和元组

##### 数组

- 问题：如何定义一个数组中 为多类型的数组元素

~~~ts
const arr:(number|string)[] = [12,'a'];
~~~

- 坑一：数组类型注解；数组元素必须一致；不然会报错

~~~ts
const strArr:string[] = ['a','1','1'];
const undefinedArr:undefined:[] = [undefined];
~~~

- 问题：数组元素 为对象类型内容怎么办？

~~~ts
const objectArr:{name:string,age:number}[] = [
    {name:'yanqi',age:12},】
    // - 坑：注意每个字段需要 类型注解
    {name:"fanzhen",age:22,dec:'及美丽与智慧与一身'}  // 坑；多一个不i选哪个；少一个也不行
]
~~~



- 简单方式： 类型别名

~~~ts
// 类别名
type user = {name;string,age:number}

class t {
    name:string,
    age:12
}

const objectArr：user[]=[
    new r(),// 允许
    {
        naem:"yanqi",
        // age:12,  // 坑：少一个也不行
        // dec:'aaa' // 坑：多一个也不行 必须正好
    }
]
~~~

##### 元组

- 元组是 数量个数优先的数组;同时每一项 的类型是固顶的形式 
- 作用:  约束数组中的每一项内容

~~~ts
// 问题：不能对号约束每个数组收
// const teacherInfo:(number}string)[] = [12,'yanqi','fanzhen']  // 不能约束数组的每一项

// 解决方式：元组
const teacherInfo:[string,string,number] =['yanqi','fanzhen',22]
// 应用
// csv  的数据是都指定好的
// yanqi,aaa,12
// fanzhen,cc,23
// 转化后
// [
//     ['yanqi','aaa',12],
//     ['fanzhen','cc',12]
// ]
const teacherInfo1 :[string,string,number][] = [
    ['yanqi','aaa',12],
    ['fanzhen','ccc',13]
]
~~~

#### interface接口

当有通用的 类型集合可以使用interface

- 问题：如何指定函数形参 中必须含有某个字段以及类型注解？

~~~ts
function getPerson(person:{name:string}){ // 表示person 中必须有name 为 string
    console.log(person.name)
}
function setPerson (person:{name:string},name:string){
    person.name = name
}
~~~

- 问题：如何结果，【相同数据解构】重复定义问题？ inerface

~~~ts
interface Person{
    name:string,
    age:number 
}
function getPerson(person:Person){ // 表示person 中必须有name 为 string
    console.log(person.name)
}
function setPerson (person:Person,name:string){
    person.name = name
}
const person  =  {
    name:'sage',
    age:12   // 坑：必须写 不然报错？ 那么如果说出现一个变量可有可无的情况 怎么写？
}
getPerson(person)
setPerson(person,'yan')
// 注意以上这样写传参必须要保持一致，name  age 一个也不能少
~~~

- 问题：类型别名 type 与 interface接口区别是什么？

~~~ts
type a = {
    name:string
}
type c = string
interface b = {
    name:string
}
// ts中规范；如果能用 interface 接口 绝不用 type，实在不行时候用type 
// type 可以表示对象 可以表基础类行；interface 只能为对象或者函数
~~~

- 问题：一个变量可有可无的情况 怎么写？ 因为上面的写法是必须写的

~~~ts
// readonly 作用 设置属性为只读行
interface Person {                       //---> interface 接口同上
   readonly cname:string,
   age?:number   // ? 表示 age 属性可有可无了
}
const s = {
  cname:"mm"
}
// setPerson(s,'ss') // 坑：readonly 的属性不能修改只能获取
~~~

- 坑：

~~~ts
const c = {
    name:'aa',
    sex:'nv'
}
// getPerson(c) //  没问题

// 注意  这种写法  当以字面量形式；直接传递一个对象给变量时候； ts会对该对象进行强校验
// Person 类型要求 必须有  name  不能有其他的属性， 
// 但是如果直接传 变量就没影响饿了
getPerson({name:'dd',sex:'nv'})  // ---> 传递了一个不确定的参数
~~~

- 问题：如何解决；传递不确定的属性呢？  接口中除了有属性能不能传递函数呢？

~~~ts
interface Person{
    name:string,
    age?:number,
    [propName:string]:any // Pername 这个接口 除了有 name age 还可以有其他类型的属性
    say():string, // 接口中传递 say 方法 并且方方法的返回值为 string类型
}
const l = {
    name:'ff',
    newSex:'新的属性',
    say(){
        retur 'say string'  // 坑：如果没有 return 会报错的
    }
}    

getPerson(person) 
~~~

##### 类中应用interface接口

~~~ts
// class类中使用接口 
//  user 类使用 person接口
// 注意：必须具备 接口中属性
class user implements Person {
    cname = 'sage';
    // sex = 'aa'  // 只读优点问题
    say(){
        return 'hello'
    }
}
~~~



- 接口继承

~~~ts
// 接口可继承
// student 继承了  person 中所有属性；在使用student 需哟啊加上所有属性
interface Student extends Person {
    study():string
}
~~~

- 接口为函数

~~~ts
// 接口为 sayHi 函数
interface sayHi {
    // 形参为word  string类型  返回值为 string 类型
    (word:string):string
}

// 使用 函数接口
const say:sayHi = (word:string)=>{return 'hwl'}

~~~

总结：

- 接口 :  定义属性  readyonly   xxx? 可有可无属性     [propNmae:string]:any  不确定属性为任意类型
- 接口在class  类中使用   类中必须要有 接口所有必填的属性
- 接口继承    会继承所有的属性
- 接口为函数怎么用
- *** 编译后 接口不会编译为真正的js 代码 只是ts 提供的一个校验的工具
- 应用： 定义一个对象中字段类型时候。函数接受参数是一个对象  对这个对象类型进行定时的时候.

#### 类的定义与继承

- 类的定义

~~~ts
class Person {
    name = 'sage';
    getName(){
        return this.name
    }
}
const person = new Person()
console.log(person.getName())
~~~

- 类的继承

~~~ts
// 类的继承

class T extends Person{
    getT(){
        return 'sage'
    }
    getName(){
        // super 相当于父类；super 一搬用来干什么呢？ 一般用来调用父类的方法
        return super.getName() + 'yan'
    }
}
// 子类 t       继承的
// 父类 Person  被继承的
const t = new T()
console.log(t.getName());
console.log(t.getT())
~~~

- 小问题：一般你是怎么使用  super 的呢？



#### 类中访问类和构造器

- 学习基础代码

~~~ts
// class Student {
//     name:string;
//     say(){
//         console.log(this.name)
//     }
// }

// const struden = new Student()
// struden.name = 'yan'
// console.log(struden.name)
~~~



- private   允许在【自己类内】被嗲用

~~~js
class Student1 {
    private name= 'bgm';
    say(){
        // 内部访问
        console.log(this.name)
        return this.name
    }
}
const bgm = new Student1()
// console.log(bgm.name)  // 报错
// 间接访问name
console.log(bgm.say())
~~~

- protected  允许类内 与继承的子类中调用

- public 允许在了【类的内外】被调用

~~~ts
class Student2 {
    protected name= 'bgm';
    private age = 12;
    public dec = '自带背景音乐'
    public say(){
        console.log(this.name)
        return this.name
    }
}
class Dzm extends Student2 {
    sayHi(){
        // this.age  // 坑 禁止访问
        // 在子类中访问  protected name
        console.log(this.name)
    }
}
const dzm = new Dzm()
dzm.sayHi()
// console.log(dzm.name)  // 报错 外部不嫩访问

dzm.say();
console.log(dzm.dec)
~~~

- 问题:private 与 protected  区别是什么？

~~~js

~~~

- constructor  够着器
- 注意 父类中有构造器  子类中也有构造器，子类中必须j加上  super() 调用父类构造器

~~~ts

~~~



#### 静态属性 setter和Getter



#### 抽象类

拓展

#### 枚举



#### 泛指



