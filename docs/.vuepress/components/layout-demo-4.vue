<template>
    <div class="wrapper">
        <s-row gutter="20">
            <s-col span="6"><div class="bg-purple">&nbsp;</div></s-col>
            <s-col span="6" offset="6"><div class="bg-purple">&nbsp;</div></s-col>
        </s-row>
        <s-row gutter="20">
            <s-col span="6" offset="6"><div class="bg-purple">&nbsp;</div></s-col>
            <s-col span="6" offset="6"><div class="bg-purple">&nbsp;</div></s-col>

        </s-row>
        <s-row gutter="20">
            <s-col span="12" offset="6"><div class="bg-purple">&nbsp;</div></s-col>
        </s-row>
    </div>
</template>

<script>
    import Col from '../../../src/col'
    import Row from '../../../src/row'
    export default {
        name: "",
        components: {
            's-col': Col,
            's-row': Row
        }
    }
</script>

<style scoped lang="scss">

    .wrapper {
        border: 1px solid #ebebeb;
        border-radius: 3px;
        padding: 24px;
        margin-top: 20px;
        .row {
            &:not(:last-child){
                margin-bottom: 20px;
            }
            > .col > div {
                border-radius: 4px;
                min-height: 36px;
            }
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