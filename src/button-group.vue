<template>
    <div class="s-button-group">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style lang="scss">
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
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
        }
    }
</style>