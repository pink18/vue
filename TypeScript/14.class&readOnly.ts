// class Octopus{
//     readonly name:string;// 变量name赋值为string类型 并且只读型
//     readonly numberOfLeg:number = 8;
//     constructor(theName:string){
//         // 注意：这里不是name 修改 而是初始化赋值
//         this.name = theName;
//     }
// }
// let dad = new Octopus('man with the 8 strong legs')


class Octopus{
    readonly numberOfLegs:number = 8;
    constructor(readonly name:string){

    }
}
var aa = new Octopus('aa');