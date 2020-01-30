const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'
import Button from '../src/button'

describe('Popover',() => {
    it('popover 存在',() => {
        expect(Popover).to.be.ok
    })
    it('可以设置 position', (done) => {
        Vue.component('s-popover',Popover)
        Vue.component('s-button',Button)
        let div = document.createElement('div')
        div.innerHTML = `
            <s-popover position="bottom">
                <template slot="content">
                    <div>消息提示</div>
                </template>
                <s-button>下按钮</s-button>
            </s-popover>
        `
        document.body.appendChild(div)
        const vm = new Vue({
            el: div
        })
        const button = vm.$el.querySelector('button')
        button.click()
        vm.$nextTick(() => {
            const content = document.body.querySelector('.contentWrapper')
            expect(content.classList.contains('position-bottom')).to.eq(true)
            done()
        })

    })
    it('可以设置 trigger', (done) => {
        Vue.component('s-popover',Popover)
        Vue.component('s-button',Button)
        let div = document.createElement('div')
        div.innerHTML = `
            <s-popover trigger="mouseenter">
                <template slot="content">
                    <div>消息提示</div>
                </template>
                <s-button>下按钮</s-button>
            </s-popover>
        `
        document.body.appendChild(div)
        const vm = new Vue({
            el: div
        })
        const event = new Event('mouseenter')
        vm.$el.dispatchEvent(event)
        vm.$nextTick(() => {
            const content = document.body.querySelector('.contentWrapper')
            expect(content).to.be.ok
            done()
        })
    })
})