<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "SimpleTabs",
        props: {
            selected: {
                type: String
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value) >= 0
                }
            }
        },
        data(){
          return {
              eventBus: new Vue()
          }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if(vm.$options.name === 'SimpleTabsHead')
                {
                    vm.$children.forEach((vmChild) => {
                        if(vmChild.$options.name === 'SimpleTabsItem' && vmChild.name === this.selected)
                        {
                            this.eventBus.$emit('update:selected',this.selected,vmChild)
                        }
                    })
                }

            })

        }
    }
</script>

<style scoped lang="scss">
    $border-color: #ebebeb;
    $border-radius: 3px;
    .tabs {
        border: 1px solid #ebebeb;
        border-radius: $border-radius;
        padding: 24px;
    }
</style>