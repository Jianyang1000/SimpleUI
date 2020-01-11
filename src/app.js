import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Input from './input'
import Row from './row.vue'
import Col from './col.vue'

Vue.component('s-button',Button)
Vue.component('s-button-group',ButtonGroup)
Vue.component('s-icon',Icon)
Vue.component('s-input',Input)
Vue.component('s-row',Row)
Vue.component('s-col',Col)

new Vue({
    el:"#app",
    data: {
        message: 'hi',
        loading1: false,
        loading2 : true
    },
    methods: {
        inputChange(){
            console.log('change了')
        },
        inputInput(){
            console.log('input了');
        },
        inputFocus(){
            console.log('focus了');
        }
    }
})
