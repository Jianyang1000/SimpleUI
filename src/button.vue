<template>
    <button
            class="s-button"
            @click="$emit('click')"
            :class="[
      {[`icon-${iconPosition}`]: true},
      type ? 's-button--' + type : '',
      size ? 's-button--' + size : '',
      {
        'is-loading': loading,
        'is-disabled': disabled,
        'is-round': round,
      }
    ]"

    >
        <s-icon :icon="icon" v-if="icon && !loading"></s-icon>
        <s-icon icon="loading" class="loading" v-if="loading"></s-icon>
        <div class="s-button-content">
            <slot/>
        </div>
    </button>
</template>


<script>
    import Icon from "./icon";

    export default {
        name: "s-button",
        components: {
            "s-icon": Icon
        },
        props: {
            icon: String,
            iconPosition: {
                type: String,
                default: "left",
                validator(value) {
                    return value === "left" || value === "right";
                }
            },
            loading: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: "default",
                validator(value) {
                    return (
                        value === "default" ||
                        value === "success" ||
                        value === "primary" ||
                        value === "info" ||
                        value === "warning" ||
                        value === "danger"
                    );
                }
            },
            round: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                validator(value) {
                    return value === "medium" || value === "small" || value === "mini";
                }
            },
            disabled: {
                type: Boolean
            }
        }
    };
</script>

