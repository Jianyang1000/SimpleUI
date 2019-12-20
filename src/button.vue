<template>
        <button class="s-button" :class="{[`icon-${iconPosition}`]:true,[`${type}`]:true,round:round}">
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
            },
            type: {
                type:String,
                default: 'default',
                validator(value) {
                    return value === 'default' || value === 'success' || value === 'primary' || value === 'info' || value === 'warning' || value === 'danger'
                }
            },
            round: {
                type: Boolean,
                default: false
            }
        },
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
        padding: 12px 20px;
        border-radius: var(--border-radius);
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: top;

        
        > .s-button-content{
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: 5px;
        }
        &.icon-right {
            > .s-button-content{
                order: 1;
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left:5px;
            }
        }
        > .loading {
            animation: 2s linear infinite spin;
        }
        &.s-button-medium {
            padding: 10px 20px;
        }
        &.s-button-small {
            padding: 9px 15px;
            font-size: 12px;
            border-radius: 3px;
        }
        &.s-button-mini {
            padding: 7px 15px;
            font-size: 12px;
            border-radius: 3px;
        }

        &.round {
            padding: 12px 23px;
            border-radius: 20px;
        }

        &.default {
            color: var(--button-default-color);
            border: 1px solid var(--button-default-border);
            background-color: var(--button-default-bg);
        }
        &.default:hover {
            color: var(--button-default-hover-color);
            border: 1px solid var(--button-default-hover-border);
            background-color: var(--button-default-hover-bg);
        }
        &.default:active {
            color: var(--button-default-active-color);
            border: 1px solid var(--button-default-active-border);
            background-color: var(--button-default-active-bg);
        }
        &.default:focus {
            outline: none;
        }


        &.primary {
            color: var(--button-primary-color);
            border: 1px solid var(--button-primary-border);
            background-color: var(--button-primary-bg);
        }
        &.primary:hover {
            color: var(--button-primary-hover-color);
            border: 1px solid var(--button-primary-hover-border);
            background-color: var(--button-primary-hover-bg);
        }
        &.primary:active {
            color: var(--button-primary-active-color);
            border: 1px solid var(--button-primary-active-border);
            background-color: var(--button-primary-active-bg);
        }
        &.primary:focus {
            outline: none;
        }



        &.success {
            color: var(--button-success-color);
            border: 1px solid var(--button-success-border);
            background-color: var(--button-success-bg);
        }
        &.success:hover {
            color: var(--button-success-hover-color);
            border: 1px solid var(--button-success-hover-border);
            background-color: var(--button-success-hover-bg);
        }
        &.success:active {
            color: var(--button-success-active-color);
            border: 1px solid var(--button-success-active-border);
            background-color: var(--button-success-active-bg);
        }
        &.success:visited {
            color: var(--button-success-hover-color);
            border: 1px solid var(--button-success-hover-border);
            background-color: var(--button-success-hover-bg);
        }
        &.success:focus {
            outline: none;
        }



        &.info {
            color: var(--button-info-color);
            border: 1px solid var(--button-info-border);
            background-color: var(--button-info-bg);
        }
        &.info:hover {
            color: var(--button-info-hover-color);
            border: 1px solid var(--button-info-hover-border);
            background-color: var(--button-info-hover-bg);
        }
        &.info:active {
            color: var(--button-info-active-color);
            border: 1px solid var(--button-info-active-border);
            background-color: var(--button-info-active-bg);
        }
        &.info:visited {
            color: var(--button-info-hover-color);
            border: 1px solid var(--button-info-hover-border);
            background-color: var(--button-info-hover-bg);
        }
        &.info:focus {
            outline: none;
        }



        &.success {
            color: var(--button-success-color);
            border: 1px solid var(--button-success-border);
            background-color: var(--button-success-bg);
        }
        &.success:hover {
            color: var(--button-success-hover-color);
            border: 1px solid var(--button-success-hover-border);
            background-color: var(--button-success-hover-bg);
        }
        &.success:active {
            color: var(--button-success-active-color);
            border: 1px solid var(--button-success-active-border);
            background-color: var(--button-success-active-bg);
        }
        &.success:visited {
            color: var(--button-success-hover-color);
            border: 1px solid var(--button-success-hover-border);
            background-color: var(--button-success-hover-bg);
        }
        &.success:focus {
            outline: none;
        }



        &.warning {
            color: var(--button-warning-color);
            border: 1px solid var(--button-warning-border);
            background-color: var(--button-warning-bg);
        }
        &.warning:hover {
            color: var(--button-warning-hover-color);
            border: 1px solid var(--button-warning-hover-border);
            background-color: var(--button-warning-hover-bg);
        }
        &.warning:active {
            color: var(--button-warning-active-color);
            border: 1px solid var(--button-warning-active-border);
            background-color: var(--button-warning-active-bg);
        }
        &.warning:visited {
            color: var(--button-warning-hover-color);
            border: 1px solid var(--button-warning-hover-border);
            background-color: var(--button-warning-hover-bg);
        }
        &.warning:focus {
            outline: none;
        }


        &.danger {
            color: var(--button-danger-color);
            border: 1px solid var(--button-danger-border);
            background-color: var(--button-danger-bg);
        }
        &.danger:hover {
            color: var(--button-danger-hover-color);
            border: 1px solid var(--button-danger-hover-border);
            background-color: var(--button-danger-hover-bg);
        }
        &.danger:active {
            color: var(--button-danger-active-color);
            border: 1px solid var(--button-danger-active-border);
            background-color: var(--button-danger-active-bg);
        }
        &.danger:visited {
            color: var(--button-danger-hover-color);
            border: 1px solid var(--button-danger-hover-border);
            background-color: var(--button-danger-hover-bg);
        }
        &.danger:focus {
            outline: none;
        }
    }
</style>