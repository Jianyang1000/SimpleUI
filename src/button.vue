<template>
        <button class="s-button" :class="{[`icon-${iconPosition}`]:true}">
            <s-icon icon="search" v-if="icon && !loading"></s-icon>
            <s-icon icon="loading" class="loading" v-if="loading"></s-icon>
            <div class="s-button-content">
                <slot />
            </div>
        </button>
</template>


<script>
    export default {
        name:'s-button',
        props:{
            icon: '',
            iconPosition :{
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right'
                }
            },
            loading:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .s-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--button-color);
        background-color: var(--button-bg);
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: top;
        &:hover {
            border-color: var(--border-color-hover)
        }
        &:active {
            background-color: var(--button-active-bg)
        }
        &:focus {
            outline: none;
        }
        > .s-button-content{
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .3em
        }
        &.icon-right {
            > .s-button-content{
                order: 1;
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left:.3em;
            }
        }
        > .loading {
            animation: 2s linear infinite spin;
        }
    }
</style>