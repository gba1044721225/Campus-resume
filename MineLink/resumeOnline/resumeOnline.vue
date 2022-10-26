<template>
	<view class="resume-oneline">
		<view class="resume-online-tab">
			<view class="tab-item" v-for="(item,index) in tabList" :key="index" @click="changeTabItem(index)">
				<text :class="{'resume-active':currentResume==index}">{{item.label}}</text>
				<image :src="`${imageBaseSrc}edit_blue.png`" mode="" v-if="currentResume==index"></image>
			</view>
		</view>

		<view class="resume-swiper">
			<swiper class="swiper" :style="{height:swiperHeight,minHeight:swiperMinHeight}" :current="currentResume"
				circular :indicator-dots="indicatorDots" :interval="interval" :duration="duration"
				@change='changeTabItemBySwiper'>
				<swiper-item v-for="(item,index) in tabList" :key="index">
					<view class="swiper-item">
						<!-- 个人信息 -->
						<view class="resume-item-info">
							<tui-collapse :index="'pnInfo'+index" :current="item.resumeList.pnInfo.columnIndex"
								@click="changeCollapse('pnInfo'+index,index,'pnInfo')">
								<template v-slot:title>
									<view class="item-title" v-if='item.resumeList.pnInfo.columnIndex==-1'>
										个人信息
									</view>
								</template>
								<template v-slot:content>
									<view class="item-title">
										个人信息
									</view>
									<view class="info-content">
										<view class="content-item">
											<tui-input v-model="item.resumeList.pnInfo.name" :isFillet='true'
												:inputBorder='true' :required='true' label="姓名" placeholder="请输入姓名">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="item.resumeList.pnInfo.phone" :isFillet='true'
												:inputBorder='true' :required='true' label="手机" placeholder="请输入手机">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="item.resumeList.pnInfo.school" :disabled="true"
												:isFillet='true' :inputBorder='true' :required='true' label="学校"
												placeholder="请输入学校" @click="linkToChooseInfo(index,'pnInfo','school')">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="item.resumeList.pnInfo.education" :disabled="true"
												:isFillet='true' :inputBorder='true' :required='true' label="学历"
												placeholder="请输入学历" @click="openPicker(index,'pnInfo','education')">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="item.resumeList.pnInfo.major" :disabled="true"
												:isFillet='true' :inputBorder='true' :required='true' label="专业"
												placeholder="请输入专业" @click="linkToChooseInfo(index,'pnInfo','major')">
											</tui-input>
										</view>

										<view class="content-item">
											<tui-input :isFillet='true' v-model="item.resumeList.pnInfo.graduationTime"
												@click="calendarHandler(index,'pnInfo','graduationTime')"
												:inputBorder='true' :required='true' label="毕业时间" :disabled='true'
												placeholder="请选择毕业时间">
											</tui-input>
										</view>

										<!-- 										<view class="content-item">
											<tui-input v-model="item.resumeList.pnInfo.jobIntention" :isFillet='true'
												:inputBorder='true' :required='true' label="求职意向" placeholder="请输入求职意向">
											</tui-input>
										</view> -->
									</view>
								</template>
							</tui-collapse>
						</view>

						<!-- 分割线 -->
						<view class="line-show"></view>

						<!-- 补充信息 -->
						<view class="resume-item-info">
							<tui-collapse :index="'addInfo'+index" :current="item.resumeList.addInfo.columnIndex"
								@click="changeCollapse('addInfo'+index,index,'addInfo')">
								<template v-slot:title>
									<view class="item-title" v-if='item.resumeList.addInfo.columnIndex==-1'>
										补充信息
									</view>
								</template>
								<template v-slot:content>
									<view class="item-title">
										补充信息
									</view>
									<view class="info-content">
										<view class="content-item">
											<tui-input v-model="item.resumeList.addInfo.email" :isFillet='true'
												:inputBorder='true' label="邮箱" placeholder="请输入邮箱">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input :disabled="true"
												v-model="item.resumeList.addInfo.politicalStatus" :isFillet='true'
												:inputBorder='true' label="政治面貌" placeholder="请输入政治面貌"
												@click="openPicker(index,'addInfo','politicalStatus')">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="item.resumeList.addInfo.birthday" :disabled="true"
												:isFillet='true' :inputBorder='true' label="出生日期" placeholder="请输入出生日期"
												@click="calendarHandler(index,'addInfo','birthday')">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="item.resumeList.addInfo.hometown" :disabled="true"
												:isFillet='true' :inputBorder='true' label="籍贯" placeholder="请输入籍贯"
												@click="openCityPicker(index,'addInfo','hometown')">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="item.resumeList.addInfo.dwelling" :disabled="true"
												:isFillet='true' :inputBorder='true' label="居住地" placeholder="请输入居住地"
												@click="openCityPicker(index,'addInfo','dwelling')">
											</tui-input>
										</view>

									</view>
								</template>
							</tui-collapse>
						</view>

						<!-- 分割线 -->
						<view class="line-show"></view>

						<!-- 求职意向 -->
						<view class="resume-item-info">
							<tui-collapse :index="'intentInfo'+index" :current="item.resumeList.intentInfo.columnIndex"
								@click="changeCollapse('intentInfo'+index,index,'intentInfo')">
								<template v-slot:title>
									<view class="item-title" v-if='item.resumeList.intentInfo.columnIndex==-1'>
										求职意向
									</view>
								</template>
								<template v-slot:content>
									<view class="item-title">
										求职意向
									</view>
									<view class="info-content">
										<view class="content-item">
											<tui-input v-model="item.resumeList.intentInfo.job" :isFillet='true'
												:inputBorder='true' label="期望职位" placeholder="请输入期望职位">
											</tui-input>
										</view>

										<view class="content-item">
											<tui-input v-model="item.resumeList.intentInfo.salary" :isFillet='true'
												:inputBorder='true' label="期望薪资" placeholder="请输入期望薪资" :disabled="true"
												@click="openSalaryPicker(index,'intentInfo','salary')">
											</tui-input>
										</view>

										<view class="content-item">
											<tui-input v-model="item.resumeList.intentInfo.city" :isFillet='true'
												:inputBorder='true' label="期望城市" placeholder="请输入期望城市" :disabled="true"
												@click="openCityPicker(index,'intentInfo','city')">
											</tui-input>
										</view>

										<view class="content-item">
											<tui-input v-model="item.resumeList.intentInfo.jType" :isFillet='true'
												:inputBorder='true' label="工作类型" placeholder="请输入工作类型" :disabled="true"
												@click="openPicker(index,'intentInfo','jType')">
											</tui-input>
										</view>
									</view>
								</template>
							</tui-collapse>
						</view>

						<!-- 分割线 -->
						<view class="line-show"></view>

						<!-- 教育经历 -->
						<view class="add-modules">
							<tui-collapse :index="'eduCol'+index" :current="item.eduCol"
								@click="changeCollapseAdd('eduCol'+index,index,'eduCol')">
								<template v-slot:title>
									<view class="item-title" v-if='item.eduCol==-1'>
										教育经历
									</view>
								</template>
								<template v-slot:content>
									<view class="item-title">
										教育经历
									</view>
									<view class="info-content">
										<view class="show-item-box" v-if="item.addEducation.length!=0"
											v-for='(eduBox,eduIndex) in item.addEducation' :key="eduIndex">
											<view class="item-left">
												<view class="item-content" v-for='(edu,eduKey) in eduBox' :key="eduKey">
													{{keyToCnEdu[eduKey]}} : {{edu}}
												</view>
											</view>
											<view class="add-btns">
												<view class="btns-item"
													@click="linkAddEducation(index,eduIndex,eduBox)">
													修改
												</view>
												<view class="btns-item" @click="deleteEducation(index,eduIndex)">
													删除
												</view>
											</view>
										</view>

										<view class="add-item" @click="linkAddEducation(index)">
											<view class="add"> ＋ </view>
											<view class="content"> 添加教育经历 </view>
										</view>
									</view>
								</template>
							</tui-collapse>
						</view>

						<!-- 分割线 -->
						<view class="line-show"></view>

						<!-- 工作经验 -->
						<view class="add-modules">
							<tui-collapse :index="'WorkExpCol'+index" :current="item.WorkExpCol"
								@click="changeCollapseAdd('WorkExpCol'+index,index,'WorkExpCol')">
								<template v-slot:title>
									<view class="item-title" v-if='item.WorkExpCol==-1'>
										工作经验
									</view>
								</template>
								<template v-slot:content>
									<view class="item-title">
										工作经验
									</view>
									<view class="info-content">
										<view class="show-item-box" v-if="item.addWorkExp.length!=0"
											v-for='(workBox,workIndex) in item.addWorkExp' :key="workIndex">
											<view class="item-left">
												<view class="item-content" v-for='(work,workKey) in workBox'
													:key="workKey">
													{{keyToCnWork[workKey]}} : {{work}}
												</view>
											</view>
											<view class="add-btns">
												<view class="btns-item" @click="linkAddWork(index,workIndex,workBox)">
													修改
												</view>
												<view class="btns-item" @click="deleteWork(index,workIndex)">
													删除
												</view>
											</view>
										</view>

										<view class="add-item" @click="linkAddWork(index)">
											<view class="add"> + </view>
											<view class="content"> 添加工作经历 </view>
										</view>
									</view>
								</template>
							</tui-collapse>
						</view>

						<!-- 分割线 -->
						<view class="line-show"></view>

						<!-- 项目经验 -->
						<view class="add-modules">
							<tui-collapse :index="'proCol'+index" :current="item.proCol"
								@click="changeCollapseAdd('proCol'+index,index,'proCol')">
								<template v-slot:title>
									<view class="item-title" v-if='item.proCol==-1'>
										项目经验
									</view>
								</template>
								<template v-slot:content>
									<view class="item-title">
										项目经验
									</view>
									<view class="info-content">
										<view class="show-item-box" v-if="item.addPro.length!=0"
											v-for='(proBox,proIndex) in item.addPro' :key="proIndex">
											<view class="item-left">
												<view class="item-content" v-for='(pro,proKey) in proBox' :key="proKey">
													{{keyToCnPro[proKey]}} : {{pro}}
												</view>
											</view>
											<view class="add-btns">
												<view class="btns-item" @click="linkAddPro(index,proIndex,proBox)">
													修改
												</view>
												<view class="btns-item" @click="deletePro(index,proIndex)">
													删除
												</view>
											</view>
										</view>

										<view class="add-item" @click="linkAddPro(index)">
											<view class="add"> + </view>
											<view class="content"> 添加项目经历 </view>
										</view>
									</view>
								</template>
							</tui-collapse>
						</view>

						<!-- 分割线 -->
						<view class="line-show"></view>

						<!-- 添加证书-->
						<view class="add-modules">
							<tui-collapse :index="'certCol'+index" :current="item.certCol"
								@click="changeCollapseAdd('certCol'+index,index,'certCol')">
								<template v-slot:title>
									<view class="item-title" v-if='item.certCol==-1'>
										添加证书
									</view>
								</template>
								<template v-slot:content>
									<view class="item-title">
										添加证书
									</view>
									<view class="info-content">
										<view class="show-item-box" v-if="item.addCertificate.length!=0"
											v-for='(certBox,certIndex) in item.addCertificate' :key="certIndex">
											<view class="item-left">
												<view class="item-content" v-for='(cert,certKey) in certBox'
													:key="certKey">
													{{keyToCnCert[certKey]}} : {{cert}}
												</view>
											</view>
											<view class="add-btns">
												<view class="btns-item" @click="linkAddCert(index,certIndex,certBox)">
													修改
												</view>
												<view class="btns-item" @click="deleteCert(index,certIndex)">
													删除
												</view>
											</view>
										</view>

										<view class="add-item" @click="linkAddCert(index)">
											<view class="add"> + </view>
											<view class="content"> 添加项目经历 </view>
										</view>
									</view>
								</template>
							</tui-collapse>
						</view>


						<!-- 学历 -->
						<u-picker :show="item.showPicker" :columns="item[item.pickKey.key+'Columns']"
							@confirm="confirmPicker(index,$event)" @cancel="cancelPicker(index)"></u-picker>

						<!-- 薪资 -->
						<u-picker :show="item.showSalaryPicker" ref="sPicker" :columns="salaryList"
							@confirm="confirmSalaryPicker(index,$event)" @cancel="cancelSalaryPicker(index)"></u-picker>

						<!-- 日期 @hide="cancelCalendar(index)" -->
						<tui-calendar ref="calendar" :isFixed="true" :type="1" @change="chooseDate(index,$event)">
						</tui-calendar>

						<!-- 地区 -->
						<u-picker ref="uPicker" :show="item.showCityPicker" :columns="cityList"
							@confirm="confirmCityPicker(index,$event)" @cancel="cancelCityPicker(index)"
							@change="changeHandler(index,$event)"></u-picker>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import cityData from '@/utils/city.js'
	export default {

		data() {
			let arr = []
			for (let y = 0; y < 20; y++) {
				arr.push(y + 1 + 'k')
			}
			return {
				imageBaseSrc: this.$imageBaseSrc,
				salaryList: [
					arr,
					arr
				],
				cityList: [],
				cityLevel1: [],
				cityLevel2: [],
				cityLevel3: [],
				tabList: [{
						label: '简历1',
						showPicker: false,
						showCityPicker: false,
						showSalaryPicker: false,
						pickKey: {
							type: '', //记录类型
							key: ''
						},

						educationColumns: [
							['博士', '研究生', '本科', '专科', '高中', '中专']
						],
						majorColumns: [
							['计算机', '数学', '生物工程']
						],
						politicalStatusColumns: [
							['党员', '团员', '群众']
						],
						jTypeColumns: [
							['校招', '社招', '实习']
						],
						resumeList: {
							pnInfo: {
								name: '',
								phone: '',
								school: '',
								education: '',
								major: '',
								// jobIntention: '',
								graduationTime: '',
								columnIndex: -1
							},
							addInfo: {
								email: '',
								politicalStatus: '',
								birthday: '',
								hometown: '',
								dwelling: '',
								columnIndex: -1
							},
							intentInfo: {
								job: '',
								salary: '',
								city: '',
								columnIndex: -1,
								jType: '',
							}
						},
						addEducation: [],
						eduCol: -1,
						addWorkExp: [],
						WorkExpCol: -1,
						addPro: [],
						proCol: -1,
						addCertificate: [],
						certCol: -1,
					},
					{
						label: '简历2',
						showPicker: false,
						showCityPicker: false,
						showSalaryPicker: false,
						pickKey: {
							type: '', //记录类型
							key: ''
						},

						educationColumns: [
							['博士', '研究生', '本科', '专科', '高中', '中专']
						],
						majorColumns: [
							['计算机', '数学', '生物工程']
						],
						politicalStatusColumns: [
							['党员', '团员', '群众']
						],
						jTypeColumns: [
							['校招', '社招', '实习']
						],
						resumeList: {
							pnInfo: {
								name: '',
								phone: '',
								school: '',
								education: '',
								major: '',
								// jobIntention: '',
								graduationTime: '',
								columnIndex: -1
							},
							addInfo: {
								email: '',
								politicalStatus: '',
								birthday: '',
								hometown: '',
								dwelling: '',
								columnIndex: -1
							},
							intentInfo: {
								job: '',
								salary: '',
								city: '',
								columnIndex: -1,
								jType: '',
							}
						},
						addEducation: [],
						eduCol: -1,
						addWorkExp: [],
						WorkExpCol: -1,
						addPro: [],
						proCol: -1,
						addCertificate: [],
						certCol: -1,
					},
				],
				currentResume: 0,
				indicatorDots: false,
				interval: 2000,
				duration: 500,
				swiperHeight: 0,
				swiperMinHeight: 0,
				//映射表
				keyToCnEdu: {
					school: '学校',
					education: '教育',
					major: '专业',
					// allTime: '就读时间',
					beginTime: '入学时间',
					endTime: '毕业时间',
					discribe: '专业描述'
				},
				keyToCnWork: {
					companyName: '公司名称',
					jobName: '职业名称',
					department: '所属部门',
					// allTime: '就读时间',
					beginTime: '入职时间',
					endTime: '离职时间',
					discribe: '专业描述'
				},
				keyToCnPro: {
					proName: '项目名称',
					role: '职位名称',
					// allTime: '就读时间',
					beginTime: '项目开始',
					endTime: '项目结束',
					discribe: '项目描述'
				},
				keyToCnCert: {
					certName: '证书名字',
					certImage: '证书图片'
				},
				// testValue:""
			}
		},
		methods: {
			//切换简历
			changeTabItem(index) {
				this.currentResume = index
			},
			//切换轮播图关联简历
			changeTabItemBySwiper(e) {
				// console.log("e",e)
				this.currentResume = e.detail.current
			},
			//页面高度初始化
			setHeight() {
				const query = uni.createSelectorQuery().in(this);
				query.select('.swiper-item').boundingClientRect(data => {
					this.swiperHeight = data.height + 25 + 'px'
				}).exec();
			},

			//弹出时候写死高度
			// setFixedHeight() {
			// 	const res = wx.getSystemInfoSync()
			// 	let statusHeight = res.statusBarHeight
			// 	let windowHeight = res.windowHeight
			// 	this.swiperHeight = windowHeight - statusHeight + 'px'
			// },

			//设置最小高度初始化
			setMinHeight() {
				// console.log("res",res)
				const res = wx.getSystemInfoSync()
				let statusHeight = res.statusBarHeight
				let windowHeight = res.windowHeight
				this.swiperMinHeight = windowHeight - statusHeight + 'px'
			},
			//操作折叠层
			changeCollapse(val, index, key) {
				// console.log("val", val)
				// console.log("index", index)

				if (this.tabList[index]['resumeList'][key]['columnIndex'] == -1) {
					this.$set(this.tabList[index]['resumeList'][key], 'columnIndex', val)
				} else {
					this.$set(this.tabList[index]['resumeList'][key], 'columnIndex', -1)
				}
				
				this.$nextTick(()=>{
					this.setHeight()
				})
				// console.log("this.tabList", this.tabList)
			},

			//无限添加类别的折叠层
			changeCollapseAdd(val, index, key) {
				if (this.tabList[index][key] == -1) {
					this.tabList[index][key] = val
				} else {
					this.tabList[index][key] = -1
				}
				this.$nextTick(()=>{
					this.setHeight()
				})
			},

			//跳到学校/专业选择
			linkToChooseInfo(index, type, key) {
				// console.log("index",index)
				// console.log("type",type)
				uni.navigateTo({
					url: `/MineLink/resumeOnline/chooseInfo?index=${index}&type=${type}&key=${key}`
				})
			},
			//确认学校/专业
			comfirmInfo(index, type, key, value) {
				this.tabList[index].resumeList[type][key] = value
			},

			//弹出picker
			openPicker(index, type, key) {
				this.tabList[index].pickKey.type = type
				this.tabList[index].pickKey.key = key
				this.tabList[index].showPicker = true
			},
			//选择picker
			confirmPicker(index, e) {
				// console.log("e", e)
				const type = this.tabList[index]['pickKey']['type']
				const key = this.tabList[index]['pickKey']['key']
				this.tabList[index].resumeList[type][key] = e.value[0]
				this.tabList[index].showPicker = false
				this.tabList[index]['pickKey']['type'] = ''
				this.tabList[index]['pickKey']['key'] = ''
			},

			//取消Picker
			cancelPicker(index) {
				this.tabList[index].showPicker = false
				const type = this.tabList[index]['pickKey']['type']
				const key = this.tabList[index]['pickKey']['key']
				this.tabList[index]['pickKey']['type'] = ''
				this.tabList[index]['pickKey']['key'] = ''
			},

			//弹出citypicker
			openCityPicker(index, type, key) {
				console.log(this.cityList)
				this.tabList[index].pickKey.type = type
				this.tabList[index].pickKey.key = key
				this.tabList[index].showCityPicker = true
			},

			//选择cityPicker
			confirmCityPicker(index, e) {
				console.log("e", e)
				const type = this.tabList[index]['pickKey']['type']
				const key = this.tabList[index]['pickKey']['key']
				this.tabList[index].resumeList[type][key] = e.value[0] + e.value[1] + e.value[2]
				this.tabList[index].showCityPicker = false
				this.tabList[index]['pickKey']['type'] = ''
				this.tabList[index]['pickKey']['key'] = ''
			},

			//取消citypicker
			cancelCityPicker(index) {
				this.tabList[index].showCityPicker = false
				const type = this.tabList[index]['pickKey']['type']
				const key = this.tabList[index]['pickKey']['key']
				this.tabList[index]['pickKey']['type'] = ''
				this.tabList[index]['pickKey']['key'] = ''
			},

			//初始化地区数据
			initCityData() {
				// 遍历城市js
				cityData.forEach((item1, index1) => {
					let temp2 = [];
					this.cityLevel1.push(item1.provinceName);

					let temp4 = [];
					let temp3 = [];
					// 遍历市
					item1.cities.forEach((item2, index2) => {
						temp2.push(item2.cityName);
						// 遍历区
						item2.counties.forEach((item3, index3) => {
							temp3.push(item3.countyName);
						})
						temp4[index2] = temp3;
						temp3 = [];
					})
					this.cityLevel3[index1] = temp4;

					this.cityLevel2[index1] = temp2;
				})
				// 选择器默认城市
				this.cityList.push(this.cityLevel1, this.cityLevel2[0], this.cityLevel3[0][0]);
			},
			// 选中时执行
			changeHandler(ind, e) {
				const {
					columnIndex,
					index,
					indexs,
					value,
					values,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
				} = e;
				const picker = this.$refs.uPicker[ind]
				console.log("picker", picker)
				if (columnIndex === 0) { // 选择第一列数据时
					// 设置第二列关联数据
					picker.setColumnValues(1, this.cityLevel2[index]);
					// 设置第三列关联数据
					picker.setColumnValues(2, this.cityLevel3[index][columnIndex]);
				} else if (columnIndex === 1) { // 选择第二列数据时
					// 设置第三列关联数据
					picker.setColumnValues(2, this.cityLevel3[indexs[0]][index]);
				}
			},

			//弹出日期选择
			calendarHandler(index, type, key) {
				// console.log(this.$refs.calendar)
				this.tabList[index].pickKey.type = type
				this.tabList[index].pickKey.key = key
				this.$refs.calendar[index].show()
			},

			//关闭日期选择
			// cancelCalendar(index) {
			// 	const type = this.tabList[index]['pickKey']['type']
			// 	const key = this.tabList[index]['pickKey']['key']
			// 	// console.log(this.tabList[index]['pickKey']['type'])
			// 	// this.tabList[index]['pickKey']['type'] = ''
			// 	// this.tabList[index]['pickKey']['key'] = ''
			// },

			//选择日期
			chooseDate(index, e) {
				const type = this.tabList[index]['pickKey']['type']
				const key = this.tabList[index]['pickKey']['key']
				this.tabList[index].resumeList[type][key] = e.result
				this.tabList[index]['pickKey']['type'] = ''
				this.tabList[index]['pickKey']['key'] = ''
				// console.log("e", e)
			},

			//打开工资picker
			openSalaryPicker(index, type, key) {
				this.tabList[index].pickKey.type = type
				this.tabList[index].pickKey.key = key
				this.tabList[index].showSalaryPicker = true
			},

			//确认工资picker
			confirmSalaryPicker(index, e) {
				// console.log("e",e)
				console.log(e.value[0] + "-" + e.value[1])
				const type = this.tabList[index]['pickKey']['type']
				const key = this.tabList[index]['pickKey']['key']
				this.tabList[index].resumeList[type][key] = e.value[0] + "-" + e.value[1]
				this.tabList[index].showSalaryPicker = false
				this.tabList[index]['pickKey']['type'] = ''
				this.tabList[index]['pickKey']['key'] = ''
			},

			//取消salaryPicker
			cancelSalaryPicker(index) {
				this.tabList[index].showSalaryPicker = false
				const type = this.tabList[index]['pickKey']['type']
				const key = this.tabList[index]['pickKey']['key']
				this.tabList[index]['pickKey']['type'] = ''
				this.tabList[index]['pickKey']['key'] = ''
			},

			//跳转到选择教育经历
			linkAddEducation(index, ind, item) {
				// console.log("item",item)
				if (ind == undefined) {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addEducation?index=${index}&ind=99999`
					})
				} else {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addEducation?index=${index}&ind=${ind}&data=${JSON.stringify(item)}`
					})
				}
			},

			//确认教育经历
			comfirmEducationHistory(index, ind, value) {
				// console.log("index", index)
				// console.log("indkkkk", ind)
				if (Number(ind) === 99999) {
					// console.log(2222222)
					this.tabList[index].addEducation.push(JSON.parse(value))

				} else {
					// console.log(1111111)
					this.$set(this.tabList[index].addEducation, ind, JSON.parse(value))
				}

				this.$nextTick(()=>{
					this.setHeight()
				})

				// this.testValue=value
				// console.log(this.testValue)

				// console.log(this.tabList)
			},

			//删除教育经历
			deleteEducation(index, eduIndex) {
				this.tabList[index].addEducation.splice(eduIndex, 1)
				this.$nextTick(()=>{
					this.setHeight()
				})
			},

			//跳转到添加工作页面
			linkAddWork(index, ind, item) {
				if (ind == undefined) {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addWork?index=${index}&ind=99999`
					})
				} else {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addWork?index=${index}&ind=${ind}&data=${JSON.stringify(item)}`
					})
				}
			},

			//确认工作经历
			comfirmWorkHistory(index, ind, value) {
				// console.log("index", index)
				// console.log("ind", ind)
				if (Number(ind) === 99999) {
					// console.log(2222222)
					this.tabList[index].addWorkExp.push(JSON.parse(value))

				} else {
					// console.log(1111111)
					this.$set(this.tabList[index].addWorkExp, ind, JSON.parse(value))
				}
				// this.testValue=value
				this.$nextTick(()=>{
					this.setHeight()
				})

				// console.log(this.tabList)
			},

			//删除工作经历
			deleteWork(index, workIndex) {
				this.tabList[index].addWorkExp.splice(workIndex, 1)
				this.$nextTick(()=>{
					this.setHeight()
				})
			},

			//跳转到添加项目页面
			linkAddPro(index, ind, item) {
				if (ind == undefined) {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addProject?index=${index}&ind=99999`
					})
				} else {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addProject?index=${index}&ind=${ind}&data=${JSON.stringify(item)}`
					})
				}
			},

			//确认项目经历
			comfirmProHistory(index, ind, value) {
				// console.log("index", index)
				// console.log("ind", ind)
				if (Number(ind) === 99999) {
					// console.log(2222222)
					this.tabList[index].addPro.push(JSON.parse(value))

				} else {
					// console.log(1111111)
					this.$set(this.tabList[index].addPro, ind, JSON.parse(value))
				}
				// this.testValue=value
				this.$nextTick(()=>{
					this.setHeight()
				})

				// console.log(this.tabList)
			},

			//删除项目经历
			deletePro(index, proIndex) {
				this.tabList[index].addPro.splice(proIndex, 1)
				this.$nextTick(()=>{
					this.setHeight()
				})
			},

			//跳转到添加证书页面
			linkAddCert(index, ind, item) {
				if (ind == undefined) {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addCertificate?index=${index}&ind=99999`
					})
				} else {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addCertificate?index=${index}&ind=${ind}&data=${JSON.stringify(item)}`
					})
				}
			},

			//确认证书经历
			comfirmCertificate(index, ind, value) {
				// console.log("index", index)
				// console.log("ind", ind)
				if (Number(ind) === 99999) {
					// console.log(2222222)
					this.tabList[index].addCertificate.push(JSON.parse(value))

				} else {
					// console.log(1111111)
					this.$set(this.tabList[index].addCertificate, ind, JSON.parse(value))
				}
				// this.testValue=value
				this.$nextTick(()=>{
					this.setHeight()
				})

				// console.log(this.tabList)
			},

			//删除证书经历
			deleteCert(index, certIndex) {
				this.tabList[index].addCertificate.splice(certIndex, 1)
				this.$nextTick(()=>{
					this.setHeight()
				})
			},
		},
		onReady() {
			this.setHeight()
		},
		onLoad() {
			this.setMinHeight()
			this.initCityData()
		},
		// watch: {
		// 	tabList: {
		// 		deep: true,
		// 		handler(nw) {
		// 			console.log("nw", nw)
		// 		}
		// 	}
		// }
	}
