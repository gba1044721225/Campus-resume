<template>
	<view class="interview-to-student">
		<view class="student-box">
			<view class="student-item" @click="linkToInterviewStuDetails">
				<view class="item-top">
					<view class="data-time">
						<view>
							2022年11月10日
						</view>
						<view>
							面试 （职位）
						</view>
					</view>
					<view class="interview-state">
						面试状态(已过期/已完成)
					</view>
				</view>
				<view class="item-main">
					<image src="../../static/reject.png" mode=""></image>
					<view class="main-info">
						<view class="info-name">
							张新柯（女）
						</view>
						<view class="info-msg">
							本科/计算机专业
						</view>
						<view class="position">
							先居 广东省广州市天河区
						</view>
					</view>
				</view>
			</view>
			
			<view class="student-item">
				<view class="item-top">
					<view class="data-time">
						<view>
							2022年11月10日
						</view>
						<view>
							面试 （职位）
						</view>
					</view>
					<view class="interview-state">
						面试状态(已过期/已完成)
					</view>
				</view>
				<view class="item-main">
					<image src="../../static/reject.png" mode=""></image>
					<view class="main-info">
						<view class="info-name">
							张新柯（女）
						</view>
						<view class="info-msg">
							本科/计算机专业
						</view>
						<view class="position">
							先居 广东省广州市天河区
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			linkToInterviewStuDetails(){
				const stuId=60
				const recruitId=18
				// console.log("stuId",stuId)
				uni.navigateTo({
					url:`/Enterprise/enterpriseEdit/interviewStuDetails?stuId=${stuId}&recruitId=${recruitId}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.interview-to-student{
		background-color: #eee;
		padding: 25rpx;
		min-height: 100vh;
		.student-box{
			.student-item{
				padding: 20rpx;
				border-radius: 10rpx;
				background-color: #fff;
				margin-bottom: 25rpx;
				
				.item-top{
					display: flex;
					justify-content: space-between;
					margin-bottom: 30rpx;
					align-items: center;
					.data-time{
						font-weight: bold;
						color: #444;
						
						view:last-child{
							color:#888;
							font-weight: lighter;
						}
					}
					
					.interview-state{
						border: 1rpx solid #ffaa00;
						padding: 10rpx 15rpx;
						border-radius: 5rpx;
						box-shadow: 0 0 10rpx 4rpx rgba(255, 255, 0, .5) inset;
					}
				}
				
				.item-main{
					display: flex;
					align-items: center;
					image{
						width: 150rpx;
						height: 200rpx;
						margin-right: 25rpx;
					}
					.main-info{
						height: 200rpx;
						width: 450rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						
						.info-name{
							font-size: 36rpx;
							font-weight: bold;
							padding: 10rpx 0;
						}
						.info-msg{
							color: #888;
							font-size: 32rpx;
							padding: 10rpx 0;
						}
						.position{
							font-size: 28rpx;
							color: #888;
							padding: 10rpx 0;
						}
					}
				}
			}
		}
	}
</style>