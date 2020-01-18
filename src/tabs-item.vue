<template>
    <div class="tabs-item" :class="classes" @click="selectItem">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sTabsItem",
        data() {
            return {
                active: false,
                disabled: false
            }
        },
        props: {
            name: String,
        },
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected', (name,vm) => {

                this.active = this.name === name
            })
        },
        computed:{
            classes(){
                return {
                    active: this.active,
                    disabled: this.disabled
                }

            }
        },
        methods: {
            selectItem() {
                this.eventBus.$emit('update:selected', this.name,this)
            }
        },
    }
</script>

<style scoped lang="scss">
    .tabs-item {
        padding: 0 1em;
        flex-shrink: 0;
        height: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active {

        }
        &.disabled {

        }
    }
</style>