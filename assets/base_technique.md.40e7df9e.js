import{_ as e,f as r,h as a,M as t}from"./app.c1b432c2.js";const b=JSON.parse('{"title":"工作学习法","description":"","frontmatter":{},"headers":[{"level":2,"title":"保持思考","slug":"保持思考","link":"#保持思考","children":[]},{"level":2,"title":"一手优先","slug":"一手优先","link":"#一手优先","children":[]},{"level":2,"title":"构建知识体系","slug":"构建知识体系","link":"#构建知识体系","children":[]},{"level":2,"title":"英语","slug":"英语","link":"#英语","children":[]},{"level":2,"title":"先搜后问","slug":"先搜后问","link":"#先搜后问","children":[]},{"level":2,"title":"取舍和平衡","slug":"取舍和平衡","link":"#取舍和平衡","children":[]},{"level":2,"title":"提高效率","slug":"提高效率","link":"#提高效率","children":[]},{"level":2,"title":"追求务实","slug":"追求务实","link":"#追求务实","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"base/technique.md","lastUpdated":1671518933000}'),l={name:"base/technique.md"},h=t('<h1 id="工作学习法" tabindex="-1">工作学习法 <a class="header-anchor" href="#工作学习法" aria-hidden="true">#</a></h1><p>研发人员需要保持学习，以保证公司、项目、个人向前发展。</p><p>我们在这里关注工作与学习的原则、方法论等相对抽象的概念，在后续章节中关注更具体的工具与操作方法。</p><h2 id="保持思考" tabindex="-1">保持思考 <a class="header-anchor" href="#保持思考" aria-hidden="true">#</a></h2><p>阅读一份文档或一本书籍，又或是观看一个视频时，需要保持思考，避免只留下印象、没吸收知识。</p><p><code>六何法</code>（也被叫做 <code>6W 分析法</code> 或 <code>5W1H 分析法</code>）是在这个方面上更具体可行的分析法，即在阅读或观看时提出以下六个问题的一个或多个：<code>何人 Who</code>、<code>何事 What</code>、<code>何时 When</code>、<code>何地 Where</code>、<code>为何 Why</code>、<code>如何 How</code>。</p><h2 id="一手优先" tabindex="-1">一手优先 <a class="header-anchor" href="#一手优先" aria-hidden="true">#</a></h2><p>强调一手资料优先，是为了保证正确性，因为多手资料提供的信息可能不准确，容易误导。</p><details class="details custom-block"><summary>两个常见的多手资料提供的错误信息</summary><p>❌ <code>GET</code> 请求没有请求体 <code>body</code></p><p>实际上，<code>GET</code> 请求可以带有请求体，但中间链路乃至服务器端可能不会处理这个请求体，所以看起来就像是 <code>GET</code> 请求没有请求体一样。</p><p>❌ 虚拟 DOM 比原生操作快</p><p>事实上，虚拟 DOM 不一定比原生操作快。虚拟 DOM 被某些框架内部使用，用于保证框架在不需要手动优化的情况下，依然可以提供过得去的性能。</p></details><p>一手资料往往由官方提供，由官方或值得信任的社区贡献者把关资料质量，比如 <a href="https://www.w3.org/" target="_blank" rel="noreferrer">W3C 英文官网</a>、<a href="https://cn.vuejs.org/" target="_blank" rel="noreferrer">Vue 中文官网</a>、<a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">Vite 中文官网</a>、<a href="https://reactjs.org/" target="_blank" rel="noreferrer">React 英文官网</a>、<a href="https://axios-http.com/" target="_blank" rel="noreferrer">axios 英文官网</a> 等。某些官方资料质量不佳，比如 <a href="https://vuetifyjs.com/zh-Hans/" target="_blank" rel="noreferrer">Vuetify 中文官网</a>，其中文内容由英文内容翻译而来，翻译质量较差，仍建议优先阅读英文文档。</p><p>某些多手资料经过多人阅读、观看、校对，也值得信任。在此提供一些值得信任的多手资料供参考，你可借助这些资料自行学习，也可以借此拓展技术视野。</p><details class="details custom-block"><summary>值得信任的多手资料</summary><ul><li><a href="https://xiaolincoding.com/" target="_blank" rel="noreferrer">小林 x 图解计算机基础</a></li><li><a href="https://labuladong.github.io/algo/" target="_blank" rel="noreferrer">labuladong 的算法小抄</a></li><li><a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">MDN</a></li><li><a href="https://zh.javascript.info/" target="_blank" rel="noreferrer">现代 JavaScript 教程</a></li><li><a href="https://es6.ruanyifeng.com/" target="_blank" rel="noreferrer">ES6 入门教程</a></li><li><a href="https://book.douban.com/subject/35175321/" target="_blank" rel="noreferrer">JavaScript 高级教程</a></li><li><a href="https://ts.xcatliu.com/" target="_blank" rel="noreferrer">TypeScript 入门教程</a></li><li><a href="https://basarat.gitbook.io/typescript/" target="_blank" rel="noreferrer">TypeScript Deep Dive</a></li><li><a href="https://github.com/type-challenges/type-challenges" target="_blank" rel="noreferrer">Type Challenges</a></li><li><a href="https://www.totaltypescript.com/tutorials/beginners-typescript" target="_blank" rel="noreferrer">Beginner&#39;s TypeScript</a></li><li><a href="https://roadmap.sh/" target="_blank" rel="noreferrer">roadmap.sh</a></li><li><a href="https://www.thoughtworks.com/zh-cn/radar" target="_blank" rel="noreferrer">thoughtworks 技术雷达</a></li><li><a href="https://docschina.org/weekly/js" target="_blank" rel="noreferrer">印记中文 JavaScript 周刊</a></li><li><a href="https://docschina.org/weekly/react/" target="_blank" rel="noreferrer">印记中文 React 周刊</a></li><li><a href="https://github.com/Geekhyt/weekly" target="_blank" rel="noreferrer">前端食堂周刊</a></li><li><a href="https://github.com/sorrycc/weekly" target="_blank" rel="noreferrer">MDH 前端周刊</a></li></ul></details><p>在此也提供一些值得信任的中文译者供参考。</p><details class="details custom-block"><summary>值得信任的中文译者</summary><ul><li><a href="https://github.com/yyx990803" target="_blank" rel="noreferrer">尤雨溪</a></li><li><a href="https://github.com/antfu" target="_blank" rel="noreferrer">antfu</a></li><li><a href="https://github.com/QC-L" target="_blank" rel="noreferrer">QC-L</a></li><li><a href="https://github.com/shenqingchuan" target="_blank" rel="noreferrer">shenqingchuan</a></li><li><a href="https://github.com/Jinjiang" target="_blank" rel="noreferrer">Jinjiang</a></li></ul></details><h2 id="构建知识体系" tabindex="-1">构建知识体系 <a class="header-anchor" href="#构建知识体系" aria-hidden="true">#</a></h2><p>知识体系不是必需品，但构建起知识体系能让自己更好地运用知识，这将在实际工作中有所体现。</p><p>建议使用思维导图来整理自己的知识体系。你可以阅读 <a href="https://roadmap.sh/" target="_blank" rel="noreferrer">roadmap.sh</a> 查看有关学习路径的知识导图示例。</p><h2 id="英语" tabindex="-1">英语 <a class="header-anchor" href="#英语" aria-hidden="true">#</a></h2><p>中文是全球使用人数最多的语言，但英语是全球使用最广泛的语言，大量技术文档只有英语版本，大量讨论使用英文。英语可以说是研发人员必需的技能，与研发人员的研发视野、研发能力关联。</p><p>你可以阅读 <a href="https://github.com/yujiangshui/A-Programmers-Guide-to-English" target="_blank" rel="noreferrer">程序员英语学习指南</a>、<a href="https://bewaters.me/limxtop/2021/08/18/English-introduction/" target="_blank" rel="noreferrer">英语自学指南</a> 和 <a href="https://github.com/byoungd/English-level-up-tips" target="_blank" rel="noreferrer">英语进阶指南</a> 并加以实践。</p><h2 id="先搜后问" tabindex="-1">先搜后问 <a class="header-anchor" href="#先搜后问" aria-hidden="true">#</a></h2><p>研发过程中遇到问题非常常见。</p><p>请先提取问题的有用信息，比如提取错误信息、提取问题关键字、构建 <a href="https://stackoverflow.com/help/minimal-reproducible-example" target="_blank" rel="noreferrer">最小复现</a>。</p><p>其次，在 <a href="https://www.google.com/" target="_blank" rel="noreferrer">Google</a>、<a href="https://www.bing.com/" target="_blank" rel="noreferrer">Bing</a>、<a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">StackOverflow</a> 中搜索错误信息和问题关键字，看能否解决自己的问题，并记录下自己阅读过的解答。如果你没办法使用以上的搜索引擎，可以使用 <a href="https://fsoufsou.com/" target="_blank" rel="noreferrer">F 搜</a>、<a href="https://duckduckgo.com/" target="_blank" rel="noreferrer">DuckDuckGo</a>、镜像站等资源。</p><p>在无法解决自己问题的情况下，你可以向你的同事或朋友求助，他们可能遇到过类似的问题。你也可以在社区发起一个新问题，提供错误信息、问题关键字、最小复现等相关信息，可参考 <a href="https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way" target="_blank" rel="noreferrer">提问的智慧</a> 和 <a href="https://github.com/seajs/seajs/issues/545" target="_blank" rel="noreferrer">如何向开源社区提问题</a>。</p><h2 id="取舍和平衡" tabindex="-1">取舍和平衡 <a class="header-anchor" href="#取舍和平衡" aria-hidden="true">#</a></h2><p>在前端领域，书写原生代码十分繁琐，但同时，如果书写原生代码得当，性能非常高。</p><p>而使用框架方便许多，而且框架也提供了默认较好的性能。尽管默认情况下，框架的性能不如原生代码所能达到的极限性能，但由于框架提供的便利性，新项目正越来越多地使用框架研发，这正是做取舍而达到平衡的结果表现。</p><p>这也应当是你在工作学习中的正确理念，做取舍而达到平衡。</p><p>事情太多做不完？你可以参考被广泛运用的 <a href="https://help.dida365.com/articles/6950361734683033600" target="_blank" rel="noreferrer">四象限工作法</a> 来管理事情，立即开始重要且紧急的事情，重点关注并安排重要不紧急的事情，委托他人或低能量时完成紧急不重要的事情，尽量不做不重要且不紧急的事情。</p><h2 id="提高效率" tabindex="-1">提高效率 <a class="header-anchor" href="#提高效率" aria-hidden="true">#</a></h2><p>进入 <a href="https://baike.baidu.com/item/%E5%BF%83%E6%B5%81/9824097" target="_blank" rel="noreferrer">心流</a> 是提高效率的好方法，往往集中精神专注做某一件事更容易进入心流，具体操作则因人而异。</p><h2 id="追求务实" tabindex="-1">追求务实 <a class="header-anchor" href="#追求务实" aria-hidden="true">#</a></h2><p>务实可以说是研发人员的顶级品质，上述几点都或多或少可以被归为务实。</p><p>书籍《程序员修炼之道》做了很棒的阐述，你可以在查看 <a href="https://book.douban.com/subject/35006892/" target="_blank" rel="noreferrer">豆瓣介绍</a>，在微信读书免费 <a href="https://weread.qq.com/web/bookDetail/2cf32ec0811e3ac71g017571" target="_blank" rel="noreferrer">试读</a>。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/xdite/memory-hack" target="_blank" rel="noreferrer">打造超人大脑</a></li><li><a href="https://github.com/xdite/mind-hack" target="_blank" rel="noreferrer">打造超人思维</a></li></ul>',37),i=[h];function n(o,s,c,p,d,f){return r(),a("div",null,i)}const u=e(l,[["render",n]]);export{b as __pageData,u as default};
