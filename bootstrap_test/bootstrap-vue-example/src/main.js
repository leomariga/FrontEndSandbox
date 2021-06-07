import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './views/Home'
import Login from './views/Login'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
      path: '/login/',
      name: 'Login',
      component: Login
  }
]


const router = new VueRouter({
  mode:'history',
  routes,
  hashbang: false,
  history: true,
  linkActiveClass: "active"
})

router.mode = 'html5'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
