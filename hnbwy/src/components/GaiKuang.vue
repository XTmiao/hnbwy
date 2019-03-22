<template>
	<div id="box">
		<img src="../assets/img/13.jpg" alt="本院概览" >
		<div id="content">
			<div class="item"><span class="glyphicon glyphicon-file"></span>本院简介</div>
			<div class="item"><span class="glyphicon glyphicon-list-alt"></span>机构设置</div>
			<div class="item"><span class="glyphicon glyphicon-pencil"></span>博物院章程</div>
			<div class="item"><span class="glyphicon glyphicon-home"></span>理事会</div>
			<div class="item"><span class="glyphicon glyphicon-leaf"></span>建院历史</div>
			<div class="item"><span class="glyphicon glyphicon-bullhorn"></span>对外交流</div>
			<div class="item"><span class="glyphicon glyphicon-folder-close"></span>党的建设</div>
			<div class="item"><span class="glyphicon glyphicon-bookmark"></span>文明创建</div>
			<div class="item"><span class="glyphicon glyphicon-book"></span>《河博年鉴》</div>
			<div class="item"><span class="glyphicon glyphicon-tasks"></span>大事记</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		created() {
			this.axios.get('api/goods').then( (res) => {
				console.log(res)
			} )
		},
		data(){
			return {}
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
	#content{
		width: 100%
		.item{
			width: 33.3%
			margin: 0
			float: left
			border-top: 1px solid #ccc
			border-right: 1px solid #ccc
			text-align: center
			font-size: 19px
			padding: 30px 0
			&:nth-child(7), &:nth-child(9), &:nth-child(8){
				border-bottom: 1px solid #ccc
			}
			&:nth-child(10){
				border-top: none
			}
			&:nth-child(1) .glyphicon{
				color: #7ecef4
			}
			&:nth-child(2) .glyphicon{
				color: #f6b37f
			}
			&:nth-child(3) .glyphicon{
				color: #37c6c0
			}
			&:nth-child(4) .glyphicon{
				color: #acd598
			}
			&:nth-child(5) .glyphicon{
				color: #fa311a
			}
			&:nth-child(6) .glyphicon{
				color: #37c6c0
			}
			&:nth-child(7) .glyphicon{
				color: #1f511e
			}
			&:nth-child(8) .glyphicon{
				color: #cdcdcd
			}
			&:nth-child(9) .glyphicon{
				color: #e95e87
			}
			&:nth-child(10) .glyphicon{
				color: #1f518e
			}
			.glyphicon{
				display: block
				margin: 10px auto 20px auto
				font-size: 30px
			}
		}
	}
}
</style>