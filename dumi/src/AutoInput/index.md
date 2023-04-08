---
title: AutoInput 自动完成
order: 2
group:
    title: 数据录入
    order: 3
nav:
    title: "Components"
---

## 介绍

输入框自动完成功能,可通过键盘 ↑ ↓ 键及 Enter 选择
只接受 string[]数据构成数据列表，请自行将数据转换为 string[]

<code style="font-size: 16px">以下功能同 [Input](/components/input) 组件
[不同尺寸](/components/input#不同尺寸)
[禁用状态](/components/input#禁用状态)
[前后插入不同元素](/components/input#前后插入元素)
</code>
## 基础使用

```tsx
import { KunAutoInput } from "warehouse-ikun";

const App = () =>  {
  const data = [
		"abc",
		"bcg",
		"dsad",
		"dahsjdh",
	]
	return (
		<>
			<KunAutoInput data={data}/>
        </>
    )
}

export default App;
```


## AutoInput Props

| 参数 | 说明 | 类型 | 可选值                | 默认值 |
| ---- |--| --- |---------------------| --- | 
| data 必选！ | 检索的总数据 | string[] | --- | --- |
| disabled | 是否禁用输入框 | boolean | true/false | false |
| size | 输入框尺寸 | string | lg/sm | --- |
| addonAfter | 后置额为元素 | ReactNode | --- | --- |
| addonBefore | 前置额为元素 | ReactNode | --- | --- |
| placeholder | 占位文本 | string | --- | --- |
| defaultValue | 输入框默认值 | string | --- | --- |
| optionsLength | 列表最大显示个数 | number | --- | 6 |
| ... | 任何可添加input的属性 | --- | --- | --- |

## AutoInput 事件

| 参数 | 说明 | 类型 | 接收参数详情 | 
| ---- |--|---|---|
| selectOptions | 监听键盘上下键选择数据 | (arg: string) => any | 当前选中的数据值 |
| enterKeyDown | 自定义 Enter键点击以后触发的回调 | () => any | --- |
| fetchOptions | 自定义筛选条件 | (arg: string) => string[] | 输入框中的值 |




