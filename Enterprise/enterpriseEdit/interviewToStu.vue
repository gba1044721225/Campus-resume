<template>
	<view class="interview-to-student">
		<view class="student-box">
			<view class="student-item" @click="linkToInterviewStuDetails(item.id,item.status,item.collecId)" v-for="(item,index) in dataList" :key="index">
				<view class="item-top">
					<view class="data-time">
						<view>
							{{item.interviewDate}}
						</view>
						<view>
							面试 （职位）
						</view>
					</view>
					<view class="interview-state">
						{{getStatus(item.status,item.interviewDate)}}
					</view>
				</view>
				<view class="item-main">
					<image src="../../static/reject.png" mode=""></image>
					<view class="main-info">
						<view class="info-name">
							{{item.userName}}（{{item.sex}}）
						</view>
						<view class="info-msg">
							{{item.leve}}/{{item.professional}}
						</view>
						<view class="position">
							先居 {{item.address}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				dataList:null,
			}
		},
		methods:{
			linkToInterviewStuDetails(stuId,status,collecId){
				// const stuId=60
				// const recruitId=18
				// console.log("stuId",stuId)
				uni.navigateTo({
					url:`/Enterprise/enterpriseEdit/interviewStuDetails?stuId=${stuId}&status=${status}&collecId=${collecId}`
				})
			},
			
			//请求面试数据  企业端
			reqDataList(){
				const data = {
					data: this.$store.state.openId,
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http("/company/query/mianshi", data, res => {
					// console.log("JSON.parse(res.data).records", JSON.parse(JSON.parse(res.data).records))
					console.log("res",res)
					if (res.meta.code == 200) {	
						this.dataList=JSON.parse(res.data)
						
						// console.log("this.dataList", this.dataList)
					}
				}, header)
			},
		},
		computed:{
			getStatus(){
				return function(val){					
					if(val==='1'){
						return '已完成'
					}
					
					if(val==='2'){
						return '待开始'
					}
					
					if(val==='3'){			
						//当天
						return '进行中'
					}
					
					if(val==='4'){
						return '未记录'
					}
					
					return '未记录'
				}
			}
		},
		onShow(){
			this.reqDataList()
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