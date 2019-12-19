<template>
        <button class="g-button" :class="{[`$icon-${iconPosition}`]:true}">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-search"></use>
            </svg>
            <div class="g-button-content">
                <slot/>
            </div>
        </button>
</template>


<script>
    export default {
        name:'g-button',
        data(){
            return {
                iconPosition:'',

            }
        },
        methods: {

        }

    }
</script>

<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--button-radius);
        border: 1px solid var(--button-color);
        background-color: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center;
        &:hover {
            border-color: var(--border-color-hover)
        }
        &:active {
            background-color: var(--button-active-bg)
        }
        &:focus {
            outline: none;
        }
        > .g-button-content{
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .3em
        }
        &.icon_right {
            > .g-button-content{
                order: 1;
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left:.3em;
            }
        }
    }
</style>