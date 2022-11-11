<template>
	<view class="my-interview-stu">
		<view class="interview-box">
			<view class="box-item" v-for="(item,index) in dataList" :key="index">
				<view class="item-time-box">
					{{item.interviewDate}}
				</view>
				<view class="interview-item" @click="linkToJobDetails(item.id)">
					<image src="../static/deliver.png" mode=""></image>
					<view class="item-content">
						<view class="content-top">
							{{item.companyName}}
						</view>
						<view class="content-bottom">
							{{item.jobName}} · {{item.treatment}}
						</view>
					</view>
					<view class="right-btn">
						〉
					</view>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	
export default{
	data(){
		return {
			pageInfo: {
				pageSize: 50,
				pageNum: 1,
			},
			dataList: [],
		}
	},
	methods:{
			linkToJobDetails(id) {
				uni.navigateTo({
					url: `/MineLinkOthers/myInterviewStuDt?id=${id}`
				})
			},
		
		//学生模块 请求招聘信息
		reqRecruitmentInformation() {
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
			this.$http("/recruit/user/query/3", data, res => {
				// console.log("JSON.parse(res.data).records", JSON.parse(JSON.parse(res.data).records))
				console.log("res",res)
				if (res.meta.code == 200) {	
					this.dataList=JSON.parse(res.data)
					
					console.log("this.dataList", this.dataList)
				}
			}, header)
		},
	},
	onShow(){
		this.reqRecruitmentInformation()
	}
}	
	
</script>

<style lang="scss" scoped>
	.my-interview-stu{
		// padding:0 0 20rpx;
		.interview-box{
			// padding: 0 20rpx;
			.box-item{
				// margin-bottom: 20rpx;
				border-bottom: 1rpx solid #1296db;
				// border-bottom: 1rpx solid #1296db;
				.item-time-box{
					padding:25rpx;
					background-color: #eee;
				}
				
				.interview-item{
					padding: 40rpx;
					display: flex;
					align-items: center;
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
	}
</style>