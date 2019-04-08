import { mount, createLocalVue } from '@vue/test-utils'
import StampList from '@/components/atoms/StampList.vue'
describe('スタンプリストのテスト', () => {
  const localVue = createLocalVue()
  const wrapper = mount(StampList, {
    localVue,
    propsData: {
      list: [
        {
          isCleared: false
        },
        {
          isCleared: true
        },
        {
          isCleared: true
        },
        {
          isCleared: true
        }
      ]
    }
  })

  const elem = wrapper.findAll('.icon')

  it('[正常系]クリア状態の時に、クラス.is-clearedが付いているか', () => {
    const secondElem = elem.at(1)
    expect(secondElem.classes()).toContain('is-cleared')
  })

  it('個数があっているか', () => {
    //デフォルトの要素の個数が4つ入っているか
    expect(elem).toHaveLength(4)

    //.is-clearが付与している要素の数を取得
    const clearElem = wrapper.findAll('.is-cleared')
    //クリア状態の要素(true)の個数が3つ入っているか
    expect(clearElem).toHaveLength(3)
  })
})
