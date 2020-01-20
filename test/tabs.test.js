const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

describe('Tabs',() => {
    it('Tabs 存在',() => {
        expect(Tabs).to.be.ok
    })
    describe('props',() => {
        it('selected 参数测试',(done)=>{
            Vue.component('s-tabs',Tabs)
            Vue.component('s-tabs-head',TabsHead)
            Vue.component('s-tabs-body',TabsBody)
            Vue.component('s-tabs-item',TabsItem)
            Vue.component('s-tabs-pane',TabsPane)
            let div = document.createElement('div')
            div.innerHTML = `
            <s-tabs selected="music">
                <s-tabs-head>
                    <s-tabs-item name="sports">运动</s-tabs-item>
                    <s-tabs-item name="women">美女</s-tabs-item>
                    <s-tabs-item name="music">音乐</s-tabs-item>
                </s-tabs-head>
                <s-tabs-body>
                    <s-tabs-pane name="sports">运动的咨询</s-tabs-pane>
                    <s-tabs-pane name="women">美女的咨询</s-tabs-pane>
                    <s-tabs-pane name="music">音乐的咨询</s-tabs-pane>
                </s-tabs-body>
            </s-tabs>
            `
            const vm = new Vue({
                el: div
            })
            vm.$nextTick(()=> {
                let tabsItem = vm.$el.querySelector(`.tabs-item[data-name="music"]`)
                let tabsPane = vm.$el.querySelector(`.tabs-pane[data-name="music"]`)
                expect(tabsItem.classList.contains('active')).to.be.true
                expect(tabsPane.classList.contains('active')).to.be.true
                done()
            })
        })
        it('direction 参数测试',()=>{

        })
        it('',()=>{

        })
    })
})