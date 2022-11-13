<template>
	<view class="upload-pdf">
		<view class="pdf-box" v-for="(item,index) in pdfList" :key='index'>
			<view class="tips">
				<view>
					简历{{index+1}}：
				</view>
			</view>

			<view class="pdf-item" @click="choosePdf(index)">
<!-- 				<view class="">
					{{item.fileUrl}}
				</view> -->
				<view v-if="!item.fileUrl" class="none-img">
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
				<view class="btns-item" @click="reqDownFile(index)">
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
						fileName: "",
						id:"",
					},
					{
						fileUrl: "",
						fileName: "",
						id:"",
					},
					{
						fileUrl: "",
						fileName: "",
						id:"",
					}
				]
			}
		},
		methods: {
			async choosePdf(index) {
				// console.log(index)
				const res = await this.$chooseFile()
				// console.log("res", res)
				this.pdfList[index].fileUrl = res.tempFiles[0].path
				this.pdfList[index].file = res.tempFiles[0]
				console.log("choosePdf",this.pdfList[index])
			},

			previewFile(index){				
				const path = this.pdfList[index].fileUrl
				if(!path){
					uni.showToast({
						icon:"none",
						title:"请先选中个文件",
						duration:1500
					})
					return
				}
				wx.openDocument({
				      filePath: path,
				      success: function (res) {
				        console.log('打开文档成功')
				      },
					  fail:res=>{
						  uni.showToast({
						  	icon:"none",
							title:"当前格式不支持"
						  })
					  }
				})
			},
			
			reqQueryFile(){
				const data = {
					data:this.$store.state.openId,
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http('/file/query/jianli',data,res=>{
					console.log("res",res)
					const dataList=JSON.parse(res.data)
					if(res.meta.code==200){
						this.pdfList.forEach((v,i)=>{
							if(dataList[i]){
								this.downFile(dataList[i].fileUrl).then(new_path=>{
									const reg=/.(?<=\.)\S+/
									v.fileUrl=new_path
									v.id=dataList[i].id
									v.fileName=`简历1${reg.exec(new_path)[0]}`
								})
							}
						})
					}
					// console.log(this.pdfList)
				},header)
			},
			
			upLoadFile(index) {
				const path = this.pdfList[index].fileUrl
				if(!path){
					uni.showToast({
						icon:"none",
						title:"请先选中个文件",
						duration:1500
					})
					return
				}
				this.$upLoadFile(`/file/upload/${this.$store.state.openId}/7`, path, {
					standby1:index,
					id:this.pdfList[index].id || ''
				}, res => {
					console.log("res", res)
					if(res.statusCode==200){
						uni.showToast({
							icon:"none",
							title:"上传成功",
						})
						this.reqQueryFile()
					}
				})
			},
				
			//删除文件
			deleteFile(fileId){
				return new Promise(resolve=>{
					const data = {
						data:this.$store.state.openId,
						meta: {
							code:"",
							serverity:"",
							openId: this.$store.state.openId,
							role: this.$store.state.role,
						}
					}
					const header = {
						'content-type': 'application/json'
					}
					this.$http(`/file/delete/${fileId}`,data,res=>{
						console.log("res",res)
						resolve()
					},header)
				})
			},
			
			//下载文件用于转换路径
			downFile(filePath){
				return new Promise(resolve=>{
					this.$downFile(filePath,res=>{
						console.log("downFile",res)
						resolve(res.tempFilePath)
					})
				})
			},
			
			//真正下载接口
			reqDownFile(index){
				const FileSystemManager= wx.getFileSystemManager()
				FileSystemManager.saveFile({
					tempFilePath:this.pdfList[index].fileUrl,
					filePath:`${wx.env.USER_DATA_PATH}/${this.pdfList[index].fileName}`,
					success:res=>{
						console.log("res",res)
					}
				})
			}
		},
		mounted(){
			this.reqQueryFile()
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
