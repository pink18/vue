interface Persion{
    readonly name:string,
    age?:number,
    [propName:string]:any,// 接收一个不确定的key
    say():string// say为函数 返回值为string 类型
}

interface student extends Persion{
    cname:string
}

let obj:student = {
    cname:'aa',
    name:'aa',
    say(){
        return ''
    }
}

interface sayHi{
    // 形参hua 为string 返回值为boolean类型
    (hua:student):boolean
}

const say:sayHi=function(hua){
    return true
}
// 相当于下面的写法
// function say1(hua:string):boolean{}