<template>
	<view class="upload-pdf">
		<view class="pdf-box" v-for="(item,index) in pdfList" :key='index'>
			<view class="tips">
				<view>
					简历{{index+1}}：
				</view>
			</view>

			<view class="pdf-item">
				<view v-if="!item.fileUrl" class="none-img" @click="choosePdf(index)">
					<image :src="`${imgSrc}upLoadCertificate.png`" mode=""></image>
				</view>
				<image v-if="item.fileUrl" class="none-img" :src="`${imgSrc}intro_Enterprise.png`" mode=""></image>
				<!-- 				<image :src="enterpriseInfo.businessLicense" mode=""></image> -->
			</view>
			<view class="btn-boxs">
				<view class="btns-item" @click="upLoadFile(index)">
					上传
				</view>
				<view class="btns-item" @click="previewFile(index)">
					预览
				</view>
				<view class="btns-item" @click="downFile(index)">
					下载
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		chooseFile
	} from '../common/helper'
	export default {
		data() {
			return {
				imgSrc: this.$imageBaseSrc,
				pdfList: [{
						fileUrl: "",
						file: null,
					},
					{
						fileUrl: "",
						file: null,
					},
					{
						fileUrl: "",
						file: null,
					}
				]
			}
		},
		methods: {
			async choosePdf(index) {
				// console.log(index)
				const res = await this.$chooseFile()
				console.log("res", res)
				this.pdfList[index].fileUrl = res.tempFiles[0].path
				this.pdfList[index].file = res.tempFiles[0]
			},

			upLoadFile(index) {
				const path = this.pdfList[index].fileUrl
				this.$upLoadFile('/file/upload/excel', path, {}, res => {
					console.log("res", res)
				})
			},
			
			previewFile(index){
				const path = this.pdfList[index].fileUrl
				wx.openDocument({
				      filePath: path,
				      success: function (res) {
				        console.log('打开文档成功')
				      }
				})
			},
			
			downFile(index){
				// this.$downFile()
			}
		}
	}
</script>

<style scoped lang="scss">
	.upload-pdf {
		padding: 20rpx 25rpx;

		.pdf-box {
			margin-bottom: 25rpx;
			display: flex;
			justify-content: space-between;
			padding-bottom: 20rpx;

			.tips {
				font-size: 36rpx;
				font-weight: bold;
			}

			.pdf-item {
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

			.btn-boxs {
				display: flex;
				flex-direction: column;
				justify-content: space-around;

				.btns-item {
					color: #fff;
					background-color: #1296db;
					font-size: 26rpx;
					font-weight: bold;
					padding: 15rpx 50rpx;
					border-radius: 10rpx;
				}
			}
		}

		.pdf-box:not(:last-child) {
			border-bottom: 1rpx solid #eee;
		}
	}
</style>
