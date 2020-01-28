<template>
    <div class="tabs-head" ref="head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SimpleTabsHead",
        inject:['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected',(name,vm) => {
                let {width,left} = vm.$el.getBoundingClientRect()
                let {left: left2} = this.$refs.head.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left -left2}px`
            })
        }
    }
</script>

<style scoped lang="scss">
    $tabs-height: 40px;
    $border-color: #ddd;
    .tabs-head {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: $tabs-height;
        border-bottom: 1px solid $border-color;
        position: relative;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid #409eff;
            transition: all 350ms;
        }
        > .actions-wrapper {
            margin-left: auto;
        }

    }
</style>