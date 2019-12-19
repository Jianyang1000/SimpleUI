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

</style>