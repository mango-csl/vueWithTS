// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App'
import App from './App.vue';
import router from './router/index';

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

const app: Vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export default app
