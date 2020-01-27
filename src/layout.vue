<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "SimpleLayout",
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            const children = this.$children
            children.forEach((child) => {
                if (child.$options.name === 'SimpleSider') {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .layout {
        .layout {
            flex-grow : 1;
        }
        display: flex;
        flex-direction: column;

        &.hasSider {
            flex-direction: row;
        }
    }

</style>