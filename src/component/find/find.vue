<template>
	<main class='animated fadeIn'>
		<div class="header">
			<p>发现</p>
			<div class="iconfont icon-xinxi"></div>
		</div>
		<div class="content">
			<ul>
				<li v-for="v in list">
					<h3>{{v.title}}</h3>
					<p>{{v.content}}</p>
					<img :src="v.image"/>
					<span>{{v.category_name}}</span>
				</li>
			</ul>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				list:''
			}
		},
		mounted(){
			this.$http.get('my.json').then(function(res){
				console.log(res.body.result.data[0])
				this.list=res.body.result.data
			})
		}
	}
</script>

<style>
	main{
		background: #F5F5F5;
	}
	main .header{
		background: #fff;
		width: 100%;
		padding: 10px 10px;
		background: #3ddde3;
		position: relative;
		box-sizing: border-box;
	}
	.header p{
		color: #fff;
		font-size: 18px;
	}
	.header .icon-xinxi{
		color: #fff;
		font-size: 24px;
		position: absolute;
		top: 10px;
		right: 10px;
	}
	.content{
		overflow: hidden;
		padding: 2px 10px;
		box-sizing: border-box;
		background: #fff;
	}
	.content li{
		overflow: hidden;
		margin-bottom: 20px;
		position: relative;
		padding-bottom: 10px;
		border-bottom:1px solid #CCCCCC ;
	}
	.content h3{
		width: 100%;
		float: left;
		padding: 5px 0;
		font-size: 16px;
	}
	.content p{
		padding-top: 10px;
		float: left;
		width: 75%;
		font-size: 12px;
		color: #888888;
	}
	.content img{
		float: left;
		width: 20%;
	}
	.content span{
		position: absolute;
		bottom: 5px;
		left: 5px;
		color: #888888;
		font-size: 12px;
	}
</style>