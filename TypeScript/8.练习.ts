let a: string | number;
a = 123;
a = "123";

const foo = (a: number, b: string): string => {
  return "123";
};

const fun = (str: string): number => {
  return 123;
};

const fun1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

let row = "{name:'sage'}";
let rowData = JSON.parse(JSON.stringify(row));// rowData 推断为 any
console.log(rowData);

