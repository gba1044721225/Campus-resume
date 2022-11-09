<template>
	<view class="my-interview-stu">
		<view class="interview-box">
			<view class="interview-tiem" @click="linkToDetails">
				<image src="../static/deliver.png" mode=""></image>
				<view class="item-content">
					<view class="content-top">
						xxxxx
					</view>
					<view class="content-bottom">
						xxx
					</view>
				</view>
				<view class="right-btn">
					〉
				</view>
			</view>
			
			<view class="interview-tiem">
				<image src="../static/deliver.png" mode=""></image>
				<view class="item-content">
					<view class="content-top">
						xxxxx
					</view>
					<view class="content-bottom">
						xxx
					</view>
				</view>
				<view class="right-btn">
					〉
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
export default{
	data(){
		return {
			
		}
	},
	methods:{
		linkToDetails(){
			uni.navigateTo({
				url:"/MineLinkOthers/myInterviewStuDt"
			})
		}
	}
}	
	
</script>

<style lang="scss" scoped>
	.my-interview-stu{
		padding: 20rpx;
		.interview-box{
			padding: 0 20rpx;
			.interview-tiem{
				padding: 20rpx 0;
				display: flex;
				align-items: center;
				border-bottom: 1rpx solid #1296db;
				image{
					margin-right: 20rpx;
					width: 150rpx;
					height: 150rpx;
					border: 1rpx solid #1296db;
					border-radius: 50%;
				}
				.item-content{
					.content-top,.content-bottom{
						width: 450rpx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
				.right-btn{
					color: #1296db;
					font-weight: bold;
					font-size: 50rpx;
				}
			}
		}
	}
</style>