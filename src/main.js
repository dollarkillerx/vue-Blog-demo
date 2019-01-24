import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueResource)

//自定义指令
Vue.directive('rainbow',{
	bind(el,binding,vnode){//绑定
		el.style.color = "#" + Math.random().toString(16).slice(2,8);
	}
})
Vue.directive('theme',{
	bind(el,binding,vnode){
		if (binding.value === 'wide'){
			el.style.maxWidth = "1260px"
		}else if(binding.value === 'narrow'){
			el.style.maxWidth = "560px"
		}

		if (binding.age === 'column'){
			el.style.background = '#6677cc'
			el.style.padding = '20px'
		}
	}
})

//自定义过滤器
Vue.filter("to-uppercase",(value)=>{
	return value.toUpperCase()
})
Vue.filter('snippet',(value)=>{
	return value.slice(0,50) + '...'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
