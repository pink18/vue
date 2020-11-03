// 自定义静态类型
interface name{
    x:number,
    y:string
}

// 当指定lyx 为name类型的时候 赋值结构必须与name结构相同
let lyx:name = {
    x:18,
    y:'你,好'
}

console.log(lyx.x,lyx.y.split(','));

