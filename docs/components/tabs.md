---
title: Tabs 标签页
lang: en-US
---


## Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

基础的、简洁的标签页。

<tabs-demo-1></tabs-demo-1>

```vue
<s-tabs selected="music" direction="horizontal">
	<s-tabs-head>
		<s-tabs-item name="sports" disabled><s-icon icon="search"></s-icon>运动</s-tabs-item>
		<s-tabs-item name="women">美女</s-tabs-item>
		<s-tabs-item name="music">音乐</s-tabs-item>
	</s-tabs-head>
	<s-tabs-body>
		<s-tabs-pane name="sports">运动的咨询</s-tabs-pane>
		<s-tabs-pane name="women">美女的咨询</s-tabs-pane>
		<s-tabs-pane name="music">音乐的咨询</s-tabs-pane>
	</s-tabs-body>
</s-tabs>
```

### 带按钮的tabs

可以将按钮绑定上特定操作

<tabs-demo-2></tabs-demo-2>

```vue
<s-tabs selected="music" direction="horizontal">
	<s-tabs-head>
		<s-tabs-item name="sports" disabled><s-icon icon="search"></s-icon>运动</s-tabs-item>
		<s-tabs-item name="women">美女</s-tabs-item>
		<s-tabs-item name="music">音乐</s-tabs-item>
		<template slot="actions">
			<button>按钮</button>
		</template>
	</s-tabs-head>
	<s-tabs-body>
		<s-tabs-pane name="sports">运动的咨询</s-tabs-pane>
		<s-tabs-pane name="women">美女的咨询</s-tabs-pane>
		<s-tabs-pane name="music">音乐的咨询</s-tabs-pane>
	</s-tabs-body>
</s-tabs>
```
