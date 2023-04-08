---
title: Carousel 走马灯
order: 0
group:
    title: 数据录入
    order: 3
nav:
    title: "Components"
---
# 走马灯
   可设置轮播方向以及控件位置
   默认情况下整个走马灯宽高等于父元素的 100%，因此<b style="color: #f84c4c">请务必将其包裹在自定义大小的盒子中!</b>
## 基础用法

```tsx
import {CSSProperties } from "react";
import { KunCarousel } from "warehouse-ikun";

const App = () => {
	const divStyle: CSSProperties = {
		width: 500 + `px`,
		height: 200 + `px`
	}
	const data = [
		{name: "唱",value: 1},
		{name: "跳",value: 2},
		{name: "rap",value: 3},
	]
	return (
		<div className="app">
			<div style={divStyle}>
				<KunCarousel>
					{
						data.map((item,index) => {
							return (<div key={index}>{item.name}</div>)
						})
					}
				</KunCarousel>
			</div>
		</div>
	);
};

export default App;
```
## 自动轮播

```tsx
import {CSSProperties } from "react";
import { KunCarousel } from "warehouse-ikun";

const App = () => {
	const divStyle: CSSProperties = {
		width: 500 + `px`,
		height: 200 + `px`
	}
	const data = [
		{name: "唱",value: 1},
		{name: "跳",value: 2},
		{name: "rap",value: 3},
	]
	return (
		<div className="app">
			<div style={divStyle}>
				<KunCarousel autoplayTime="2000">
					{
						data.map((item,index) => {
							return (<div key={index}>{item.name}</div>)
						})
					}
				</KunCarousel>
			</div>
		</div>
	);
};

export default App;
```

## 设置控件位置，轮播方向

```tsx
import { CSSProperties, useState } from "react";
import { KunCarousel, KunButton } from "warehouse-ikun";

const App = () => {
	const divStyle: CSSProperties = {
		width: 500 + `px`,
		height: 200 + `px`
	}
	const data = [
		{ name: "唱", value: 1 },
		{ name: "跳", value: 2 },
		{ name: "rap", value: 3 },
	]
	const [dotSize,setDotSize] = useState("");
	return (
		<div className="app">
			<KunButton onClick={() => setDotSize("left")}>左</KunButton>
			<KunButton onClick={() => setDotSize("right")}>右</KunButton>
			<KunButton onClick={() => setDotSize("top")}>上</KunButton>
			<KunButton onClick={() => setDotSize("bottom")}>下</KunButton>
			<KunButton>向左轮播</KunButton>
			<KunButton>向右轮播</KunButton>
			<div style={divStyle}>
				<KunCarousel dotSite={dotSize} autoplayTime="2000">
					{
						data.map((item, index) => {
							return (<div key={index}>{item.name}</div>)
						})
					}
				</KunCarousel>
			</div>
		</div>
	);
};

export default App;
```

## Carousel Props

	height?: string,
	dotSize?: string,
	autoplayTime?: number,
	dotSite?: "left" | "top" | "bottom" | "right",
	directiondirection?: "level" | "vertical"

| 参数 | 说明 | 类型 | 可选值                 | 默认值 |
| --- |--| --- |---------------------| --- |
| height | 走马灯高度 | string |    ---        | 100% |
| dotSite | 位置标志方位 | string |  left / top / bottom / right  | bottom |
| autoplayTime | 是否开启自动轮播 以及 单页存在时间 | number(ms) |  ---  | --- |
| dotSize | 位置标志尺寸 | string |  ---  | 8px |
| directiondirection | 轮播方向竖直或水平 | string | level / vertical  | vertical |
| ... | 其余任何div默认props | --- | --- | --- |
