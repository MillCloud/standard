# 前端规范

## 目标

本规范旨在降低新成员融入的成本，提高开发、研发、协作效率，避免因不规范而导致的问题。

## 编码规范

### 通用

- 使用两个空格代替制表符。
- 使用`LF`作为换行符。
- 行结尾不能有空格。
- 文件结尾有一个空行。

### HTML

- 使用小写标签。
- 嵌套元素比父级多缩进一次。
- 属性值使用`""`包裹。
- 自闭合元素尾部不添加`/`。
- 不省略可选结束标签。
- 第一行是标准模式声明`<!doctype html>`。
- 为`html`根元素指定`lang`属性。
- 添加`<meta>`标签指定 IE 兼容模式`<meta http-equiv="X-UA-Compatible" content="IE=edge">`。
- 添加`<meta>`标签指定缩放`<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">`。
- 使用 utf-8 字符编码`<meta charset="UTF-8">`。
- 引入 CSS 和 JavaScript 文件时不需要指定`type`属性。
- HTML 属性顺序：`class`，`id`，`name`，`data-*`，`src`，`for`，`type`，`href`，`value`，`title`，`alt`，`role`和`aria-*`。
- 布尔型属性声明时不赋值。
- 遵循 HTML 标准和语义，但也需要尽量避免多余的元素。
- 尽量避免使用 JavaScript 生成标签。

### CSS/LESS/SASS/SCSS/STYLUS

