import Vue from 'vue'
import Router from 'vue-router'
import stamp from '../pages/stamp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:stampId',
      name: 'stamp',
      component: stamp,
      props: route => ({
        hashedMemberKey: route.query.hashedMemberKey,
        loginTerminalId: route.query.loginTerminalId
      })
    }
  ]
})
