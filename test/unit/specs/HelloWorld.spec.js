import Vue from 'vue'
import LoginComponent from '@/components/home/LoginComponent'

describe('LoginComponent.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(LoginComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
