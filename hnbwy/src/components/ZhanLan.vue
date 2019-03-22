<template>
	<div id="box">
		<div class="item" @click="showList()"><img src="../assets/img/wap_04.jpg"><img src="../assets/img/wap_06.jpg" alt="基本陈列"></div>
		<div class="item" @click="showList()"><img src="../assets/img/wap_05.jpg" alt="现在展览"><img src="../assets/img/jd01.jpg"></div>
		<div class="item" @click="showList()"><img src="../assets/img/wap_09.jpg"><img src="../assets/img/wap_10.jpg" alt="外展交流"></div>
		<div class="item" @click="showList()"><img src="../assets/img/1.jpg" alt="虚拟展览"><img src="../assets/img/wap_09.jpg"></div>
		<div class="item" @click="showList()"><img src="../assets/img/jd02.jpg"><img src="../assets/img/2.jpg" alt="展览回顾"></div>
		<div class="item" @click="showList()"><img src="../assets/img/3.jpg" alt="展览推介"><img src="../assets/img/01.jpg"></div>
		<article-list ref="articleList"></article-list>
	</div>
</template>

<script type="text/javascript">
	import articleList from './articleList'
	export default{
		data() {
			return{}
		},
		methods: {
			showList() {
				this.$refs.articleList.show()
			}
		},
		components: {
			articleList
		}
	}
</script>

<style lang="stylus" scoped>
#box{
	width: 100%
	height: auto
	position: absolute
	top: 60px
	bottom: 75px
	overflow: scroll
	.item{
		margin-bottom: 5px
	}
	img{
		width: 50%
	}
}
</style>