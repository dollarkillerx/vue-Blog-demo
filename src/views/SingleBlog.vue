<template>
	<div id="single-blog">
		<h1>{{blog.title}}</h1>
		<article>{{blog.content}}</article>
		<p>作者:{{blog.author}}</p>
		<p>分类:</p>
		<ul>
			<li v-for="(category,index) of blog.categories" :key="index">{{category}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "SingleBlog",
		data () {
			return {
				id:this.$route.params.id,
				blog: {}
			}
		},
		created() {
			this.$http.get('https://me-testdemo.firebaseio.com/posts/' + this.id + ".json")
				.then((data)=>{
					// this.blog = data.body
					return data.json()
				})
				.then((data)=>{
					this.blog = data
				})
		}
	}
</script>

<style scoped>
#single-blog{
	max-width: 960px;
	margin: 0 auto;
	padding: 20px;
	background-color: #eee;
	border:1px dotted #aaa;
}
</style>