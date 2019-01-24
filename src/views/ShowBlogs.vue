<template>
	<div id="show-blogs" v-theme="'narrow'">
		<h1>博客总览</h1>
		<input type="search" placeholder="搜索" v-model="search">
		<div class="single-blog" v-for="(item,index) of filteredBlogs" :key="index">
			<router-link :to="'/blog/' + item.id">
				<h2 v-rainbow>{{item.title | to-uppercase}}</h2>
			</router-link>
			<article>
				{{item.content | snippet}}
			</article>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ShowBlogs",
		data () {
			return {
				blogs:[],
				search:''
			}
		},
		created() {
			this.$http.get('https://me-testdemo.firebaseio.com/posts.json')
				.then((data)=>{
					return data.json()
				})
				.then((data)=>{
					let blgosArray = []
					for (let key in data){
						data[key].id = key
						blgosArray.push(data[key])
					}
					// console.log(blgosArray)
					this.blogs = blgosArray
					console.log(this.blogs)
				})
		},
		computed: {
			filteredBlogs () {
				return this.blogs.filter((blog)=>{
					return blog.title.match(this.search)
				})
			}
		},
		filters: {
			// 'to-uppercase':(value)=>{
			// 	return value.toUpperCase()
			// }
			toUppercase(value){
				return value.toUpperCase()
			}
		},
		// directives: {
		// 	'rainbow':	{
		// 		bind(el,binding,vnode){
		// 			el.style.color = 'red'
		// 		}
		// 	}
		// }
	}
</script>

<style scoped>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}
.single-blog {
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background-color: #eee;
	border: 1px dotted #aaa;
}
#show-blogs a{
	text-decoration: none;
}
input[type="search"]{
	padding: 8px;
	width: 100%;
	box-sizing: border-box;
}
</style>