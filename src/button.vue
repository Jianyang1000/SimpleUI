<template>
  <button
    class="s-button"
    @click="$emit('click')"
    :class="[
      {[`icon-${iconPosition}`]: true},
      type ? 's-button--' + type : '',
      size ? 's-button--' + size : '',
      {
        'is-loading': loading,
        'is-disabled': disabled,
        'is-round': round,
      }
    ]"

  >
    <s-icon icon="search" v-if="icon && !loading"></s-icon>
    <s-icon icon="loading" class="loading" v-if="loading"></s-icon>
    <div class="s-button-content">
      <slot />
    </div>
  </button>
</template>


<script>
import Icon from "./icon";
export default {
  name: "s-button",
  components: {
    "s-icon": Icon
  },
  props: {
    icon: "",
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "default",
      validator(value) {
        return (
          value === "default" ||
          value === "success" ||
          value === "primary" ||
          value === "info" ||
          value === "warning" ||
          value === "danger"
        );
      }
    },
    round: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator(value) {
        return value === "medium" || value === "small" || value === "mini";
      }
    },
    disabled: {
        type: Boolean
    }
  }
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.s-button {
  font-size: var(--font-size);padding: 12px 20px;border-radius: var(--border-radius);display: inline-flex;justify-content: center;align-items: center;vertical-align: top;cursor: pointer;
  > .s-button-content {order: 2;}
  > .icon {order: 1;margin-right: 5px;}
  &.icon-right { > .s-button-content {order: 1;} > .icon {order: 2;margin-right: 0;margin-left: 5px;} }
  > .loading {animation: 2s linear infinite spin;}
  &.s-button--medium {padding: 10px 20px;}
  &.s-button--small {padding: 9px 15px;font-size: 12px;border-radius: 3px;}
  &.s-button--mini {padding: 7px 15px;font-size: 12px;border-radius: 3px;}

  &.is-round {padding: 12px 23px;border-radius: 20px;}

  &.is-disabled {}
  &.s-button--default {color: var(--button-default-color);border: 1px solid var(--button-default-border);background-color: var(--button-default-bg);}
  &.s-button--default:hover {color: var(--button-default-hover-color);border: 1px solid var(--button-default-hover-border);background-color: var(--button-default-hover-bg);}
  &.s-button--default:focus {color: var(--button-default-hover-color);border: 1px solid var(--button-default-hover-border);background-color: var(--button-default-hover-bg);outline: none;}
  &.s-button--default:active {color: var(--button-default-active-color);border: 1px solid var(--button-default-active-border);background-color: var(--button-default-active-bg);}
  &.s-button--primary {color: var(--button-primary-color);border: 1px solid var(--button-primary-border);background-color: var(--button-primary-bg);}
  &.s-button--primary:hover {color: var(--button-primary-hover-color);border: 1px solid var(--button-primary-hover-border);background-color: var(--button-primary-hover-bg);}
  &.s-button--primary:active {color: var(--button-primary-active-color) !important;border: 1px solid var(--button-primary-active-border) !important;background-color: var(--button-primary-active-bg) !important;}
  &.s-button--primary:focus {color: var(--button-primary-hover-color);border: 1px solid var(--button-primary-hover-border);background-color: var(--button-primary-hover-bg);outline: none;}

  &.s-button--success {color: var(--button-success-color);border: 1px solid var(--button-success-border);background-color: var(--button-success-bg);}
  &.s-button--success:hover {color: var(--button-success-hover-color);border: 1px solid var(--button-success-hover-border);background-color: var(--button-success-hover-bg);}
  &.s-button--success:active {color: var(--button-success-active-color) !important;border: 1px solid var(--button-success-active-border) !important;background-color: var(--button-success-active-bg) !important;}
  &.s-button--success:visited {color: var(--button-success-hover-color);border: 1px solid var(--button-success-hover-border);background-color: var(--button-success-hover-bg);}
  &.s-button--success:focus {color: var(--button-success-hover-color);border: 1px solid var(--button-success-hover-border);background-color: var(--button-success-hover-bg);outline: none;}

  &.s-button--info {color: var(--button-info-color);border: 1px solid var(--button-info-border);background-color: var(--button-info-bg);}
  &.s-button--info:hover {color: var(--button-info-hover-color);border: 1px solid var(--button-info-hover-border);background-color: var(--button-info-hover-bg);}
  &.s-button--info:active {color: var(--button-info-active-color) !important;border: 1px solid var(--button-info-active-border) !important;background-color: var(--button-info-active-bg) !important;}
  &.s-button--info:visited {color: var(--button-info-hover-color);border: 1px solid var(--button-info-hover-border);background-color: var(--button-info-hover-bg);}
  &.s-button--info:focus {color: var(--button-info-hover-color);border: 1px solid var(--button-info-hover-border);background-color: var(--button-info-hover-bg);outline: none;}

  &.s-button--success {color: var(--button-success-color);border: 1px solid var(--button-success-border);background-color: var(--button-success-bg);}
  &.s-button--success:hover {color: var(--button-success-hover-color);border: 1px solid var(--button-success-hover-border);background-color: var(--button-success-hover-bg);}
  &.s-button--success:active {color: var(--button-success-active-color) !important;border: 1px solid var(--button-success-active-border) !important;background-color: var(--button-success-active-bg) !important;}
  &.s-button--success:visited {color: var(--button-success-hover-color);border: 1px solid var(--button-success-hover-border);background-color: var(--button-success-hover-bg);}
  &.s-button--success:focus {color: var(--button-success-hover-color);border: 1px solid var(--button-success-hover-border);background-color: var(--button-success-hover-bg);outline: none;}

  &.s-button--warning {color: var(--button-warning-color);border: 1px solid var(--button-warning-border);background-color: var(--button-warning-bg);}
  &.s-button--warning:hover {color: var(--button-warning-hover-color);border: 1px solid var(--button-warning-hover-border);background-color: var(--button-warning-hover-bg);}
  &.s-button--warning:active {color: var(--button-warning-active-color) !important;border: 1px solid var(--button-warning-active-border) !important;background-color: var(--button-warning-active-bg) !important;}
  &.s-button--warning:visited {color: var(--button-warning-hover-color);border: 1px solid var(--button-warning-hover-border);background-color: var(--button-warning-hover-bg);}
  &.s-button--warning:focus {color: var(--button-warning-hover-color);border: 1px solid var(--button-warning-hover-border);background-color: var(--button-warning-hover-bg);outline: none;}

  &.s-button--danger {color: var(--button-danger-color);border: 1px solid var(--button-danger-border);background-color: var(--button-danger-bg);}
  &.s-button--danger:hover {color: var(--button-danger-hover-color);border: 1px solid var(--button-danger-hover-border);background-color: var(--button-danger-hover-bg);}
  &.s-button--danger:active {color: var(--button-danger-active-color) !important;border: 1px solid var(--button-danger-active-border) !important;background-color: var(--button-danger-active-bg) !important;}
  &.s-button--danger:visited {color: var(--button-danger-hover-color);border: 1px solid var(--button-danger-hover-border);background-color: var(--button-danger-hover-bg);}
  &.s-button--danger:focus {color: var(--button-danger-hover-color);border: 1px solid var(--button-danger-hover-border);background-color: var(--button-danger-hover-bg);outline: none;}
}
</style>