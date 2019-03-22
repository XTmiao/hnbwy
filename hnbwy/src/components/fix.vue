<template>
	<div id="fixed" v-show="fixedShow">
		<i class="glyphicon glyphicon-arrow-up" @click="goTop()"></i>
		<i class="glyphicon glyphicon-home" @click="goHome()"></i>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			box: {
				type: Object
			},
			fixedShow: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
			}
		},
		methods: {
			goTop() {
				this.box.animate({ scrollTop: 0 }, 500);
			},
			goHome() {
				this.$router.push('/zixun')
				/*this.$router.push({
					path: '',
					name: '',
					params: {}
				})*/
				this.$emit('goHome')  //自定义事件，因为不同页面引用组件返回首页函数不相同
			}
		}
	}
</script>

<style lang="stylus" scoped>
#fixed{
	width: 80px
	height: 30px
	position: fixed
	right: 20px
	bottom: 100px
	font-size: 25px
	display: flex
	text-align: center
	color: #741A1A
	i{
		flex: 1
	}
}
</style>