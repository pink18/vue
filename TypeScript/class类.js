// class 定义一个类
// 定义
// 静态属性
// 静态
// 继承
// super
// 子类中一定有super super可以作为函数也可以作为对象
// 字类在执行的时候第一个执行的就是super
// super 触发父类的constructor
// 在super 没有执行前子类不能使用this

// this指向实例的对象

// function person(x,y){
//     this.x=x;
//     this.y=y;
// }

// // say person 的静态方法
// person.prototype.say = function(){return 1}

// let p = new person(1,2)

// console.log(p.say());
// console.log(p);


// class 类作用：实例化对象 底层封装 类似构造函数

// 定义Person 类
class Person{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    say(){
        return 1
    }
    qwe(){
        console.log('构造对象触发');
    }
}
Person.prototype.getfun = function(){}

let p = new Person(1,2);
console.log(p.say());
console.log(p);
p.qwe()
console.log(typeof Person);
console.log(Person === Person.prototype.constructor);
console.log(Object.keys(Person.prototype));