<template>
	<div id="box">
		<img src="../assets/img/14.jpg" alt="学术研究">
		<ul>
			<li><span class="glyphicon glyphicon-th-list"></span><span>学术活动</span><i class="el-icon-arrow-right" @click="showList()"></i></li>
			<li><span class="glyphicon glyphicon-book"></span><span>学术论文</span><i class="el-icon-arrow-right" @click="showList()"></i></li>
			<li><span class="glyphicon glyphicon-edit"></span><span>学术著作</span><i class="el-icon-arrow-right" @click="showList()"></i></li>
			<li><span class="glyphicon glyphicon-flag"></span><span>专家风采</span><i class="el-icon-arrow-right" @click="showList()"></i></li>
			<li><span class="glyphicon glyphicon-asterisk"></span><span>科研项目</span><i class="el-icon-arrow-right" @click="showList()"></i></li>
			<li><span class="glyphicon glyphicon-briefcase"></span><span>科研资源</span><i class="el-icon-arrow-right" @click="showList()"></i></li>
		</ul>
		<article-list ref="articleList"></article-list>
	</div>
</template>

<script type="text/javascript">
	import articleList from './articleList'
	export default{
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
	img{
		width: 100%
		margin-bottom: 10px
	}
	ul{
		list-style: none
		padding: 0
		font-size: 20px
		li{
			height: 70px
			border-top: 1px solid #ccc
			border-bottom: 1px solid #ccc
			margin-bottom: 15px
			padding-left: 20px
			&:nth-child(1) .glyphicon{
				color: #e95e87
			}
			&:nth-child(2) .glyphicon{
				color: #fdc362
			}
			&:nth-child(3) .glyphicon{
				color: #77dba9
			}
			&:nth-child(4) .glyphicon{
				color: #f5625a
			}
			&:nth-child(5) .glyphicon{
				color: #3dc0f4
			}
			&:nth-child(6) .glyphicon{
				color: #1f511e
			}
			span{
				line-height: 70px
				display: inline-block
			}
			.glyphicon{
				display: block
				float: left
				margin-right: 20px
				font-size: 30px
			}
			.el-icon-arrow-right{
				font-size: 30px
				line-height: 70px
				float: right
				margin-right: 20px
			}
		}
	}
}
</style>