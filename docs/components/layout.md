---
title: Layout 布局
lang: en-US
---

## Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局

使用单一分栏创建基础的栅格布局。
<ClientOnly>
  <layout-demo-1></layout-demo-1>
</ClientOnly>


```vue
<s-row>
    <s-col span="24"><div class="bg-purple-dark">&nbsp;</div></s-col>
</s-row>
<s-row>
    <s-col span="12"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="12"><div class="bg-purple-light">&nbsp;</div></s-col>
</s-row>
<s-row>
    <s-col span="8"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="8"><div class="bg-purple-light">&nbsp;</div></s-col>
    <s-col span="8"><div class="bg-purple">&nbsp;</div></s-col>
</s-row>
<s-row>
    <s-col span="6"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="6"><div class="bg-purple-light">&nbsp;</div></s-col>
    <s-col span="6"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="6"><div class="bg-purple-light">&nbsp;</div></s-col>
</s-row>
<s-row>
    <s-col span="4"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="4"><div class="bg-purple-light">&nbsp;</div></s-col>
    <s-col span="4"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="4"><div class="bg-purple-light">&nbsp;</div></s-col>
    <s-col span="4"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="4"><div class="bg-purple-light">&nbsp;</div></s-col>
</s-row>
```

### 分栏间隔

分栏之间存在间隔。
<ClientOnly>
  <layout-demo-2></layout-demo-2>
</ClientOnly>


```vue
<s-row gutter="20">
    <s-col span="6">
        <div class="bg-purple-dark">&nbsp;</div>
    </s-col>
    <s-col span="6">
        <div class="bg-purple-dark">&nbsp;</div>
    </s-col>
    <s-col span="6">
        <div class="bg-purple-dark">&nbsp;</div>
    </s-col>
    <s-col span="6">
        <div class="bg-purple-dark">&nbsp;</div>
    </s-col>
</s-row>
```

### 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
<ClientOnly>
  <layout-demo-3></layout-demo-3>
</ClientOnly>


```vue
<s-row gutter="20">
    <s-col span="16"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="8"><div class="bg-purple">&nbsp;</div></s-col>
</s-row>
<s-row gutter="20">
    <s-col span="8"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="8"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="4"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="4"><div class="bg-purple">&nbsp;</div></s-col>
</s-row>
<s-row gutter="20">
    <s-col span="4"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="16"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="4"><div class="bg-purple">&nbsp;</div></s-col>
</s-row>
```

### 分栏偏移

支持偏移指定的栏数。
<ClientOnly>
  <layout-demo-4></layout-demo-4>
</ClientOnly>


```vue
<s-row gutter="20">
    <s-col span="6"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="6" offset="6"><div class="bg-purple">&nbsp;</div></s-col>
</s-row>
<s-row gutter="20">
    <s-col span="6" offset="6"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="6" offset="6"><div class="bg-purple">&nbsp;</div></s-col>

</s-row>
<s-row gutter="20">
    <s-col span="12" offset="6"><div class="bg-purple">&nbsp;</div></s-col>
</s-row>
```

### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：默认iphone、ipad、narrowPc、pc、和widePc。
<ClientOnly>
  <layout-demo-5></layout-demo-5>
</ClientOnly>


```vue
<s-row gutter="10">
    <s-col span="4" :ipad="{span:8}" :narrowPc="{span:6}" :pc="{span:3}" :widePc="{span:1}"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="4" :ipad="{span:4}" :narrowPc="{span:6}" :pc="{span:9}" :widePc="{span:11}"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="4" :ipad="{span:4}" :narrowPc="{span:6}" :pc="{span:9}" :widePc="{span:11}"><div class="bg-purple">&nbsp;</div></s-col>
    <s-col span="4" :ipad="{span:8}" :narrowPc="{span:6}" :pc="{span:3}" :widePc="{span:1}"><div class="bg-purple">&nbsp;</div></s-col>
</s-row>
```