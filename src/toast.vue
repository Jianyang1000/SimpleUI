<template>
    <div class="toastWrap" :class="toastClasses">
        <div class="toast" ref="toast">
            <slot></slot>
            <template v-if="closeButton">
                <div class="line" ref="line"></div>
                <span class="close" @click="onClickClose">
                    {{closeButton.text}}
                </span>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SimpleToast",
        props: {
            autoClose: {
                type: [Number, Boolean],
                default: false,
                validator(value) {
                    return value === false || typeof value === 'number'
                }
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value) >= 0
                }
            },
            closeButton: {
                type: Object,
            }
        },
        mounted() {
            this.execAutoClose();
            this.updateStyles();
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },
            updateStyles() {
                this.$nextTick(() => {
                    if (this.$refs.line) {
                        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                    }
                })
            },
            close() {
                this.$el.remove()
                this.$emit('beforeClose')
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $min-height: 40px;
    $border-radius: 4px;
    $animation-duration: 300ms;
    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .toastWrap {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;

            .toast {
                animation: slide-down $animation-duration;
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);

            .toast {
                animation: fade-in $animation-duration;
                border-radius: $border-radius;
            }
        }

        &.position-bottom {
            bottom: 0;

            .toast {
                animation: slide-up $animation-duration;
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }

        .toast {
            min-height: $min-height;
            line-height: 1.8;
            display: flex;
            align-items: center;
            color: #fff;
            font-size: $font-size;
            background: rgba(0, 0, 0, 0.75);
            box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
            padding: 0 16px;

            .line {
                border-left: 1px solid #666;
                margin-left: 16px;
            }

            .close {
                padding-left: 16px;
                flex-shrink: 0;
                cursor: pointer;
            }
        }
    }

</style>