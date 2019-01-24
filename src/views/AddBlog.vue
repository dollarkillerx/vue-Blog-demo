<template>
  <div id="add-blog">

		<div v-if="submmited">
			<h3>你的博客添加成功</h3>
		</div>

		<div v-if="!submmited">
			<h2>添加博客</h2>
			<form onsubmit="false">
				<label>博客标题</label>
				<input type="text" v-model="blog.title" required>

				<label>博客内容</label>
				<textarea v-model="blog.content" required></textarea>

				<div id="checkboxes">
					<label>Vue.js</label>
					<input type="checkbox" value="Vue.js" v-model="blog.categories">
					<label>Node.js</label>
					<input type="checkbox" value="Node.js" v-model="blog.categories">
					<label>React.js</label>
					<input type="checkbox" value="React.js" v-model="blog.categories">
					<label>Angular4.js</label>
					<input type="checkbox" value="Angular4.js" v-model="blog.categories">
				</div>

				<label>作者</label>
				<select v-model="blog.author">
					<option v-for="(item,index) of authors" :key="index">{{item}}</option>
				</select>
				<button @click.prevent="post">添加博客</button>
			</form>
			<hr>
		</div>


		<div class="preview">
			<h3>博客总览</h3>
			<p>博客标题:{{blog.title}}</p>
			<p>博客内容:</p>
			<p>{{blog.content}}</p>
			<p>博客分类:</p>
			<ul>
				<li v-for="(item,index) of blog.categories" :key="index">{{item}}</li>
			</ul>
			<p>作者:{{blog.author}}</p>

		</div>
	</div>
</template>

<script>
export default {
  name: "AddBlog",
	data () {
  	return {
  		blog:{
  			title:'',
				content:'',
				categories:[],
				author:''
			},
			authors:['DollarKiller','大雄','哆啦酱'],
			submmited:false
		}
	},
	methods: {
  	post () {
			// http://jsonplaceholder.typicode.com/posts
			this.$http.post("https://me-testdemo.firebaseio.com/posts.json",this.blog)
				.then((data)=>{
					console.log(data)
					this.submmited = true
				});
		}
	}
}
</script>

<style  scoped>
#add-blog *{
	box-sizing: border-box;
}
#add-blog {
	margin: 20px auto;
	max-width: 600px;
	padding: 20px;
}
label{
	display: block;
	margin: 20px 0 10px;
}
input[type='text'],textarea,select{
	display: block;
	width: 100%;
	padding: 8px;
}
#checkboxes label{
	display:  inline-block;
	margin-top: 0px;
}
#checkboxes input{
	display: inline-block;
	margin-right:10px ;
}
button{
	display: block;
	margin: 20px 0;
	background-color: crimson;
	color: #fff;
	border: 0;
	padding: 14px;
	border-radius: 4px;
	cursor: pointer;
	font-size: 18px;
}
.preview{
	padding: 10px 20px;
	border: 1px dotted #ccc;
	margin: 30px 0;
}
	h3{
		margin-top: 10px;
	}
	textarea{
		height: 200px;
	}
</style>