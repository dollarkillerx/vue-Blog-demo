<template>
  <div id="app">
		<blog-header></blog-header>
    <router-view/>
  </div>
</template>

<script>
	import BlogHeader from './views/BlogHeader'
export default {
	name:'app',
	components: {
		BlogHeader
	}
}
</script>

<style>
	*{
		padding :0;
		margin :0;
	}
</style>
