<template>
	<view class="my-interview-stu">
		<view class="interview-state">
			面试状态
		</view>
		<view class="interview-item-box" @click="linkToJobDetails">
			<view class="item-header">
				<image :src="item.logo" mode=""></image>
				<view class="header-content">
					<view class="header-title">
						xxxx公司的面试邀请xxxxxxxxxxxxxxxxxxxxxxxx
					</view>
					<view>
						联系人：xxxx
					</view>
				</view>
			</view>
			
			<view class="item-main">
				<view class="item-content">
					<view class="content-title">
						时间
					</view>
					<view class="content-info">
						xxxxxxxxxxxxx
					</view>
				</view>
				
				<view class="item-content">
					<view class="content-title">
						职位
					</view>
					<view class="content-info">
						xxxxxxxxxxxxx
					</view>
				</view>
				
				
				<view class="item-content">
					<view class="content-title">
						联系人
					</view>
					<view class="content-info">
						13631233906<u-icon name="phone-fill" size="30px" color="#1296db"></u-icon>
					</view>
				</view>
				
				<view class="item-content">
					<view class="content-title">
						地址
					</view>
					<view class="content-info">
						xxxxxxxxxxxxx
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
				dataList:{},
				id:"",
				from:"",
			}
		},
		methods:{
			linkToJobDetails() {
				uni.navigateTo({
					url: `/HomeLink/jobDetails/jobDetails?id=${this.id}&from='myInterviewStuDt'`
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
				this.$http("/recruit/user/query/detailAddress", data, res => {
					// console.log("JSON.parse(res.data).records", JSON.parse(JSON.parse(res.data).records))
					console.log("res",res)
					if (res.meta.code == 200) {	
						this.dataList=JSON.parse(res.data)
						
						console.log("this.dataList", this.dataList)
					}
				}, header)
			},
			
		},
		onLoad(payload){
			this.id=payload.id
			console.log("payload",payload)
			this.reqRecruitmentInformation()
		}
	}
	
</script>

<style scoped lang="scss">
.my-interview-stu{
	padding: 20rpx 35rpx;
	box-sizing: border-box;
	min-height: 100vh;
	background: linear-gradient(to bottom, #1296db,#fff);
	.interview-state{
		color: #fff;
		font-size:50rpx;
		font-weight: bold;
		letter-spacing: 5rpx;
	}
	.interview-item-box{
		margin-top: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		padding: 20rpx;
		border-radius: 15rpx;
		.item-header{
			border-bottom: 1rpx solid #ccc;	
			// border-radius: 15rpx;
			border-top-left-radius: 15rpx;
			border-top-right-radius: 15rpx;	
			display: flex;
			align-items: center;
			image{
				width: 150rpx;
				height: 150rpx;
			}
			.header-content{
				margin-left: 25rpx;
				height: 164rpx;
				width: 500rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				.header-title{
					letter-spacing: 1rpx;
					font-size: 36rpx;
					font-weight: bold;
					overflow: scroll;
					white-space: nowrap;
				}
			}
		}
		
		.item-main{
			padding: 20rpx;
			background-color: #fff;
			.item-content{
				margin-bottom: 30rpx;
				display: flex;
				align-items: center;
				.content-title{
					width: 120rpx;
					color: #999;
				}
				.content-info{
					color: #555;
				}
			}
			.item-content:last-child{
				margin-bottom: 0;
			}
		}
	}
}
</style>