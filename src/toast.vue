<template>
    <div class="toast" :class="toastClasses" ref="toast">
        <slot></slot>
        <template v-if="closeButton">
            <div class="line" ref="line"></div>
            <span class="close"  @click="onClickClose">
                {{closeButton.text}}
            </span>
        </template>

    </div>
</template>

<script>
    export default {
        name: "SimpleToast",
        props: {
            autoClose: {
                type: [Number, Boolean],
                default: false,
            },
            position: {
                type: String,
            },
            closeButton: {
                type: Object,
            }
        },
        mounted() {
            this.execAutoClose()
            this.updateStyles()
        },
        methods: {
            execAutoClose(){
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },
            updateStyles(){
                this.$nextTick(() => {
                    if(this.$refs.line){
                        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                    }
                })
            },
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
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
        border-radius: 4px;
        position: fixed;

        &.position-top {
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        &.position-middle {
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }

        &.position-bottom {
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }

        .line {
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }

        .close {
            padding-left: 16px;
            flex-shrink: 0;
            cursor: pointer;
        }
    }
</style>