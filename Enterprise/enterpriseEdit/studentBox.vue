<template>
	<view class="student-box">
		<view @click="linkToStudentBoxDetails(item.id)" class="student-item" v-for="(item,index) in dataList" :key="index">
			<view class="item-content">
				<image :src="item.imgUrl" mode=""></image>
				<view class="content">
					<view class="name">
						{{item.position?item.position:'暂无岗位要求'}}
					</view>
					<view class="item-info">
						{{item.userName}}（{{item.sex}}）
					</view>
					<view class="item-info">
						{{item.school}} {{item.professional}}
					</view>
					<view class="item-info">
						期望薪资:{{item.expectedSalary?item.expectedSalary:'面议'}}
					</view>
					<view class="item-info">
						<text>{{item.leve}}</text>
						<text>{{item.identity}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [],
				recordList: [],
				pageInfo: {
					pageSize: 10,
					pageNum: 1,
				},
				recruitId:""
			}
		},

		methods: {
			//初始化
			// init() {
			// 	this.dataList = []
			// 	this.recordList = []
			// 	this.pageInfo.pageNum = 1
			// 	this.pageInfo.pageSize = 50
			// },

			//企业模块 请求学生简历
			reqResumeList() {
				const data = {
					data: this.recruitId,
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http("/recruit/user/queryByresumeId/list", data, res => {
					console.log("res",res)
					// console.log("JSON.parse(res.data).records", JSON.parse(res.data).records)
					// console.log("this.dataList", this.dataList)
					if (res.meta.code == 200) {
						this.dataList=JSON.parse(res.data)

						console.log("this.dataList", this.dataList)
					}
				}, header)
			},
			
			linkToStudentBoxDetails(stuId){
				uni.navigateTo({
					url: `/Enterprise/enterpriseEdit/studentBoxDetails?stuId=${stuId}&recruitId=${this.recruitId}`
				})
			},
		},
		onLoad(payload){
			console.log("payload",payload)
			this.recruitId=payload.id
		},
		onShow(){
			this.reqResumeList() 
		},
		// onHide() {
		// 	this.init()
		// },
	}
</script>

<style scoped lang="scss">
	.student-box {
		min-height: calc(100vh - 400rpx);
		padding: 20rpx;

		.student-item {
			margin-bottom: 20rpx;
			background-color: #fff;
			padding: 25rpx 30rpx;
			box-sizing: border-box;
			box-shadow: 0rpx 0rpx 4rpx 2rpx rgba(0, 0, 0, .1);
			border-radius: 10rpx;
			position: relative;

			.img-logo-top {
				width: 100rpx;
				height: 100rpx;
				position: absolute;
				top: -25rpx;
				right: 0;
			}

			.img-logo-bottom {
				width: 100rpx;
				height: 100rpx;
				position: absolute;
				bottom: -25rpx;
				right: -15rpx;
			}

			.item-content {
				// padding-bottom: 20rpx;
				// border-bottom: 1rpx solid #ccc;
				display: flex;
				flex-wrap: nowrap;

				image {
					width: 200rpx;
					height: 250rpx;
					border-radius: 10rpx;
					margin-right: 50rpx;
				}

				.content {
					background-color: #fff;
					width: 400rpx;
					height: 250rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.name {
						font-size: 36rpx;
						font-weight: bold;
					}

					.item-info {
						margin-top: 15rpx;
						width: 100%;
						font-size: 26rpx;
						color: #666;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;

						text {
							margin-right: 15rpx;
							padding: 10rpx 15rpx;
							border-radius: 2rpx;
							background-color: #eee;
						}
					}
				}

			}


		}

		.content-tag {
			padding: 20rpx 10rpx 0;
			font-size: 26rpx;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
</style>
