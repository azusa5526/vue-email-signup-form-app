import Modal from '../../../src/components/Modal.vue'
import { shallowMount } from '@vue/test-utils'

describe('Modal.vue', () => {
  test('renders slot content', () => {
    const wrapper = shallowMount(Modal, {
      slots: {
        default: '<span />'
      }
    })
    expect(wrapper.find('span').exists()).toBeTruthy()
  })

  test('emits on-close when button is clicked', () => {
    const wrapper = shallowMount(Modal)
    wrapper.find('button').trigger('click')
    // emit 幾次，陣列內就會有幾個 emit 的 payload
    // eg. { close-modal: [[], [123]] }
    expect(wrapper.emitted('close-modal')).toHaveLength(1)
  })
})
