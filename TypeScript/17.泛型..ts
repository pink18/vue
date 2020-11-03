// 传入参数数类型 与返回参数的数据类型是同类型的

// 弊端:只能传递number类型
// function identity(arg: number): number {
//     return arg;
// }

//  可以多类型数据
//  弊端 具体传如哪一个数据 可读性太差了 ---> 对于读者；不清楚从传是什么类型数据
// function identity(arg: any): any {
//     return arg;
// }

// const aa = 0;
// isFinite(aa)


// 问题：怎样，传入的数据为任意类型数据；并且，读者可以读懂传如什么类型数据呢？
// ---泛型

// function identity<T>(arg: T): T {
//     return arg;
// }

// identity<string>('111')  // <T> >> <string> ===> T === string
// identity<number>(0)


// 当函数参数为一个数组时候；泛型该如何解决呢

// <T> 泛型
// T[]  约束数组中元素；为 T 变量赋值的静态类型。
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // 3
    let num:T;  // 约束 num  为T 类型数据
    return arg;
}
loggingIdentity<number>([1,2,3])  // 灵活性；T 可以作为参数使用了

// let a:any[] = [1,2,3]