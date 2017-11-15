<template>
	<main class='boring animated'>
		<div class="header">
			<p>趣生活</p>
			<router-link to="/posted">
				<span class="iconfont icon-weizhi">
					
				</span>
			</router-link>
		</div>
			<mt-swipe :auto='4000'>
				<mt-swipe-item><img src="../../assets/images/a.png" alt="" /></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/images/b.png" alt="" /></mt-swipe-item>
				<mt-swipe-item><img src="../../assets/images/c.png" alt="" /></mt-swipe-item>
			</mt-swipe>
		<div class="nav">
			<ul>
				<li>
					<router-link to='/new'>
						<span class="iconfont icon-zuixin"></span><br />
						最新活动
					</router-link>
				</li>
				<li>
					<router-link to='/hot'>
						
						<span class="iconfont icon-remen1"></span><br />
						热门活动
					</router-link>
				</li>
				<li>
					<router-link to='/find'>
						<span class="iconfont icon-zhoubianyou"></span><br />
						发现周边
					</router-link>
				</li>
				<li>
					<router-link to='/posted'>
						<span class="iconfont icon-fabu1"></span><br />
						发布活动
					</router-link>
				</li>
			</ul>
		</div>
		<div class="hot">
			<p><span class="iconfont icon-remen"></span>热门活动</p>
			<router-link to='/new'>···</router-link>
		</div>
	</main>
</template>

<script>
	export default{
		
	}
</script>
<style type="text/css">
	.boring .mint-swipe-items-wrap{
		padding-bottom: 50%;
	}
</style>
<style scoped>
	img{
		display: block;
		height: 100%;
		width: 100%;
	}
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
	.header .icon-weizhi{
		color: #fff;
		font-size: 24px;
		position: absolute;
		top: 10px;
		right: 10px;
	}
	
	main .nav{
		background: #fff;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
	}
	main .nav ul{
		overflow: hidden;
	}
	main .nav ul li{
		width: 25%;
		float: left;
		font-size: 12px;
		text-align: center;
	}
	main .nav ul li span{
		font-size: 24px;
	}
	main .nav ul li a{
		color: #333;
		text-decoration: none;
	}
	.icon-zuixin{
		color: #f28093;
	}
	.icon-remen1{
		color: #f2e578;
	}
	.icon-zhoubianyou{
		color: #78f297;
	}
	.icon-fabu1{
		color: #94c0f2;
	}
	main .hot{
		background: #fff;
		
		margin-top: 10px;
		position: relative;
		padding: 10px;
		box-sizing: border-box;
	}
	main .hot p{
		font-size: 12px;
	}
	main .hot p span{
		margin-right: 5px;
	}
	main .hot a{
		text-decoration: none;
		color: #5A5A5A;
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 18px;
		font-weight: 600;
	}
</style>