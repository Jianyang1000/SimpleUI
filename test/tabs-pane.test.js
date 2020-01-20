const expect = chai.expect;
import Vue from 'vue'
import TabsPane from '../src/tabs-pane'


describe('TabsPane',() => {
    it('TabsPane 存在',() => {
        expect(TabsPane).to.be.ok
    })
    describe('props',() => {
        it('name 参数测试',()=>{
            const Constructor = Vue.extend(TabsPane)
            const vm = new Constructor({
                propsData: {
                    name: 'music'
                }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.eq('music')
        })
    })
})