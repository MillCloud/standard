import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

const mode = process.env.MODE || 'github';
const hostname = mode === 'github' ? 'https://millcloud.gihub.io/' : 'https://millcloud.gitee.io';
const repo =
  mode === 'github'
    ? 'https://github.com/MillCloud/standard'
    : 'https://gitee.com/MillCloud/standard';
const repoLabel = mode === 'github' ? 'Github' : 'Gitee';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-Hans',
  title: 'MillCloud 网站开发规范',
  description: '基于 JavaScript / TypeScript 的全栈网站开发规范',
  themeConfig: {
    hostname,
    navbar: [
      { text: '目标', link: '/target/' },
      { text: '学习', link: '/learning/' },
      { text: '环境', link: '/environment/' },
      { text: '工作流', link: '/workflows/' },
      { text: '设计', link: '/design/' },
      { text: '编码', link: '/coding/' },
      { text: '测试', link: '/testing/' },
      { text: '文档', link: '/documents/' },
      { text: '协作', link: '/cooperation/' },
    ],
    repo,
    repoLabel,
    sidebar: 'auto',
    sidebarDepth: 3,
  },
  markdown: {
    toc: {
      level: [2, 3, 4],
    },
    extractHeaders: {
      level: [2, 3, 4],
    },
  },
  plugins: [
    ['@vuepress/plugin-search'],
    ['@vuepress/pwa'],
    ['@vuepress/plugin-pwa-popup'],
    [
      '@vuepress/plugin-shiki',
      {
        theme: 'github-dark',
      },
    ],
    ['@vuepress/plugin-debug'],
    [
      '@snippetors/vuepress-plugin-code-copy',
      {
        backgroundTransition: false,
      },
    ],
    // ['vuepress-plugin-sitemap2'],
  ],
});
