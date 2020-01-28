<template>
    <div class="popover" @click.stop="xxx">
        <div class="contentWrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "SimplePopover",
        data(){
            return {
                visible: true
            }
        },
        methods: {
            xxx(){
                if(this.visible === true)
                {
                    this.visible = false;
                }else {
                    this.visible = true;
                    let eventHandle = () => {
                        this.visible = false
                        console.log('监听移除')
                        document.removeEventListener('click',eventHandle)

                    }
                    console.log('监听事件');
                    document.addEventListener('click',eventHandle)
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        .contentWrapper {
            position: absolute;
            bottom: 100%;
            left:0;
            border: 1px solid red;
        }
    }
</style>