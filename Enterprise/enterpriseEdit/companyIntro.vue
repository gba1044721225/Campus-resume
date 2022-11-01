<template>
	<view class="company-intro">
		<view class="company-intro-header">
			<view class="header-left">
				<view class="company-title">
					<text>{{dataList.companyName}}</text>
					<text style="font-weight: normal;">（{{dataList.alias}}）</text>
				</view>
				<view class="company-intro-size">
					{{dataList.companySize}}
				</view>
			</view>
			<view class="header-right">
				<image :src="dataList.logo" mode=""></image>
			</view>
		</view>
		
		<view class="company-tag">
			<view class="tag-item">
				单位性质：{{dataList.unitNature}}
			</view>
			<view class="tag-item">
				行业分类：{{dataList.industryCategory}}
			</view>
		</view>
		
		<view class="company-contact">
			<view class="contact-item">
				<text>单位网址：</text>
				<text>{{dataList.addressUrl}}</text>
			</view>
						
			<view class="contact-item">
				<text>微信号：</text>
				<text>{{dataList.weixinCode}}</text>
			</view>
			
			<view class="contact-item">
				<text>联系人：</text>
				<text>{{dataList.contact}}</text>
			</view>
			
			<view class="contact-item">
				<text>单位邮箱：</text>
				<text>{{dataList.email}}</text>
			</view>
			
			<view class="contact-item">
				<text>单位电话：</text>
				<text>{{dataList.unitPhone}}</text>
			</view>
			
			<view class="contact-item">
				<text>备用联系人：</text>
				<text>{{dataList.standbyUser}}</text>
			</view>
			
			<view class="contact-item">
				<text>备用邮箱：</text>
				<text>{{dataList.standbyEmail}}</text>
			</view>
			
			<view class="contact-item">
				<text>备用电话：</text>
				<text>{{dataList.standbyPhone}}</text>
			</view>
		</view>
		
		<view class="company-address">
			<view class="address-left">
				<view class="title">
					公司地址
				</view>
				<view class="content">
					{{dataList.address}} {{dataList.addressDetail}}
				</view>
			</view>
		</view>
		
		<view class="company-intro-box">
			<view class="title">
				公司介绍
			</view>
			<view class="content">
				{{dataList.introduce}}
			</view>
		</view>
		
		<view class="company-certificate">
			<view class="title">
				公司证书
			</view>
			<view class="image">
				<image :src="dataList.imgIds" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				dataList:{}
			}
		},
		methods:{
			reqCompanyIntro(){
				const data={
					meta:{
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header={
					'content-type': 'application/json'
				}
				this.$http('/company/query',data,res=>{
					// console.log("res",res)
					if(res.meta.code==200){
						this.dataList=JSON.parse(res.data)
						console.log(this.dataList)
					}
				},header)
			}
		},
		onLoad(){
			this.reqCompanyIntro()
		}
	}
</script>

<style lang="scss" scoped>
	.company-intro{
		min-height: 100vh;
		background-color: #1296db;
		padding: 20rpx 25rpx env(safe-area-inset-bottom);
		padding: 20rpx 25rpx constant(safe-area-inset-bottom);
		.company-intro-header{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.header-left{
				height: 150rpx;
				width: 525rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.company-title{
					color: #fff;
					font-size: 60rpx;
					font-weight: bold;
					letter-spacing: 5rpx;
					display: inline-block;
					white-space: nowrap;
					overflow: auto;
					
				}
				.company-intro-size{
					width: 100%;
					margin-top: 25rpx;
					color: #eee;
					font-size: 32rpx;
					display: inline-block;
					white-space: nowrap;
					overflow: auto;
				}
			}
			.header-right{
				image{
					width:150rpx;
					height: 150rpx;
					border: 1rpx solid #fff;
					border-radius: 5rpx;
					box-shadow: 0 0 5rpx 5rpx rgba(255,255,255,.3);
				}
			}
		}
		
		.company-tag{
			margin-top: 25rpx;
			.tag-item{
				display: inline-block;
				background-color: rgba(74, 102, 154, 0.4);
				border-radius: 30rpx;
				padding: 15rpx;
				margin-right: 20rpx;
				color: #fff;
			}
		}
		
		.company-contact{
			margin-top: 20rpx;
			color: #fff;
			font-size: 34rpx;
			background-color: rgba(74, 102, 154, 0.4);
			border-radius: 25rpx;
			padding: 15rpx;
			.contact-item{
				padding: 20rpx;
			}
		}
		
		.company-address{
			margin-top: 30rpx;
			display: flex;
			background-color: rgba(74, 102, 154, 0.4);
			border-radius: 25rpx;
			padding: 25rpx;
			.address-left{
				.title{
					font-size: 55rpx;
					font-weight: bold;
					color:#fff;
				}
				.content{
					margin-top: 15rpx;
					color: #fff;
					font-size: 32rpx;
				}
			}
		}
		
		.company-intro-box{
			margin-top: 30rpx;
			background-color: rgba(74, 102, 154, 0.4);
			border-radius: 25rpx;
			padding: 25rpx;
				.title{
					font-size: 55rpx;
					font-weight: bold;
					color:#fff;
				}
				.content{
					margin-top: 15rpx;
					color: #fff;
					font-size: 32rpx;
				}
		}
		
		.company-certificate{
			margin-top: 30rpx;
			background-color: rgba(74, 102, 154, 0.4);
			border-radius: 25rpx;
			padding: 25rpx;
			.title{
				font-size: 55rpx;
				font-weight: bold;
				color:#fff;
			}
			.image{
				margin-top: 20rpx;
				border: 1rpx solid #fff;
				border-radius: 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 15rpx;
				image{
					width: 600rpx;
				}
			}
		}
	}

</style>