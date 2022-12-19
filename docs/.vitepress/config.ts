import { defineConfig } from 'vitepress';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  // app configs
  base: isProduction ? '/standard/' : undefined,
  description: '基于 JavaScript / TypeScript 的全栈研发规范',
  head: [
    ['link', { rel: 'stylesheet', href: '//unpkg.com/element-plus/dist/index.css' }],
    [
      'style',
      {},
      ':root { --el-color-primary: var(--vp-c-brand); --el-color-primary-light-3: var(--vp-c-brand-light); --el-color-primary-light-5: var(--vp-c-brand-lighter); --el-color-primary-dark-2: var(--vp-c-brand-dark) }',
    ],
  ],
  lang: 'zh-Hans',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    theme: 'github-dark',
  },
  title: 'MillCloud 全栈研发规范',
  // theme configs
  themeConfig: {
    nav: [
      { text: '基础', link: '/base/target' },
      { text: '指引', link: '/guide/cooperation' },
      { text: '参考', link: '/reference' },
    ],
    sidebar: [
      {
        text: '基础',
        items: [
          {
            text: '目标',
            link: '/base/target',
          },
          {
            text: '工作学习法',
            link: '/base/technique',
          },
          {
            text: '研发环境',
            link: '/base/environment',
          },
        ],
      },
      {
        text: '指引',
        items: [
          {
            text: '协作',
            link: '/guide/cooperation',
          },
          {
            text: '沟通',
            link: '/guide/communication',
          },
          {
            text: '文档',
            link: '/guide/document',
          },
          {
            text: '设计',
            link: '/guide/design',
          },
          {
            text: '研发',
            link: '/guide/development',
          },
          {
            text: '测试',
            link: '/guide/test',
          },
          {
            text: '发布',
            link: '/guide/release',
          },
        ],
      },
      {
        text: '参考',
        items: [
          {
            text: '参考',
            link: '/reference',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/MillCloud/standard',
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--simple-icons"><path fill="currentColor" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"></path></svg>`,
        },
        link: 'https://gitee.com/MillCloud/standard',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present MillCloud',
    },
  },
});
