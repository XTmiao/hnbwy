<template>
	<footer>
		<router-link to="/zixun" class="item" tag="p" active-class="active"><span class="glyphicon glyphicon-home"></span>资讯</router-link>
		<router-link to="/GaiKuang" class="item" tag="p" active-class="active"><span class="glyphicon glyphicon-list-alt"></span>概况</router-link>
		<router-link to="/ZhanLan" class="item" tag="p" active-class="active"><span class="glyphicon glyphicon-camera"></span>展览</router-link>
		<router-link to="/XueShu" class="item" tag="p" active-class="active"><span class="glyphicon glyphicon-briefcase"></span>学术</router-link>
	</footer>
</template>

<script>
	export default{
		name: 'v-footer'
	}
</script>

<style lang="stylus">
	footer{
		width: 100%
		height: 75px
		display: flex
		position: fixed
		bottom: 0
		border-top: 1px solid #B2B2B2 
		padding-top: 10px
		font-size: 19px
		.item{
			flex: 1
			height: 60px
			line-height: 30px
			text-align: center
			span{
				display: inline-block
				margin: 0 auto
				&.glyphicon{
					width: 100%
					font-size: 26px;
				}
			}
		}
		.active{
			color: #741a1a
		}
	}
</style>