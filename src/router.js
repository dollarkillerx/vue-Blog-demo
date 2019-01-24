import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addblog',
      name: 'AddBlog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AddBlog.vue')
    },
		{
			path: '/showblog',
			name: 'ShowBlog',
			component: () => import('./views/ShowBlogs.vue')
		},
		{
			path: '/blog/:id',
			component: () => import('./views/SingleBlog.vue')
		}
  ],mode:'history'
})
