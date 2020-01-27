<template>
    <svg class="icon">
        <use :xlink:href="`#icon-${icon}`"/>
    </svg>
</template>

<script>
    export default {
        name: "",
        props:{
            icon:''
        }
    }
</script>

<style scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>