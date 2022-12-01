# 研发环境

:::warning
该部分需要完善。
:::

设置研发环境就好比砍柴前的磨刀，一个良好的研发环境能帮助你快速进入研发状态。

## 系统

请使用 Unix 系统作为研发的主力系统以获取更好的研发体验。

[macOS](https://www.apple.com/macos/) 是第一选择。如果你无力购买苹果官方的相关设备来使用 macOS，请使用 [Deepin](https://www.deepin.org/)。

::: warning 不推荐

- 不推荐使用 Windows，且本章节将以 Unix 系统为重点展开。这是因为使用 Windows 很难得到舒适的研发体验，即使使用了 WSL 也是如此。
- 不推荐使用黑苹果。这是因为黑苹果的体验远差于白苹果，且存在侵权问题。

:::

::: details 考量

- Unix 系统大部分都是免费使用，无需担心侵权问题。
- Unix 系统体验比 WSL 更佳。
- Unix 系统更为稳定。
- Unix 处理能力更好。
- Unix 研发者资料更多。
- 生产环境大多使用 Unix 环境。

:::

## DNS

请修改系统的 DNS 为 [阿里 DNS](http://alidns.com/) 以避免运营商劫持。

::: tip 选择
在多次测试中，阿里 DNS 的解析表现比 [百度 DNS](https://dudns.baidu.com/)、[腾讯 DNS](https://www.dnspod.cn/Products/Public.DNS) 和 [114 DNS](https://www.114dns.com/) 更稳定。但如果你实测并非如此，你可以自行调整 DNS。
:::

<el-tabs>
  <el-tab-pane label="macOS">
  
![macOS 系统偏好设置](./macos-system-settings.png)

![macOS 系统偏好设置 - 网络](./macos-system-settings-network.png)

![macOS 系统偏好设置 - 网络 - 高级](./macos-system-settings-network-enhance.png)

![macOS 系统偏好设置 - 网络 - 高级 - DNS](./macos-system-settings-network-enhance-dns.png)

  </el-tab-pane>
  <el-tab-pane label="Deepin">TODO</el-tab-pane>
  <el-tab-pane label="Windows (不推荐)">TODO</el-tab-pane>
</el-tabs>

## 浏览器

请安装并及时更新 [Chrome](https://www.google.com/intl/en_us/chrome/)，将其作为主力研发浏览器。

::: tip 浏览器内核
可以使用 [浏览器内核检测工具](https://ie.icoa.cn/) 或 [ua-parser-js](https://github.com/faisalman/ua-parser-js) 检测内核。
:::

::: details 考量
项目至少要在最新的 Chrome 浏览器测试通过。如果客户有额外需求，则需要在客户要求的浏览器上测试通过。对于老旧浏览器，应只提供 6 个月或更少的额外支持时间，否则会增加研发和测试成本。

国内常见的浏览器有 Chrome、Edge、Firefox、Safari、360 浏览器、360 极速浏览器、360 极速浏览器 X、QQ 浏览器、UC 浏览器、夸克浏览器、微信内置浏览器等。
:::

## 浏览器扩展

请安装并及时更新 [Lighthouse](https://github.com/GoogleChrome/lighthouse) 和 [Vue.js Devtools](https://devtools.vuejs.org/) 两款浏览器扩展。

::: tip 处理网络问题
你可以使用 [谷歌访问助手](/google-access-helper-master.zip) 以访问 Chrome 应用商店安装扩展。

如果有条件，建议科学上网。
:::

::: details 考量
Lighthouse 能有效分析、帮助优化网页性能。

司内使用 Vue 作为主要前端研发框架，需要安装 Vue.js Devtools 帮助调试。
:::

## 包管理工具

<el-tabs>
  <el-tab-pane label="macOS">
  
请使用 [homebrew](https://brew.sh/) 作为包管理工具。

::: tip 处理网络问题
使用 GitHub 链接安装 homebrew，容易出现网络问题，可手动设置 [homebrew 源](https://mirrors.ustc.edu.cn/help/brew.git.html)、[homebrew bottles 源](https://mirrors.ustc.edu.cn/help/homebrew-bottles.html)、[homebrew core 源](https://mirrors.ustc.edu.cn/help/homebrew-core.git.html)、[homebrew cask 源](https://mirrors.ustc.edu.cn/help/homebrew-cask.git.html)、[homebrew cask versions 源](https://mirrors.ustc.edu.cn/help/homebrew-cask-versions.git.html)。

镜像源同步可能落后。如果有条件，建议科学上网。
:::

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

安装完毕后，需要链接额外的 cask。

```shell
brew tap homebrew/cask-drivers
brew tap homebrew/cask-fonts
brew tap homebrew/cask-versions
brew tap buo/cask-upgrade
brew tap mongodb/brew
```

如果需要更新，请使用如下命令。

```shell
brew cleanup --prune=all -q && brew upgrade && brew cu -ay && brew uninstall node@16 --ignore-dependencies -f && brew cleanup --prune=all -q
```

如果需要检查，请使用如下命令。你可以根据出现的提示修复错误。

```shell
brew doctor
```

::: details 考量

- homebrew 是使用率最高的包管理工具。
- homebrew 生态非常繁荣，大部分软件都可以通过 homebrew 直接安装，而无需关心路径配置、命令配置等问题。

:::

  </el-tab-pane>
  <el-tab-pane label="Deepin">TODO</el-tab-pane>
  <el-tab-pane label="Windows（不推荐）">
  
请使用 [chocolatey](https://chocolatey.org/) 作为包管理工具。

TODO

  </el-tab-pane>
</el-tabs>

## Git

<el-tabs>
  <el-tab-pane label="macOS">

可以使用 homebrew 直接安装 Git。macOS 自带 Git，但借助 homebrew 我们可以更及时更频繁地更新 Git。

```shell
brew install git
```

请配置你的名称和邮箱，这样有利于区分 Git 操作人。

```shell
git config --global user.name "your_name_example"
git config --global user.email "your_email@example.com"
```

请取消自动转换 CRLF，这样有利于跨系统协作。

```shell
git config --global core.autocrlf false
```

请设置默认分支名为 main，这是诸多 Git 服务商的默认分支名。

```shell
git config --global init.defaultBranch main
```

Git 还需要密钥才能运作，请生成 ed25519 和 rsa 两套密钥。ed25519 更安全，rsa 支持更好，大部分 Git 服务商都支持 ed25519，但少量 Git 服务商（如 Azure Devops）仍只支持 rsa 密钥。

::: tip 安全性
在生成密钥时，请输入 passphrase 并牢记于心，而不是留空回车。这样有利于提高密钥的安全性。
:::

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

在本地，你需要添加私钥。

```shell
ssh-add ~/.ssh/id_ed25519
ssh-add ~/.ssh/id_rsa
```

在 Git 服务商，你需要添加公钥。在本地获取到公钥内容后，打开 Git 服务商页面，粘贴公钥内容并保存。

```shell
cat ~/.ssh/id_ed25519.pub # 获取 es25519 公钥内容
cat ~/.ssh/id_rsa.pub # 获取 rsa 公钥内容
```

![Azure Devops SSH Key](./azure-devops-ssh-key.jpg)

![GitHub SSH Key](./github-ssh-key.jpg)

::: tip 允许 RSA 密钥
在较高版本的 SSH 上，RSA 被默认禁用。你需要手动启用它。

用 VSCode 打开 SSH 配置文件。

```shell
code /etc/ssh/ssh_config
```

在文件最后增加两行并保存即可。

```shell
HostkeyAlgorithms +ssh-rsa
PubkeyAcceptedAlgorithms +ssh-rsa
```

[原文链接](https://www.droidwin.com/ssh-not-working-in-macos-ventura-fix/)

:::

  </el-tab-pane>
  <el-tab-pane label="Deepin">TODO</el-tab-pane>
  <el-tab-pane label="Windows（不推荐）">TODO</el-tab-pane>
</el-tabs>

在此提供常见的 Git 服务商供参考。

::: details 常见的 Git 服务商

- [GitHub](https://github.com/)
- [GitLab](https://about.gitlab.com/)
- [极狐 GitLab](https://gitlab.cn/)
- [Azure DevOps](https://azure.microsoft.com/en-us/products/devops/)
- [AWS CodeCommit](https://aws.amazon.com/codecommit/)
- [阿里云云效](https://www.aliyun.com/product/yunxiao)
- [腾讯工蜂](https://code.tencent.com/)
- [腾讯 Coding](https://coding.net/)
- [Gitee](https://gitee.com/)
- [Gitea](https://gitea.io/)

:::

## VSCode

请安装并及时更新 [VSCode](https://code.visualstudio.com/)，将其作为主力研发编辑器。

可以使用 homebrew 直接安装 VSCode。

```shell
brew install --cask visual-studio-code
```

安装完毕后，请自行安装以下扩展。

- [any-rule](https://marketplace.visualstudio.com/items?itemName=russell.any-rule) - 提供常用正则
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - 提供拼写检查
- [Commit Message Editor](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor) - 辅助书写提交信息
- [Dotenv Official + Vault](https://marketplace.visualstudio.com/items?itemName=dotenv.dotenv-vscode) - 提供 .env 相关文件的高亮、自动补全等
- [EditorConfig for VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 提供 .editorconfig 支持
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 提供 ESLint 支持
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - 提供 Git 图表和操作支持
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) - 查看 Git 日志和文件历史，比较分支或提交
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - 提供 Git 支持
- [Goto definition alias](https://marketplace.visualstudio.com/items?itemName=antfu.goto-alias) - 提供根据类型别名直接跳转到实际引用的能力
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - 提供国际化支持
- [Image preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview) - 提供图片文件预览
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - 提供 markdown 支持
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - 增强 markdown 预览
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) - 提供 markdownlint 支持
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 提供 Prettier 支持
- [React Style Helper](https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks-style-helper) - 提供更好的 CSS / LESS / SASS / SCSS 支持
- [Sass](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented) - 提供 SASS / SCSS 支持
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - 提供 Stylelint 支持
- [SVG](https://marketplace.visualstudio.com/items?itemName=jock.svg) - 提供 SVG 支持
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - 提供 TailwindCSS 支持
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) - 提供特定的注释文本高亮支持
- [TSConfig Helper](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-tsconfig-helper) - 提供 tsconfig.json 额外特性支持
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - 提供 Vue 支持
- [YAML](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) - 提供 YAML 支持

扩展可能会增加 CPU 使用率并导致性能问题，还可能与其它扩展或本地功能发生冲突，因此不要安装过多的扩展。在此提供一些常见的不需要的扩展及替代方式供参考。

::: details 常见的不需要的扩展及替代方式

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - 设置 `"editor.linkedEditing": true`
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - 无需额外设置
- [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport) - 设置 `"javascript.updateImportsOnFileMove.enabled": "always"` 和 `"typescript.updateImportsOnFileMove.enabled": "always"`
- [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) - 登录后即可同步
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - 无需额外设置
- [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) - 无需额外设置
- [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets) - 无需额外设置
- [htmltagwrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap) - 无需额外设置
- [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum) - 无需额外设置
- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - 设置 `"editor.guides.bracketPairs": true`

:::

在此提供一份 VSCode 配置供参考。

::: details VSCode 配置

```jsonc
{
  // 插件 Code Spell Checker 使用，指定语言
  "cSpell.language": "en,en-US",
  // 插件 Code Spell Checker 使用，指定要检查的语言
  "cSpell.enabledLanguageIds": [
    "css",
    "html",
    "javascript",
    "javascriptreact",
    "json",
    "jsonc",
    "json5",
    "less",
    "markdown",
    "plaintext",
    "sass",
    "scss",
    "svelte",
    "text",
    "typescript",
    "typescriptreact",
    "vue",
    "yaml",
    "yml"
  ],
  // vscode 自带功能，不校验 css，需要和插件 Stylelint 配合使用
  "css.validate": false,
  // vscode 自带功能，编辑区默认使用 prettier 格式化，需要安装插件 Prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // vscode 自带功能，指定字体族
  "editor.fontFamily": "LXGW Wenkai Mono, Jetbrains Mono, Menlo, Monaco, Courier New, monospace",
  // vscode 自带功能，保存时自动格式化
  "editor.formatOnSave": true,
  // vscode 自带功能，允许编辑区成对括号指引线着色，不再需要 Bracket Pair Colorizer
  "editor.guides.bracketPairs": true,
  // vscode 自带功能，自动修改对应的标签名称，不再需要 Auto Rename Tag
  "editor.linkedEditing": true,
  // vscode 自带功能，编辑区 1 个 tab 等于 2 个空格
  "editor.tabSize": 2,
  // vscode 自带功能，编辑区行太长时自动换行
  "editor.wordWrap": "on",
  // 插件 ESLint 使用，指定需要 ESLint 校验的语言
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "svelte",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  // 插件 ESLint 使用，一直显示状态
  "eslint.alwaysShowStatus": true,
  // vscode 自带功能，设置文件换行为 \n (LF)
  "files.eol": "\n",
  // vscode 自带功能，指定特定后缀的文件的解析器，这里添加微信小程序、支付宝小程序、百度小程序、头条小程序、wepy 和 uni-app 的支持，另外把一些 json 文件视为 jsonc 文件
  "files.associations": {
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.swan": "html",
    "*.ttml": "html",
    "*.ttss": "css",
    "*.jxml": "html",
    "*.jxss": "css",
    "*.wpy": "vue",
    "*.nvue": "vue",
    "*.ux": "vue",
    "manifest.json": "jsonc",
    "pages.json": "jsonc",
    "tsconfig.json": "jsonc",
    "settings.json": "jsonc"
  },
  // vscode 自带功能，允许 git 提交不检验
  "git.allowNoVerifyCommit": true,
  // vscode 自带功能，git 自动 fetch
  "git.autofetch": true,
  // vscode 自带功能，js 文件移动时自动更新引入
  "javascript.updateImportsOnFileMove.enabled": "always",
  // vscode 自带功能，不校验 less，需要和插件 Stylelint 配合使用
  "less.validate": false,
  // vscode 自带功能，不校验 scss，需要和插件 Stylelint 配合使用
  "scss.validate": false,
  // 插件 Stylelint 使用，指定需要提示的语言
  "stylelint.snippet": ["css", "less", "sass", "scss", "vue", "svelte"],
  // 插件 Stylelint 使用，指定需要校验的语言
  "stylelint.validate": ["css", "less", "sass", "scss", "vue", "svelte"],
  // vscode 自带功能，ts 文件移动时自动更新引入
  "typescript.updateImportsOnFileMove.enabled": "always",
  // vscode 自带功能，自动切换主题
  "window.autoDetectColorScheme": true,
  // vscode 自带功能，当前主题
  "workbench.colorTheme": "GitHub Light Default",
  // vscode 自带功能，指定 md 文件的预览模式为默认
  "workbench.editorAssociations": {
    "*.md": "default"
  },
  // vscode 自带功能，指定图标主题为 vscode-icons，需要安装插件 vscode-icons
  "workbench.iconTheme": "vscode-icons",
  // vscode 自带功能，自动切换主题的偏好
  "workbench.preferredLightColorTheme": "GitHub Light Default",
  "workbench.preferredDarkColorTheme": "GitHub Dark Default",
  // vscode 自带功能，控制编辑区在保存文件时的行为
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[javascriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[css]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[less]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[sass]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[svelte]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    }
  },
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    }
  },
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.markdownlint": true
    }
  }
}
```

:::

::: details 考量

- VSCode 是 Web 研发者使用率最高的编辑器 / IDE。
- VSCode 开源、免费，无需担心侵权问题。
- VSCode 生态更繁荣，可扩展性强。
- VSCode 可以运行在不同系统乃至浏览器上，提供非常相近的研发体验。

:::

## Shell

<el-tabs>
  <el-tab-pane label="macOS">
  
请把默认 shell 切换为 zsh。切换后，需要打开新的 shell 标签或重启 shell。

```shell
sudo chsh -s /bin/zsh
```

请安装 oh-my-zsh 以配合 zsh 使用。

```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

推荐安装插件 [autojump](https://github.com/wting/autojump)、[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting) 和 [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)。

::: tip 处理网络问题
使用 GitHub 链接来安装 zsh-syntax-highlighting 和 zsh-autosuggestions，容易出现网络问题，可查看 [GitHub Proxy](https://ghproxy.com/)、[GitHub 访问加速](https://zhuanlan.zhihu.com/p/75994966)、[3 种加速访问 GitHub 的方法](https://segmentfault.com/a/1190000041466088) 等自行调整。

如果有条件，建议科学上网。
:::

```shell
brew install autojump # 安装 autojump
sudo chown -R $USER:$USER ~/.oh-my-zsh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting # 安装 zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions # 安装 zsh-autosuggestions
```

安装完插件后，需要修改 ~/.zshrc 相应部分以激活插件。你可以使用 `code ~/.zshrc` 来编辑并保存该文件。

```shell
plugins=(git vscode web-search z autojump zsh-syntax-highlighting zsh-autosuggestions)
```

::: tip shell 显示当前完整路径
如果你想要 shell 显示当前完整路径，可以修改 oh-my-zsh 的主题。以修改默认主题 robbyrussell 为例，你可以使用 `code ~/.oh-my-zsh/themes/robbyrussell.zsh-theme` 来编辑该文件。

```shell
PROMPT="%(?:%{$fg_bold[green]%}➜ :%{$fg_bold[red]%}➜ )"
PROMPT+=' %{$fg[cyan]%}[$PWD]%{$reset_color%} $(git_prompt_info)'

ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg_bold[blue]%}git:(%{$fg[red]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%} "
ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[blue]%}) %{$fg[yellow]%}✗"
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[blue]%})"
```

编辑并保存该文件后，需要打开新的 shell 标签或重启 shell。
:::

::: tip shell 显示使用者
如果你想要 shell 显示使用者，可以修改 ~/.zshrc。你可以使用 `code ~/.zshrc` 来编辑并保存该文件。

```shell
export DEFAULT_USER="$(whoami)"
```

编辑并保存该文件后，需要打开新的 shell 标签或重启 shell。
:::

  </el-tab-pane>
  <el-tab-pane label="Deepin">
  
Deepin 使用 zsh 作为默认 shell。

TODO

  </el-tab-pane>
  <el-tab-pane label="Windows（不推荐）">
  
建议使用 [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=zh-cn&gl=cn) + Git Bash。Git Bash 在安装 Git 时应会一并安装。

另见 [定制参考 1](https://sspai.com/post/62167) 和 [定制参考 2](https://sspai.com/post/63814)。

TODO

  </el-tab-pane>
</el-tabs>

## Node.js 管理工具

<el-tabs>
  <el-tab-pane label="macOS">
  
请安装并及时更新 [nvm](https://github.com/nvm-sh/nvm)，将其作为 Node.js 管理工具。

::: tip 处理网络问题
使用 GitHub 链接安装 nvm，容易出现网络问题，可查看 [GitHub Proxy](https://ghproxy.com/)、[GitHub 访问加速](https://zhuanlan.zhihu.com/p/75994966)、[3 种加速访问 GitHub 的方法](https://segmentfault.com/a/1190000041466088) 等自行调整。

如果有条件，建议科学上网。
:::

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

  </el-tab-pane>
  <el-tab-pane label="Deepin">
  
请安装并及时更新 [nvm](https://github.com/nvm-sh/nvm)，将其作为 Node.js 管理工具。

::: tip 处理网络问题
使用 GitHub 链接安装 nvm，容易出现网络问题，可查看 [GitHub Proxy](https://ghproxy.com/)、[GitHub 访问加速](https://zhuanlan.zhihu.com/p/75994966)、[3 种加速访问 GitHub 的方法](https://segmentfault.com/a/1190000041466088) 等自行调整。

如果有条件，建议科学上网。
:::

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```

  </el-tab-pane>
  <el-tab-pane label="Windows（不推荐）">
  
请安装并及时更新 [nvm-windows](https://github.com/coreybutler/nvm-windows)，将其作为 Node.js 管理工具。

TODO

  </el-tab-pane>
</el-tabs>

## Node.js

<el-tabs>
  <el-tab-pane label="macOS">
  
请使用 nvm 安装 Node.js。一般情况下，使用最新的 Node.js LTS 版本并每月更新一次即可。你可以在 [这里](https://nodejs.org/) 核对版本。

::: tip 处理网络问题
使用官方链接安装 Node.js，容易出现网络问题，可设置镜像源处理。

```shell
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/
nvm install --lts
nvm alias default node
```

镜像源同步可能落后。如果有条件，建议科学上网。
:::

```shell
nvm install --lts
nvm alias default node
```

  </el-tab-pane>
  <el-tab-pane label="Deepin">
  
请使用 nvm 安装 Node.js。一般情况下，使用最新的 Node.js LTS 版本并每月更新一次即可。你可以在 [这里](https://nodejs.org/) 核对版本。

::: tip 处理网络问题
使用官方链接安装 Node.js，容易出现网络问题，可设置镜像源处理。

```shell
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/
nvm install --lts
nvm alias default node
```

镜像源同步可能落后。如果有条件，建议科学上网。
:::

```shell
nvm install --lts
nvm alias default node
```

  </el-tab-pane>
  <el-tab-pane label="Windows（不推荐）">
  
请使用 nvm-windows 安装 Node.js。一般情况下，使用最新的 Node.js LTS 版本并每月更新一次即可。你可以在 [这里](https://nodejs.org/) 核对版本。

```shell
nvm install lts
```

::: tip 处理网络问题
使用官方链接安装 Node.js，容易出现网络问题，可设置镜像源处理。

```shell
nvm node_mirror https://npmmirror.com/mirrors/node/
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm install lts
```

镜像源同步可能落后。如果有条件，建议科学上网。
:::

  </el-tab-pane>
</el-tabs>

## NPM 全局包

请使用 npm 安装全局包。

```shell
npm uninstall --location=global corepack
npm install --location=global --registry=https://registry.npmmirror.com @nestjs/cli
npm install --location=global --registry=https://registry.npmmirror.com @swc/cli
npm install --location=global --registry=https://registry.npmmirror.com @swc/core
npm install --location=global --registry=https://registry.npmmirror.com @swc/helpers
npm install --location=global --registry=https://registry.npmmirror.com @swc/wasm
npm install --location=global --registry=https://registry.npmmirror.com @types/node
npm install --location=global --registry=https://registry.npmmirror.com eslint
npm install --location=global --registry=https://registry.npmmirror.com live-server
npm install --location=global --registry=https://registry.npmmirror.com nodemon
npm install --location=global --registry=https://registry.npmmirror.com npm-check-updates
npm install --location=global --registry=https://registry.npmmirror.com pm2
npm install --location=global --registry=https://registry.npmmirror.com pnpm
npm install --location=global --registry=https://registry.npmmirror.com prettier
npm install --location=global --registry=https://registry.npmmirror.com release-it
npm install --location=global --registry=https://registry.npmmirror.com sort-package-json
npm install --location=global --registry=https://registry.npmmirror.com stylelint
npm install --location=global --registry=https://registry.npmmirror.com ts-node
npm install --location=global --registry=https://registry.npmmirror.com tsx
npm install --location=global --registry=https://registry.npmmirror.com typescript
npm install --location=global --registry=https://registry.npmmirror.com yarn
```

全局包对应的作用可自行到 [npmjs.com](https://npmjs.com) 搜索查看。

如果需要更新，请使用如下命令。

```shell
npm update --location=global --registry=https://registry.npmmirror.com
```

## Android Studio

有些时候我们需要使用 Android Studio 来研发调试 Android 应用。

<el-tabs>
  <el-tab-pane label="macOS">
  
可以使用 homebrew 直接安装 Android Studio。

```shell
brew install openjdk
brew install --cask android-studio
```

安装完毕后，需要修改 ~/.zshrc 以增加路径变量。你可以使用 `code ~/.zshrc` 来编辑并保存该文件。

````shell

```shell
# android
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

# openjdk
export PATH=/usr/local/opt/openjdk/bin:$PATH
````

  </el-tab-pane>
  <el-tab-pane label="Deepin">TODO</el-tab-pane>
  <el-tab-pane label="Windows（不推荐）">TODO</el-tab-pane>
</el-tabs>

## HBuilderX

司内使用 uni-app 研发小程序和移动应用。研发、发布移动应用时，必须使用 HBuilderX。请前往 [官网](https://www.dcloud.io/hbuilderx.html) 下载正式版。

下载完毕后，请自行添加以下插件，并安装所有核心插件。

- [dart-sass 编译](https://ext.dcloud.net.cn/plugin?id=5701)
- [es6 编译](https://ext.dcloud.net.cn/plugin?id=2045)
- [HBuilderX uni-app 自动化测试](https://ext.dcloud.net.cn/plugin?id=5708)
- [scss/sass 编译](https://ext.dcloud.net.cn/plugin?id=2046)

## Postman

在做后端研发时，我们需要 API 工具来快速验证 API 的正确性。

<el-tabs>
  <el-tab-pane label="macOS">
  
可以使用 homebrew 直接安装 Postman。

```shell
brew install --cask postman
```

  </el-tab-pane>
  <el-tab-pane label="Deepin">TODO</el-tab-pane>
  <el-tab-pane label="Windows（不推荐）">TODO</el-tab-pane>
</el-tabs>

## 参考

- [打造舒适高效的前端研发环境](http://fe.ssr-fc.com/)

<script setup>
import { ElTabs, ElTabPane } from 'element-plus';
</script>

<!-- <el-tabs>
  <el-tab-pane label="macOS">TODO</el-tab-pane>
  <el-tab-pane label="Deepin">TODO</el-tab-pane>
  <el-tab-pane label="Windows（不推荐）">TODO</el-tab-pane>
</el-tabs> -->
