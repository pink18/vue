// 1.qwe变量为对象类型数据 >>> qwe 变量赋值必须为对象,并且key值必须与静态类型保持一致
// 2.对每一个key 值的赋值指定了静态类型
let qwe: {
  name: string;
  age: number;
  dec: string;
};
// qwe 变量赋值
qwe = {
  name: "年年年",
  age: 12,
  dec: "111",
};

console.log(qwe.age);


let data: {
  cname: string;
  data: {
    name: string;
    age: number;
  };
} = {
  cname: "aa",
  data: {
    name: "bb",
    age: 0,
  },
};

console.log(data.data.age);

let arr:number[] = [1,2,3]

let arr1:[number,number,string] = [1,2,'123']

class person {}
let obj:person
obj=new person() // obj 只能赋值为person类的实例

// 函数
// 1.形参a为number
// 2.形参b为string
// 3.return 返回值为字符串
function get(a:number,b:string):string{
  return '123'
}
get(1,'11')

