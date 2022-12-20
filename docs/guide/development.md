# 研发

::: warning
该部分需要完善。
:::

研发就是研究与开发。本章节主要带领了解研发流程。

## [Microsoft Azure DevOps](https://azure.microsoft.com/en-us/products/devops/)

你可以查阅它的文档了解它的最佳实践。

关于 DevOps 的实践还可以参考 [Ledge](https://devops.phodal.com/) 和 [阿里巴巴 DevOps 实践手册](https://developer.aliyun.com/topic/download?id=205)。

## [YesDev](https://www.yesdev.cn/)

你可以查阅它的文档了解它的最佳实践。

## 模板

司内提供 [Gitee](https://gitee.com/MillCloud/presets) 和 [GitHub](https://github.com/MillCloud/presets) 模板供快速启动开发，内含最佳实践。

## Git Workflow

在实践中我们发现，[Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) 过于复杂，[GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow) 又过于简单，而 [GitLab Flow](https://docs.gitlab.cn/ee/topics/gitlab_flow.html) 的简易变体能很好地适应各种情况。我们这里提倡的 Git Workflow 就是 GitLab Flow 的一种变体。

只需要两类分支：主分支 main 和开发类分支 dev。

1. 每次研发一个新功能，或修复一个问题时，先到 YesDev 上添加任务，再到 Microsoft Azure DevOps 对应的仓库中，从主分支 main 分叉出一个开发分支，以 `feat-` 或 `fix-` 开头，用英文描述这个分支要处理的事情。例子：`feat-watermark`（研发水印功能）、`fix-watermark`（修复水印功能）。
2. 在开发分支完成开发并自测通过后，在 Microsoft Azure DevOps 发起 PR 合并到主分支 main，要求至少有一个相关负责人参与代码审查并通过。随后在 YesDev 上标记任务完成，并删除对应的开发分支。
3. 主分支合并一些功能和修复后，再次自测，无发现问题时，可打标签 tag 并发布，部署到预生产环境再行测试。
4. 预生产环境无发现问题时，可部署到生产环境。
5. 如果预生产环境和生产环境发现问题，可重复步骤 1 - 4。生产环境发现问题，应先回滚，安排修复后再行部署。

有关 YesDev，请查看 [YesDev](#yesdev) 章节。

有关 Microsoft Azure DevOps，请查看 [Microsoft Azure DevOps](#microsoft-azure-devops) 章节。

有关代码和功能设计，请查看 [设计](./design.md) 章节。

有关提交，请查看 [语义化提交](#语义化提交) 部分。

有关代码审查，请查看 [代码审查](#代码审查) 部分。

有关测试，请查看 [测试](./test.md) 章节。

有关发布，请查看 [发布](./release.md) 章节。

## 语义化提交

我们提倡将工作分解成一个个独立但完整的提交，多提交、多推送。这能使开发脉络更加清晰，也允许方便地回滚代码到一个特定时间，或者还原一段代码而不影响到其它无关变更。

提交时，信息需遵循语义化提交 [Conventional Commits](https://www.conventionalcommits.org/) 。

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

下面是一些示例。

```text
chore(release): v1.0.0
chore(deps): update deps
chore: update deps
style: format
style: add spaces
fix: prevent racing of requests
feat!: require node >= 14.18
perf: improve code
```

type 只允许取以下值。

- `build` - 影响构建系统或外部依赖关系的更改，如 `npm`，`yarn` 等
- `chore` - 构建过程或辅助工具和库的更改，基本弃用，可用于表示发布 `release`
- `ci` - 更改 `ci` 配置文件和脚本，如 `flow-ci`、`travis-ci`、`circle-ci`、`jerkins` 等
- `docs` - 更改文档
- `feat` - 新功能
- `fix` - 问题修复
- `perf` - 优化
- `refactor` - 重构代码，既没有问题修复，也没有增加功能
- `revert` - 回滚代码
- `style` - 不影响代码含义的更改，如空格、格式化、缺失分号
- `test` - 增加测试或修改当前测试

description 应简洁明确地描述本次提交的意图。

::: details 常见反例

❌ fix: fix a bug

✅ fix: 修复了没有正确处理支付回调的问题

`fix a bug` 非常模糊不清，必须要看通代码才清楚修复了什么问题，而 `修复了没有正确处理支付回调的问题` 则一目了然。简洁明确地描述本次提交的意图能使开发脉络更加清晰，有利于代码审查。中英文均可，不做强制要求。

:::

无需死记硬背，可借助 [commitlint](https://commitlint.js.org/)、[husky](https://typicode.github.io/husky/)、[@modyqyw/fabric](https://github.com/ModyQyW/fabric) 来完成自动检查，也可借助 [Commit Message Editor](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor) 或 [commitizen](https://github.com/commitizen/cz-cli) 完成这一工作。

## 代码审查

我们提倡对新加入的研发人员做下班前的代码审查，以帮助其尽快融入团队；对其他成员做每周、每月或里程碑代码审查。

代码审查有利于减少漏洞，共享知识技能，提倡所有人都应尽量参与。

代码审查主要针对代码和功能设计，风格方面由 [ESLint](https://eslint.org/)、[Stylelint](https://stylelint.io/)、[Prettier](https://prettier.io/)、[@modyqyw/fabric](https://github.com/ModyQyW/fabric) 等工具加以约束。

有关代码和功能设计，请查看 [设计](./design.md) 章节。

## 异常监控

我们提倡使用 [sentry](https://sentry.io/) 监控预生产环境和生产环境的异常。

对于预生产环境，应 2 - 3 天检查处理异常。

对于生产环境，应设置报警阈值，在收到报警时马上处理，平时 1 - 2 天检查处理异常。

## 参考

- [工作流的祛魅：从工具、阅读到写作](https://sspai.com/post/71658)
- [3 分钟带你快速入门思维导图](https://www.edrawsoft.cn/mindmaster/tutorial/how-draw-mindmap/)
- [10x 程序员工作法](https://time.geekbang.org/column/intro/100022301)

<!--

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

<!-- ## 代码即文档

## README 文档

一个良好的 README 文档能够让后来者了解项目的相关信息，也能够让后来者快速上手项目。

要快速生成一个 README，可以使用 [othneildrew - best-readme-template](https://github.com/othneildrew/Best-README-Template#readme)。

如果还需要更多示例，可以参考 [matiassingers - awesome-readme](https://github.com/matiassingers/awesome-readme#readme)。

另见 [中文技术文档写作规范](https://github.com/ruanyf/document-style-guide) 以了解具体的格式和准则。 -->
