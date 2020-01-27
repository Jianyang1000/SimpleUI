<template>
    <div class="button-demo">
        <s-button loading icon-position="right">登录</s-button>
    </div>
</template>

<script>

    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'
    import Icon from '../../../src/icon'
    export default {
        components: {
            's-button': Button,
            's-icon': Icon,
            's-button-group': ButtonGroup
        }
    }
</script>

<style scoped lang="scss">
    .button-demo {
        border: 1px solid #ebebeb;
        border-radius: 3px;
        padding: 24px;
    }
</style>