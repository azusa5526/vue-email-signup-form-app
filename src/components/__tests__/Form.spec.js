import Form from '../Form.vue'
import { shallowMount } from '@vue/test-utils'

describe('Form.vue', () => {
  test('emits form-submitted when form is submitted', () => {
    const wrapper = shallowMount(Form, {
      mocks: {
        axios: { post: jest.fn() }
      }
    })
    wrapper.find('button').trigger('submit')
    expect(wrapper.emitted('form-submitted')).toHaveLength(1)
  })

  test('send post request with email on submit', () => {
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, {
      mocks: {
        axios
      }
    })
    const input = wrapper.find('input[type="email"]')
    input.setValue('email@gmail.com')
    wrapper.find('button').trigger('submit')
    const url = 'http://demo7437963.mockable.io/validate'
    const expectedData = expect.objectContaining({
      email: 'email@gmail.com'
    })
    expect(axios.post).toHaveBeenCalledWith(url, expectedData)
  })

  test('sneds post request with enterCompetition checkbox value on submit', () => {
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, { mocks: {
      axios
    }})
    wrapper.find('input[value="no"]').setChecked()
    wrapper.find('button').trigger('submit')
    const url = 'http://demo7437963.mockable.io/validate'
    const expectedData = expect.objectContaining({
      enterCompetition: false
    })

    expect(axios.post).toHaveBeenCalledWith(url, expectedData)
  })
})
