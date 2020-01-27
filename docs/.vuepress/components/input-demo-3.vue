<template>
    <div class="wrapper">
        <s-input error="你错啦" @focus="inputFocus"></s-input>
    </div>
</template>

<script>
    import Input from "../../../src/input";

    export default {
        name: "",
        components: {
            's-input': Input
        },
        methods: {
            inputFocus(){
                console.log("focus了")
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        border: 1px solid #ebebeb;
        border-radius: 3px;
        padding: 24px;
        margin-top: 20px;
    }
</style>