- 为选择器分组时，单独的选择器占一行。
- 每个声明块的左大括号前添加一个空格。
- 每个声明块的右大括号单独成行。
- 每条声明语句的`:`后添加一个空格。
- 每条声明语句独占一行。
- 每条声明语句以`;`结尾。
- 对于以逗号分隔的属性值，每个逗号后添加一个空格。
- 不要在`rgb()`，`rgba()`，`hsl()`和`rect()`值内部逗号后添加空格。
- 对于属性值或颜色参数，省略小于 1 的小数前的 0。
- 使用小写十六进制值。
- 如果可以，使用简写十六进制值。
- 选择器属性使用`""`包裹。
- 不要为 0 值指定单位。
- 属性需要分成`position`，`box model`，`typography`，`visual`和`misc`，具体顺序见 [Bootstrap property order for Stylelint](https://github.com/twbs/stylelint-config-twbs-bootstrap/blob/master/css/index.js#L39)。
- 媒体查询要放在相关规则附近。
- 带前缀的属性需要放在对应属性附近。
- 添加必要的注释传达上下文关系和代码目的。
- 类名可以简写，但不能过度简写。
- 类名遵循 BEM 或 css modules。
- 使用通用元素类名添加样式。
- 尽量使用短且含义明确的类名。
- 不要使用属性选择器处理经常出现的元素。
- 选择器不能超过 3 个元素。
- 尽量避免属性简写。
- 以组件为单位组织代码块。
- 按组件分拆大样式文件成多个样式文件。
- 组织样式时遵循 OOCSS，SMACSS，Atomic CSS，MCSS 或 AMCSS。
- CSS 文件使用多个`<link>`，不要使用`@import`。
- LESS/SASS/SCSS/STYLUS 文件只有使用后代选择器且存在多个需要嵌套的元素时才使用嵌套。
- LESS/SASS/SCSS/STYLUS 文件在数学计算表达式的数值、变量和操作符之间均添加一个空格。

### JavaScript

遵循 Airbnb JavaScript Style Guide。

### TypeScript

遵循 [iamturns - eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript#readme)。

### Vue

遵循 Vue 风格指南。

开发小程序时，无特殊要求时仍遵循以上规范，否则遵循框架规范。

### React

遵循 Airbnb React Style Guide。

开发小程序时，无特殊要求时仍遵循以上规范，否则遵循框架规范。

### 工具

VSCode/WebStorm + [@modyqyw/fabric](https://github.com/ModyQyW/fabric)

## 工作流规范

### 任务管理

使用 Microsoft Azure DevOps Server 或 Jira 进行任务管理。

短时间的小任务可以使用滴答清单或 Trello 做个人管理。

### 版本控制

3 人或以上团队，使用 git-flow 工作流。

![git-flow 示意图](https://cdn.nlark.com/yuque/0/2019/png/199677/1547711700486-cff85698-8f15-4397-b845-22ae6efa4935.png)

[图源](https://www.yuque.com/fe9/basic/nruxq8)

- feature：功能分支，一般是从 develop 开发分支上检出 (checkout)
- develop：开发分支，feature 功能分支的代码开发完成后，经过 code review 后合并到此分支
- release：测试、发布分支，此分支从 develop 分支上检出 (checkout), 一般提测阶段会使用该分支的代码
- bugfix：修复分支，修复 release 分支问题
- hotfix：紧急修复分支，一般是用于修复上线后的生产环境的问题
- master：可发布的稳定版分支

单人或两人团队，使用简单工作流。

- develop：开发分支，在此分支完成除 master 分支外的所有分支的工作
- master：可发布的稳定版分支

版本号遵循语义化版本，格式为`[主版本号].[次版本号].[修订号]`，如`1.0.0`。

版本号递增规则如下。

- 主版本号：存在破坏性更新时
- 次版本号：存在功能新增时
- 修订号：存在问题修复时

先行版本号及版本编译元数据可以加到`[主版本号].[次版本号].[修订号]`的后面作为延伸，如`1.0.0-beta.1`，`1.0.0-rc.1`。

### 版本提交

遵循 Conventional Commits。

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

改动日志可以自动生成。

### 代码审查

- 是否符合本文档所述规范
- 设计思想
- 模块耦合度
- 代码重复度
- 代码健壮性
- 代码性能
- 代码效率
- 是否覆盖所有场景

对于新成员，应采用提交时审查，以帮助新成员尽快融入团队。

对于其它成员，应采用定时审查，时间定为每周一次和里程碑完成时。

### 构建工具链

构建工具链必须遵循以下三条原则。

- 约定大于配置
- 工具链独立更新
- 定制需求可插件化

为此，请尽可能地使用以下模板直接开始开发。

- [MillCloud/boilerplate-vue](https://github.com/MillCloud/boilerplate-vue) - 桌面端网页，移动端网页，桌面端应用
- [MillCloud/boilerplate-uni-app](https://github.com/MillCloud/boilerplate-uni-app) - 移动端应用，小程序

对于特定场景，也可以考虑其它脚手架/模板，如 nuxt，quasar，umi，next，taro，rax，expo 等。

create-react-app 过于自由，请避免使用。

### 发布

![发布工作流](https://user-gold-cdn.xitu.io/2019/7/26/16c2c49ed9c29074?imageslim)

[图源](https://juejin.cn/post/6844903897610321934#heading-6)

### 持续集成

![持续集成工作流](https://user-gold-cdn.xitu.io/2019/7/26/16c2c49ee0383b62?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

[图源](https://juejin.cn/post/6844903897610321934#heading-7)

## 文档规范

TODO：待补充

## 测试规范

TODO：待补充

## 异常处理、监控和调试规范

TODO：待补充

## 前后端协作规范

### 协作流程

分析需求 -> 系统设计 -> 接口文档 -> 开发 -> 联调

- 分析需求：产品、设计师、前后端、测试参与，产品主持，明确需求，接受开发和测试的反馈，确保大家对需求有一致的认知
- 系统设计：讨论应用的一些开发设计，沟通技术点、难点等，并给出 PRD、原型图和设计稿
- 接口文档：由前后端一起设计，或由后端设计，前端确认是否符合要求
- 开发：前后端并行开发，前端应模拟请求以编写业务逻辑代码，后端实现接口应自测试接口确认符合文档
- 联调：前端将接口请求代理到后端服务，进行真实环境联调
- 测试：提交给测试工程师做专门测试

### 接口

- JSON-RPC
- Restful API
- GraphQL

### 接口文档

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
  - 请求示例，可选

## 培训/知识管理/技术沉淀

### 新成员培训

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
- 鼓励持续优化代码，鼓励适度重构
- 鼓励抽离项目通用基础库并封装抽象以减少重复工作
- 落实和完善开发规范
- 建立面试题库

## 致谢

以下不分先后顺序。

- [mdo - code-guide](https://codeguide.co/)
- [Get BEM](http://getbem.com/)
- [CSS Trick - BEM 101](https://css-tricks.com/bem-101/)
- [Harry Roberts - Introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
- [CSS Modules](https://github.com/css-modules/css-modules#readme)
- [Robin Rendle - What are CSS Modules and why do we need them?](https://css-tricks.com/css-modules-part-1-need/)
- [Inessa Brown - Methods to Organize CSS](https://css-tricks.com/methods-organize-css/)
- [Airbnb - CSS/Aribnb style guide](https://github.com/airbnb/css#readme)
- [twbs - stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap#readme)
- [Airbnb - JavaScript style guide](https://github.com/airbnb/javascript#readme)
- [iamturns - eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript#readme)
- [Google - TypeScript style guide](https://github.com/google/gts#readme)
- [Vue - Vue style guide](https://cn.vuejs.org/v2/style-guide/index.html)
- [Airbnb - React style guide](https://github.com/airbnb/javascript/tree/master/react#reamde)
- [umijs - fabric](https://github.com/umijs/fabric#readme)
- [NodyQyW - fabric](https://github.com/modyqyw/fabric#readme)
- [ahooks - api standards](https://ahooks.js.org/zh-CN/docs/api)
- [JSON-RPC](https://www.jsonrpc.org/)
- [Restful API](https://restfulapi.net/)
- [GraphQL](https://graphql.org/)
- [AWS - 什么是 DevOps](https://aws.amazon.com/tw/devops/what-is-devops/)
- [阿里巴巴 DevOps 实践手册](https://developer.aliyun.com/topic/download?id=205)
- [ledge](https://devops.phodal.com/)
- [荒山 - 如果我是前端团队 Leader，怎么制定前端协作规范](https://juejin.im/post/5d3a7134f265da1b5d57f1ed)
- [荒山 - 如果我是前端团队 Leader，怎么做好概要设计](https://juejin.cn/post/6844903936504119304)
- [荒山 - 如果我是前端团队 Leader，怎么用好看板进行任务管理](https://juejin.cn/post/6844903953939824654)
- [滴答清单 - 时间管理方法论](https://help.dida365.com/tasks)
- [Aaaaaashu - 前端开发规范手册](https://github.com/Aaaaaashu/Guide)
- [语义化版本](https://semver.org/lang/zh-CN/)
- [Git 工作流与分支管理规范](https://www.yuque.com/fe9/basic/nruxq8#837fe4a5)
- [Git Flow](https://github.com/ivan-94/git-guide/blob/master/branch/gitflow.md)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog#readme)
