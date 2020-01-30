---
title: Button 按钮
lang: en-US
---


## Button按钮

常用的按钮操作

### 基础用法

基础的按钮用法
<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>

```vue
<s-button>默认按钮</s-button>
<s-button type="primary">默认按钮</s-button>
<s-button type="success">默认按钮</s-button>
<s-button type="info">默认按钮</s-button>
<s-button type="warning">默认按钮</s-button>
<s-button type="danger">默认按钮</s-button>

<s-button round>默认按钮</s-button>
<s-button round type="primary">默认按钮</s-button>
<s-button round type="success">默认按钮</s-button>
<s-button round type="info">默认按钮</s-button>
<s-button round type="warning">默认按钮</s-button>
<s-button round type="danger">默认按钮</s-button>
```
### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
<ClientOnly>
  <button-demo-2></button-demo-2>
</ClientOnly>


```vue
<s-button type="primary" icon="search">登录</s-button>
<s-button icon="search">默认按钮</s-button>
<s-button icon="search"></s-button>
```

### 按钮组

以按钮组的方式出现，常用于多项类似操作。
<ClientOnly>
  <button-demo-3></button-demo-3>
</ClientOnly>


```vue
<s-button-group>
    <s-button icon="search" icon-position="left">登录</s-button>
    <s-button>登录</s-button>
    <s-button icon="search" icon-position="right">登录</s-button>
</s-button-group>
```

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。
<ClientOnly>
  <button-demo-4></button-demo-4>
</ClientOnly>


```vue
<s-button loading icon-position="right">登录</s-button>
```

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
<ClientOnly>
  <button-demo-5></button-demo-5>
</ClientOnly>


```vue
<s-button>按钮</s-button>
<s-button size="medium">按钮</s-button>
<s-button size="small">按钮</s-button>
<s-button size="mini">按钮</s-button>

<s-button round>按钮</s-button>
<s-button round size="medium">按钮</s-button>
<s-button round size="small">按钮</s-button>
<s-button round size="mini">按钮</s-button>
```

