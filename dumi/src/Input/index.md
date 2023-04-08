---
title: Input 输入框
order: 1
group:
    title: 数据录入
    order: 3
nav:
    title: "Components"
---

## 介绍

表单基础控件，可设置为密码框，前后添加不同元素，绑定常用不同事件

## 基础使用

```tsx
import { KunInput } from "warehouse-ikun";

const App = () =>  (
	<>
	  <KunInput placeholder="喜欢唱、跳、rap、篮球"/>
	  <KunInput password value="ikun666"/>
    </>
)

export default App;
```

## 禁用状态

```tsx
import { KunInput } from "warehouse-ikun";

const App = () =>  (
	<KunInput disabled placeholder="你干嘛~"/>
)

export default App;
```

## 不同尺寸

```tsx
import { KunInput } from "warehouse-ikun";

const App = () =>  (
	<>
		<KunInput size="lg" placeholder="我是大哥"/>
		<KunInput placeholder="我是二弟"/>
		<KunInput size="sm" placeholder="我是三弟"/>
    </>
)

export default App;
```

## 前后插入元素

```tsx
import { KunInput } from "warehouse-ikun";
import { faFish,faCat } from "@fortawesome/free-solid-svg-icons";
import { KunIcon } from "warehouse-ikun";

const App = () => (
	<>
		<KunInput placeholder="香精煎鱼" addonAfter={
			<KunIcon icon={faFish} color="#e8d350"/>
		} />
      <KunInput placeholder="梅理猫" addonBefore={
			<KunIcon icon={faCat}/>
		} />
	</>
)

export default App;
```

## 前置/后置标签
用于配置一些固定组合。
```tsx
import { KunInput } from "warehouse-ikun";

const App = () => (
	<>
		<KunInput placeholder="xxxx" connectAfter=".com"/>
      <KunInput placeholder="xxxx" connectBefore="http://"/>
	</>
)

export default App;
```
## Input Props

| 参数 | 说明 | 类型 | 可选值                | 默认值 |
| ---- |--| --- |---------------------| --- |
| disabled | 是否禁用输入框 | boolean | true/false | false |
| size | 输入框尺寸 | string | lg/sm | --- |
| addonAfter | 后置额为元素 | ReactNode | --- | --- |
| addonBefore | 前置额为元素 | ReactNode | --- | --- |
| password | 是否为密码框 | boolean | true/false | false |
| placeholder | 占位文本 | string | --- | --- |
| connectAfter | 后置标签 | string | --- | --- |
| connectBefore | 前置标签 | string | --- | --- |
| value | 输入框默认值 | string | --- | --- |
| ... | 任何可添加input的属性 | --- | --- | --- |

## Input 事件

| 参数 | 说明 |
| ---- |--|
| onChange | 监听输入框内值变化 |
| onBlur | 监听输入框失去焦点 |
| onFocus | 监听输入框获取焦点 |
| onKeyDown | 监听键盘按下 |




