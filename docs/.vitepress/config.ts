import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  title: 'Hovey-UI',
  description: '前端工程化搭建组件库实践',
  themeConfig: {
    sidebar: {
      '/': [
        {
          text: '通用',
          items: [
            {
              text: 'Button 按钮',
              link: '/components/button/index',
            },
          ],
        },
      ],
    },
  },
  markdown: {
    config: md => {
      // const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    },
  },
})
