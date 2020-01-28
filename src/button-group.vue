<template>
    <div class="s-button-group">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "SimpleButtonGroup"
    }
</script>

<style lang="scss" scoped>
    $border-radius: 4px;
    .s-button-group {
        display: inline-flex;
        vertical-align: top;

        > .s-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
            &:first-child {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
    }
</style>