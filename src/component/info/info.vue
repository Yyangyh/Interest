<template>
	<main class='animated fadeIn'>
		<div class="header">
			<p><span class="iconfont icon-fanhui" @click="add"></span>我的</p>
		</div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">通知</mt-tab-item>
			<mt-tab-item id="2">互动</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<mt-cell v-for="n in 10" :title="'内容 ' + n" />
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<mt-cell v-for="n in 4" :title="'测试 ' + n" />
			</mt-tab-container-item>
		</mt-tab-container>
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
</style>