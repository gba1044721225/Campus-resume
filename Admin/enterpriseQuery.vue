<template>
	<view class="enterprise-query">
		<view class="enterprise-item" @click="linkToEnterpriseQueryDetails(item)" v-for="(item,index) in enterpriseList" :key="index">
			<view class="item-logo">
				<image :src="item.logo" mode=""></image>
			</view>
			<view class="item-info">
				<view class="info-title">
					<text>
						{{item.companyName}}
					</text>
				</view>
				<scroll-view scroll-x="true" class="info-bottom">
					<view>
						{{item.unitNature}}
					</view>
					<view>
						{{item.industryCategory}}
					</view>
					<view>
						{{item.address}}
					</view>
					<view>
						5000人以上
					</view>
				</scroll-view>
				<view class="link-info" @click.stop="callSomeone(item.unitPhone)">
					<text>联系人：张三</text>
					<tui-icon color='#1296db' name="voipphone" :size="48" unit="rpx"></tui-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				enterpriseList:null
			}
		},
		methods:{
			reqEnterpriseList(){
				let data={
					data:"",
					meta:{}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http("/company/query/list", data, res => {
					console.log("res",res)
					if (res.meta.code == 200) {	
						this.enterpriseList=JSON.parse(res.data)
					}
				}, header)
			},
			
			callSomeone(num){
				uni.makePhoneCall({
					phoneNumber: num //仅为示例
				});
			},
			
			linkToEnterpriseQueryDetails(item){
				console.log(item)
				uni.navigateTo({
					url:`/Admin/enterpriseQueryDetails?data=${JSON.stringify(item)}`
				})
			}
		},
		onShow(){
			this.reqEnterpriseList()
		}
	}
</script>

<style scoped lang="scss">
	.enterprise-query{
		padding: 25rpx;
		background-color: #eee;
		min-height: 100vh;
		// box-sizing: border-box;
		.enterprise-item{
			padding: 25rpx;
			box-sizing: border-box;
			background-color: #fff;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			margin-bottom: 25rpx;
			.item-logo{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 200rpx;
					height: 200rpx;
				}
			}
			.item-info{
				width: 440rpx;
				margin-left: 25rpx;
				height: 200rpx;
				.info-title{
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					text{
						font-size: 42rpx;
						font-weight: bold;
					}
				}
				
				.info-bottom{
					width: 440rpx;
					white-space: nowrap;
					margin-top: 25rpx;
					view{
						display: inline-block;
						padding:10rpx 15rpx;
						border-radius: 4rpx;
						background-color: #b0b0b0;
						color: #fff;
						margin-right: 15rpx;
					}
				}
				
				.link-info{
					margin-top: 20rpx;
					display: flex;
					align-items: center;
					text{
						margin-right: 20rpx;
					}
				}
			}
		}
	}
</style>