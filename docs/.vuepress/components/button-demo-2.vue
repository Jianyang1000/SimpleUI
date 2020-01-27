<template>
    <div class="button-demo">
        <s-button type="primary" icon="search">登录</s-button>
        <s-button icon="search">默认按钮</s-button>
        <s-button icon="search"></s-button>
    </div>
</template>

<script>
    import Button from '../../../src/button'
    import Icon from '../../../src/icon'
    export default {
        components: {
            's-button': Button,
            's-icon': Icon
        }
    }
</script>
<style lang="scss" scoped>
    .button-demo {
        border: 1px solid #ebebeb;
        border-radius: 3px;
        padding: 24px;
    }

</style>