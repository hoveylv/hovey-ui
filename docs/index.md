# Hovey-UI 是什么?

一个 Mini 版的组件库，基于 Vue + Vite 技术栈。是组件库搭建的前端工程化实践。

## Features

- ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prettier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions

## Install

```bash
pnpm i hovey-ui
```

## Quick Start

```js
import Vue from 'vue'
import HoveyUI from 'hovey-ui'

const App = {
  template: `
                <HButton/>
            `,
}

createApp(App).use(HoveyUI).mount('#app')
```

## Browser Support

Modern browsers and Internet Explorer 10+.
