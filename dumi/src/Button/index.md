---
title: Button 按钮
order: 0
group:
    title: 基础
    order: 1
nav:
    title: "Components"
---
# Button按钮

## 基础用法

```tsx
import {KunButton} from "warehouse-ikun";

const App = () => (
      <KunButton>基础用法</KunButton>
);

export default App;
```
## 圆心按钮

```tsx
import {KunButton,KunIcon} from "warehouse-ikun";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const App = () => (
	<>
      <KunButton round>1</KunButton>
      <KunButton round>
        <KunIcon icon={faSearch}/>
      </KunButton>
      <KunButton round>我是椭圆</KunButton>
	</>
);

export default App;
```
## 不同类型
```tsx
import {KunButton} from "warehouse-ikun";

const App = () => (
	<>
      <KunButton btnType="default">默认</KunButton>
      <KunButton btnType="primary">主题</KunButton>
      <KunButton btnType="danger">危险</KunButton>
	</>
);

export default App;
```

## 不同尺寸

```tsx
import {KunButton} from "warehouse-ikun";

const App = () => (
	<>
      <KunButton size="lg">我是大哥</KunButton>
      <KunButton>我是二弟</KunButton>
      <KunButton size="sm">我是三弟</KunButton>
	</>
);

export default App;
```

## 是否禁用

```tsx
import {KunButton} from "warehouse-ikun";

const App = () => (
	<>
      <KunButton disabled>禁用！！！</KunButton>
	</>
);

export default App;
```

## Button Props

| 参数 | 说明 | 类型 | 可选值                 | 默认值 |
| --- |--| --- |---------------------| --- |
| size | 按钮尺寸 | string | lg / sm            | — |
| btnType | 按钮类型 | string | primary / danger / default | default | 
| round | 是否为圆形按钮 | boolean | true / false | false |
| disabled | 是否禁用该按钮 | boolean | true / false | false |
| ... | 其余任何button默认props | --- | --- | --- |
