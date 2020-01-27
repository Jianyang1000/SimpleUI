<template>
    <div class="tabs-item" :class="classes" @click="selectItem" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "sTabsItem",
        data() {
            return {
                active: false
            }
        },
        props: {
            name: {
                type: String | Number,
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        inject: ['eventBus'],
        created() {
            this.eventBus && this.eventBus.$on('update:selected', (name,vm) => {
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
                if(this.disabled){return}
                this.eventBus && this.eventBus.$emit('update:selected', this.name,this)
                this.$emit('click',this)
            }
        },
    }
</script>

<style scoped lang="scss">
    $disabled-text-color: grey;
    $blue: #409eff;
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
        > .icon {
            margin-right: 5px;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>