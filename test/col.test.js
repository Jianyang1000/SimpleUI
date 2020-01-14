const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

describe('Col',() => {
    it('col存在',() => {
        expect(Col).to.be.ok
    })
    it('span 参数',() => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 2
            }
        }).$mount()
        expect(vm.$el.classList.contains('col-2')).to.eq(true)
        vm.$destroy()
    })
    it('offset 参数',() => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 2
            }
        }).$mount()
        expect(vm.$el.classList.contains('offset-2')).to.eq(true)
        vm.$destroy()
    })
    it('ipad 参数',() => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {span:2,offset:2}
            }
        }).$mount()
        expect(vm.$el.classList.contains('col-ipad-2')).to.eq(true)
        expect(vm.$el.classList.contains('offset-ipad-2')).to.eq(true)
        vm.$destroy()
    })
    it('narrow-pc 参数',() => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span:3,offset:3}
            }
        }).$mount()
        expect(vm.$el.classList.contains('col-narrow-pc-3')).to.eq(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-3')).to.eq(true)
        vm.$destroy()
    })
    it('pc 参数',() => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {span:4,offset:4}
            }
        }).$mount()
        expect(vm.$el.classList.contains('col-pc-4')).to.eq(true)
        expect(vm.$el.classList.contains('offset-pc-4')).to.eq(true)
        vm.$destroy()
    })
    it('wide-pc 参数',() => {
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {span:5,offset:5}
            }
        }).$mount()
        expect(vm.$el.classList.contains('col-wide-pc-5')).to.eq(true)
        expect(vm.$el.classList.contains('offset-wide-pc-5')).to.eq(true)
        vm.$destroy()
    })
})