---
title: Icon 字体图标
order: 1
group:
    title: 基础
    order: 2
nav:
    title: "Components"
---

## 介绍

icon组件来源于 [Font Awesome](https://fontawesome.com/start) ,获取更多icon图标请前往 [图标示例](https://fontawesome.com/icons) 查询

icon实质为 svg 图标


## 安装
<pre style="background-color: rgb(167,201,197); font-size: 16px">
  <code>
    npm i @fortawesome/fontawesome-svg-core --save
    npm i @fortawesome/free-solid-svg-icons --save
    npm i @fortawesome/free-regular-svg-icons --save
    npm i @fortawesome/react-fontawesome@latest --save 
  </code>
</pre>

## 单独导入

在单独的文件中导入需要使用的图标，并且使 icon 属性为导出的该图标

```tsx
import {KunIcon} from "warehouse-ikun";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

const Foo = () => (
	<KunIcon icon={faCoffee} />
);

export default Foo;
```

## 全局导入

需要在 react 主文件 index.tsx 中配置如下，即可在全局导入所有的组件
此时可以使用字符串表示 icon

<pre style="background-color: rgb(167,201,197); font-size: 16px">
  <code>
    import {library} from "@fortawesome/fontawesome-svg-core";
    import {fas} from "@fortawesome/free-solid-svg-icons";
    library.add(fas)
  </code>
</pre>

<pre style="background-color: rgb(227,227,227); font-size: 16px">
    <code>
    icon="coffee"
    </code>
</pre>

## 不同类型

```tsx
import {KunIcon} from "warehouse-ikun";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

const Foo = () => (
	<>
	  <KunIcon icon={faCoffee} type="primary" />
	  <KunIcon icon={faCoffee} type="secondary" />
	  <KunIcon icon={faCoffee} type="success" />
	  <KunIcon icon={faCoffee} type="info" />
	  <KunIcon icon={faCoffee} type="warning" />
	  <KunIcon icon={faCoffee} type="danger" />
	  <KunIcon icon={faCoffee} type="light" /><span> -> tip: 我是白色的</span>
	  <KunIcon icon={faCoffee} type="dark" />
    </>
);

export default Foo;
```

## Icon Props

| 参数 | 说明 | 类型 | 可选值                | 默认值 |
| ---- |--| --- |---------------------| --- |
| type | 图标类型 | string | primary / secondary / success / info / warning / danger / light / dark | — |
| icon 必选！ | 图标唯一识别 | string / IconProp | — | — |
| color | 图标颜色 | string | --- | — |
| font-size | 图标大小 | string | --- | — |
| ... | 任何可添加svg图片的属性 | --- | --- | — |

