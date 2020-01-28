<template>
    <div class="tabs-pane" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "SimpleTabsPane",
        data(){
            return {
                active: false
            }
        },
        props: {
            name: {
                type: String | Number,
                required: true
            }
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
            this.eventBus && this.eventBus && this.eventBus.$on('update:selected',(name) => {
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