<style scoped lang="scss">
    $border-radius: 4px;
    $button-default-bg: #fff;
    $button-default-border: #DCDFE6;
    $button-default-color: #606266;
    $button-default-hover-bg: #ECF5FF;
    $button-default-hover-border: #C6E2FF;
    $button-default-hover-color: #409EFF;
    $button-default-active-bg: #ECF5FF;
    $button-default-active-border: #3A8EE6;
    $button-default-active-color: #3A8EE6;

    $button-primary-bg: #409EFF;
    $button-primary-border: #409EFF;
    $button-primary-color: #fff;
    $button-primary-hover-bg: #66B1FF;
    $button-primary-hover-border: #66B1FF;
    $button-primary-hover-color: #fff;
    $button-primary-active-bg: #3A8EE6;
    $button-primary-active-border: #3A8EE6;
    $button-primary-active-color: #fff;

    $button-success-bg: #67C23A;
    $button-success-border: #67C23A;
    $button-success-color: #fff;
    $button-success-hover-bg: #85CE61;
    $button-success-hover-border: #85CE61;
    $button-success-hover-color: #fff;
    $button-success-active-bg: #5DAF34;
    $button-success-active-border: #5DAF34;
    $button-success-active-color: #fff;

    $button-info-bg: #909399;
    $button-info-border: #909399;
    $button-info-color: #fff;
    $button-info-hover-bg: #A6A9AD;
    $button-info-hover-border: #A6A9AD;
    $button-info-hover-color: #fff;
    $button-info-active-bg: #82848A;
    $button-info-active-border: #82848A;
    $button-info-active-color: #fff;

    $button-warning-bg: #E6A23C;
    $button-warning-border: #E6A23C;
    $button-warning-color: #fff;
    $button-warning-hover-bg: #EBB563;
    $button-warning-hover-border: #EBB563;
    $button-warning-hover-color: #fff;
    $button-warning-active-bg: #CF9236;
    $button-warning-active-border: #CF9236;
    $button-warning-active-color: #fff;

    $button-danger-bg: #F56C6C;
    $button-danger-border: #F56C6C;
    $button-danger-color: #fff;
    $button-danger-hover-bg: #F78989;
    $button-danger-hover-border: #F78989;
    $button-danger-hover-color: #fff;
    $button-danger-active-bg: #DD6161;
    $button-danger-active-border: #DD6161;
    $button-danger-active-color: #fff;


    $font-size: 14px;


    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .s-button {

        padding: 12px 20px;
        border-radius: $border-radius;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
        cursor: pointer;

        > .s-button-content {
            order: 2;
        }



        > .loading {
            animation: 2s linear infinite spin;
        }
        &.is-round {
            padding: 12px 23px;
            border-radius: 20px;
        }
        &.s-button--medium {
            padding: 10px 20px;
            &.is-round {
                padding: 10px 20px;
                border-radius: 20px;
            }
        }
        &.s-button--small {
            padding: 9px 15px;
            font-size: 12px;
            border-radius: 3px;
            &.is-round {
                padding: 9px 15px;
                border-radius: 20px;
            }
        }

        &.s-button--mini {
            padding: 7px 15px;
            font-size: 12px;
            border-radius: 3px;
            &.is-round {
                padding: 7px 15px;
                border-radius: 20px;
            }
        }



        &.is-disabled {
        }

        &.s-button--default {
            color: $button-default-color;
            border: 1px solid $button-default-border;
            background-color: $button-default-bg;
        }

        &.s-button--default:hover {
            color: $button-default-hover-color;
            border: 1px solid $button-default-hover-border;
            background-color: $button-default-hover-bg;
        }

        &.s-button--default:focus {
            color: $button-default-hover-color;
            border: 1px solid $button-default-hover-border;
            background-color: $button-default-hover-bg;
            outline: none;
        }

        &.s-button--default:active {
            color: $button-default-active-color;
            border: 1px solid $button-default-active-border;
            background-color: $button-default-active-bg;
        }

        &.s-button--primary {
            color: $button-primary-color;
            border: 1px solid $button-primary-border;
            background-color: $button-primary-bg;
        }

        &.s-button--primary:hover {
            color: $button-primary-hover-color;
            border: 1px solid $button-primary-hover-border;
            background-color: $button-primary-hover-bg;
        }

        &.s-button--primary:focus {
            color: $button-primary-hover-color;
            border: 1px solid $button-primary-hover-border;
            background-color: $button-primary-hover-bg;
            outline: none;
        }

        &.s-button--primary:active {
            color: $button-primary-active-color;
            border: 1px solid $button-primary-active-border;
            background-color: $button-primary-active-bg;
        }


        &.s-button--success {
            color: $button-success-color;
            border: 1px solid $button-success-border;
            background-color: $button-success-bg;
        }

        &.s-button--success:hover {
            color: $button-success-hover-color;
            border: 1px solid $button-success-hover-border;
            background-color: $button-success-hover-bg;
        }

        &.s-button--success:focus {
            color: $button-success-hover-color;
            border: 1px solid $button-success-hover-border;
            background-color: $button-success-hover-bg;
            outline: none;
        }

        &.s-button--success:active {
            color: $button-success-active-color;
            border: 1px solid $button-success-active-border;
            background-color: $button-success-active-bg;
        }

        &.s-button--info {
            color: $button-info-color;
            border: 1px solid $button-info-border;
            background-color: $button-info-bg;
        }

        &.s-button--info:hover {
            color: $button-info-hover-color;
            border: 1px solid $button-info-hover-border;
            background-color: $button-info-hover-bg;
        }

        &.s-button--info:focus {
            color: $button-info-hover-color;
            border: 1px solid $button-info-hover-border;
            background-color: $button-info-hover-bg;
            outline: none;
        }

        &.s-button--info:active {
            color: $button-info-active-color;
            border: 1px solid $button-info-active-border;
            background-color: $button-info-active-bg;
        }

        &.s-button--warning {
            color: $button-warning-color;
            border: 1px solid $button-warning-border;
            background-color: $button-warning-bg;
        }

        &.s-button--warning:hover {
            color: $button-warning-hover-color;
            border: 1px solid $button-warning-hover-border;
            background-color: $button-warning-hover-bg;
        }

        &.s-button--warning:focus {
            color: $button-warning-hover-color;
            border: 1px solid $button-warning-hover-border;
            background-color: $button-warning-hover-bg;
            outline: none;
        }

        &.s-button--warning:active {
            border: 1px solid $button-warning-active-border;
            color: $button-warning-active-color;
            background-color: $button-warning-active-bg;
        }


        &.s-button--danger {
            color: $button-danger-color;
            border: 1px solid $button-danger-border;
            background-color: $button-danger-bg;
        }

        &.s-button--danger:hover {
            color: $button-danger-hover-color;
            border: 1px solid $button-danger-hover-border;
            background-color: $button-danger-hover-bg;
        }

        &.s-button--danger:focus {
            color: $button-danger-hover-color;
            border: 1px solid $button-danger-hover-border;
            background-color: $button-danger-hover-bg;
            outline: none;
        }

        &.s-button--danger:active {
            color: $button-danger-active-color;
            border: 1px solid $button-danger-active-border;
            background-color: $button-danger-active-bg;
        }
        > .icon {
            order: 1;
            margin-right: 5px;
        }

        &.icon-right {
            > .s-button-content {
                order: 1;
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: 5px;
            }
        }
    }
</style>