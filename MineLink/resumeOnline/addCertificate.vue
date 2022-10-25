<template>
	<view class="add-certificate">
		<view class="content-item">
			<tui-input v-model="certificate.certName" :isFillet='true' :inputBorder='true' :required='true'
				label="公司名称" placeholder="请输入公司名称">
			</tui-input>
		</view>
		
		<view class="content-item upload-box">
			<view class="name-item">
				证书上传
			</view>
			<view class="image-box" @click="upLoadCertificate">
				<image :src="`${imgSrc}/upLoadCertificate.png`" mode=""></image>
			</view>
		</view>
		
		<view class="btns-box">
			<view class="info-btns" @click="comfirmCertificate">
				保存教育经历
			</view>
			<view class="info-btns" @click="cancelCertificate">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				imgSrc:this.$imageBaseSrc,
				index: '',
				ind: '',
				certificate: { //type
					certName:'',
					certImage:'',
				},
			}
		},
		onLoad(payload) {
			// console.log("payload", payload)
			this.index = payload.index
			this.ind = payload.ind
			let data=payload.data
			if(data){
				// console.log(data)
				this.certificate=JSON.parse(data)
			}
		},
		
		methods:{
			comfirmCertificate() {
				uni.navigateBack({
					delta: 1,
					success: (res) => {
						// console.log("res", getCurrentPages())
						const currentPage = getCurrentPages()
						let curInd
						currentPage.forEach((v,i)=>{
							if(v.route==='MineLink/resumeOnline/resumeOnline')
							curInd=i
						})
						// console.log(curInd)
						currentPage[curInd].$vm.comfirmCertificate(this.index, this.ind, JSON.stringify(this
							.certificate))
					}
				})
			},
			
			async upLoadCertificate(){
				try {
				  const res=await this.$chooseImage()
				  console.log("res",res)
				  const path=res.tempFilePaths[0]
				  const openId=this.$store.state.openId
				  this.$upLoadFile(`/file/upload/${openId}/1`,path,{},res=>{
				  	console.log("res",res)
					if(res.statusCode==200){
						const data=JSON.parse(JSON.parse(res.data).data)
						this.certificate['certImage']=data.path
						console.log('data',data)
					}
					
				  })
				} catch (error) {
					console.log("error",error)
				}
			},
			
			cancelCertificate() {
				uni.navigateBack({
					delta: 1,
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-certificate {
		padding: 20rpx 0;

		.content-item {
			padding: 0 25rpx;
			margin-bottom: 25rpx;
			
			.name-item{
				margin-left: 27rpx;
				font-size: 34rpx;
			}
			
			.image-box{
				margin-left: 35rpx;
				width: 200rpx;
				height: 230rpx;
				border: 1rpx solid #1296db;
				border-radius: 10rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 70rpx;
					height: 70rpx;
				}
			}
			
			::v-deep .tui-input__wrap {
				border: 1rpx solid #1296db;
			}
		}
		
		.upload-box{
			display: flex;
		}
		
		.btns-box {
			position: fixed;
			bottom: 3vh;
			left: 0;
			right: 0;
			padding: 0 25rpx;

			.info-btns {
				margin-bottom: 20rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 20rpx 0;
				width: 100%;
				background-color: #1296db;
				border-radius: 15rpx;
				color: #fff;
			}
		}
	}
</style>