</script>

<style lang="scss" scoped>
	.resume-oneline {
		margin-bottom: 5vh;

		.resume-online-tab {
			display: flex;
			align-items: center;

			.tab-item {
				padding: 15rpx 20rpx;
				display: flex;
				align-items: center;

				text {
					font-size: 32rpx;
				}

				.resume-active {
					font-size: 32rpx;
					font-weight: bold;
					color: #1296db;
				}

				image {
					width: 36rpx;
					height: 36rpx;
				}
			}
		}

		.resume-swiper {
			width: 100%;
			// min-height: 100vh;

			.swiper {
				min-height: 100vh;
			}

			.swiper-item {
				display: block;
				// min-height: 100vh;

				.resume-item-info {
					margin-top: 25rpx;

					.item-title {
						margin-left: 25rpx;
						font-size: 36rpx;
						padding: 5rpx 25rpx;
						box-sizing: border-box;
						font-weight: bold;
						border-left: 8rpx solid #1296db;
					}

					.info-content {
						padding: 20rpx 0;
						margin-top: 20rpx;

						// min-height: 100vh;
						.content-item {
							padding: 0 25rpx;
							margin-top: 25rpx;

							::v-deep .tui-input__wrap {
								border: 1rpx solid #1296db;
							}
						}
					}
				}

				.add-modules {
					margin-top: 25rpx;
					padding: 0 20rpx;

					.item-title {
						margin-left: 5rpx;
						font-size: 36rpx;
						padding: 5rpx 25rpx;
						box-sizing: border-box;
						font-weight: bold;
						border-left: 8rpx solid #1296db;
					}

					.show-item-box {
						display: flex;
						flex-wrap: nowrap;
						justify-content: space-between;
						align-items: center;
						padding: 25rpx 0;
						border-bottom: 1px solid #eee;

						.item-left {
							font-size: 30rpx;
						}

						.add-btns {
							display: flex;
							flex-wrap: wrap;
							flex-direction: column;

							.btns-item {
								margin-top: 25rpx;
								background-color: #1296db;
								padding: 20rpx 50rpx;
								color: #fff;
								border-radius: 15rpx;
							}

						}
					}

					.add-item {
						margin-top: 20rpx;
						display: flex;
						justify-content: center;
						align-items: center;

						view {
							color: #1296db;
							display: flex;
							justify-content: center;
							align-items: center;
						}

						.add {
							width: 26rpx;
							height: 26rpx;
							font-size: 24rpx;
							border: 1px solid #1296db;
							border-radius: 50%;
							margin-right: 25rpx;
							line-height: 26rpx;
							text-align: center;
						}

						.content {
							font-size: 26rpx;
						}
					}
				}



				.line-show {
					margin: 25rpx 0;
					background-color: #ddd;
					width: 100%;
					height: 30rpx;
				}

			}
		}

	}
</style>
