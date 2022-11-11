<template>
	<view class="my-interview-stu">
		<view class="interview-state">
			{{getStatus}}
		</view>
		<view class="interview-item-box" @click="linkToJobDetails">
			<view class="item-header">
				<image :src="dataList.logo" mode=""></image>
				<view class="header-content">
					<view class="header-title">
						{{dataList.companyName}}公司的面试邀请
					</view>
					<view>
						联系人：{{dataList.contactName}}
					</view>
				</view>
			</view>
			
			<view class="item-main">
				<view class="item-content">
					<view class="content-title">
						时间
					</view>
					<view class="content-info">
						{{dataList.interviewDate}}
					</view>
				</view>
				
				<view class="item-content">
					<view class="content-title">
						职位
					</view>
					<view class="content-info">
						{{dataList.jobName}}
					</view>
				</view>
				
				
				<view class="item-content">
					<view class="content-title">
						联系电话
					</view>
					<view class="content-info" @click.stop="callPeople(dataList.contactPhone)" style="margin-left: -9rpx;">
						<text>13631233906</text>
						<u-icon name="phone-fill" size="30px" color="#1296db"></u-icon>
					</view>
				</view>
				
				<view class="item-content">
					<view class="content-title">
						地址
					</view>
					<view class="content-info">
						{{dataList.workAddress}}
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
			
			
			callPeople(phone){
				console.log(1111)
				uni.makePhoneCall({
					phoneNumber: phone //仅为示例
				});
			},
			
			//学生模块 请求招聘信息
			reqRecruitmentInformation() {
				const data = {
					data: this.id,
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
		computed:{
			getStatus(){				
				if(this.dataList.status==='1'){
					return '进行中'
				}
				
				if(this.dataList.status==='2'){
					return '結束'
				}
				
				return '待开始'
			}
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
					width: 180rpx;
					color: #999;
				}
				.content-info{
					color: #555;
					display: flex;
					align-items: center;
					text{
						margin-right: 20rpx;	
					}
				}
			}
			.item-content:last-child{
				margin-bottom: 0;
			}
		}
	}
}
</style>