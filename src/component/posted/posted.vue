<template>
	<main class='animated bounceInLeft'>
		<div class="header">
			<p @click="add">返回<span>></span></p>
		</div>
		
	</main>
</template>

<script>
	export default{
		data(){
			return {
				msg:""
			}
		},
		methods:{
			add(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	main{
		background: #F5F5F5;
	}
	main .header{
		background: #fff;
		width: 100%;
		padding: 10px;
		background: #3ddde3;
		position: relative;
		overflow: hidden;
		box-sizing: border-box;
	}
	.header p{
		color: #fff;
		font-size: 18px;
		float: right;
	}
	.header p span{
		font-size:22px;
		
		margin-left: 15px;
	}
</style>