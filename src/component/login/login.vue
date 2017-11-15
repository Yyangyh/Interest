<template>
	<main class='animated fadeIn'>
		<div class="header">
			<p><span class="iconfont icon-fanhui" @click="add"></span>我的</p>
		</div>
		<div class="content">
			<h2>趣生活</h2>
			<div class="login">
				<div class="">
					<span class="iconfont icon-shouji"></span><input type="text" placeholder="手机号"/>
				</div>
				<div>
					<span class="iconfont icon-mima"></span><input type="password" placeholder="密码"/><br />
				</div>
				
				<button>登录</button><br />
				<span>忘记密码？</span>
				<router-link to="/reg">注册</router-link>
			</div>
		</div>
	</main>
</template>

<script>
	export default {
		data(){
			return{
				selected:'1'
			}
		},
		methods: {
			add() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	main {
		background: #F5F5F5;
	}
	
	main .header {
		background: #fff;
		width: 100%;
		padding: 10px;
		background: #3ddde3;
		position: relative;
		box-sizing: border-box;
	}
	
	.header p {
		color: #fff;
		font-size: 18px;
	}
	
	.header p span {
		font-size: 18px;
		margin-right: 15px;
	}
	.content{
		padding: 0 10px;
		box-sizing: border-box;
		background: #333333;
		box-sizing: border-box;
		padding-bottom: 100%;
	}
	.content h2{
		color: #fff;
		font-size: 36px;
		text-align: center;
		padding: 60px 10px;
	}
	.content .login{
		text-align: center;
		color: #888888;
		padding: 0 10%;
		overflow: hidden;
	}
	.content .login input{
		width: 100%;
		background: #5a5a5a;
		border: none;
		border-radius: 5px;
		margin: 10px 0px;
		outline: none;
		color: #fff;
		padding: 8px 0 8px 35px;
		box-sizing: border-box;
	}
	.content .login>div{
		position: relative;
	}
	.content .login>div>span{
		position: absolute;
		top: 15px;
		left: 5px;
		color: #fff;
		font-size: 20px;
	}
	.content .login button{
		width: 100%;
		font-size: 24px;
		padding: 10px 10px;
		margin: 10px 0;
		border-radius: 5px;
		border: none;
		color: #fff;
		background: deepskyblue;
		outline: none;
	}
	.content .login span{
		float: left;
	}
	.content .login a{
		color: #888;
		text-decoration: none;
		float: right;
	}
</style>