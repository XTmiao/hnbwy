<template>
	<transition name="move">
		<div class="aside" v-show="toggle">
			<div class="userInfo">
				<p class="username">河南博物院</p>
				<img src="../assets/img/head.jpg" alt="">
			</div>

			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
			
		</div>
	</transition>
</template>

<script type="text/javascript">
	export default{
		data() {
			return {
				toggle: false
			}
		},
		methods: {
			show: function () {
				this.toggle = true;
			},
			hide: function () {
				this.toggle = false;
			}
		}
	}
</script>

<style lang="stylus">
	.aside{
		position: fixed
		top: 0
		left: 0
		width: 80%
		height: 100%
		background-color: #1d0000
		background-image: linear-gradient(to bottom, #1d0000 , #6a1717  70%, #741a1a  90%, #952828)
		z-index: 5
		color: #fff
		&.move-enter, &.move-leave-to{
			transform: translate3d(-80%, 0, 0)
		}
		&.move-enter-active, &.move-leave-active{
			transition: all .5s
		}
		.userInfo{
			width: 80%
			margin: 30px 10%
			.username{
				display: inline-block
				width: 50%
				text-align: center
				font-size: 25px
			}
			img{
				max-width: 70px
				max-height: 70px
				margin-left: 20px
				border-radius: 50%
				border: 5px solid #fff
			}
		}
	}
</style>
