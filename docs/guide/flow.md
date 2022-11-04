# 工作流

:::warning
需要更新。
:::

## 任务管理

以下是一些团队任务管理工具。

- [Microsoft Azure DevOps](https://azure.microsoft.com/zh-cn/overview/what-is-devops/)
- [AWS DevOps](https://aws.amazon.com/cn/devops/what-is-devops/)
- [阿里云 DevOps](https://develop.aliyun.com/devops)
- [Trello](https://trello.com/home)
- [OmniPlan](https://www.omnigroup.com/omniplan)
- [Worktile](https://worktile.com/)

以下是一些个人任务管理工具。

- [滴答清单](https://dida365.com/home)
- [Todoist](https://todoist.com/zh-CN)
- [Microsoft To Do](https://todo.microsoft.com/)
- [OmniFocus](https://www.omnigroup.com/omnifocus)
- [MyLifeOrganized](https://www.mylifeorganized.net/)

关于 DevOps 的实践还可以参考 [Ledge](https://devops.phodal.com/) 和 [阿里巴巴 DevOps 实践手册](https://developer.aliyun.com/topic/download?id=205)。

建议先了解 [时间管理方法论](https://help.dida365.com/tasks) 并结合实际工具应用。

另外也推荐建立必要的笔记/知识库，推荐 [语雀](https://www.yuque.com) 和 [wolai](https://www.wolai.com/signup?invitation=2S3Y77P)。

## 版本控制

3 人以上团队，使用 [git-flow](https://datasift.github.io/gitflow/) 工作流。

<img
  src="https://datasift.github.io/gitflow/GitFlowHotfixBranch.png"
  title="git-flow 示意图"
  alt="git-flow 示意图"
  width="540px"
  referrer="no-referrer"
/>

- `feature` - 功能分支，一般是从 `develop` 开发分支上检出 `checkout`
- `develop` - 开发分支，`feature` 功能分支的代码开发完成后，经过代码检查后合并到此分支
- `release` - 测试、发布分支，此分支从 `develop` 分支上检出 `checkout`, 一般提测阶段会使用该分支的代码
- `bugfix` - 修复分支，修复 `release` 分支问题
- `hotfix` - 紧急修复分支，一般是用于修复上线后的生产环境的问题
- `main`/`master` - 可发布的稳定版分支

3 人或以下团队，使用简单工作流。

- `develop` - 开发分支，在此分支完成除主分支外的所有分支的工作，可以在 `develop` 后添加个人名称表示个人分支，如 `develop-wurui`，也可以添加功能名称表示功能分支，如 `develop-signin`。
- `main`/`master` - 可发布的稳定版分支

如果使用现成的 `DevOps` 工具，分支一般与工作项相关联，否则需要手动处理分支和具体任务之间的关系。

版本号遵循语义化版本，格式为 `[主版本号].[次版本号].[修订号]`，如 `1.0.0`。

版本号递增规则如下。

- 主版本号 - 存在破坏性更新时
- 次版本号 - 存在功能新增时
- 修订号 - 存在问题修复时

先行版本号及版本编译元数据可以加到 `[主版本号].[次版本号].[修订号]` 的后面作为延伸，如 `1.0.0-beta.1`，`1.0.0-rc.1`，`1.0.0-20210101001`。

## 版本提交

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

- `build` - 影响构建系统或外部依赖关系的更改，如 `npm`，`yarn` 等
- `ci` - 更改 `ci` 配置文件和脚本，如 `flow-ci`、`travis-ci`、`circle-ci`、`jerkins` 等
- `chore` - 构建过程或辅助工具和库的更改，基本弃用，可用于表示发布 `release`
- `docs` - 更改文档
- `feat` - 新功能
- `fix` - 问题修复
- `perf` - 优化
- `refactor` - 重构代码，既没有问题修复，也没有增加功能
- `revert` - 回滚代码
- `style` - 不影响代码含义的更改，如空格、格式化、缺失分号
- `test` - 增加测试或修改当前测试

## 代码审查

- 是否符合本文档所述规范
- 设计思想
- 模块耦合度
- 代码重复度
- 代码健壮性
- 代码性能
- 代码效率

对于新成员，应在工作日开工前或下班前审查，以帮助新成员尽快融入团队。

对于其它成员，应采用定时审查，时间定为每周一次和里程碑完成时。

## 构建工具链

构建工具链必须遵循以下三条原则。

- 约定大于配置
- 工具链独立更新
- 定制需求可插件化

推荐使用社区内优秀的脚手架初始化并配置项目来开发。

- [vue-cli](https://cli.vuejs.org/)
- [vite](https://vitejs.dev/)
- [nuxt](https://nuxtjs.org/)
- [quasar](https://quasar.dev/)
- [create-react-app](https://create-react-app.dev/)
- [umi](https://umijs.org/zh-CN)
- [next](https://nextjs.org/)
- [taro](https://taro.zone/)
- [remax](https://remaxjs.org/)
- [rax](https://rax.js.org/)
- [expo](https://expo.io/)

也可以使用以下模板直接开始开发。

- [MillCloud/boilerplate-vue](https://github.com/MillCloud/boilerplate-vue) - 桌面端网页，移动端网页，桌面端应用
- [MillCloud/boilerplate-uni-app](https://github.com/MillCloud/boilerplate-uni-app) - 移动端应用，小程序

一般支持的浏览器版本如下。

```sh
last 2 versions
not dead
ie >= 11
edge >= 13
chrome >= 49
firefox >= 44
ios >= 8
safari >= 8
android >= 4.4
```

## 持续集成

<img
  src="https://user-gold-cdn.xitu.io/2019/7/26/16c2c49ee0383b62"
  title="持续集成工作流"
  alt="持续集成工作流"
  width="640px"
  referrer="no-referrer"
/>

[图源](https://juejin.cn/post/6844903897610321934#heading-7)

DevOps 工具一般包含持续集成功能。也可以考虑单独使用。

- [github-actions](https://github.com/features/actions)
- [flow-ci](https://flowci.github.io/)
- [travis-ci](https://travis-ci.org/)
- [circle-ci](https://circleci.com/)
- [jerkins](https://www.jenkins.io/)

## 发布

<img
  src="https://user-gold-cdn.xitu.io/2019/7/26/16c2c49ed9c29074"
  title="发布工作流"
  alt="发布工作流"
  width="640px"
/>

[图源](https://juejin.cn/post/6844903897610321934#heading-6)

## 参考

- [工作流的祛魅：从工具、阅读到写作](https://sspai.com/post/71658)
