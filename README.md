# wbfc-floor-shower

> Wbfc 楼层展示共通组件

## 下载安装
```shell
npm install wbfc-floor-shower
```

## 商品展示列表
``` javascript
import FsProductsShowHorLink from 'wbfc-floor-shower/src/components/fs-products-show-hor-link/fs-products-show-hor-link';
```

### Attributes
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
showTemplete|是否为模板布局 模板布局模式为只有占位的背景色块 不显示实际组件|Boolean|false|true/false|false
pgtDataFlag|是否显示宣传信息|Boolean|false|true/false|true
navIsVertical|楼层信息是否为垂直版|Boolean|false|true/false|false
navDataFlag|是否显示楼层信息|Boolean|false|true/false|true
dividerFlag|是否显示宣传信息和楼层信息的分割线|Boolean|false|true/false|false
categoryDataFlag|是否显示分类导航|Boolean|false|true/false|true
categoryAllFlag|是否显示【查看全部>】|Boolean|false|true/false|true
pgtData|宣传信息|Object|false|-|{}
pgtDivider|分割线信息 配置参数请参考 [Element UI Divider](https://element.eleme.cn/#/zh-CN/component/divider)|Object|false|-|{}
navData|楼层信息|Object|false|-|{}
categoryData|分类信息|Object|false|-|{separator:'/'}
categoryAll|【查看全部>】信息|Object|false|-|{}
productData|商品信息|Object|false|-|{}
productHeight|商品信息显示高度|String|false|-|'30rem'
colorSchemes|配色方案|Object|false|-|{mainColor: '#F86400',bgColor: '#FFFBEF'}
showInfo|商品显示信息|Object|false|-|{row:2, col: 4}
productTitleMaxLength|商品标题最大长度 标题过长时会用【...】替代显示|int|false|-|40

### pgtDataFlag
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
mainTitle|宣传信息主标题|String|false|-|-
subTitle|宣传信息副标题|String|false|-|-

### navData
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
mainTitle|楼层信息主标题|String|false|-|-
subTitle|楼层信息副标题|String|false|-|-

### navData
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
mainTitle|楼层信息主标题|String|false|-|-
subTitle|楼层信息副标题|String|false|-|-

### categoryData
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
separator|分隔符|String|false|-|'/'
list|分类列表|Object|false|-|-

其他配置请参考 [Element UI Breadcrumb](https://element.eleme.cn/#/zh-CN/component/breadcrumb)

### categoryData.list
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
text|显示文字|String|true|-|-
href|跳转链接|String|true|-|-

### categoryAll
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
label|显示文字|String|true|-|-

其他配置请参考 [Element UI Link](https://element.eleme.cn/#/zh-CN/component/link)

### productData
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
list|商品列表|Object|false|-|-

### productData.list
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
title|商品标题|String|false|-|-
desc|商品描述|String|false|-|-
img|商品图片|String|false|-|-

### colorSchemes
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
mainColor|主色|String|false|-|#F86400
bgColor|背景色|String|false|-|#FFFBEF

### showInfo
参数|说明|类型|必填|可选值|默认值
---|---|---|---|---|---
row|行数|int|false|-|2
cole|列数|int|false|-|4


## 商品展示列表编辑器(分类横版)
商品展示列表 分类导航为横向面包屑链接，点击跳转
``` javascript
import FsProductsShowHorLinkEditor from 'wbfc-floor-shower/src/components/fs-products-show-hor-link/fs-products-show-hor-link-tpl-editor';
```

## 商品展示列表编辑器(分类竖版)
商品展示列表 分类导航为纵向按钮链接，点击跳转
``` javascript
import FsProductsShowVerLinkEditor from 'wbfc-floor-shower/src/components/fs-products-show-hor-link/fs-products-show-ver-link-tpl-editor';
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
