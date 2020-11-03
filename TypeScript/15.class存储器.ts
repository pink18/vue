// 存取器；指的是利用get set 对 对象下属性做劫持处理
class Employee {
    // 变量_fullName 要求赋值类型为 string 
    _fullName: string;

    // 属性fullName 
    // get set 对 fullName 属性的数据劫持
    get fullName():string{
        console.log('get');
        return this._fullName // 返回 _fullName 的赋值
        // return ''
    }
    set fullName(name:string){
        console.log('set');
        this._fullName = name;
        // this.fullName = name  // 死循环，为了避免这个问题；声明一个新变量 _fullName.完成 通过数据劫持 更改 fullName 赋值
    }
}

// _fullName 宇 fullName 事两个独立的属性；由于 get set 劫持效果；将_fullName 宇 fullName 建立联系。

let employee = new Employee();
console.log(employee)
// 修改 fullName 属性 触发 set 
employee.fullName = "wangyuhang";
if (employee.fullName) {// 获取 fullName 触发 get 
    console.log(employee.fullName); 
}
console.log(employee._fullName);
console.log(employee.fullName);

