// 当有通用的类型集合 可以使用interface接口
interface person{
    name:string,
    age:number,
    dec:string
}
// 问题

// 形参person 类型为对象 对象中有name 类型为string
// function getperson(person:{name:string}){
//     console.log(person.name);
//     return person.name
// }

// getperson({name:'123'})

function setperson(person:{name:string},name:string):void{
    person.name = name
    console.log(person); 
}

setperson({
    name:'123'
},'456')

function getPerson(obj:person){
    return obj.name
}

getPerson({name:'123',age:18,dec:'555'})
