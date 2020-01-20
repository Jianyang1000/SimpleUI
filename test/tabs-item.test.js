const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs-item'


describe('TabsItem',() => {
    it('TabsItem 存在',() => {
        expect(TabsItem).to.be.ok
    })
    describe('props',() => {
        it('name 参数测试',()=>{
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData: {
                    name: 'music'
                }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.eq('music')
        })
        it('disabled 参数测试',()=>{
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            expect(vm.$el.classList.contains('disabled')).to.be.true
            const callback = sinon.fake()
            vm.$on('click',callback)
            vm.$el.click()
            expect(callback).to.not.have.been.called
        })
    })
})