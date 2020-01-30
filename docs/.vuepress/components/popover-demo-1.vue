<template>
    <div class="wrapper">
        <s-popover>
            <template slot="content">
                <div>
                    加载信息
                </div>
            </template>
            <s-button>Top激活</s-button>
        </s-popover>
        <s-popover position="bottom">
            <template slot="content">
                <div>
                    加载信息
                </div>
            </template>
            <s-button>Bottom激活</s-button>
        </s-popover>
        <s-popover position="left">
            <template slot="content">
                <div>
                    加载信息
                </div>
            </template>
            <s-button>Left激活</s-button>
        </s-popover>
        <s-popover position="right">
            <template slot="content">
                <div>
                    加载信息
                </div>
            </template>
            <s-button>Right激活</s-button>
        </s-popover>
    </div>

</template>

<script>
    import Button from '../../../src/button'
    import Popover from '../../../src/popover'
    export default{
        components: {
            's-popover': Popover,
            's-button': Button
        }
    }

</script>

<style lang="scss" scoped>
    .wrapper {
        border: 1px solid #ebebeb;
        border-radius: 3px;
        padding: 24px;
        margin-top: 20px;
    }
</style>