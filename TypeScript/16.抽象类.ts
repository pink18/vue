// abstract  关键字 定义一个抽象类
// 抽象类一般不会直接实例化对象
// abstract class Animal {
//     abstract makeSound(): void;  // 定义了抽象函数
//     move(): void {
//         console.log('roaming the earch...');
//     }
// }


abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 限定子类中 printMeeting,1:必须有 
}
// 子类继承了抽象类
class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting() {
        console.log('The Accounting Department meets each Monday at 10am.');
        return 1
    }


    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例  
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();  // 实例访问抽象类中的方法 
department.printMeeting(); 
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在


// 总结:
// 1: 抽象类,不能直接实例化对象
// 2: 之类可以继承抽象类
// 3: 抽象类中没有的属性子类不能创建 


// 抽象类  于 interface 接口有什么
// 1:都是对对象的静态类型进行限制的
// 不同点: 抽象类只是用于class类;interface 适用于所有的对象类型:class object function
// 不同点: 抽象类 对class 类中属性验证 更佳严谨,属性不能多也不能少,interface 验证不能少属性;但是可以多属性
// 注意: interface 在验证object 属性也是严格验证;不能多也不能少 除非 ? [propNmae] 特殊字段