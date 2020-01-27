<template>
    <div class="button-demo">
        <div class="demo-wrap">
            <s-button>默认按钮</s-button>
            <s-button type="primary">默认按钮</s-button>
            <s-button type="success">默认按钮</s-button>
            <s-button type="info">默认按钮</s-button>
            <s-button type="warning">默认按钮</s-button>
            <s-button type="danger">默认按钮</s-button>
        </div>
        <div class="demo-wrap">
            <s-button round>默认按钮</s-button>
            <s-button round type="primary">默认按钮</s-button>
            <s-button round type="success">默认按钮</s-button>
            <s-button round type="info">默认按钮</s-button>
            <s-button round type="warning">默认按钮</s-button>
            <s-button round type="danger">默认按钮</s-button>
        </div>
    </div>
</template>

<script>
    import '../public/svg'
    import Button from '../../../src/button'

    export default {
        components: {
            's-button': Button
        }
    }
</script>
<style lang="scss" scoped>
    .button-demo {
        border: 1px solid #ebebeb;
        border-radius: 3px;
        padding: 24px;
    }
    .demo-wrap {
        display: flex;
        justify-content: space-around;
    }
    .demo-wrap:last-child {
        margin-top: 20px;
    }
</style>