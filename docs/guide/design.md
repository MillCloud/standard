# 设计

::: warning
该部分需要完善。
:::

我们追求的不仅是实现、完成功能，还是优雅地实现、完成功能。本章节主要关注代码和功能设计。

## 不要重复造轮子

社区内已经有大量优秀资源，99% 的问题都不需要自行造轮子解决或自己造的轮子不如已有的轮子。请优先使用社区优秀资源。

### CSS / SCSS

- [CSS Modules](https://github.com/css-modules/css-modules#readme)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

### Atomic CSS 原子化 CSS

- [tailwindcss](https://tailwindcss.com/)
- [unocss](https://github.com/unocss/unocss) 只能使用 icon

### CSS-IN-JS

- [emotion](https://emotion.sh/)
- [vanilla-extract](https://vanilla-extract.style/)

### JavaScript

- [axios](https://github.com/axios/axios) - 请求
- [lodash](https://lodash.com/) - 工具类
- [ramda](https://ramdajs.com/) - 工具类
- [dayjs](https://dayjs.gitee.io/) - 日期时间
- [change-case](https://github.com/blakeembrey/change-case) - 命名法
- [browser-update](https://browser-update.org/) - 浏览器更新

### TypeScript

- [type-fest](https://github.com/sindresorhus/type-fest) - 类型集合

### Vue

- [Vue 风格指南](https://cn.vuejs.org/style-guide/)
- [vue-router](https://router.vuejs.org/zh/) - 路由
- [pinia](https://pinia.vuejs.org/zh/) - 状态管理
- [vue-use](https://vueuse.org/) - 组合式集合
- [@tanstack/query](https://tanstack.com/query) - 管理请求
- [element-plus](https://element-plus.org/) - UI 库
- [vant](https://vant-ui.github.io/vant/) - UI 库
- [vite](https://cn.vitejs.dev/) - 构建工具

### UniApp

尽量避开 `uni_modules` 等非公共标准。

### Nest

无需特意遵循 [JSON-RPC](https://www.jsonrpc.org/) 或 [Restful API](https://restfulapi.net/)，但可以参考 Restful 做目录划分。

## TypeScript 优先

在实践中我们发现，通过正确书写 TypeScript 构建出来的程序要比通过正确书写 JavaScript 构建出来的程序要更健壮。得益于 TypeScript 的类型系统，程序维护、迭代也更为容易。

请阅读 [TypeScript 入门教程](https://ts.xcatliu.com/)、[TypeScript 中文教程](https://ts.yayujs.com/) 和 [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)，确保你有基本的 TypeScript 研发能力。

请不要在代码内做非必要的类型体操以炫耀技术，这会影响整体研发效率。

## 函数式编程优先

在实践中我们发现，函数式编程能有效减少问题出现。请阅读 [JavaScript 函数式编程指南](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/)，确保你有基本的函数式编程能力。

## 组合优先

我们提倡组合优先。如果一个功能值得分成两个函数实现，那绝不要放在一个函数内实现。这有利于解除耦合，为函数做测试，同时也给予更强的组合性。

## 意图优先

我们提倡命名时优先使用意图，如 `sum`、`sub` 等，不提倡使用描述，如 `process` 等。

注明意图使人更容易理解代码。在必要时，可以使用 [JSDoc](https://jsdoc.app/) 作为补充。

## 适当抽象

在实践中我们发现，适当抽象有利于提高代码健壮性。

“适当抽象”本身就是一个抽象的描述，如果代码满足以下的规律，可尝试做适当抽象。

1. 代码相对稳定，预计在一个月内不会出现完全推翻重做的情况。
2. 代码已经重复出现 3 次或以上，且重复率在 60% 或以上。

## 参考

- [代码整洁之道](https://weread.qq.com/web/bookDetail/f5e32ee0811e36886g01018d)
- [代码精进之路：从码农到工匠](https://weread.qq.com/web/bookDetail/81132f5071cc7f7a81151c9)
- [重构：改善既有代码的设计](https://book.douban.com/subject/30468597/)
- [程序员修炼之道](https://book.douban.com/subject/35006892/)
