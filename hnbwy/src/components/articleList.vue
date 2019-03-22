<template>
	<transition name="articleList">
		<div id="articleList" v-show="isShow">
			<div id="articleList_header">
				<i class="el-icon-arrow-left" @click="hide()"></i>
				<i class="el-icon-refresh"></i>
				<p>标题</p>
			</div>
			<div id="articleList_main">
				<div class="article">
					<p class="article_title">标题</p>
					<p class="article_date">发布日期：2012-02-13 10：10：30</p>
					<i class="el-icon-arrow-right" @click="articleShow()"></i>
				</div>
				<div class="article">
					<p class="article_title">标题</p>
					<p class="article_date">发布日期：2012-02-13 10：10：30</p>
					<i class="el-icon-arrow-right" @click="articleShow()"></i>
				</div>
				<div class="article">
					<p class="article_title">标题</p>
					<p class="article_date">发布日期：2012-02-13 10：10：30</p>
					<i class="el-icon-arrow-right" @click="articleShow()"></i>
				</div>
				<div class="article">
					<p class="article_title">标题</p>
					<p class="article_date">发布日期：2012-02-13 10：10：30</p>
					<i class="el-icon-arrow-right" @click="articleShow()"></i>
				</div>
				<div class="article">
					<p class="article_title">标题</p>
					<p class="article_date">发布日期：2012-02-13 10：10：30</p>
					<i class="el-icon-arrow-right" @click="articleShow()"></i>
				</div>
				<div class="article">
					<p class="article_title">标题</p>
					<p class="article_date">发布日期：2012-02-13 10：10：30</p>
					<i class="el-icon-arrow-right" @click="articleShow()"></i>
				</div>
				<button class="btn btn-default">没有更多数据可以加载了</button>
			</div>
			<fix :box="articleList_main" :fixedShow="fixedShow"></fix>
			<v-article ref="article"></v-article>
		</div>
	</transition>
</template>

<script type="text/javascript">
	import Fix from './fix'
	import vArticle from './article'
	export default{
		data() {
			return {
				isShow: false,
				articleList_main: {},
				fixedShow: false
			}
		},
		mounted() {
			var _this = this;
			$('#articleList_main').scroll(function(e){
				_this.fixedShow = ( $(this).scrollTop() > 50 )   // 滚动高度超过50px时显示固定框
				//console.log($(this).scrollTop())
				_this.articleList_main = $(this)
			})
		},
		methods: {
			show() {
				this.isShow = true
			},
			hide() {
				this.isShow = false
			},
			articleShow() {
				this.$refs.article.show()
			}
		},
		components: {
			Fix,
			vArticle
		}
	}
</script>

<style lang="stylus" scoped>
#articleList{
	width: 100.5%
	position: fixed
	top: 0
	left: 0
	bottom: 0
	background: #fff
	z-index: 5
	&.articleList-enter, &.articleList-leave-to{
		transform: translate3D(100%,0,0)
	}
	&.articleList-enter-active, &.articleList-leave-active{
		transition: all .5s
	}
	#articleList_header{
		width: 100%
		height: 60px
		line-height: 60px
		border-bottom: 1px solid #B2B2B2
		color: #741a1a
		font-size: 22px
		i{
			font-size: 30px
			line-height: 60px
			margin-left: 15px
			float: left
			&.el-icon-refresh{
				float: right
				margin-right: 25px
			}
		}
		p{
			width: 100%
			text-align: center
		}
	}
	#articleList_main{
		width: 100%
		position: absolute
		top: 60px
		left: 0
		bottom: 0
		overflow: scroll
		.article{
			position: relative
			padding: 30px 20px
			border-bottom: 1px solid #ddd
			font-size: 17px
			color: #666
			.article_title{
				color: #000
				font-size: 19px
				margin: 10px 0 20px 0
			}
			.el-icon-arrow-right{
				position: absolute
				top: 35%
				right: 30px
				width: 25px
				height: 25px
				line-height: 25px
				text-align: center
				color: #fff
				background: #741A1A
				border-radius:50%
				font-size: 23px
				font-weight: bold
			}
		}
		.btn{
			width: 90%
			margin: 20px auto
			display: block
			color: #B5B5B5
			outline: none 
		}
	}
}
</style>