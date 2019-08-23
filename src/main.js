import Vue from 'vue'
import App from './App'
import Fly from 'flyio/dist/npm/wx'

let fly = new Fly

Vue.config.productionTip = false
Vue.prototype.$fly = fly
Vue.prototype.globalObj = {
  appKey: 'c2d3e04cc633644f1c3ae3f6eea94564'
}

App.mpType = 'app'

const app = new Vue(App)
app.$mount()
