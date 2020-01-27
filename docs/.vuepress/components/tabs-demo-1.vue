<template>
    <s-tabs selected="music" direction="horizontal">
        <s-tabs-head>
            <s-tabs-item name="sports" disabled><s-icon icon="search"></s-icon>运动</s-tabs-item>
            <s-tabs-item name="women">美女</s-tabs-item>
            <s-tabs-item name="music">音乐</s-tabs-item>
        </s-tabs-head>
        <s-tabs-body>
            <s-tabs-pane name="sports">运动的咨询</s-tabs-pane>
            <s-tabs-pane name="women">美女的咨询</s-tabs-pane>
            <s-tabs-pane name="music">音乐的咨询</s-tabs-pane>
        </s-tabs-body>
    </s-tabs>
</template>

<script>
    import '../public/svg'
    import Tabs from '../../../src/tabs'
    import TabsHead from '../../../src/tabs-head'
    import TabsItem from '../../../src/tabs-item'
    import TabsBody from '../../../src/tabs-body'
    import TabsPane from '../../../src/tabs-pane'
    import Icon from '../../../src/icon'

    export default {
        name: "",
        components: {
            's-tabs': Tabs,
            's-tabs-head': TabsHead,
            's-tabs-item': TabsItem,
            's-tabs-body': TabsBody,
            's-tabs-pane': TabsPane,
            's-icon': Icon
        }
    }
</script>

<style scoped lang="scss">

</style>