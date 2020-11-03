interface Persion {
  readonly name: string;
  age?: number;
  [propName: string]: any;
  say(): string; // say 为函数 返回值为string类型
}
function getPersion(person: Persion) {
  return person.name;
}

function setPersion(person, name) {
  person.name = name
}

const qwe = {
  name: "123",
  age: 18,
  say() {
    return "123";
  },
};

getPersion(qwe);

// 传递一个不确定属性

getPersion({
  name: "123",
  sex: "man",
  say() {
    return "123";
  },
});

interface Student {
  name:string,
  age?:number
}

// class 类中必须有student接口中的属性
class a implements Student{
  name = 'aa'
}
