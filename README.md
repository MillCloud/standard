# 前端规范

## 目标

- 降低团队融入成本
- 降低问题出现的可能性
- 降低沟通成本
- 提高开发效率
- 提高团队协作效率
- 提高项目可维护性

## 工作流规范

### 版本号

版本号格式：`[主版本号].[次版本号].[修订号]`，如`1.0.0`。

版本号递增规则如下：

- 主版本号：存在破坏性更新时
- 次版本号：存在功能新增时
- 修订号：存在问题修复时

先行版本号及版本编译元数据可以加到`[主版本号].[次版本号].[修订号]`的后面，作为延伸，如`1.0.0-rc.1`。

在项目中，可以考虑使用 [release](https://www.npmjs.com/package/release)。

更多信息参见[语义化版本](https://semver.org/lang/zh-CN/)。

### 版本控制

3 人或以上团队，使用 git-flow 工作流。

![git-flow 示意图](https://cdn.nlark.com/yuque/0/2019/png/199677/1547711700486-cff85698-8f15-4397-b845-22ae6efa4935.png)

- feature：功能分支，一般是从 develop 开发分支上检出(checkout)
- develop：开发分支，feature 功能分支的代码开发完成后，经过 code review 后合并到此分支
- release：测试、发布分支，此分支从 develop 分支上检出(checkout), 一般提测阶段会使用该分支的代码
- bugfix：修复分支，修复 release 分支问题
- hotfix：紧急修复分支，一般是用于修复上线后的生产环境的问题
- master：可发布的稳定版分支

更多信息参见：

- [Git 工作流与分支管理规范](https://www.yuque.com/fe9/basic/nruxq8#837fe4a5)
- [Git Flow](https://github.com/ivan-94/git-guide/blob/master/branch/gitflow.md)

单人或两人团队，使用简单工作流。

- develop：开发分支，在此分支完成除 master 分支外的所有分支的工作
- master：可发布的稳定版分支

### 版本提交

提交信息格式：

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

如：

```text
feat(utils): add formatter utils
```

type 只允许取以下值：

- build：影响构建系统或外部依赖关系的更改，如 npm
- ci：更改 ci 配置文件和脚本，如 travis-ci、circle-ci
- chore：构建过程或辅助工具和库的更改，基本弃用，可用于表示发布 release
- docs：更改文档
- feat：新功能
- fix：问题修复
- perf：性能优化
- refactor：重构代码，既没有问题修复，也没有增加功能
- revert：回滚代码
- style：不影响代码含义的更改，如空格、格式化、缺失分号
- test：增加测试或修改当前测试

在项目中，需要组合使用 [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)，[@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)，[commitizen](https://www.npmjs.com/package/commitizen) 和 [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)。

更多信息参见 [conventional-commits](https://www.conventionalcommits.org/)

### 构建

构建工具必须遵循三条原则：

- 约定大于配置：开箱即用，快速开发
- 工具链独立更新：升级简单，降低影响
- 定制需求可插件化

原生开发时，使用 webpack 进行构建。使用 vue 或 react 开发时，利用脚手架进行构建。

TODO：补充基础 webpack 配置供团队使用。

### 发布

TODO：补充该部分。

### 持续集成

TODO：补充该部分。

### 任务管理

TODO：补充该部分。

## 技术栈

技术栈的考量主要有三点：

- 成本：考虑团队成员的接纳能力，如果成本小于收获的利益则推行较难，最直接的体现就是小公司往往采用 vue 作为技术栈
- 收益：是否能够解决当前的某些痛点，比如使用 hooks + context 的方式替代 redux
- 风险：一般不能将一个实验阶段的技术使用到生产环境中，一个比较稳妥的方法就是等待正式版释出 6 个月后再尝试过渡接入，另外也要考虑持续性更新与及时处理社区反馈的问题

既定技术栈参见 [modyqyw/技术栈](https://modyqyw.top/front-end/technology-stack/)。

## 浏览器兼容

通过`.browserslistrc`文件指定浏览器支持。

既定浏览器支持如下所示。

```rc
> 0.2%
last 5 versions
not dead
chrome >= 70
firefox >= 70
```

## 项目组织规范

### 通用的项目组织规范

TODO：补充该部分。

### 目录组织的风格

TODO：补充该部分。

### 脚手架

对于 vue 项目，使用以下任一脚手架初始化，配置并开发：

- nuxt.js
- vue-cli

对于 react 项目，使用以下任一脚手架初始化，配置并开发：

- umi
- create-react-app

对于小程序，使用以下任一框架初始化，配置并开发：

- taro
- uni-app

对于 app，使用以下框架初始化，配置并开发：

- uni-app

## 编码规范

### 编辑器支持

通过`.editorconfig`文件指定编辑器支持。

既定编辑器支持如下所示。

```rc
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

```

### HTML

- 标签不要大写：`<!doctype html>`
- 用两个空格来代替制表符
- 嵌套元素缩进一次
- 属性使用双引号包裹：`<div class="container"></div>`
- 自闭合元素末尾不要添加`/`：`<img>`
- 不省略可选的结束标签：如`</li>`，`</body>`
- 在每个 html 文件第一行添加标准模式声明：`<!doctype html>`
- 指定 html 标签的`lang`属性：`<html lang="en"></html>`
- 为 ie 指定 edge 模式：`<meta http-equiv="X-UA-Compatible" content="IE=edge">`
- 指定字符编码：`<meta charset="UTF-8">`
- 引入 css 文件和 js 文件无需指定 type
- 属性应按顺序给出：`class`，`id`，`name`，`data-*`，`src`，`for`，`type`，`href`，`value`，`title`，`alt`，`role`，`aria-*`
- 两个或以上属性应分行书写
- boolean 型属性声明时不赋值：`<input disabled>`
- 减少不必要的标签数量，降低复杂度：`<img class="avatar" src="...">`比`<span class="avatar"><img src="..."></span>`更好
- 尽量不要使用 js 操作 dom
- 使用 prettyhtml 或 prettier 做格式化，可选配置 @modyqyw/prettier-config

### CSS

- 用两个空格来代替制表符
- 尽可能不要使用 id 选择器
- 为选择器分组时，单独的选择器单独放一行
- 每个声明块的左花括号前加一个空格
- 声明块的右花括号单独成行
- 每条声明语句的`:`后加一个空格
- 每条声明独占一行
- 所有声明以分号结尾
- 声明块之间用空行隔开
- 对于以逗号分隔的属性值，每个逗号后加一个空格
- 不要在`rgb()`、`rgba()`、`hsl()`、`hsla()`或`rect()`值的内部的逗号后加空格
- 对于属性值或颜色参数，省略小于 1 的小数前面的 0
- 十六进制值全部小写
- 尽量使用简写形式的十六进制值
- 选择器中的属性使用双引号包裹
- 不要为 0 值指定单位
- 尽可能地使用 0 值，而不是 none 值：`border: 0;`
- 属性应按顺序给出：Positioning 定位，Box model 盒模型，Typographic 排版，Visual 视觉，Misc 杂项
- 除非在使用预编译器，否则不要使用`@import`：可以使用`<link>`作为`@import`的替代
- 将媒体查询放在尽可能相关规则的附近
- 当使用特定厂商的带有前缀的属性时，通过缩进的方式，让每个属性的值在垂直方向对齐：可以使用 autoprefixer 作自动补全
- 在需要显示地设置所有值的情况下，不要使用简写形式的属性声明：`padding`，`margin`，`font`，`background`
- 使用预编译器，尽量减少嵌套与`@extend`
- 使用预编译器时，`@include`与`@mixin`放置在属性声明之后，嵌套选择器之前
- 使用预编译器时，变量名应由字母，数字与减号组成
- 圆括号中的数学计算表达式的数值、变量和操作符之间加一个空格
- 适当添加注释：不要简单地重申组件或 class 名称，对于较长的注释，务必书写完整的句子，对于一般性注解，可以书写简洁的短语
- 尽可能地使用行注释，行注释独占一行
- 不使用行尾注释
- class 名称中只能出现小写字符和减号：`btn`，`btn-danger`
- 避免过度简写：可以写成`.btn`，不能写成`.b`
- class 名称尽可能短，且意义明确
- 基于最近的父 class 或基本 class 作为新 class 的前缀
- 创建用于特定 js 的类名时，添加`.js-`前缀
- 对于通用元素使用 class ，这样利于渲染性能的优化。
- 经常出现的组件不要使用属性选择器：`[class^="..."]`
- 选择器尽可能短，并尽量限制组成选择器的元素个数，最好不要超过 3 个，否则应考虑重新设计样式
- 只有在必要的时候才将 class 限制在最近的父元素内：如不使用带前缀的 class 时
- 以组件为单位组织代码段
- 使用一致的空白符将代码分隔成块
- 如果使用了多个 CSS 文件，将其按照组件而非页面的形式分拆
- 使用 stylelint 做格式化和校验，可选配置 @modyqyw/stylelint-config-css，@modyqyw/stylelint-config-less，@modyqyw/stylelint-config-scss，stylelint-config-twbs-bootstrap
- 实现组件库，可以使用 bem 命名规范

### Javascript

- [airbnb javascript style guide](https://github.com/airbnb/javascript)
- [ahooks - api standards](https://ahooks.js.org/zh-CN/docs/api)
- 使用 eslint 做校验，可选配置 @modyqyw/eslint-config
- 如果 eslint 配置了格式化相关的配置项，使用 eslint 做格式化，否则使用 prettier 做格式化，如使用 `extends: ["eslint:recommended"]` 配置时，使用 prettier 做格式化，可选配置 @modyqyw/prettier-config

### 特定框架风格指南

- vue：[vue style guide](https://cn.vuejs.org/v2/style-guide/index.html)，recommended（即优先级 C）及以上都是需要的
- react：[airbnb react style guide](https://github.com/airbnb/javascript/tree/master/react)

### 代码审查 Code Review

使用 Pull Request 进行代码审查。

审查内容包括：

- 是否符合本文档所述规范
- 设计思想
- 模块耦合度
- 代码重复度
- 代码健壮性
- 代码性能
- 代码效率
- 是否覆盖所有场景

## 文档规范

TODO：补充该部分。

## UI设计规范

react 项目跟随 Ant Design。

vue 项目跟随 Ant Design 或 Element Design。

## 测试规范

TODO：补充该部分。

## 异常处理、监控和调试规范

TODO：补充该部分。

## 协作规范

### 协作流程

分析需求 -> 系统设计 -> 接口文档 -> 开发 -> 联调

- 分析需求：前后端，测试，产品参与，产品主持，明确需求，接受开发和测试的反馈，确保大家对需求有一致的认知
- 前后端开发讨论：讨论应用的一些开发设计，沟通技术点，难点等
- 接口文档：由前后端一起设计，或由后端设计，前端确认是否符合要求
- 开发：前后端并行开发
- 联调：前端将接口请求代理到后端服务，进行真实环境联调

### 接口

以下规范三选一：

- restful
- jsonrpc
- graphql

使用框架时，尽量把接口形式往以上规范靠拢。

### 接口文档

接口文档应包含以下内容：

- 版本号
- 文档描述
- 服务入口，即基本路径等
- 测试服务器，可选
- 简单使用示例
- 安全与认证
- 具体接口定义
  - url 或方法名
  - 方法描述
  - 请求参数和对应描述，包括数据类型、是否可选等
  - 响应参数和对应描述, 包括数据类型、是否可选等
  - 可能的异常情况，错误代码和对应描述
  - 请求示例，可选
- 可以考虑使用 swagger

### 接口测试与模拟

- 联调前，后端必须测试接口
- 联调前，前端可以先实现静态页面，或者根据接口文档来模拟对接后端接口，模拟接口可以自己使用 koa 搭建模拟数据服务器

## 培训/知识管理/技术沉淀

### 新人培训

- 产品架构与组织架构
- 产品研发流程
- 工作范围
- 建立资源索引
- 规范
- 一对一辅导

### 营造技术氛围

- 鼓励写个人或团队的技术博客
- 鼓励参加开源
- 鼓励定期分享
- 鼓励重构和持续优化代码
- 鼓励抽离基础库
- 落实和完善开发规范
- 建立面试题库

## 致谢

- [荒山 - 如果我是前端团队 Leader，怎么制定前端协作规范?](https://juejin.im/post/5d3a7134f265da1b5d57f1ed)
- [语义化版本](https://semver.org/lang/zh-CN/)
- [Git 工作流与分支管理规范](https://www.yuque.com/fe9/basic/nruxq8#837fe4a5)
- [Git Flow](https://github.com/ivan-94/git-guide/blob/master/branch/gitflow.md)
- [conventional-commits](https://www.conventionalcommits.org/)
- [mdo - code-guide](https://codeguide.co/)
- [Nicole Sullivan - OOCSS wiki](https://github.com/stubbornella/oocss/wiki)
- [Smashing Magazine - Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
- [CSS Trick - BEM 101](https://css-tricks.com/bem-101/)
- [Harry Roberts - Introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [airbnb - css/sass style guide](https://github.com/airbnb/css)
- [twbs - stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap)
- [airbnb - css style guide](https://github.com/airbnb/css)
- [airbnb - javascript style guide](https://github.com/airbnb/javascript)
- [ahooks - api standards](https://ahooks.js.org/zh-CN/docs/api)
- [vue - vue style guide](https://cn.vuejs.org/v2/style-guide/index.html)
- [airbnb - react style guide](https://github.com/airbnb/javascript/tree/master/react)
- [Ant Design](https://ant-design.gitee.io/)
