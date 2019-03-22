<template>
	<div>
		<swiper id="swiper" :show-dots="false" :auto="false" v-model="demo01_index" @on-index-change="demo01_onIndexChange">
			<swiper-item class="item">
				<mt-loadmore class="loadmore" :top-method="loadTop" @top-status-change="handleTopChange" :autoFill="true" ref="loadmore">
					<div class="article" @click="articleShow()">
						<p class="articleTitle">公告预告</p>
						<p class="createTime">2015-07-15(用时间选择器)</p>
					</div>
					<div class="article" @click="articleShow()">
						<p class="articleTitle">公告预告</p>
						<p class="createTime">2015-07-15(用时间选择器)</p>
					</div>
				</mt-loadmore>
			</swiper-item>
			<swiper-item class="item">
				<div class="article" @click="articleShow()">
					<p class="articleTitle">公告预告</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">公告预告</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">公告预告</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">公告预告</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">公告预告</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">公告预告</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
			</swiper-item>
			<swiper-item class="item">
				<div class="article" @click="articleShow()">
					<p class="articleTitle">媒体关注</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">媒体关注</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">媒体关注</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<el-button type="danger">危险按钮</el-button>
			</swiper-item>
			<swiper-item class="item">
				<div class="article" @click="articleShow()">
					<p class="articleTitle">对外交流</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">对外交流</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">对外交流</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">对外交流</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">对外交流</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">对外交流</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
			</swiper-item>
			<swiper-item class="item">
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
				<div class="article" @click="articleShow()">
					<p class="articleTitle">党的建设</p>
					<p class="createTime">2015-07-15(用时间选择器)</p>
				</div>
			</swiper-item>
		</swiper>
		<fix :box="itemBox" :fixedShow="fixedShow"></fix>
		<v-article ref="article"></v-article>
	</div>
	
</template>

<script type="text/javascript">
	import { Swiper, SwiperItem } from 'vux'
	import { Loadmore } from 'mint-ui'
	import vArticle from './article'
	import Fix from './fix'
	import Vue from 'vue'
	Vue.component(Loadmore.name, Loadmore)
	export default{
		props: {
			demo01_index: {
				default: 0,
				type: [Number, String]
			},
			list: {
				default: [],
				type: Array
			}
		},
		data() {
			return {
				itemBox: {},
				fixedShow: false
			}
		},
		mounted(){
			var _this = this;
			$('.item').each(function () {
				$(this).scroll(function () {
					_this.fixedShow = ($(this).scrollTop()>200)
					_this.itemBox = $(this);
				})
			})	
			/*$('.item').each(function () {
				var item = this;
				$('#swiper').delegate(item, 'scroll' ,function () {
					console.log(item.scrollTop())
					_this.fixedShow = (item.scrollTop()>100)
					_this.itemBox = item;
				})
			})*/		
		},
		methods: {
			demo01_onIndexChange (index) {  //把滑动块的index传给父组件
		      this.$emit('indexChange', index)	
		      this.fixedShow = false	    
		  	},
		  	articleShow () {
		  		this.$refs.article.show()
		  	},
		  	handleTopChange(argument) {
		  		//console.log(argument)
		  	},
		  	loadTop(){
		  		setTimeout( ()=> {
		  			console.log('加载数据')
		  			this.$refs.loadmore.onBottomLoaded();
		  		}, 1000 )
		  		
		  	}
		},
		components: {
			Swiper,
			SwiperItem,
			vArticle,
			Fix
		}
	}
</script>

<style lang="stylus">
#swiper{
	position: absolute
	top: 120px
	left: 0
	right: 0
	bottom: 75px
	width: 100%
	.item{
		width: 100%
		height: 100%
		background: #EAEAEA
		overflow: scroll
		.article{
			width: 95%
			margin: 10px auto 0 auto
			padding: 20px
			background: #fff
			p{
				line-height: 30px
				margin: 0
			}
			.articleTitle{}
			.createTime{}
		}
	}
}

.loadmore{
	position: absolute
	top: 0
	bottom: 0
	left: 0
	right: 0
}

.vux-slider > .vux-swiper{    //修改vux和element-ui的样式style不能加scope
	height: 100%!important
}
</style>