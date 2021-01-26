# 前端规范

## 目标

本规范是聚合社区内现有的很多优秀实践而来的规范，旨在降低新成员融入的成本，提高开发、研发、协作效率，避免开发中常见的问题。

## 编码规范

### 通用

遵循 [bootstrap - editorconfig](https://github.com/twbs/bootstrap/blob/main/.editorconfig)。

尽可能使用驼峰法命名，某些情况下，如书写 CSS 类名时，可以使用其它命名方法。

### HTML

总体上遵循 [mdo - code-guide](https://codeguide.co/)。

### CSS/LESS/SASS/SCSS/STYLUS

总体上遵循 [mdo - code-guide](https://codeguide.co/)，同时要理解 [BEM](http://getbem.com/)，[SMACSS](http://smacss.com/) 和 [OOCSS](https://www.keycdn.com/blog/oocss#what-is-oocss)。

### JavaScript

总体上遵循 [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript#readme)，同时要理解 [Standard JavaScript Style Guide](https://standardjs.com/)。

### TypeScript

总体上遵循 [iamturns - eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript#readme)，同时要理解 [Google TypeScript Style Guide](https://github.com/google/gts#readme)。

### Vue

总体上遵循 [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/)。

开发小程序时，无特殊要求时仍遵循以上规范，否则遵循框架规范。

### React

总体上遵循 [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react#readme)。

开发小程序时，无特殊要求时仍遵循以上规范，否则遵循框架规范。

### 工具

由于在开发中需要考虑代码格式的问题，所以需要使用 [Prettier](https://prettier.io/)。请使用 [VSCode](https://code.visualstudio.com/docs) + [@modyqyw/fabric](https://github.com/ModyQyW/fabric)。

## 工作流规范

### 任务管理

使用 [Microsoft Azure DevOps Server](https://azure.microsoft.com/zh-cn/solutions/devops/)，[AWS DevOps](https://aws.amazon.com/cn/devops/what-is-devops/)，[Jira](https://www.atlassian.com/zh/software/jira)，[Trello](https://trello.com/home) 或[滴答清单](https://dida365.com/home)进行任务管理。

关于 DevOps 的实践还可以参考 [Ledge](https://devops.phodal.com/) 和[阿里巴巴 DevOps 实践手册](https://developer.aliyun.com/topic/download?id=205)。

总体而言，滴答清单比较适合个人安排生活和工作，而其它应用更适合团队工作，建议先了解[时间管理方法论](https://help.dida365.com/tasks)并结合实际工具应用。

### 版本控制

3 人以上团队，使用 git-flow 工作流。

<img
  src="https://cdn.nlark.com/yuque/0/2019/png/199677/1547711700486-cff85698-8f15-4397-b845-22ae6efa4935.png"
  title="git-flow 示意图"
  alt="git-flow 示意图"
  width="540px"
/>

[图源](https://www.yuque.com/fe9/basic/nruxq8)

- feature - 功能分支，一般是从 develop 开发分支上检出 checkout
- develop - 开发分支，feature 功能分支的代码开发完成后，经过 code review 后合并到此分支
- release - 测试、发布分支，此分支从 develop 分支上检出 checkout, 一般提测阶段会使用该分支的代码
- bugfix - 修复分支，修复 release 分支问题
- hotfix - 紧急修复分支，一般是用于修复上线后的生产环境的问题
- master/main - 可发布的稳定版分支

3 人或以下团队，使用简单工作流。

- develop - 开发分支，在此分支完成除 master 分支外的所有分支的工作，可以在 develop 后添加个人名称表示个人分支，如 develop-wurui
- master/main - 可发布的稳定版分支

如果使用现成的 DevOps 工具，分支一般与工作项相关联，否则需要手动处理分支和具体任务之间的关系。

版本号遵循语义化版本，格式为`[主版本号].[次版本号].[修订号]`，如`1.0.0`。

版本号递增规则如下。

- 主版本号 - 存在破坏性更新时
- 次版本号 - 存在功能新增时
- 修订号 - 存在问题修复时

先行版本号及版本编译元数据可以加到`[主版本号].[次版本号].[修订号]`的后面作为延伸，如`1.0.0-beta.1`，`1.0.0-rc.1`。

### 版本提交

遵循 [Conventional Commits](https://www.conventionalcommits.org/)。

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

下面是一个示例。

```text
chore(release): v1.0.0
```

type 只允许取以下值。

- build - 影响构建系统或外部依赖关系的更改，如 npm
- ci - 更改 ci 配置文件和脚本，如 flow-ci、travis-ci、circle-ci、jerkins
- chore - 构建过程或辅助工具和库的更改，基本弃用，可用于表示发布 release
- docs - 更改文档
- feat - 新功能
- fix - 问题修复
- perf - 性能优化
- refactor - 重构代码，既没有问题修复，也没有增加功能
- revert - 回滚代码
- style - 不影响代码含义的更改，如空格、格式化、缺失分号
- test - 增加测试或修改当前测试

### 代码审查

- 是否符合本文档所述规范
- 设计思想
- 模块耦合度
- 代码重复度
- 代码健壮性
- 代码性能
- 代码效率

对于新成员，应采用提交时审查，以帮助新成员尽快融入团队。

对于其它成员，应采用定时审查，时间定为每周一次和里程碑完成时。

### 构建工具链

构建工具链必须遵循以下三条原则。

- 约定大于配置
- 工具链独立更新
- 定制需求可插件化

推荐使用社区内优秀的脚手架初始化并配置项目来开发，如 nuxt，quasar，umi，next，taro，rax，expo。

也可以使用以下模板直接开始开发。

- [MillCloud/boilerplate-vue](https://github.com/MillCloud/boilerplate-vue) - 桌面端网页，移动端网页，桌面端应用
- [MillCloud/boilerplate-uni-app](https://github.com/MillCloud/boilerplate-uni-app) - 移动端应用，小程序

### 持续集成

<img
  src="https://user-gold-cdn.xitu.io/2019/7/26/16c2c49ee0383b62"
  title="持续集成工作流"
  alt="持续集成工作流"
  width="640px"
/>

[图源](https://juejin.cn/post/6844903897610321934#heading-7)

DevOps 工具一般包含持续集成功能。要单独使用持续集成，可以考虑 flow-ci、travis-ci、circle-ci 和 jerkins。

### 发布

<img
  src="https://user-gold-cdn.xitu.io/2019/7/26/16c2c49ed9c29074"
  title="发布工作流"
  alt="发布工作流"
  width="640px"
/>

[图源](https://juejin.cn/post/6844903897610321934#heading-6)

DevOps 工具一般包含持续集成功能。

## 异常处理和监控规范

- 异常不要用来做流程控制或条件控制，否则效率低下。
- 异常必须针对性捕获，否则难以定位问题，也难以针对性处理。
- 捕获异常后一定要处理，否则无需捕获。外层调用者一定要处理异常。
- 线上的意外异常应自动上报到系统，作收集、分析，可以使用 [sentry](https://docs.sentry.io/)。
- 一定要提供手动上报异常的方式。

## 测试规范

<img
  src="https://user-gold-cdn.xitu.io/2019/7/26/16c2c4a029bc2a3f"
  title="测试工作流"
  alt="测试工作流"
  width="640px"
/>

[图源](https://juejin.cn/post/6844903897610321934#heading-36)

测试是代码健壮性的保障。每一项测试应具有针对性，所有测试组合起来应覆盖尽可能多的代码。

业务代码较为多变，可以根据情况，只使用代码测试基础组件/工具类等，甚至不使用代码测试，而是直接使用浏览器开发者工具调试。对于移动端，可以使用 [eruda](https://github.com/liriliri/eruda/blob/master/doc/README_CN.md#readme) 或 [v-console](https://github.com/Tencent/vConsole/blob/dev/README_CN.md#readme)。如果需要代理，可以使用 [whistle](https://github.com/avwo/whistle/blob/master/README-zh_CN.md#readme) 或 [light-proxy](https://lightproxy.org/zh-CN)。

### 单元测试

首选 [Jest](https://jestjs.io/zh-Hans/) 做单元测试，备选 [Mocha](https://mochajs.org/)。

### 组件测试

首选 [Testing Library](https://testing-library.com/)。

### 端对端测试

首选 [Cypress](https://docs.cypress.io/)，备选 [Nightwatch](https://nightwatchjs.org/) 和 [TestCafe](https://devexpress.github.io/testcafe/)。

## 文档规范

不同的文档有不同的目标。在这里阐述的文档主要指前端开发者提供给前端开发者的文档，而并非产品提供的需求文档和产品文档、后端开发者提供的接口文档等。

### 代码即文档

代码可以作为文档使用，但必须遵循以下原则。

- 如果使用 JavaScript 开发，变量、方法等命名需要尽量体现意图，必须使用 [JSDoc](https://jsdoc.app/) 注明类型。如果命名较难体现意图，使用 JSDoc 注明意图。
- 如果使用 TypeScript 开发，必须书写定义注明类型，变量、方法等命名需要尽量体现意图。如果命名较难体现意图，使用 JSDoc 注明意图。

### README 文档

一个良好的 README 文档能够让后来者了解项目的相关信息，也能够让后来者快速上手项目。

要快速生成一个 README，可以使用 [othneildrew - best-readme-template](https://github.com/othneildrew/Best-README-Template#readme)。

如果还需要更多示例，可以参考 [matiassingers - awesome-readme](https://github.com/matiassingers/awesome-readme#readme)。

## 前后端协作规范

### 协作流程

分析需求 -> 系统设计 -> 接口文档 -> 开发 -> 联调

- 分析需求 - 产品、设计师、前后端、测试参与，产品主持，明确需求，接受开发和测试的反馈，确保大家对需求有一致的认知
- 系统设计 - 讨论应用的一些开发设计，沟通技术点、难点等，并给出 PRD、原型图和设计稿
- 接口文档 - 最好由前后端一起设计，也可以由后端设计，前端确认是否符合要求
- 开发 - 前后端并行开发，前端应模拟请求以编写业务逻辑代码，同时也应该书写必要的注释和测试，后端实现接口应自测试接口确认符合文档
- 联调 - 前端将接口请求代理到后端服务，进行真实环境联调
- 测试 - 提交给测试工程师做专门测试

### 接口规范

- [JSON-RPC](https://www.jsonrpc.org/)
- [Restful API](https://restfulapi.net/)
- [GraphQL](https://graphql.org/)

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

- [荒山 - if 我是前端团队 Leader，怎么制定前端协作规范?](https://juejin.cn/post/6844903897610321934)
- [荒山 - if 我是前端团队 Leader，怎么用好看板进行任务管理?](https://juejin.cn/post/6844903953939824654)
- [谭光志 - 带你入门前端工程](https://woai3c.gitee.io/introduction-to-front-end-engineering)
- [Ledge](https://devops.phodal.com/)
