class Person{
    constructor(sex,color){
        this.sex = sex;
        this.color = color;
    }
    getColor(){
        return this.color
    }
    say(){
        console.log('www');
    }
}

// extends 继承 qwe 可以访问 Person的所有属性和方法
class qwe extends Person{
    constructor(name,color,sex){
        super(color,sex);
        this.name=name;
    }
}
// 结论 类在执行的时候第一个执行的就是super
let message = new qwe('aaa','b','c')
console.log(message);
console.log(message.getColor());
