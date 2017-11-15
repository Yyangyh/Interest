<template>
	<main class='animated fadeIn'>
		<div class="header">
			<p>我的</p>
			<router-link to='/info'>
				<span class="iconfont icon-xinxi"></span>
			</router-link>
			<div class="head">
				<div>
					<img src="../../assets/images/user-img0.png"/>
				</div>
			</div>
			<div class="user">
				<router-link to="/login">登录</router-link>
				<router-link to="/reg">注册</router-link>
			</div>
		</div>
		<div class="list">
			<div class="info">
				<router-link to='/info'>
				我的消息
				<span class="iconfont icon-gengduo"></span>
				<mt-badge size="small" type="error">8</mt-badge>
				</router-link>
			</div>
			<div class="join">
				<router-link to='/join'>
				我参加的
				<span class="iconfont icon-gengduo"></span>
				</router-link>
			</div>
			<div class="release">
				<router-link to='/release'>
				我发布的
				<span class="iconfont icon-gengduo"></span>
				</router-link>
			</div>
			<div class="personal">
				<router-link to='/personal'>
				基本信息
				<span class="iconfont icon-gengduo"></span>
				</router-link>
			</div>
		</div>
		<div class="about">
			<div class="set">
				<router-link to='/set'>
				设置
				<span class="iconfont icon-gengduo"></span>
				</router-link>
			</div>
			<div class="us">
				<router-link to='/us'>
				关于我们
				<span class="iconfont icon-gengduo"></span>
				</router-link>
			</div>
		</div>
	</main>
</template>

<script>
</script>

<style scoped="scoped">
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
	.head{
		padding-left: 25%;
		width: 50%;
		height: 50%;
	}
	.head div{
		width: 100%;
		position: relative;
		padding-bottom:100%;
	}
	.head div img{
		width: 60%;
		height: 60%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		border: 3px solid whitesmoke;
		border-radius: 50%;
		overflow: hidden;
	}
	.user{
		margin-left: 10%;
		width: 80%;
		border-radius: 5px;
		padding: 2%;
		text-align: center;
	}
	.user a{
		text-decoration: none;
		padding: 10px 40px;
		border-radius: 5px;
		text-align: center;
	}
	.user a:nth-of-type(1){
		color: #fff;
		background: #24a4a9;
	}
	.user a:nth-of-type(2){
		color: #24a4a9;
		background: #fff;
	}
	.list{
		background: #fff;
	}
	.list div{
		width: 90%;
		padding: 10px 0;
		margin-left: 5%;
		box-sizing: border-box;
		border-bottom: 1px solid #EBEBEB;
	}
	.about div:last-child{
		border: none;
	}
	.list div a{
		overflow: hidden;
		display: block;
		text-decoration: none;
		color: #5A5A5A;
	}
	.list div a span{
		float: right;
	}
	.icon-gengduo{
		font-size: 18px;
	}
	.about{
		background: #fff;
	}
	.about div{
		width: 90%;
		padding: 10px 0;
		margin-left: 5%;
		box-sizing: border-box;
		border-bottom: 1px solid #EBEBEB;
	}
	.about div a{
		text-decoration: none;
		color: #5A5A5A;
		display: block;
	}
	.about div a span{
		float: right;
	}
	.about div:last-child{
		border: none;
	}
</style>