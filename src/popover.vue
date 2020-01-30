<template>
    <div class="popover" ref="popover">
        <transition name="fade">
            <div class="contentWrapper" v-if="visible" ref="contentWrapper" :class="[`position-${position}`]">
                <slot name="content"></slot>
            </div>
        </transition>
        <span ref="triggerWrapper" class="triggerWrapper">
            <slot></slot>
        </span>

    </div>
</template>

<script>
    export default {
        name: "SimplePopover",
        data() {
            return {
                visible: false
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value){
                    return ['top','bottom','left','right'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value){
                    return ['click','mouseenter'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            const popover = this.$refs.popover
            if(this.trigger === 'click')
            {
                popover.addEventListener('click',this.onClick)
            }else{
                popover.addEventListener('mouseenter',this.open)
                popover.addEventListener('mouseleave',this.close)
            }
        },
        beforeDestroyed() {
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.onClick)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        },
        methods: {
            positionContent(){
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                let {width, height, left, top} = triggerWrapper.getBoundingClientRect()
                let {height: height2} = contentWrapper.getBoundingClientRect()
                let positions = {
                    top: {
                        top: top + window.scrollY,
                        left: left + window.scrollX
                    },
                    bottom: {
                        top: top + height + window.scrollY,
                        left: left + window.scrollX
                    },
                    left: {
                        top: top + (height - height2)/2 + window.scrollY,
                        left: left + window.scrollX
                    },
                    right: {
                        top: top + (height - height2)/2 + window.scrollY,
                        left: left + width + window.scrollX
                    }
                }
                this.$refs.contentWrapper.style.left = positions[this.position].left + 'px'
                this.$refs.contentWrapper.style.top = positions[this.position].top + 'px'
            },
            onClickDocument(e){
                if(this.$refs.popover && this.$refs.popover === e.target || this.$refs.popover.contains(e.target)) {return}
                if(this.$refs.contentWrapper && this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target)){return}
                this.close()
            },
            close(){
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument)
            },
            open(){
                this.visible = true
                setTimeout(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            onClick(e) {
                if (this.$refs.triggerWrapper.contains(e.target)) {
                    if (this.visible === false) {
                        this.open()
                    } else{
                        this.close()
                    }
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    $border-color: #ebeef5;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        .triggerWrapper {
            display: inline-block;
        }
    }
    .contentWrapper {
        position: absolute;
        border: 1px solid $border-color;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        color: #606266;
        padding: 1em 1.5em;
        font-size: 14px;
        word-break: break-all;
        max-width: 20em;
        background-color: #fff;
        &::before {
            content:'';
            display: block;
            border: 7px solid transparent;
            position: absolute;
        }
        &::after {
            content:'';
            display: block;
            border: 7px solid transparent;
            position: absolute;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            &::before {
                border-top-color: $border-color;
                top: 100%;
            }
            &::after {
                top: calc(100% - 2px);
                border-top-color: #fff;
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before {
                bottom: 100%;
                border-bottom-color: $border-color;
            }
            &::after {
                bottom: calc(100% - 2px);
                border-bottom-color: #fff;
            }
        }
        &.position-left {
            margin-left: -10px;
            transform: translateX(-100%);
            &::before {
                left: 100%;
                bottom: 50%;
                transform:translateY(50%);
                border-left-color: $border-color;
            }
            &::after {
                left: calc(100% - 2px);
                bottom: 50%;
                transform:translateY(50%);
                border-left-color: #fff;
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before {
                right: 100%;
                bottom: 50%;
                transform:translateY(50%);
                border-right-color: $border-color;
            }
            &::after {
                right: calc(100% - 2px);
                bottom: 50%;
                transform:translateY(50%);
                border-right-color: #fff;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }


</style>