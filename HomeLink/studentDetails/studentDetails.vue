<template>
	<view class="student-details">
		<view class="details-header">
			<view class="header-left">
				<view class="name">
					{{dataList.sysuserInfoVO.userName}}
				</view>
				<view class="item first">
					{{getWorkYear}}年经验 · {{getAge}}岁 · {{dataList.sysuserInfoVO.leve}}
				</view>
				<view class="item">
					电话：{{dataList.sysuserInfoVO.phone}}
				</view>
				<view class="item">
					邮箱：{{dataList.sysuserInfoVO.email}}
				</view>
			</view>
			<image :src="dataList.sysuserInfoVO.imgUrl" mode=""></image>
		</view>
		
		<view class="self-introduction">
			<view class="title">
				自我介绍
			</view>
			<view class="content">
				{{dataList.sysuserInfoVO.introduction}}
			</view>
		</view>
		
		<view class="self-introduction">
			<view class="title">
				期望职位/城市/薪资
			</view>
			<view class="content">
				{{dataList.sysuserInfoVO.position}} · {{dataList.sysuserInfoVO.expectCity}} · {{dataList.sysuserInfoVO.expectedSalary}}
			</view>
		</view>
		
		<!-- 工作经验 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				工作经验	
			</view>
			<view class="exp-item" v-for="(expItem,expIndex) in dataList.shixi" :key="expIndex">
				<view class="company-name">
					<text>{{expItem.company}}</text>
					<text>{{expItem.startTime}}-{{expItem.endTime}}</text>
				</view>
				<view class="position">
					{{expItem.jobs}}
				</view>
				<view class="exp-intro">
					{{expItem.workDescribe}}
				</view>
			</view>
		</view>
				
		<!-- 项目经验 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				项目经验
			</view>
			<view class="exp-item" v-for="(proItem,proIndex) in dataList.projects" :key="proIndex">
				<view class="company-name">
					<text>{{proItem.startTime}}-{{proItem.endTime}}</text>
				</view>
				<view class="company-name">
					<text>项目名称：{{proItem.projectName}}</text>
				</view>
				<view class="company-name">
					<text>项目角色：{{proItem.projectRole}}</text>
				</view>
				<view class="exp-intro">
					<view>
						项目描述
					</view>
					<view >
						{{proItem.described}}
					</view>
				</view>
			</view>
		</view>
		
		<!-- 教育经历 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				教育经历
			</view>
			<view class="exp-item" v-for="(eduItem,eduIndex) in dataList.eductions" :key="eduIndex">
				<view class="company-name">
					<text>{{eduItem.startTime}}-{{eduItem.endTime}}</text>
				</view>
				<view class="company-name">
					<text>{{eduItem.school}} · {{eduItem.professional}}</text>
				</view>
				<view class="exp-intro">
					{{eduItem.described}}
				</view>
			</view>
		</view>
		
		<!-- 我的证书 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				相关证书
			</view>
			<view class="exp-item" v-for="(fileItem,fileIndex) in dataList.listFile" :key="fileIndex">
				<view class="company-name">
					证书名字：{{fileItem.fileName}}
				</view>
				<image :src="fileItem.fileUrl" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				stuId:"",
				dataList:{}
			}
		},
		methods:{
			reqResumeListById(){
				const data = {
					data:this.stuId,
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http('/recruit/user/query/detail',data,res=>{
					console.log("res",res)
					if(res.meta.code==200){
						this.dataList=JSON.parse(res.data)
						
						console.log()
					}
				},header)
			}
		},
		computed:{
			getWorkYear(){
				if(this.dataList.shixi!=undefined){
					let exp1=this.dataList.shixi[0].endTime
					let exp2=this.dataList.shixi[this.dataList.shixi.length -1].startTime
					exp1=(exp1=exp1.replace('年','-')).replace('月','')
					exp2=(exp2=exp2.replace('年','-')).replace('月','')
					const d=new Date(exp1)-new Date(exp2)
					return Math.floor(d/1000/60/60/24/365)
				}
				return 10000
			},
			getAge(){
				if(this.dataList.sysuserInfoVO!=undefined){
					let exp=this.dataList.sysuserInfoVO.birthday
					// console.log(exp,"exp")
					exp=(exp=exp.replace('年','-')).replace('月','')
					// console.log(new Date(exp))
					const d=new Date().getTime()-new Date(exp).getTime()
					// console.log("dddddd",d)
					return Math.floor(d/1000/60/60/24/365)
				}
				return 10000
			}
		},
		onLoad(payload) {
			this.stuId=payload.stuId
			console.log("this.stuId",this.stuId)
			this.reqResumeListById()
		}
	}
</script>

<style scoped lang="scss">
	.student-details{
		padding: 20rpx 20rpx;
		
		.details-header{
			padding: 0	25rpx 30rpx;
			border-bottom: 1rpx solid #ddd;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.header-left{
				.name{
					font-size: 40rpx;
					font-weight: bold;
				}
				.item{
					font-size: 32rpx;
					color: #000;
					margin-bottom: 10rpx;
				}
				.item.first{
					margin-top: 25rpx;
					font-size: 32rpx;
					color: #555;
				}
			}
			image{
				border: 1rpx solid #1296db;
				border-radius: 5rpx;
				width: 200rpx;
				height: 250rpx;
				box-shadow: 0 0 2rpx 2rpx rgba(0, 0, 0,.1);
			}
		}
		
		.self-introduction{
			padding: 30rpx	25rpx;
			border-bottom: 1rpx solid #ddd;
			.title{
				font-size: 40rpx;
				font-weight: bold;
			}
			.content{
				margin-top: 25rpx;
				font-size: 32rpx;
				color: #555;			
			}
		}
		
		.work-exp{
			padding: 30rpx	25rpx;
			border-bottom: 1rpx solid #ddd;
			.title{
				font-size: 40rpx;
				font-weight: bold;
			}
			
			.exp-item{
				padding: 25rpx 0 10rpx;
				border-bottom:1rpx solid #1296db;
				.company-name{
					margin-bottom: 10rpx;
					text{
						margin-right: 15rpx;
					}
				}
				.position{
					margin-bottom: 10rpx;
				}
				.exp-intro{
					margin-bottom: 10rpx;
					text-indent: 2em;
				}
			}
			.exp-item:last-child{
				border: 0;
			}
			
			image{
				width: 650rpx;
				height: 650rpx;
				border-radius: 10rpx solid #1296db;
				box-shadow: 0 0 2rpx 2rpx rgba(0, 0, 0, .1);
				margin-bottom: 15rpx;
			}
		}
	}
</style>