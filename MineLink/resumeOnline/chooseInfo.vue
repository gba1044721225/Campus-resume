<template>
	<view class="choose-info">

		<view class="info-search">
			<tui-searchbar radius="20px" placeholder="搜索" @search="searchPos"></tui-searchbar>
		</view>

		<view class="info-item-box">
			<view class="info-item" id="item.id" v-for='(item,index) in searchData' :key='index' @click="chooseItem(item.label)">
				{{item.label}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: {
					school: [],
					major: [],
				},
				searchData:[],
				infoType: '',
				infoIndex: '',
				infoKey:'',
			}
		},
		methods:{
			searchPos(e){
				// console.log("e",e)
				// this.getPos(e.value)
				
				const reg=this.getReg(e.value)
				this.searchData= this.dataList[this.infoKey].filter(v=>{
					if(reg.test(v.label)){
						return v
					}
				})

			},
			getReg(testData){
				let reg=new RegExp(`${testData}`,g); 
				console.log(reg)
				return reg
			},
			init(){
				console.log(11111)
				this.searchData=this.dataList[this.infoKey]
				console.log(this.searchData)
			},
			chooseItem(label){
				uni.navigateBack({
					delta:1,
					success:(res)=>{
						console.log("res",getCurrentPages())
						const currentPage=getCurrentPages()
						let curInd
						currentPage.forEach((v,i)=>{
							if(v.route==='MineLink/resumeOnline/resumeOnline')
							curInd=i
						})
						console.log(curInd)
						currentPage[curInd].$vm.comfirmInfo(this.infoIndex,this.infoType,this.infoKey,label)
					}
				})
			},
			
			//获取学校数据
			reqschool(){
				return new Promise(resolve=>{
					const data={
						data:{
							
						},
						meta:{
							
						}
					}
					const header = {
						'content-type': 'application/json'
					}
					this.$getHttp('/parameter/query/1/0',data,res=>{
						// console.log("res",res)
						if(res.meta.code==200){
							// this.dataList[this.infoKey]
							// console.log(JSON.parse(res.data))
							this.dataList[this.infoKey]=JSON.parse(res.data).listSchool
							console.log(this.dataList)
							resolve()
						}
					},header,true)
				})
			},
			
			//获取专业数据
			reqmajor(){
				return new Promise(resolve=>{
					const data={
						data:{
							
						},
						meta:{
							
						}
					}
					const header = {
						'content-type': 'application/json'
					}
					this.$getHttp('/parameter/query/0/0',data,res=>{
						// console.log("res",res)
						if(res.meta.code==200){
							// this.dataList[this.infoKey]
							// console.log(JSON.parse(res.data))
							this.dataList[this.infoKey]=JSON.parse(res.data).list
							// console.log(this.dataList)
							resolve()
						}
					},header,true)
				})
			}
		},	
		onLoad(payload) {
			console.log("payload", payload)
			this.infoType = payload.type
			this.infoIndex = payload.index
			this.infoKey=payload.key
			
			
			const fn= this[`req${this.infoKey}`]
			// console.log(fn)
			fn().then(_=>{
				this.init()
			})
		}
	}
</script>


<style scoped lang="scss">
	.choose-info {
		.info-search{
			margin-bottom: 15rpx;
		}
		
		.info-item-box{
			padding: 0rpx 25rpx;
			.info-item {
				padding: 20rpx 0;
				border-bottom: 1rpx solid #eee;
			}
			
			.info-item{

			}
		}
		

	}
</style>
