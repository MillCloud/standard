# 文档

:::warning
需要更新。
:::

不同的文档有不同的目标。在这里阐述的文档主要指前端研发者提供给前端研发者的文档，而并非产品提供的需求文档和产品文档、后端研发者提供的接口文档等。

## 代码即文档

代码可以作为文档使用，但必须遵循以下原则。

- 如果使用 JavaScript 研发，变量、方法等命名需要尽量体现意图，必须使用 [JSDoc](https://jsdoc.app/) 注明类型。如果命名较难体现意图，使用 JSDoc 注明意图。
- 如果使用 TypeScript 研发，必须书写定义注明类型，变量、方法等命名需要尽量体现意图。如果命名较难体现意图，使用 JSDoc 注明意图。

## README 文档

一个良好的 README 文档能够让后来者了解项目的相关信息，也能够让后来者快速上手项目。

要快速生成一个 README，可以使用 [othneildrew - best-readme-template](https://github.com/othneildrew/Best-README-Template#readme)。

如果还需要更多示例，可以参考 [matiassingers - awesome-readme](https://github.com/matiassingers/awesome-readme#readme)。

另见 [中文技术文档写作规范](https://github.com/ruanyf/document-style-guide) 和 [Vue 文档编写指南](https://v3.cn.vuejs.org/guide/contributing/writing-guide.html) 以了解具体的格式和准则。
