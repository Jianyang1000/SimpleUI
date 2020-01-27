<template>
    <div class="wrapper">
        <s-input disabled></s-input>
    </div>
</template>

<script>
    import Input from "../../../src/input";

    export default {
        name: "",
        components: {
            's-input': Input
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