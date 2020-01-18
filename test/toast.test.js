const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'


describe('Toast',() => {
    it('Toast 存在',() => {
        expect(Toast).to.be.ok
    })

    describe('props',() => {
        let vm
        afterEach(()=> {
            vm.$destroy()
        })
        it('autoClose 参数',(done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('beforeClose',() => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('position 参数',() => {
            const Constructor = Vue.extend(Toast)
            vm = new Constructor({
                propsData: {
                    position: 'top'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-top')).to.eq(true)
            vm.$destroy()
        })
        it('closeButton 参数',() => {
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            vm = new Constructor({
                propsData: {
                    closeButton: {
                        text:'知道了',
                        callback,
                    }
                }


            }).$mount();
            const closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('知道了')
            closeButton.click()
            expect(callback).to.have.been.called
        })
    })
})