<template>
	<view class="collection-stu" :class="{'bottom-ios':isIos}">
<!-- 			<view class="my-input">
				<input type="text" v-model="keywords" placeholder="请输入内容">
				<view class="btn-item">
					搜索
				</view>
			</view> -->
		
		<view @click="linkToStudentDetails(item.id)" class="student-item" v-for="(item,index) in dataList" :key="index">
				<view class="item-content">
					<image :src="item.imgUrl" mode=""></image>
					<view class="content">
						<view class="name">
							{{item.position?item.position:'暂无岗位信息'}}
						</view>
						<view class="item-info">
							{{item.userName}}（{{item.sex}}）
						</view>
						<view class="item-info">
							 {{item.school}} {{item.professional}}
						</view>
						<view class="item-info">
							期望薪资:{{item.expectedSalary?item.expectedSalary:"面议"}}
						</view>
						<view class="item-info">
							<text>{{item.leve}}</text>
							<text>{{item.identity}}</text>
						</view>
					</view>
				</view>
			<!-- 				<view class="content-tag">
								{{item.introduction}}
							</view> -->
				<image v-if="showTag('top',item)" class="img-logo-top" :src="`${imgSrc}hot.png`" mode=""></image>
				<image class="img-logo-bottom" :src="`${imgSrc}boshi.png`" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isIos:this.$isIos,
				imgSrc:this.$imageBaseSrc,
				pageInfo: {
					pageSize: 50,
					pageNum: 1,
				},
				dataList: [],
				keywords:"",
			}
		},
		methods: {
			linkToStudentDetails(id){
				uni.navigateTo({
					url:`/HomeLink/studentDetails/studentDetails?stuId=${id}`
				})	
			},
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
				this.$http("/company/resume/list/byId", data, res => {
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
			showTag(){
				return function(val,item){
					if(val=='top'){
						const t=(new Date().getTime()-item.createTime)/1000/60/60/24
						if(Math.floor(t)){
							return true
						}
						return false
					}
					
					if(val=='bottom'){
						if(item.leve=='博士'||item.leve=='研究生'){
							return true
						}
						return false
					}
					
					return false
				}
			}
		},
		onShow(){
			this.reqRecruitmentInformation()
		},
	}
</script>

<style scoped lang="scss">
.collection-stu{
	// margin-top: 10rpx;
	background-color: #eee;
	
	min-height: 100vh;
	padding: 20rpx;
	
	.student-item{
		margin-bottom: 20rpx;
		background-color: #fff;
		padding: 25rpx 30rpx;
		box-sizing: border-box;
		box-shadow: 0rpx 0rpx 4rpx 2rpx rgba(0, 0, 0, .1);
		border-radius: 10rpx;
		position: relative;
		
		.img-logo-top{
			width: 100rpx;
			height: 100rpx;
			position: absolute;
			top: -25rpx;
			right: 0;
		}
		.img-logo-bottom{
			width: 100rpx;
			height: 100rpx;
			position: absolute;
			bottom: -25rpx;
			right: -15rpx;
		}
		
		.item-content{
			// padding-bottom: 20rpx;
			// border-bottom: 1rpx solid #ccc;
			display: flex;
			flex-wrap: nowrap;
			image{
				width: 200rpx;
				height: 250rpx;
				border-radius: 10rpx;
				margin-right: 50rpx;
			}
			.content{
				background-color: #fff;
				width: 400rpx;
				height: 250rpx;
				display: flex;
				flex-direction: column;
				justify-content	: space-between;
				.name{
					font-size: 36rpx;
					font-weight: bold;
				}
				.item-info{
					margin-top: 15rpx;
					width: 100%;
					font-size: 26rpx;
					color: #666;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					
					text{
						margin-right: 15rpx;
						padding: 10rpx 15rpx;
						border-radius: 2rpx;
						background-color: #eee;
					}
				}
			}

		}
		

	}
	.content-tag{
		padding: 20rpx 10rpx 0;
		font-size: 26rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
}
	.bottom-ios {
		padding-bottom: constant(safe-area-inset-bottom);
		/*兼容 IOS<11.2*/
		padding-bottom: env(safe-area-inset-bottom);
		/*兼容 IOS>11.2*/
	}
</style>
