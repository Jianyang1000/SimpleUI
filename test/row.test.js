const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'
import Row from '../src/row'

describe('Row',() => {
    it('row存在',() => {
        expect(Row).to.be.ok
    })
    it('gutter 参数',(done) => {
        Vue.component('s-col',Col)
        Vue.component('s-row',Row)
        let div = document.createElement('div')

        div.innerHTML = `
            <s-row gutter="20">
                <s-col span="12"></s-col>
                <s-col span="12"></s-col>
            </s-row>
        `
        document.body.appendChild(div)
        const vm = new Vue({
            el: div
        })


        setTimeout(()=>{
            let cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            done()
        })
    })
})