import Vue, {AsyncComponent} from 'vue';
import Router, {RouteConfig, Route, NavigationGuard} from 'vue-router';

const home: AsyncComponent = (): any => import(/* webpackChunkName: "home" */ '@/components/home.vue');

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
//
// Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: '主页',
    // component: home,
    redirect: '/home',
    meta: {leaf: true, icon: 'icon-home'},
    // children: [
    //   { path: '/home', component: home, name: '我的面板', meta: { requiresAuth: true } }
    // ]
  },
  {
    path: '/home',
    name: '登陆',
    component: home,
    meta: {leaf: true, icon: 'icon-home', requiresAuth: true},
  }
  // {
  //   path: '/',
  //   name: '全局设置',
  //   component: index,
  //   meta: { leaf: true, icon: 'icon-set' },
  //   children: [
  //     { path: '/set', component: set, name: '全局设置', meta: { page: 'set', requiresAuth: true } }
  //   ]
  // },
  // {
  //   path: '/login',
  //   name: '登陆',
  //   component: login,
  //   meta: { requiresAuth: false }
  // }
]

const router: Router = new Router({
  mode: 'history',
  base: __dirname,
  routes
})

router.beforeEach((to: Route, from: Route, next: Function): void => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // if (!loginIn()) {
    //   next({
    //     path: '/login',
    //     query: { redirect: to.fullPath }
    //   })
    // } else {
    //   next()
    // }
    console.log('next ---true');
    next();
  } else {
    next();
    console.log('next ---fALSE');
  }
})

export default router
