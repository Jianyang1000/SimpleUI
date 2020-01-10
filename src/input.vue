<template>
    <div :class="[
        's-input',
        {[`icon-${iconPosition}`]: true},
        {
          'is-disabled' : disabled
        }
    ]">

        <input type="text" :value="value" :placeholder="placeholder" :disabled="disabled"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
        />
        <s-icon icon="password" v-if="showPwdVisible"></s-icon>
        <template v-if="error">
            <s-icon icon="error"></s-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from "./icon";

    export default {
        name: "",
        components: {
            "s-icon": Icon
        },
        props: {
            value: [String, Number],
            clearable: {
                type: Boolean,
                default: false
            },
            showPassword: {
                type: Boolean,
                default: false
            },
            iconPosition: String,
            type: String,
            error: {
                type: String
            },
            disabled: Boolean,
            placeholder: {
                type: String,
                default: '请输入内容'
            }
        },
        computed: {
            nativeInputValue() {
                return this.value === null || this.value === undefined ? '' : String(this.value);
            },
            showClear() {
                return this.clearable && this.nativeInputValue
            },
            showPwdVisible() {
                return this.showPassword &&
                    (!!this.nativeInputValue);
            },
        }
    }
</script>

<style scoped>
    > .icon {order: 1;margin-right: 5px;}

    &.icon-right {
        > .s-button-content {order: 1;}

        > .icon {order: 2;margin-right: 0;margin-left: 5px;}
    }

    .s-input > input {
        padding: 0 15px;
        border-radius: 4px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        border: 1px solid #DCDFE6;
        display: inline-block;
        color: #606266;
        box-sizing: border-box;
    }

    .is-disabled > input {
        background-color: #F5F7FA;
        color: #C0C4CC;
        border-color: #E4E7ED;
        cursor: not-allowed;
    }

    .s-input > input:hover {
        border: 1px solid #C0C4CC;
        transition: border-color .2s linear;
    }

    .s-input > input:focus {
        outline: none;
        border: 1px solid #409EFF;
        transition: border-color .2s linear;
    }
</style>