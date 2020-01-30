---
title: Container 布局容器
lang: en-US
---

## Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

### 常见页面布局
<ClientOnly>
  <container-demo-1></container-demo-1>
</ClientOnly>



```vue
<!-- first -->
<s-layout style="height: 300px;">
    <s-header class="bg-purple-dark">Header</s-header>
    <s-content class="bg-purple">Content</s-content>
    <s-footer class="bg-purple-dark">Footer</s-footer>
</s-layout>

<!-- second -->
<s-layout style="height: 300px;">
    <s-header class="bg-purple-dark">Header</s-header>
    <s-layout>
        <s-content class="bg-purple-light">Content</s-content>
        <s-sider class="bg-purple">Sider</s-sider>
    </s-layout>
    <s-footer class="bg-purple-dark">Footer</s-footer>
</s-layout>

<!-- third -->
<s-layout style="height: 300px;">
    <s-sider class="bg-purple">Sider</s-sider>
    <s-layout>
        <s-header class="bg-purple-dark">Header</s-header>
        <s-content class="bg-purple-light">Content</s-content>
        <s-footer class="bg-purple-dark">Footer</s-footer>
    </s-layout>
</s-layout>

```