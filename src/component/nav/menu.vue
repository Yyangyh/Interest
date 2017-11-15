	<template>
		<main>
			
			<!--<img src="../../assets/image/banner.png"/>
			<ul>
				<li>
					<router-link to="/hot">
						<img src="../../assets/image/r.png"/>
					</router-link>
				</li>
				<li>
					<router-link to="/westernFood">
						<img src="../../assets/image/c.png"/>
					</router-link>
				</li>
				<li>
					<router-link to="/chineseFood">
						<img src="../../assets/image/t.png"/>
					</router-link>
				</li>
				<li>
					<router-link to="/assemblage">
						<img src="../../assets/image/z.png"/>
					</router-link>
				</li>
			</ul>-->
		</main>
	</template>
	<style type="text/css" scoped="scoped">
		main img{
			width: 100%;
		}
		main ul{
			overflow: hidden;
			width: 100%;
		}
		main ul li{
			text-align: center;
			float: left;
			list-style: none;
			width: 25%;
		}
		main ul li img{
			width: 80%;
			height: 80%;
		}
	</style>
	<script type="text/javascript">
		import vhot from '../hot/hot.vue'
		export default{
			components:{
				'hot':vhot
			}
		}
	</script>