const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'


describe('Input',() => {
    it('input存在',() => {
        expect(Input).to.be.ok
    })
    describe('input传入属性测试',() => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })

        it('可以接受 value',() => {
            vm = new Constructor({
                propsData:{
                    value:'1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
            vm.$destroy()
        })
        it('可以接受 disabled',() => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
            vm.$destroy()
        })
        it('错误提示',() => {
            vm = new Constructor({
                propsData: {
                    error: "你错啦"
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
            const inputElement = vm.$el.querySelector('.errorMessage')
            expect(inputElement.innerText).to.equal('你错啦')
            vm.$destroy()
        })
        it('密码框',() => {

        })
        it('长度限制',() => {

        })

    })
    describe('input的事件测试',() => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持 change/input/focus/blur 事件',() => {
            ['change','input','focus','blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName,callback)
                const event = new Event(eventName)
                Object.defineProperty(
                    event,'target',{
                        value:{value:'hi'},enumerable: true
                    }
                )
                const inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })
})