const expect = chai.expect;
import Vue from 'vue'
import Icon from '../src/icon'


describe('Icon',() => {
    it('icon存在',() => {
        expect(Icon).to.be.ok
    })
    it('可以设置 Icon', () => {
        const Constructor = Vue.extend(Icon)
         const vm = new Constructor({
         propsData: {
             icon: 'search'
         }
         }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#icon-search')
    })
}) 