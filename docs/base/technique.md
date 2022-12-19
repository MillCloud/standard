# 工作学习法

研发人员需要保持学习，以保证公司、项目、个人向前发展。

我们在这里关注工作与学习的原则、方法论等相对抽象的概念，在后续章节中关注更具体的工具与操作方法。

## 保持思考

阅读一份文档或一本书籍，又或是观看一个视频时，需要保持思考，避免只留下印象、没吸收知识。

`六何法`（也被叫做 `6W 分析法` 或 `5W1H 分析法`）是在这个方面上更具体可行的分析法，即在阅读或观看时提出以下六个问题的一个或多个：`何人 Who`、`何事 What`、`何时 When`、`何地 Where`、`为何 Why`、`如何 How`。

## 一手优先

强调一手资料优先，是为了保证正确性，因为多手资料提供的信息可能不准确，容易误导。

::: details 两个常见的多手资料提供的错误信息

❌ `GET` 请求没有请求体 `body`

实际上，`GET` 请求可以带有请求体，但中间链路乃至服务器端可能不会处理这个请求体，所以看起来就像是 `GET` 请求没有请求体一样。

❌ 虚拟 DOM 比原生操作快

事实上，虚拟 DOM 不一定比原生操作快。虚拟 DOM 被某些框架内部使用，用于保证框架在不需要手动优化的情况下，依然可以提供过得去的性能。

:::

一手资料往往由官方提供，由官方或值得信任的社区贡献者把关资料质量，比如 [W3C 英文官网](https://www.w3.org/)、[Vue 中文官网](https://cn.vuejs.org/)、[Vite 中文官网](https://cn.vitejs.dev/)、[React 英文官网](https://reactjs.org/)、[axios 英文官网](https://axios-http.com/) 等。某些官方资料质量不佳，比如 [Vuetify 中文官网](https://vuetifyjs.com/zh-Hans/)，其中文内容由英文内容翻译而来，翻译质量较差，仍建议优先阅读英文文档。

某些多手资料经过多人阅读、观看、校对，也值得信任。在此提供一些值得信任的多手资料供参考，你可借助这些资料自行学习，也可以借此拓展技术视野。

::: details 值得信任的多手资料

- [小林 x 图解计算机基础](https://xiaolincoding.com/)
- [labuladong 的算法小抄](https://labuladong.github.io/algo/)
- [MDN](https://developer.mozilla.org/)
- [现代 JavaScript 教程](https://zh.javascript.info/)
- [ES6 入门教程](https://es6.ruanyifeng.com/)
- [JavaScript 高级教程](https://book.douban.com/subject/35175321/)
- [TypeScript 入门教程](https://ts.xcatliu.com/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)
- [Beginner's TypeScript](https://www.totaltypescript.com/tutorials/beginners-typescript)
- [roadmap.sh](https://roadmap.sh/)
- [thoughtworks 技术雷达](https://www.thoughtworks.com/zh-cn/radar)
- [印记中文 JavaScript 周刊](https://docschina.org/weekly/js)
- [印记中文 React 周刊](https://docschina.org/weekly/react/)
- [前端食堂周刊](https://github.com/Geekhyt/weekly)
- [MDH 前端周刊](https://github.com/sorrycc/weekly)

:::

在此也提供一些值得信任的中文译者供参考。

::: details 值得信任的中文译者

- [尤雨溪](https://github.com/yyx990803)
- [antfu](https://github.com/antfu)
- [QC-L](https://github.com/QC-L)
- [shenqingchuan](https://github.com/shenqingchuan)
- [Jinjiang](https://github.com/Jinjiang)

:::

## 构建知识体系

知识体系不是必需品，但构建起知识体系能让自己更好地运用知识，这将在实际工作中有所体现。

建议使用思维导图来整理自己的知识体系。你可以阅读 [roadmap.sh](https://roadmap.sh/) 查看有关学习路径的知识导图示例。

## 英语

中文是全球使用人数最多的语言，但英语是全球使用最广泛的语言，大量技术文档只有英语版本，大量讨论使用英文。英语可以说是研发人员必需的技能，与研发人员的研发视野、研发能力关联。

你可以阅读 [程序员英语学习指南](https://github.com/yujiangshui/A-Programmers-Guide-to-English)、[英语自学指南](https://bewaters.me/limxtop/2021/08/18/English-introduction/) 和 [英语进阶指南](https://github.com/byoungd/English-level-up-tips) 并加以实践。

## 先搜后问

研发过程中遇到问题非常常见。

请先提取问题的有用信息，比如提取错误信息、提取问题关键字、构建 [最小复现](https://stackoverflow.com/help/minimal-reproducible-example)。

其次，在 [Google](https://www.google.com/)、[Bing](https://www.bing.com/)、[StackOverflow](https://stackoverflow.com/) 中搜索错误信息和问题关键字，看能否解决自己的问题，并记录下自己阅读过的解答。如果你没办法使用以上的搜索引擎，可以使用 [F 搜](https://fsoufsou.com/)、[DuckDuckGo](https://duckduckgo.com/)、镜像站等资源。

在无法解决自己问题的情况下，你可以向你的同事或朋友求助，他们可能遇到过类似的问题。你也可以在社区发起一个新问题，提供错误信息、问题关键字、最小复现等相关信息，可参考 [提问的智慧](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way) 和 [如何向开源社区提问题](https://github.com/seajs/seajs/issues/545)。

## 取舍和平衡

在前端领域，书写原生代码十分繁琐，但同时，如果书写原生代码得当，性能非常高。

而使用框架方便许多，而且框架也提供了默认较好的性能。尽管默认情况下，框架的性能不如原生代码所能达到的极限性能，但由于框架提供的便利性，新项目正越来越多地使用框架研发，这正是做取舍而达到平衡的结果表现。

这也应当是你在工作学习中的正确理念，做取舍而达到平衡。

事情太多做不完？你可以参考被广泛运用的 [四象限工作法](https://help.dida365.com/articles/6950361734683033600) 来管理事情，立即开始重要且紧急的事情，重点关注并安排重要不紧急的事情，委托他人或低能量时完成紧急不重要的事情，尽量不做不重要且不紧急的事情。

## 提高效率

进入 [心流](https://baike.baidu.com/item/%E5%BF%83%E6%B5%81/9824097) 是提高效率的好方法，往往集中精神专注做某一件事更容易进入心流，具体操作则因人而异。

## 追求务实

务实可以说是研发人员的顶级品质，上述几点都或多或少可以被归为务实。

书籍《程序员修炼之道》做了很棒的阐述，你可以在查看 [豆瓣介绍](https://book.douban.com/subject/35006892/)，在微信读书免费 [试读](https://weread.qq.com/web/bookDetail/2cf32ec0811e3ac71g017571)。

## 参考

- [打造超人大脑](https://github.com/xdite/memory-hack)
- [打造超人思维](https://github.com/xdite/mind-hack)
