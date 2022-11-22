<template>
	<view class="admin-manage">
		<view class="manage-ability">
			<view class="ability-item" @click="linkToRecruitInfo">
				<image :src="`${imgSrc}examine.png`" mode=""></image>
				<text>审核</text>
			</view>
			<view class="ability-item">
				
			</view>
			<view class="ability-item">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				imgSrc:this.$imageBaseSrc
			}
		},
		methods:{
			linkToRecruitInfo(){
				uni.navigateTo({
					url:"/Admin/recruitInfo"
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.admin-manage{
		width: 100vw;
		min-height: 100vh;
		background: linear-gradient(to bottom,#ff2ac6,#409cff);
		padding: 20rpx 25rpx;
		box-sizing: border-box;
		.manage-ability{
			background: rgba(183, 183, 183, 0.4);//rgba(0,0,0,.1)
			box-shadow: 0 0 10rpx 6rpx rgba(0,0,0,.1);
			border-radius: 10rpx;
			width: 100%;
			min-height: 500rpx;
			padding: 25rpx 0;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			column-gap: 25rpx;
			
			.ability-item{
				display: flex;
				flex-direction: column;
				align-items:center;
				image{
					width: 100rpx;
					height: 100rpx;
					box-shadow: 0 0 2rpx 4rpx rgba(0,0,0,.1);
					border-radius: 20rpx;
				}
				text{
					margin-top: 10rpx;
					font-size: 32rpx;
					color: #dfdfdf;
				}
			}
		}
	}
</style>