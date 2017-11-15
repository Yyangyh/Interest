<template>
	<main class='animated fadeIn'>
		<div class="header">
			<p>活动</p>
			<div class="iconfont icon-xinxi"></div>
		</div>
		<div class="nav">
			<ul>
				<li>运动</li>
				<li>旅游</li>
				<li>游戏</li>
				<li>聚餐</li>
				<li>K歌</li>
				<li>电影</li>
				<li>音乐</li>
				<li>演出</li>
			</ul>
		</div>
	</main>
</template>

<script>
</script>

<style scoped>
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
	.nav{
		width: 100%;
		background: #fff;
	}
	.nav ul{
		overflow: hidden;
		padding: 10px;
		box-sizing: border-box;
	}
	.nav ul li{
		float: left;
		width: 12.5%;
		color: #333;
		text-align: center;
		font-size: 14px;
	}
</style>