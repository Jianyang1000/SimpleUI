<template>
    <div>
        <s-button @click="$toast('点击弹出提示',{position: 'top',closeButton: {text: '关闭',callback:outputMessage
        }})">上方弹出</s-button>
        <s-button @click="$toast('点击弹出提示',{position: 'middle',closeButton: {text: '关闭'}})">中间弹出</s-button>
        <s-button @click="$toast('点击弹出提示',{position: 'bottom',closeButton:{text: '关闭'}})">下方弹出</s-button>
    </div>

</template>

<script>
    import Button from '../../../src/button'
    import plugin from '../../../src/plugin'
    import Vue from 'vue'
    Vue.use(plugin)
    export default {
        name: "",
        components: {
            's-button': Button
        },
        methods: {
            outputMessage(){
                console.log('callback了')
            }
        }
    }
</script>

<style scoped lang="scss">

</style>