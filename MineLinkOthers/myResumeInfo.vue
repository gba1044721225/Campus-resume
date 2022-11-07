<template>
	<view class="my-resume-info">
		<tui-tabs selectedColor="#1296db" itemWidth="50%" sliderBgColor="#1296db" color="#000" :tabs="resumeList" :currentTab="currentResume" @change="resumeListClick"></tui-tabs>
		<view class="details-header">
			<view class="header-left">
				<view class="name">
					{{dataList.sysuserInfoVO.userName}}
				</view>
				<view class="item first">
					{{getWorkYear}}年经验 · {{getAge}}岁 · {{dataList.sysuserInfoVO.leve?dataList.sysuserInfoVO.leve:'暂无数据'}}
				</view>
				<view class="item">
					电话：{{dataList.sysuserInfoVO.phone?dataList.sysuserInfoVO.phone:'暂无数据'}}
				</view>
				<view class="item">
					邮箱：{{dataList.sysuserInfoVO.email?dataList.sysuserInfoVO.email:'暂无数据'}}
				</view>
			</view>
			<image :src="dataList.sysuserInfoVO.imgUrl" mode=""></image>
		</view>
		
		<view class="self-introduction">
			<view class="title">
				自我介绍
			</view>
			<view class="content">
				{{dataList.sysuserInfoVO.introduction?dataList.sysuserInfoVO.introduction:'暂无数据'}}
			</view>
		</view>
		
		<view class="self-introduction">
			<view class="title">
				期望职位/城市/薪资
			</view>
			<view class="content">
				{{dataList.sysuserInfoVO.position?dataList.sysuserInfoVO.position:'暂无数据'}} · {{dataList.sysuserInfoVO.expectCity?dataList.sysuserInfoVO.expectCity:'暂无数据'}} · {{dataList.sysuserInfoVO.expectedSalary?dataList.sysuserInfoVO.expectedSalary:'暂无数据'}}
			</view>
		</view>
		
		<!-- 工作经验 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				工作经验	
			</view>
			<view v-if="dataList.shixi.length>0">
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
			
			<view v-if="dataList.shixi.length==0">
				暂无数据
			</view>
		</view>
				
		<!-- 项目经验 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				项目经验
			</view>

			<view v-if="dataList.projects.length>0">
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
			
			
			<view v-if="dataList.projects.length==0">
				暂无数据
			</view>
		</view>
		
		<!-- 教育经历 -->
		<view class="work-exp">
			<!-- {{JSON.stringify(dataList.shixi)}} -->
			<view class="title">
				教育经历
			</view>

			
			<view v-if="dataList.eductions.length>0">
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
			
			<view v-if="dataList.eductions.length==0">
				暂无数据
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
					证书名字：{{fileItem.fileName?fileItem.fileName:'暂无相关证书'}}
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
				dataList:{},
				resumeList:[{
                    name: '简历1',
                }, {
                    name: '简历2',
                }, {
                    name: '简历3'
                }],
				currentResume:0
			}
		},
		methods:{
			resumeListClick(e){
				// console.log("e",e)
				this.currentResume=e.index
				this.reqResumeAllInfo()
			},
			
			reqResumeAllInfo(){
				const openId = this.$store.state.openId
				this.$getHttp(`/recruit/user/query/${openId}/${this.currentResume}`,{},res=>{
					console.log("res",res)
					if(res.meta.code==200){
						this.dataList=JSON.parse(res.data)
						
						// console.log()
					}else{
						uni.showToast({
							icon:"none",
							title:"数据有误请联系管理员",
							duration:1500,
						})
						return
					}
				})
			}
		},
		computed:{
			getWorkYear(){
				if(this.dataList.shixi!=undefined&&this.dataList.shixi.length!=0){
					let exp1=this.dataList.shixi[0].endTime
					let exp2=this.dataList.shixi[this.dataList.shixi.length -1].startTime
					exp1=(exp1=exp1.replace('年','-')).replace('月','')
					exp2=(exp2=exp2.replace('年','-')).replace('月','')
					const d=new Date(exp1)-new Date(exp2)
					return Math.floor(d/1000/60/60/24/365)
				}
				return 0
			},
			getAge(){
				if(this.dataList.sysuserInfoVO&&this.dataList.sysuserInfoVO.birthday){
					let exp=this.dataList.sysuserInfoVO.birthday
					// console.log(exp,"exp")
					exp=(exp=exp.replace('年','-')).replace('月','')
					// console.log(new Date(exp))
					const d=new Date().getTime()-new Date(exp).getTime()
					// console.log("dddddd",d)
					return Math.floor(d/1000/60/60/24/365)
				}
				return 0
			},
			
		},
		onLoad() {
			this.reqResumeAllInfo()
		}
	}
</script>

<style scoped lang="scss">
	.my-resume-info{
		padding: 0 20rpx 20rpx;
		
		.details-header{
			margin-top: 25rpx;
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