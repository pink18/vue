// 元组指的是 约束到数组中每一项
let arr: (string | number)[] = [1, 2, "3"];

// 指定数组中单个元素为什么类型的数据
let arr1: [number, string, boolean] = [1, "2", true];

let product: { name: string; price: number; dec: string }[];
product = [
  { name: "aaa", price: 123, dec: "ddd" },
  { name: "aaa", price: 123, dec: "ddd" },
  // key 多一个少一个都不行
];

// type 类型别名 productItem
type productItem = { name: string; price: number; dec: string };
let product1: productItem[] = [{ name: "aaa", price: 123, dec: "ddd" }];

class t {
  name: string;
  price: number;
  dec: string;
}
let product2: productItem[] = [
  new t(), // 使用类 实例化对象
  { name: "aaa", price: 123, dec: "ddd" },
];
console.log(product2);

// interface name {
//   name: string;
//   price: number;
//   dec: string;
// }
// let product3: name[] = [
//     new t(), // 使用类 实例化对象
//     { name: "aaa", price: 123, dec: "ddd" },
// ];
// console.log(product3);
