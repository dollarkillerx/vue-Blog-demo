# vueblog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### vue.config.js
```
module.exports = {
    baseURI:'/',//根路径
    outputDir:'dist',//构建输出目录
    assetsDir:'assets',//静态资源目录(js,css,img,fonts)
    lintOnSave:false,//是否开启eslint保存检测,有效值: true || false || 'error'
    devServer:{
        open:true,//是否自动弹出
        host:'localhost',
        port:8081,//端口
        https:false,
        hotOnly:false,//热更新
        proxy:{
            //配置跨域
            '/api':{
                target:"http://localhost:5000/api/",
                ws:true,//是否跨域
                changeOrigin:true,
                pathRewrite:{
                    "^/api":''
                }
            }
        }
    }
}
```

#### 本地访问静态文件放Public下
``` 
请求可以 加上本地服务域名(ip) 
文件目录为:public/index.json 
请求就是: http://localhost:8080/index.json
```

#### 自定义指令
无参: `v-rainbow`
``` 
//自定义指令
Vue.directive('rainbow',{
	bind(el,binding,vnode){//绑定
		el.style.color = "#" + Math.random().toString(16).slice(2,8);
	}
})
```
有参数: `v-theme="'narrow'"`
``` 
Vue.directive('theme',{
	bind(el,binding,vnode){
		if (binding.value === 'wide'){
			el.style.maxWidth = "1260px"
		}else if(binding.value === 'narrow'){
			el.style.maxWidth = "560px"
		}
	}
})
```
有参数: `v-theme:column="'narrow'"`
非全局: 
``` 
directives: {
			'rainbow':	{
				bind(el,binding,vnode){
					el.style.color = 'red'
				}
			}
		}
```
#### 自定义过滤器
放到main.js下就是全局
`{{item.title | to-uppercase}}`
``` 
//自定义过滤器
Vue.filter("to-uppercase",(value)=>{
	return value.toUpperCase()
})
Vue.filter('snippet',(value)=>{
	return value.slice(0,50) + '...'
})
```
局部使用：
在vue export default下
``` 
filters: {
	'to-uppercase':(value)=>{
		return value.toUpperCase()
	},
	toUppercase(value){
  				return value.toUpperCase()
  }
}
```

### Vue.filter过滤  实现搜索
>match() 方法可在字符串内检索指定的值 value.match(值or正则)
`v-for="(item,index) of filteredBlogs"`
``` 
computed: {
	filteredBlogs () {
		return this.blogs.filter((blog)=>{
			return blog.title.match(this.search)
		})
	}
}
```

> 消除url/# `mode:'history'`
> router-link active `.router-link-active`


#### vuecli3.0 通过cdn引入外部资源
1.加载配置的第一步首先都是一样的 将第三方包引入到public下的index.html文件中
``` 
<link href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css" rel="stylesheet">
```
2.新建 vue.config.js
``` 
module.exports = {
    // 修改webpack的配置
    configureWebpack: {
        // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
        externals: {
             'jquery' : '$',
            'axios':'axios'
        }
    }
}
```
3.直接引用
```
import $ from 'jquery';
```

### 路由参数
``` 
{
	path: '/blog/:id',
	component: () => import('./views/SingleBlog.vue')
}
```
`$router.params.id`
``` 
id:this.$route.params.id, 
```

demo地址:https://dollarkillerx.github.io/vueblogdemo/
