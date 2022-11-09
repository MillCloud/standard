# 测试

:::warning
需要更新。
:::

<img
  src="https://user-gold-cdn.xitu.io/2019/7/26/16c2c4a029bc2a3f"
  title="测试工作流"
  alt="测试工作流"
  width="640px"
  referrer="no-referrer"
/>

[图源](https://juejin.cn/post/6844903897610321934#heading-36)

测试是代码健壮性的保障。每一项测试应具有针对性，所有测试组合起来应覆盖尽可能多的代码。

业务代码较为多变，可以根据情况，只使用代码测试基础组件/工具类等，甚至不使用代码测试，而是直接使用浏览器研发者工具调试。对于移动端，可以使用 [eruda](https://github.com/liriliri/eruda/blob/master/doc/README_CN.md#readme) 或 [v-console](https://github.com/Tencent/vConsole/blob/dev/README_CN.md#readme)。如果需要代理，可以使用 [whistle](https://github.com/avwo/whistle/blob/master/README-zh_CN.md#readme) 或 [light-proxy](https://lightproxy.org/zh-CN)。

## 单元测试

首选 [Jest](https://jestjs.io/zh-Hans/) 做单元测试，备选 [Mocha](https://mochajs.org/)。

## 组件测试

首选官方组件测试库，备选 [Testing Library](https://testing-library.com/)。

## 端对端测试

首选 [Cypress](https://docs.cypress.io/)，备选 [Nightwatch](https://nightwatchjs.org/) 和 [TestCafe](https://devexpress.github.io/testcafe/)。
