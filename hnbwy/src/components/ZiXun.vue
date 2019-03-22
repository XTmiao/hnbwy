<template>
	<div id="box">
		<div id="titleBox">
			<div id="titles">
				<span class="titleBtn" @click="demo01_index = 0">院内动态</span>
			    <span class="titleBtn" @click="demo01_index = 1">公告预告</span>
			    <span class="titleBtn" @click="demo01_index = 2">媒体关注</span>
			    <span class="titleBtn" @click="demo01_index = 3">对外交流</span>
			    <span class="titleBtn" @click="demo01_index = 4">党的建设</span>
			</div>
			
		</div>
		<swiper :demo01_index="demo01_index" :list="list" @indexChange="demo01_onIndexChange"></swiper>	
		
	</div>
	

</template>

<script type="text/javascript">
	import Swiper from './swiper'
	export default {
		data() {
			return {
				demo01_index: 0,
				list:[]
			}
		},
		methods: {
			demo01_onIndexChange (index) {
		      this.demo01_index = index
		    }
		},
		components: {
			Swiper,
		}
	}
</script>

<style lang="stylus" scoped>
#box{
	width: 100%
	height: 100%
	#titleBox{
		width: 100%
		height: 50px
		background: #741A1A
		color: #fff
		font-size: 19px
		overflow-x: scroll
		#titles{
			width: 200%
			height: 30px
			padding: 13px 0
			.titleBtn{
				height: 25px
				padding: 0 15px
				line-height: 25px
				display: block
				float: left
				border-right: 1px solid #9E5F5F
			}
		}
		
	}
}

::-webkit-scrollbar {    //修改滚动条样式
    width: 16px; 
    height: 0; 
}
</style>