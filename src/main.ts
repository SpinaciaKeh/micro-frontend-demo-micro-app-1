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
