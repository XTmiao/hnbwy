<template>
	<el-header>
		<span class="glyphicon glyphicon-user" @click="showAside()"></span>
		<i class="el-icon-search"></i>
		<p>河南博物院</p>
	</el-header>
</template>

<script type="text/javascript">
	export default{
		data() {
			return {
				shade: false
			}
		},
		props: {

		},
		methods: {
			showAside: function () {
				this.$emit('click')
			}
		},
		components: {
			
		}
	}
</script>

<style lang="stylus" scoped>
	header{
		width: 100%
		line-height: 50px
		margin-top: 10px
		.glyphicon.glyphicon-user {
			width: 30px
			margin: 8px auto
			float: left
			line-height: 30px
			font-size: 25px
		}
		p{
			width: 50%
			margin: 0 auto;
			font-size: 23px 
			color: #741a1a
			text-align: center
		}
		.el-icon-search{
			width: 30px
			float: right
			font-size 30px
			margin-top: 8px
		}
		
	}
</style>