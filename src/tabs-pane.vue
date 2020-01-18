<template>
    <div class="tabs-pane" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return {
                active: false
            }
        },
        props: {
            name: String
        },
        computed:{
          classes(){
              return {
                  active: this.active
              }
          }
        },
        inject:['eventBus'],
        created(){
          this.eventBus.$on('update:selected',(name) => {
              this.active = this.name === name
          })
        },
    }
</script>

<style scoped lang="scss">
    .tabs-pane {
        display: none;
        padding: 1em;
        &.active {
            display: flex;
        }
    }
</style>