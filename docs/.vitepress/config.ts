import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Configured Example',
  description: 'Example of configured options of VitePress',
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
})
