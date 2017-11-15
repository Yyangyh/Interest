<template>
	<main class='animated fadeIn'>
		<button @click="add">按钮</button>
		<h1>这是热门</h1>
		<ul v-for="v in list">
			<li>
				{{v.title}}
				<img :src="v.albums[0]"/>
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:'提示框',
				list:''
			}
		},
		methods:{
			add(){
				this.$router.go(-1)
			}
		},
		mounted(){
			this.$http.get('my.json').then(function(res){
				console.log(res.body.result.data)	
				this.list=res.body.result.data
			},function(){
				console.log(1)
			})
		}
	}
</script>

<style>
</style>