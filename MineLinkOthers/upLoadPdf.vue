<template>
	<view class="upload-pdf">
		<view class="pdf-box" v-for="(item,index) in pdfList" :key='index'>
			<view class="tips">
				<view>
					简历{{index+1}}：
				</view>
			</view>
			
			<view class="pdf-item">
				<view class="none-img">
					<image :src="`${imgSrc}upLoadCertificate.png`" mode="">
					</image>
				</view>
<!-- 				<image :src="enterpriseInfo.businessLicense" mode=""></image> -->
			</view>
			<view class="btn-boxs">
				<view class="btns-item">
					上传
				</view>
				<view class="btns-item">
					预览
				</view>
				<view class="btns-item">
					下载
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				imgSrc:this.$imageBaseSrc,
				pdfList:[
					{
						
					},
					{
						
					},
					{
						
					}
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	.upload-pdf{
		padding: 20rpx 25rpx;
		.pdf-box{
			margin-bottom: 25rpx;
			display: flex;
			justify-content: space-between;
			padding-bottom: 20rpx;
			
			.tips{
				font-size: 36rpx;
				font-weight: bold;
			}
			
			.pdf-item{
				input {
					box-shadow: 0 0 2px 2px rgba(0, 0, 0, .2);
					padding: 10rpx 15rpx;
					border-radius: 5rpx;
					border: 1rpx solid #1296db;
					outline: none;
				}
				
				image {
					width: 225rpx;
					height: 225rpx;
					border: 1rpx solid #1296db;
					border-radius: 15rpx;
				}
				
				.none-img {
					display: flex;
					justify-content: center;
					align-items: center;
				
					image {
						width: 75rpx;
						height: 75rpx;
						padding: 75rpx;
						border: 1rpx solid #1296db;
						border-radius: 15rpx;
					}
				}
			}
			
			.btn-boxs{
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				
				.btns-item{
					color: #fff;
					background-color: #1296db;
					font-size: 26rpx;
					font-weight: bold;
					padding: 15rpx 50rpx;
					border-radius: 10rpx;
				}
			}
		}
		
		.pdf-box:not(:last-child){
			border-bottom: 1rpx solid #eee;
		}
	}
</style>