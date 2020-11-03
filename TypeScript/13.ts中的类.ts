// 如何设置类中私有属性
// private 只允许在本类内部访问 私有
//

class student {
  private say = "xmm"; // 私有
  protected color = "你好";
  public c = "我好";
  name: string; // name 为 string类型
  constructor(theName: string) {
    this.name = theName;// 限制name 赋值string
  }
  public foo() {
    return this.say;
  }
}

// let qwe = new student();
// console.log(qwe.foo());
// console.log(qwe.say); // 报错

class qwe extends student {
  sayHi() {
    console.log(this.color);
  }
}
