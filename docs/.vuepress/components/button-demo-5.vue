<template>
    <div class="button-demo">
        <div class="demo-wrap">
            <s-button>按钮</s-button>
            <s-button size="medium">按钮</s-button>
            <s-button size="small">按钮</s-button>
            <s-button size="mini">按钮</s-button>
        </div>
        <div class="demo-wrap">
            <s-button round>按钮</s-button>
            <s-button round size="medium">按钮</s-button>
            <s-button round size="small">按钮</s-button>
            <s-button round size="mini">按钮</s-button>
        </div>
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

    .demo-wrap {
        display:flex;
        align-items: center;
    }
    button {
        margin-left: 8px;
    }
    .demo-wrap:last-child {
        margin-top: 20px;
    }
</style>