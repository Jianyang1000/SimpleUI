<template>
    <div class="popover" @click="onClick" ref="popover">
        <div class="contentWrapper" v-if="visible" ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" class="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "SimplePopover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            positionContent(){
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                let {width, height, left, top} = triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            onClickDocument(e){
                if(this.$refs.popover && this.$refs.popover || this.$refs.popover.contains(e.target)) {return}
                this.close()
            },
            close(){
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument)
            },
            open(){
                this.visible = true
                setTimeout(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            onClick(e) {
                if (this.$refs.triggerWrapper.contains(e.target)) {
                    if (this.visible === false) {
                        this.open()
                    } else{
                        this.close()
                    }
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

        .triggerWrapper {

        }
    }

    .contentWrapper {
        position: absolute;
        border: 1px solid red;
        transform: translateY(-100%);
    }

</style>