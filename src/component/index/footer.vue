	<template>
		<main>
			<ul class="menu">
				<li>
					<router-link to="/boringLife">
						<span class="iconfont icon-shouye"></span>
						<br />首页
					</router-link>
				</li>
				<li>
					<router-link to="/new">
						<span class="iconfont icon-huodong"></span>
						<br />活动
					</router-link>
				</li>
				<li>
					<router-link to="/find">
						<span class="iconfont icon-zhinanzhen1"></span>
						<br />发现
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<span class="iconfont icon-geren"></span>
						<br />我的
					</router-link>
				</li>
			</ul>
		</main>
	</template>

	<style scoped>
		.router-link-active{
			color: deepskyblue;
		}
		main{
			background: #fff;
			width: 100%;
			overflow: hidden;
			position: fixed;
			left: 0;
			bottom: 0;
		}
		main ul{
			overflow: hidden;
			padding: 10px;
			box-sizing: border-box;
		}
		main li{
			list-style: none;
			width: 25%;
			float: left;
			text-align: center;
		}
		main li a{
			font-size: 14px;
			color: #000;
			text-decoration: none;
		}
		main li a span{
			font-size: 16px;
		}
	</style>