# 测试

::: warning
该部分需要完善。
:::

测试是代码健壮性的保障。每一项测试应具有针对性，所有测试组合起来应覆盖尽可能多的代码。

业务代码较为多变，可以根据情况，只使用代码测试基础组件/工具类等，甚至不使用代码测试，而是直接使用浏览器开发者工具调试。对于移动端，可以使用 [eruda](https://github.com/liriliri/eruda/blob/master/doc/README_CN.md#readme) 或 [v-console](https://github.com/Tencent/vConsole/blob/dev/README_CN.md#readme) 代替开发者工具。

本章节主要讨论代码测试。

**WIP**

|            | Vue                                                                              | Nest                                                                                                              |
| ---------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 单元测试   | [vitest](https://vitest.dev/)                                                    | [jest](https://jestjs.io/) + [@nestjs/testing](https://docs.nestjs.com/fundamentals/testing)                      |
| 类型测试   | [vitest](https://vitest.dev/)                                                    | [tsd](https://github.com/SamVerschueren/tsd)                                                                      |
| 组件测试   | [vitest](https://vitest.dev/) + [@vue/test-utils](https://test-utils.vuejs.org/) | /                                                                                                                 |
| 端对端测试 | [cypress](https://docs.cypress.io/)                                              | [supertest](https://github.com/ladjs/supertest) + [@nestjs/testing](https://docs.nestjs.com/fundamentals/testing) |
