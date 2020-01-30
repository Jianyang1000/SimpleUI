---
title: Toast 消息提示
lang: en-US
---

## Toast

点击弹出提示框

### 基本用法

点击弹出消息提示框，提示框在限定时间内自动消失

<toast-demo-1></toast-demo-1>

```vue
<s-button @click="$toast('点击弹出提示')">上方弹出</s-button>
<s-button @click="$toast('点击弹出提示',{position: 'middle'})">中间弹出</s-button>
<s-button @click="$toast('点击弹出提示',{position: 'bottom'})">下方弹出</s-button>
```

### 关闭按钮

点击关闭按钮，提示框消失
<ClientOnly>
  <toast-demo-2></toast-demo-2>
</ClientOnly>


```vue
<s-button @click="$toast('点击弹出提示'),{position: 'top',closeButton: {text: '关闭',callback:outputMessage}}">上方弹出</s-button>
<s-button @click="$toast('点击弹出提示',{position: 'middle',closeButton: {text: '关闭'}})">中间弹出</s-button>
<s-button @click="$toast('点击弹出提示',{position: 'bottom',closeButton:{text: '关闭'}})">下方弹出</s-button>
```