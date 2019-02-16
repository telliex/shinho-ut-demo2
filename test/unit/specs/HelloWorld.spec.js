// 使用 shallow 可以只 foucs 在要測試的元件，保証隔離了子元件，如果要一併測試子元件的話，需要使用 mount
import { shallow } from 'vue-test-utils'
import Component from '@/components/HelloWorld.vue'

describe('Component', () => {
  let wrapper, vm, alert

  beforeEach(() => {
    wrapper = shallow(Component)
    vm = wrapper.vm // 這個可以取到元件裡面的東西，比如說 data 裡的變數或直接調用方法
    alert = jest.spyOn(window, 'alert') // 這邊則是使用 jest 來 spy alert 這個物件
  })

  afterEach(() => {
    alert.mockRestore() // 每次測試完都得 restore
  })

  test('總分為所有節數加起來的分數', () => {
    wrapper.setData({
      scores: {
        firstSection: 1,
        twoSection: 2,
        threeSection: 3,
        fourSection: 5,
        extendSection: 0
      }
    })
    expect(vm.total).toEqual(11) // 這邊的expect是使用jest的，對我來說很夠用了
  })

  test('不可以加超過一分', () => {
    vm.scores.firstSection = 2
    vm.submit()

    expect(alert.mock.calls[0][0]).toEqual('只能增加或減少一分')
  })

  test('不可以減超過一分', () => {
    vm.scores.twoSection = -2
    vm.submit()

    expect(alert.mock.calls[0][0]).toEqual('只能增加或減少一分')
  })

  test('只能更新一節的分數', () => {
    vm.scores.firstSection = 1
    vm.scores.twoSection = 1
    vm.submit()
    expect(alert.mock.calls[0][0]).toEqual('只能更新一節的分數')
  })

  test('不可以加或減超過一分且只能更新一節的數分', () => {
    vm.scores.firstSection = 2
    vm.scores.twoSection = 1
    vm.submit()
    expect(alert.mock.calls[0][0]).toEqual('只能增加或減少一分')
    expect(alert.mock.calls[1][0]).toEqual('只能更新一節的分數')
  })
})
