const { iterator } = require("core-js/fn/symbol")
const { isExportDeclaration } = require("typescript")

function sum(a,b){
    return a+b
}

//测试条件
describe('wyh',()=>{

    it('1+1是否等于2',()=>{
        // 断言
        expect(sum(1,3)).toBe(3);
        expect(sum(1,3)).toBe(3);
    })
})