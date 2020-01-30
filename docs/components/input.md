---
title: Input 输入框
lang: en-US
---


## Input输入框

通过鼠标或键盘输入字符

### 基础用法
<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>


```vue
<s-input></s-input>
```

### 禁用状态
<ClientOnly>
  <input-demo-2></input-demo-2>
</ClientOnly>


```vue
<s-input disabled></s-input>
```

### 带错误提示
<ClientOnly>
  <input-demo-3></input-demo-3>
</ClientOnly>


```vue
<s-input error="你错啦" @focus="inputFocus"></s-input>
```