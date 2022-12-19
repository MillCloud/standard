# 研发

:::warning
需要更新。
:::

## 通用

总体上遵循 [bootstrap editorconfig](https://github.com/twbs/bootstrap/blob/main/.editorconfig) 和 [kettanaito - naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)。

书写 JavaScript/TypeScript 时，应优先使用驼峰命名法。

书写 CSS 类名时，应优先使用短横线命名法，其次 BEM 命名法。对于 CSS Modules，应优先使用驼峰命名法。

具体情况应根据框架要求决定。

## HTML

总体上遵循 [mdo - code-guide](https://codeguide.co/)。

## CSS/LESS/SASS/SCSS/STYLUS

总体上遵循 [mdo - code-guide](https://codeguide.co/)，同时要理解 [BEM](http://getbem.com/)，[SMACSS](http://smacss.com/)，[OOCSS](https://www.keycdn.com/blog/oocss#what-is-oocss) 和 [CSS Modules](https://github.com/css-modules/css-modules#readme)。

## JavaScript

总体上遵循 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#readme)，同时要理解 [Standard JavaScript Style Guide](https://standardjs.com/)。

## TypeScript

总体上遵循 [iamturns - eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript#readme)，同时要理解 [Google TypeScript Style Guide](https://github.com/google/gts#readme)。

## Vue

总体上遵循 [Vue v2 风格指南](https://cn.vuejs.org/v2/style-guide/) 和 [Vue v3 风格指南](https://v3.cn.vuejs.org/style-guide/)。

研发小程序时，无特殊要求时仍遵循以上规范，否则遵循框架规范。

## React

总体上遵循 [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react#readme)。

研发小程序时，无特殊要求时仍遵循以上规范，否则遵循框架规范。

## 异常处理

异常不要用来做流程控制或条件控制，否则效率低下。

异常必须针对性捕获，否则难以定位问题，也难以针对性处理。

捕获异常后一定要处理，否则无需捕获。外层调用者一定要处理异常。

线上的意外异常应自动上报到系统，作收集、分析。

必须提供手动上报异常的方式。

## 工具

研发中需要考虑代码格式的问题，考虑使用 [Prettier](https://prettier.io/) 搭配其它 Linter。

整体而言，可以考虑 [VSCode](https://code.visualstudio.com/docs) + [@modyqyw/fabric](https://github.com/ModyQyW/fabric)。

<!-- ## 接口规范

- [JSON-RPC](https://www.jsonrpc.org/)
- [Restful API](https://restfulapi.net/)
- [GraphQL](https://graphql.org/)

## 接口文档

- 版本号
- 文档描述
- 基本路径
- 测试服务器，可选
- 简单使用示例
- 安全与认证
- 具体接口定义
  - url 或方法名
  - 方法描述
  - 请求参数和对应描述，包括数据类型、是否可选等
  - 响应参数和对应描述, 包括数据类型、是否可选等
  - 可能的异常情况，错误代码和对应描述
  - 请求示例，可选 -->
