---
title: Popover 弹出框
lang: en-US
---


## Popover 弹出框

### 基础用法

点击出现top、bottom、left、right四个方向的popover

<popover-demo-1></popover-demo-1>

```vue
<s-popover>
	<template slot="content">
		<div>
			加载信息
		</div>
	</template>
	<s-button>Top激活</s-button>
</s-popover>
<s-popover position="bottom">
	<template slot="content">
		<div>
			加载信息
		</div>
	</template>
	<s-button>Bottom激活</s-button>
</s-popover>
<s-popover position="left">
	<template slot="content">
		<div>
			加载信息
		</div>
	</template>
	<s-button>Left激活</s-button>
</s-popover>
<s-popover position="right">
	<template slot="content">
		<div>
			加载信息
		</div>
	</template>
	<s-button>Right激活</s-button>
</s-popover>
```

### 不同的触发条件

hover的时候触发popover

<popover-demo-2></popover-demo-2>

```vue
<s-popover trigger="mouseenter">
	<template slot="content">
		<div>
			加载信息
		</div>
	</template>
	<s-button>Top激活</s-button>
</s-popover>
<s-popover position="bottom" trigger="mouseenter">
	<template slot="content">
		<div>
			加载信息
		</div>
	</template>
	<s-button>Bottom激活</s-button>
</s-popover>
<s-popover position="left" trigger="mouseenter">
	<template slot="content">
		<div>
			加载信息
		</div>
	</template>
	<s-button>Left激活</s-button>
</s-popover>
<s-popover position="right" trigger="mouseenter">
	<template slot="content">
		<div>
			加载信息
		</div>
	</template>
	<s-button>Right激活</s-button>
</s-popover>
```