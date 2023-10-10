# Vue 3 + TypeScript + Vite

## Import Qiankun

#### 安装插件

```
pnpm add vite-plugin-qiankun -D
```

#### 在vite.config.ts中引入插件

```
import qiankun from 'vite-plugin-qiankun'
...
plugins: [
  vue(),
  qiankun('app-vue3-vite', {
  useDevMode: true
  })
],
...
```

#### 在vite.config.ts中配置端口号和主应用的config文件一致

```
  server: {
    port: 5001,
```

#### 在package.json中配置项目名称和主应用的config文件一致

```
{
  "name": "app-vue3-vite",
```

#### 修改项目入口文件main.ts如下

```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import renderWithQiankun, { qiankunWindow } from 'vite-plugin-qiankun/es/helper'

let app: any
const render = (container?: any) => {
  app = createApp(App)
  app
    .use(router)
    .mount(container ? container.querySelector('#app') : '#app')
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props
      render(container)
    },
    bootstrap() {},
    unmount() {
      app.unmount()
    },
    update() {}
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render()
```
