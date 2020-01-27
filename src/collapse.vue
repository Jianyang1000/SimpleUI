<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "SCollapse",
        data() {
            return {
                eventBus: new Vue()
            }

        },
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: [String,Number]
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.single = this.single
            })
            this.eventBus.$emit('update:selected',this.selected)
            this.eventBus.$on('update:selected',(name) => {
                this.$emit('update:selected',name)
            })
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
    }
</script>

<style scoped lang="scss">
    .collapse {
        border: 1px solid #ebebeb;
        border-radius: 3px;
        padding: 24px;
    }
</style>