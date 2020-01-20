<template>
    <div class="collapse-item" @click="toggle">
        <div class="title">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SCollapseItem",
        inject:['eventBus'],
        data(){
          return {
              open: false,
              single: false
          }
        },
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
        },
        mounted() {
            this.eventBus.$on('update:selected',(name) => {
                if(this.single)
                {
                    if(name !== this.name){
                        this.open = false;
                    }
                    else {
                        this.open = true;
                    }
                }
            })
        },
        methods: {
            toggle(){
                if(this.open)
                {
                    this.open = false
                }
                else {
                    if(!this.single)
                    {
                        this.open = true
                    }
                    this.eventBus.$emit('update:selected',this.name)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #ebeef5;
    $height: 48px;
    .collapse-item {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        border-bottom: 1px solid $border-color;
        &:first-child {
            border-top: 1px solid $border-color;
        }
        > .title {
            height: $height;
            line-height: $height;
        }
        > .content {
            padding-bottom: 25px;
        }
    }
</style>