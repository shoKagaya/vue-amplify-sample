// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import awsmobile from './aws-exports'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'

Amplify.configure(awsmobile)

Vue.config.productionTip = false
Vue.use(AmplifyPlugin, AmplifyModules)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
