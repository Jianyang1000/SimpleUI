import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Content from './content'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Plugin from './plugin.js'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Vue.use(Plugin)

Vue.component('s-button', Button)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-icon', Icon)
Vue.component('s-input', Input)
Vue.component('s-row', Row)
Vue.component('s-col', Col)
Vue.component('s-layout', Layout)
Vue.component('s-content', Content)
Vue.component('s-header', Header)
Vue.component('s-footer', Footer)
Vue.component('s-sider', Sider)
Vue.component('s-tabs',Tabs)
Vue.component('s-tabs-body',TabsBody)
Vue.component('s-tabs-head',TabsHead)
Vue.component('s-tabs-item',TabsItem)
Vue.component('s-tabs-pane',TabsPane)


new Vue({
    el: "#app",
    data: {
        message: 'hi',
        loading1: false,
        loading2: true
    },
    methods: {
        inputChange() {
            console.log('change了')
        },
        inputInput() {
            console.log('input了');
        },
        inputFocus() {
            console.log('focus了');
        },
        showToastTop() {
            this.$toast('好物推荐', {
                position: 'top',
                closeButton: {
                    text: '整挺好',
                    callback(){
                        console.log('回调了')
                    }
                }
            })
        },
        showToastMiddle() {
            this.$toast('好物推荐', {
                position: 'middle',
                autoClose: 2,
                closeButton: {
                    text: '整挺好'
                }
            })
        },
        showToastBottom() {
            this.$toast('好物推荐', {
                position: 'bottom',
                autoClose: 2,

            })
        }
    }
})
