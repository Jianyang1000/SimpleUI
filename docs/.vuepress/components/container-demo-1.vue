<template>
    <div class="wrapper">
        <s-layout style="height: 300px;">
            <s-header class="bg-purple-dark">Header</s-header>
            <s-content class="bg-purple">Content</s-content>
            <s-footer class="bg-purple-dark">Footer</s-footer>
        </s-layout>
        <s-layout style="height: 300px;">
            <s-header class="bg-purple-dark">Header</s-header>
            <s-layout>
                <s-content class="bg-purple-light">Content</s-content>
                <s-sider class="bg-purple">Sider</s-sider>
            </s-layout>
            <s-footer class="bg-purple-dark">Footer</s-footer>
        </s-layout>
        <s-layout style="height: 300px;">
            <s-sider class="bg-purple">Sider</s-sider>
            <s-layout>
                <s-header class="bg-purple-dark">Header</s-header>
                <s-content class="bg-purple-light">Content</s-content>
                <s-footer class="bg-purple-dark">Footer</s-footer>
            </s-layout>
        </s-layout>
    </div>
</template>

<script>
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'
    import Header from '../../../src/header'
    import Layout from '../../../src/layout'
    import Sider from '../../../src/sider'
    export default {
        name: "",
        components: {
            's-content': Content,
            's-footer': Footer,
            's-header': Header,
            's-layout': Layout,
            's-sider': Sider
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        border: 1px solid #ebebeb;
        border-radius: 3px;
        padding: 24px;
        margin-top: 20px;
        > .layout:not(:last-child){
            margin-bottom: 20px;
        }
        .header,.content,.footer,.sider {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .header,.footer,.sider {
            min-height: 60px;
        }
        .sider {
            width: 150px;
        }
    }
    .bg-purple {
        background-color: #d3dce6;
    }
    .bg-purple-light {
        background-color: #e5e9f2;
    }
    .bg-purple-dark {
        background-color: #99a9bf;
    }

</style>