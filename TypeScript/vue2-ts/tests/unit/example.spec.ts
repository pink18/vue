import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

function sum(a:any,b:any){
  return a+b
}

// 测试条件
describe('wyh',()=>{
  // 测试用例
  it('1+1是否等于2',()=>{
    //断言
    // expect(sum(1,1)).toBe(2) //模拟 执行sum(1,2) 输出结果为3
    expect(sum(1,1)).toBe(3)
  })
})