<template>
	<view class="resume-oneline">
		<view class="resume-online-tab">
			<view class="tab-item" v-for="(item,index) in tabList" :key="index" @click="changeTabItem(index)">
				<text :class="{'resume-active':currentResume==index}">{{item.label}}{{index+1}}</text>
				<image :src="`${imageBaseSrc}edit_blue.png`" mode="" v-if="currentResume==index"></image>
			</view>
			
			<view class="open-close-box" v-if="currentResume===0">
			   <text style="margin:15rpx 0;">简历设置</text>
			  <u-radio-group
				v-model="openShow"
				placement="row"
			  >
				<u-radio
				  :customStyle="{marginBottom: '8px'}"
				  v-for="(item, index) in openCloseList"
				  :key="index"
				  :label="item.name"
				  :name="item.val"
				>
				</u-radio>
			  </u-radio-group>
			</view>
		</view>

		<view class="resume-swiper">
			<swiper class="swiper" :style="{height:swiperHeight,minHeight:swiperMinHeight}" :current="currentResume"
				circular :indicator-dots="indicatorDots" :interval="interval" :duration="duration"
				@change='changeTabItemBySwiper'>
				<swiper-item v-for="(item,index) in tabList" :key="index">
					<view class="swiper-item" :id="'swiper'+index" :class="{'swiper-padding-bottom-ios':isIos}">
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
											<tui-input v-model="item.resumeList.pnInfo.sex" :isFillet='true'
												:inputBorder='true' :required='true' label="性别" placeholder="请输入性别" :disabled="true" @click="openSexPopup(index)">
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
												placeholder="请输入学历" @click="openPicker('pnInfo','education')">
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
												@click="calendarHandler('pnInfo','graduationTime')" :inputBorder='true'
												:required='true' label="毕业时间" :disabled='true' placeholder="请选择毕业时间">
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
												@click="openPicker('addInfo','politicalStatus')">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="item.resumeList.addInfo.birthday" :disabled="true"
												:isFillet='true' :inputBorder='true' label="出生日期" placeholder="请输入出生日期"
												@click="calendarHandler('addInfo','birthday')">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="item.resumeList.addInfo.hometown" :disabled="true"
												:isFillet='true' :inputBorder='true' label="籍贯" placeholder="请输入籍贯"
												@click="openCityPicker('addInfo','hometown')">
											</tui-input>
										</view>
										<view class="content-item">
											<tui-input v-model="item.resumeList.addInfo.dwelling" :disabled="true"
												:isFillet='true' :inputBorder='true' label="居住地" placeholder="请输入居住地"
												@click="openCityPicker('addInfo','dwelling')">
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
											<tui-input v-model="item.resumeList.intentInfo.job" :required='true' :isFillet='true'
												:inputBorder='true' label="期望职位" placeholder="请输入期望职位">
											</tui-input>
										</view>

										<view class="content-item">
											<tui-input v-model="item.resumeList.intentInfo.salary" :required='true' :isFillet='true'
												:inputBorder='true' label="期望薪资" placeholder="请输入期望薪资" :disabled="true"
												@click="openSalaryPicker('intentInfo','salary')">
											</tui-input>
										</view>

										<view class="content-item">
											<tui-input v-model="item.resumeList.intentInfo.city" :isFillet='true'
												:inputBorder='true' label="期望城市" placeholder="请输入期望城市" :disabled="true"
												@click="openCityPicker('intentInfo','city')">
											</tui-input>
										</view>

										<view class="content-item">
											<tui-input v-model="item.resumeList.intentInfo.jType" :isFillet='true'
												:inputBorder='true' label="工作类型" placeholder="请输入工作类型" :disabled="true"
												@click="openPicker('intentInfo','jType')">
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
													<text v-if="eduKey!='addEduId'">{{keyToCnEdu[eduKey]}} : {{edu}}</text>
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

						<!-- 实习经验 -->
						<view class="add-modules">
							<tui-collapse :index="'WorkExpCol'+index" :current="item.WorkExpCol"
								@click="changeCollapseAdd('WorkExpCol'+index,index,'WorkExpCol')">
								<template v-slot:title>
									<view class="item-title" v-if='item.WorkExpCol==-1'>
										实习经验
									</view>
								</template>
								<template v-slot:content>
									<view class="item-title">
										实习经验
									</view>
									<view class="info-content">
										<view class="show-item-box" v-if="item.addWorkExp.length!=0"
											v-for='(workBox,workIndex) in item.addWorkExp' :key="workIndex">
											<view class="item-left">
												<view class="item-content" v-for='(work,workKey) in workBox'
													:key="workKey">
													<text v-if="workKey!='addWorkId'">{{keyToCnWork[workKey]}} : {{work}}</text>
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
													<text v-if="proKey!='addProId'">{{keyToCnPro[proKey]}} : {{pro}}</text>
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
													<view v-if="certKey!='certId'" class="image-name">
														<text v-if="certKey!='certImage'">{{keyToCnCert[certKey]}} : {{cert}}</text>
														<view class="image-show" v-if="certKey=='certImage'">
															<text>{{keyToCnCert[certKey]}}: </text>
															<image :src="cert" mode=""></image>
														</view>
													</view>
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

						<!-- 分割线 -->
						<view class="line-show"></view>
						
						<view class="user-introduction">
							<view class="introduction-title">
								自我介绍
							</view>
							<textarea v-model="item.userIntro"></textarea>
						</view>

					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="resume-btns-box" :class="{'bottom-ios':isIos}">
<!-- 			<view class="btns-item" @click="saveInfoTemporary">
				暂存数据
			</view>

			<view class="btns-item" @click="getInfoTemporary">
				获取暂存数据
			</view> -->
			
			<view class="btns-item" @click="reqSetDefaultResume" v-if="currentResume>0">
				设为默认简历
			</view>
			
			<view class="btns-item" @click="reqAllInfo">
				提交数据
			</view>
		</view>

		<!-- 学历 -->
		<u-picker :show="tabList[currentResume].showPicker"
			:columns="tabList[currentResume][tabList[currentResume].pickKey.key+'Columns']" @confirm="confirmPicker"
			@cancel="cancelPicker"></u-picker>

		<!-- 日期 @hide="cancelCalendar(index)" -->
		<tui-calendar ref="calendar" :isFixed="true" :type="1" @change="chooseDate">
		</tui-calendar>

		<!-- 地区 -->
		<u-picker ref="uPicker" :show="tabList[currentResume].showCityPicker" :columns="cityList"
			@confirm="confirmCityPicker($event)" @cancel="cancelCityPicker" @change="changeHandler($event)"></u-picker>

		<!-- 薪资 -->		
		<u-picker :show="tabList[currentResume].showSalaryPicker" ref="sPicker" :columns="salaryList"
			@confirm="confirmSalaryPicker" @cancel="cancelSalaryPicker"></u-picker>
			
		<!-- 性别 -->
		<u-popup :customStyle="{width:'50%',height:'20%',borderRadius:'15rpx',display:'flex','justify-content':'center','align-items': 'center'}" mode="center" :show="tabList[currentResume].showSexPopup" @close="closeSexPopup">
			<view class="sex-box">
				<u-radio-group
				    placement="column"
				  >
				    <u-radio
				      :customStyle="{marginBottom: '8px'}"
				      v-for="(item, index) in sexList"
				      :key="index"
				      :label="item.name"
				      :name="item.name"
					  @change="sexChange"
				    >
				    </u-radio>
				</u-radio-group>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import cityData from '@/utils/city.js'
	import {
		header
	} from '../../common/helper'
	export default {

		data() {
			let arr=[]
			for (let y = 0; y < 20; y++) {
				arr.push(y + 1 + 'k')
			}
			return {
				isIos:this.$isIos,
				imageBaseSrc: this.$imageBaseSrc,
				salaryList: [
					arr,
					arr
				],
				cityList: [],
				cityLevel1: [],
				cityLevel2: [],
				cityLevel3: [],
				openCloseList: [{
					  name: '公开',
					  val:"3",
					  disabled: false
					},
					{
					  name: '隐藏',
					  disabled: false,
					  val:"1"
					},
				],
				openShow:"",
				tabList: [{
						label: '简历',
						resumeId: '',
						showPicker: false,
						showCityPicker: false,
						showSalaryPicker: false,
						showSexPopup:false,
						viewType: '', //1公开 
						pickKey: {
							type: '', //记录类型
							key: ''
						},
						userIntro:"",
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
								sex:'',
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
							label: '简历',
							resumeId: '',
							showPicker: false,
							showCityPicker: false,
							showSalaryPicker: false,
							showSexPopup:false,
							viewType: '', //1公开 
							pickKey: {
								type: '', //记录类型
								key: ''
							},
							userIntro:"",
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
									sex:'',
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
								label: '简历',
								resumeId: '',
								showPicker: false,
								showCityPicker: false,
								showSalaryPicker: false,
								showSexPopup:false,
								viewType: '', //1公开 
								pickKey: {
									type: '', //记录类型
									key: ''
								},
								userIntro:"",
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
										sex:'',
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
				//性别
				sexList:[
					{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					},
				],
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
					result: "项目描述",
					discribe: '工作描述',
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
				this.reqResumeAllInfo()
			},
			//切换轮播图关联简历
			changeTabItemBySwiper(e) {
				// console.log("e",e)
				this.currentResume = e.detail.current
				this.reqResumeAllInfo()
			},
			//页面高度初始化
			setHeight() {
				const query = uni.createSelectorQuery().in(this);
				console.log('11111111111',query.selectAll('.swiper-item'))
				query.select(`#swiper${this.currentResume}`).boundingClientRect(data => {
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
				// console.log("key",key)
				console.log("this.tabList[index]['resumeList'][key]['columnIndex']", this.tabList[index]['resumeList'][key]
					['columnIndex'])

				if (this.tabList[index]['resumeList'][key]['columnIndex'] == -1) {
					this.$set(this.tabList[index]['resumeList'][key], 'columnIndex', val)
				} else {
					this.$set(this.tabList[index]['resumeList'][key], 'columnIndex', -1)
				}

				this.$nextTick(() => {
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
				this.$nextTick(() => {
					this.setHeight()
				})
			},
			
			//打开性别选择
			openSexPopup(index){
				this.currentResume=index
				this.tabList[index].showSexPopup=true
			},
			
			//关闭性别触发
			closeSexPopup(){
				this.tabList[this.currentResume].showSexPopup=false
			},

			//选择性别
			sexChange(e){
				// console.log("e",e)
				this.tabList[this.currentResume].resumeList.pnInfo.sex=e
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
			openPicker(type, key) {
				this.tabList[this.currentResume].pickKey.type = type
				this.tabList[this.currentResume].pickKey.key = key
				this.tabList[this.currentResume].showPicker = true
			},



			//选择picker
			confirmPicker(e) {
				const type = this.tabList[this.currentResume]['pickKey']['type']
				const key = this.tabList[this.currentResume]['pickKey']['key']
				this.tabList[this.currentResume].resumeList[type][key] = e.value[0]
				this.tabList[this.currentResume].showPicker = false
				this.tabList[this.currentResume]['pickKey']['type'] = ''
				this.tabList[this.currentResume]['pickKey']['key'] = ''
			},



			//取消Picker
			cancelPicker() {
				this.tabList[this.currentResume].showPicker = false
				const type = this.tabList[this.currentResume]['pickKey']['type']
				const key = this.tabList[this.currentResume]['pickKey']['key']
				this.tabList[this.currentResume]['pickKey']['type'] = ''
				this.tabList[this.currentResume]['pickKey']['key'] = ''
			},

			//弹出citypicker
			openCityPicker(type, key) {
				// console.log(this.cityList)
				this.tabList[this.currentResume].pickKey.type = type
				this.tabList[this.currentResume].pickKey.key = key
				this.tabList[this.currentResume].showCityPicker = true
			},

			//选择cityPicker
			confirmCityPicker(e) {
				// console.log("e", e)
				const type = this.tabList[this.currentResume]['pickKey']['type']
				const key = this.tabList[this.currentResume]['pickKey']['key']
				this.tabList[this.currentResume].resumeList[type][key] = e.value[0] + e.value[1] + e.value[2]
				this.tabList[this.currentResume].showCityPicker = false
				this.tabList[this.currentResume]['pickKey']['type'] = ''
				this.tabList[this.currentResume]['pickKey']['key'] = ''
			},

			//取消citypicker
			cancelCityPicker() {
				this.tabList[this.currentResume].showCityPicker = false
				const type = this.tabList[this.currentResume]['pickKey']['type']
				const key = this.tabList[this.currentResume]['pickKey']['key']
				this.tabList[this.currentResume]['pickKey']['type'] = ''
				this.tabList[this.currentResume]['pickKey']['key'] = ''
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
			changeHandler(e) {
				const {
					columnIndex,
					index,
					indexs,
					value,
					values,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
				} = e;
				const picker = this.$refs.uPicker
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
			calendarHandler(type, key) {
				// console.log(this.$refs.calendar)
				this.tabList[this.currentResume].pickKey.type = type
				this.tabList[this.currentResume].pickKey.key = key
				this.$refs.calendar.show()
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
			chooseDate(e) {
				const type = this.tabList[this.currentResume]['pickKey']['type']
				const key = this.tabList[this.currentResume]['pickKey']['key']
				this.tabList[this.currentResume].resumeList[type][key] = e.result
				this.tabList[this.currentResume]['pickKey']['type'] = ''
				this.tabList[this.currentResume]['pickKey']['key'] = ''
				// console.log("e", e)
			},

			//打开工资picker
			openSalaryPicker(type, key) {
				uni.showActionSheet({
					itemList: ['面议', '选择薪资范围'],
					success:res => {
						console.log("res111",res)
						if(res.tapIndex===0){
							this.tabList[this.currentResume].resumeList.intentInfo.salary="面议"
							return
						}
						if(res.tapIndex===1){
							this.tabList[this.currentResume].pickKey.type = type
							this.tabList[this.currentResume].pickKey.key = key
							this.tabList[this.currentResume].showSalaryPicker = true
						}
					},
					fail: function (res) {
						// console.log(res.errMsg);
					}
				});
			},

			//确认工资picker
			confirmSalaryPicker(e) {
				// console.log("e",e)
				console.log(e.value[0] + "-" + e.value[1])
				const type = this.tabList[this.currentResume]['pickKey']['type']
				const key = this.tabList[this.currentResume]['pickKey']['key']
				this.tabList[this.currentResume].resumeList[type][key] = e.value[0] + "-" + e.value[1]
				this.tabList[this.currentResume].showSalaryPicker = false
				this.tabList[this.currentResume]['pickKey']['type'] = ''
				this.tabList[this.currentResume]['pickKey']['key'] = ''
			},

			//取消salaryPicker
			cancelSalaryPicker() {
				this.tabList[this.currentResume].showSalaryPicker = false
				const type = this.tabList[this.currentResume]['pickKey']['type']
				const key = this.tabList[this.currentResume]['pickKey']['key']
				this.tabList[this.currentResume]['pickKey']['type'] = ''
				this.tabList[this.currentResume]['pickKey']['key'] = ''
			},

			//跳转到选择教育经历
			linkAddEducation(index, ind, item) {
				if(this.tabList[this.currentResume].addEducation.length>=4){
					uni.showToast({
						title:"最多添加四项教育经历",
						icon:"fail",
						duration:1500
					})
					return
				}
				
				// console.log("item",item)
				if (ind == undefined) {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addEducation?index=${index}&resumeId=${this.tabList[this.currentResume].resumeId}&ind=99999`
					})
				} else {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addEducation?index=${index}&ind=${ind}&resumeId=${this.tabList[this.currentResume].resumeId}&data=${JSON.stringify(item)}`
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

				this.$nextTick(() => {
					this.setHeight()
				})

				// this.testValue=value
				// console.log(this.testValue)

				// console.log(this.tabList)
			},

			//删除教育经历
			deleteEducation(index, eduIndex) {
				const addEduId = this.tabList[index].addEducation[eduIndex].addEduId
				// console.log(11111111)
				// console.log("addEduId",addEduId)
				this.reqDelItem(1, addEduId).then(_ => {
					this.tabList[index].addEducation.splice(eduIndex, 1)
					this.$nextTick(() => {
						this.setHeight()
					})
				})

			},

			//跳转到添加工作页面
			linkAddWork(index, ind, item) {
				if (ind == undefined) {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addWork?index=${index}&resumeId=${this.tabList[this.currentResume].resumeId}&ind=99999`
					})
				} else {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addWork?index=${index}&resumeId=${this.tabList[this.currentResume].resumeId}&ind=${ind}&data=${JSON.stringify(item)}`
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
				this.$nextTick(() => {
					this.setHeight()
				})

				// console.log(this.tabList)
			},

			//删除工作经历
			deleteWork(index, workIndex) {
				const addWorkId = this.tabList[index].addWorkExp[workIndex].addWorkId

				this.reqDelItem(2, addWorkId).then(_ => {
					this.tabList[index].addWorkExp.splice(workIndex, 1)
					this.$nextTick(() => {
						this.setHeight()
					})
				})

			},

			//跳转到添加项目页面
			linkAddPro(index, ind, item) {
				if (ind == undefined) {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addProject?index=${index}&resumeId=${this.tabList[this.currentResume].resumeId}&ind=99999`
					})
				} else {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addProject?index=${index}&resumeId=${this.tabList[this.currentResume].resumeId}&ind=${ind}&data=${JSON.stringify(item)}`
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
				this.$nextTick(() => {
					this.setHeight()
				})

				// console.log(this.tabList)
			},

			//删除项目经历
			deletePro(index, proIndex) {
				const addProId = this.tabList[index].addPro[proIndex].addProId
				this.reqDelItem(3, addProId).then(_ => {
					this.tabList[index].addPro.splice(proIndex, 1)
					this.$nextTick(() => {
						this.setHeight()
					})
				})
			},

			//跳转到添加证书页面
			linkAddCert(index, ind, item) {
				if (ind == undefined) {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addCertificate?index=${index}&resumeId=${this.tabList[this.currentResume].resumeId}&ind=99999`
					})
				} else {
					uni.navigateTo({
						url: `/MineLink/resumeOnline/addCertificate?index=${index}&resumeId=${this.tabList[this.currentResume].resumeId}&ind=${ind}&data=${JSON.stringify(item)}`
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
				this.$nextTick(() => {
					this.setHeight()
				})

				// console.log(this.tabList)
			},

			//删除证书经历
			deleteCert(index, certIndex) {
				const certId = this.tabList[index].addCertificate[certIndex].certId

				this.reqDelItem(4, certId).then(_ => {
					this.tabList[index].addCertificate.splice(certIndex, 1)
					this.$nextTick(() => {
						this.setHeight()
					})
				})
			},

			//暂存所有数据
			saveInfoTemporary() {
				const data = this.tabList[this.currentResume]
				uni.setStorageSync('infoTemporary', JSON.stringify(data))
				uni.setStorageSync('infoTemporaryIndex', this.currentResume)
				uni.showToast({
					title: '暂存成功',
					duration: 2000
				})
			},

			//获取暂存
			getInfoTemporary() {
				// console.log(111111)
				const data = uni.getStorageSync('infoTemporary')
				// console.log(data)
				if (data) {
					// console.log(JSON.parse(data))
					// console.log(22222)
					const currentResume = uni.getStorageSync('infoTemporaryIndex')
					this.$set(this.tabList[currentResume], 'resumeList', JSON.parse(data).resumeList)
					// this.$forceUpdate()
					this.$nextTick(() => {
						this.setHeight()
					})
				}
				// console.log("this.tabList",this.tabList)
			},

			//请求提交个人信息，补充信息，求职意向
			reqAllInfo() {
				// console.log("openShow",this.openShow)
				// return
				
				if(!this.tabList[this.currentResume].resumeList.intentInfo.job){
					uni.showToast({
						icon:"none",
						title:"期望职位不能为空",
						duration:1500
					})
					return
				}
				
				// console.log(11111111111)
				const dataList = this.tabList[this.currentResume].resumeList
				const resumeId = this.tabList[this.currentResume].resumeId

				const header = {
					'content-type': 'application/json'
				}
				const data = {
					"data": {
						"address": dataList.addInfo.dwelling,
						"birthday": dataList.addInfo.birthday,
						"email": dataList.addInfo.email,
						"expectCity": dataList.intentInfo.city,
						"expectedSalary": dataList.intentInfo.salary,
						"graduationDate": dataList.pnInfo.graduationTime,
						"height": "",
						"id": resumeId,
						"identity": dataList.addInfo.politicalStatus,
						"introduction": this.tabList[this.currentResume].userIntro,
						"leve": dataList.pnInfo.education, //?
						"nativePlace": dataList.addInfo.hometown,
						"openId": this.$store.state.openId,
						"phone": dataList.pnInfo.phone,
						"position": dataList.intentInfo.job,
						"positionTag": "",
						"professional": dataList.pnInfo.major,
						"school": dataList.pnInfo.school,
						"sex": dataList.pnInfo.sex,
						"sort": this.currentResume,
						"userName": dataList.pnInfo.name,
						"view": this.openShow, //1:公开
						"workCate": "",
						"workType": dataList.intentInfo.jType
					},
					"meta": {
						"openId": this.$store.state.openId,
						"role": this.$store.state.role,
					}
				}

				// console.log("id???",data)

				this.$http('/recruit/user/updateResume', data, res => {
					// console.log("res", res)
					if (res.meta.code == 200) {
						this.$set(this.tabList[this.currentResume], 'resumeId', res.data)
						// console.log("this.tabList", this.tabList)
						uni.showToast({
							title:"提交成功",
							duration:1500
						})
					}
				}, header)
			},

			//进入页面获取到所有数据
			reqResumeAllInfo() {
				const openId = this.$store.state.openId
				this.$getHttp(`/recruit/user/query/${openId}/${this.currentResume}`, {}, res => {
					console.log("reqResumeAllInfo", res)
					if (res.meta.code == 200) {
						const data = JSON.parse(res.data).sysuserInfoVO
						const eduData = JSON.parse(res.data).eductions
						const workData = JSON.parse(res.data).shixi
						const proData = JSON.parse(res.data).projects
						const certData = JSON.parse(res.data).listFile
						// console.log(data)
						//pnInfo
						this.$set(this.tabList[this.currentResume], 'resumeId', data.id)
						this.$set(this.tabList[this.currentResume], 'viewType', data.view)
						this.$set(this.tabList[this.currentResume], 'userIntro', data.introduction)
						this.$set(this.tabList[this.currentResume]['resumeList']['pnInfo'], 'name', data.userName)
						this.$set(this.tabList[this.currentResume]['resumeList']['pnInfo'], 'phone', data.phone)
						this.$set(this.tabList[this.currentResume]['resumeList']['pnInfo'], 'school', data.school)
						this.$set(this.tabList[this.currentResume]['resumeList']['pnInfo'], 'education', data.leve)
						this.$set(this.tabList[this.currentResume]['resumeList']['pnInfo'], 'major', data
							.professional)
						this.$set(this.tabList[this.currentResume]['resumeList']['pnInfo'], 'graduationTime', data
							.graduationDate)
						this.$set(this.tabList[this.currentResume]['resumeList']['pnInfo'], 'sex', data
							.sex)
						//addInfo
						this.$set(this.tabList[this.currentResume]['resumeList']['addInfo'], 'email', data.email)
						this.$set(this.tabList[this.currentResume]['resumeList']['addInfo'], 'politicalStatus',
							data.identity)
						this.$set(this.tabList[this.currentResume]['resumeList']['addInfo'], 'birthday', data
							.birthday)
						this.$set(this.tabList[this.currentResume]['resumeList']['addInfo'], 'hometown', data
							.nativePlace)
						this.$set(this.tabList[this.currentResume]['resumeList']['addInfo'], 'dwelling', data
							.address)
						//intentInfo
						this.$set(this.tabList[this.currentResume]['resumeList']['intentInfo'], 'job', data
							.position)
						this.$set(this.tabList[this.currentResume]['resumeList']['intentInfo'], 'salary', data
							.expectedSalary)
						this.$set(this.tabList[this.currentResume]['resumeList']['intentInfo'], 'city', data
							.expectCity)
						this.$set(this.tabList[this.currentResume]['resumeList']['intentInfo'], 'jType', data
							.workType)
						// console.log("this.tabList[this.currentResume]['resumeId']", this.tabList[this
						// 	.currentResume]['resumeId'])
						let handleArr = []
						eduData.forEach(v => {
							const obj = {
								addEduId: v.id,
								school: v.school, //key
								education: v.leve,
								major: v.professional,
								beginTime: v.startTime,
								endTime: v.endTime,
								// allTime:'',
								discribe: v.described
							}
							handleArr.push(obj)
						})
						this.$set(this.tabList[this.currentResume], 'addEducation', handleArr)

						handleArr = []
						workData.forEach(v => {
							const obj = {
								addWorkId: v.id,
								companyName: v.company,
								jobName: v.jobs,
								department: v.depart,
								beginTime: v.startTime,
								endTime: v.endTime,
								// allTime: '',
								discribe: v.workDescribe
							}
							handleArr.push(obj)
						})
						this.$set(this.tabList[this.currentResume], 'addWorkExp', handleArr)

						handleArr = []
						proData.forEach(v => {
							const obj = {
								addProId: v.id,
								proName: v.projectName,
								role: v.projectRole,
								beginTime: v.startTime,
								endTime: v.endTime,
								// allTime: '',
								discribe: v.described,
								result: v.results
							}
							handleArr.push(obj)
						})
						this.$set(this.tabList[this.currentResume], 'addPro', handleArr)
						// console.log("handleArr",handleArr)

						handleArr = []
						certData.forEach(v => {
							const obj = {
								certId: v.id,
								certName: v.fileName,
								certImage: v.fileUrl,
							}
							handleArr.push(obj)
						})
						this.$set(this.tabList[this.currentResume], 'addCertificate', handleArr)
						handleArr = null
					}
				})
			},

			//请求删除 教育经历/实习经验
			reqDelItem(type, id) {
				const data = {
					"data": {},
					"meta": {
						"openId": this.$store.state.openId,
						"role": this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				return new Promise(resolve => {
					this.$getHttp(`/recruit/user/del/${type}/${id}`, data, res => {
						// console.log("res", res)
						if (res.meta.code == 200) {
							uni.showToast({
								title:"删除成功",
								duration:1500
							})
							resolve()
						}
					}, header)
				})
			},
			
			//设置默认简历
			reqSetDefaultResume(){				
				const data={
					data:{
						mainOneId:this.tabList[0].resumeId,
						mainOneSort:this.currentResume==0?0:1,
						mainTwoId:this.tabList[1].resumeId ,
						mainTwoSort:this.currentResume==1?0:1,
					},
					meta: {
						openId: this.$store.state.openId,
						role: this.$store.state.role,
					}
				}
				const header = {
					'content-type': 'application/json'
				}
				this.$http('/recruit/user/set/maset',data,res=>{
					console.log("res",res)
				},header)
			}
		},
		onReady() {
			this.setHeight()
		},
		onLoad() {
			this.reqResumeAllInfo()
			this.setMinHeight()
			this.initCityData()
		},
		// onShow() {

		// },
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
		// margin-bottom: 5vh;

		.resume-online-tab {
			height: 150rpx;
			display: flex;
			align-items: center;
			position: relative;

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
			
			.open-close-box{
				border: 1rpx solid #1296db;
				padding: 10rpx;
				border-radius: 5rpx;
				box-sizing: border-box;
				position: absolute;
				bottom: 50%;
				transform: translateY(50%);
				right: 10rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				
				::v-deep .u-radio{
					margin-right: 15rpx;
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
				padding-bottom: 170rpx;
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
					padding: 0 0 0 20rpx;

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

							.item-content {
								
								.image-show {
									display: flex;

									image {
										margin-left: 20rpx;
										width: 200rpx;
										height: 230rpx;
									}
								}
								
								.image-name{
									width: 520rpx;
									white-space:nowrap;
									overflow:hidden;
									text-overflow:ellipsis;
								}
							}
						}

						.add-btns {
							display: flex;
							flex-wrap: wrap;
							flex-direction: column;
							margin-right: 15rpx;

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

				.user-introduction{

					.introduction-title{
						margin-left: 25rpx;
						padding-left: 25rpx;
						margin-bottom: 20rpx;
						font-size: 36rpx;
						font-weight: bold;
						border-left: 8rpx solid #1296db;
					}
					
					textarea{
						width: 600rpx;
						margin:  0 auto;
						box-sizing: border-box;
						border: 1rpx solid #1296db;
						box-shadow: 0 0 2rpx 2rpx rgba(0,0,0,.1);
						border-radius: 15rpx;
						padding: 25rpx;
					}
				}

				.line-show {
					margin: 25rpx 0;
					background-color: #ddd;
					width: 100%;
					height: 30rpx;
				}

			}
			
			.swiper-padding-bottom-ios{
				padding-bottom:calc(constant(safe-area-inset-bottom) + constant(safe-area-inset-bottom) + 90rpx);
				/*兼容 IOS<11.2*/
				padding-bottom:calc(env(safe-area-inset-bottom) + env(safe-area-inset-bottom) + 90rpx);
				/*兼容 IOS>11.2*/
			}
		}

		.resume-btns-box {
			padding: 0 20rpx;
			padding-bottom: 40rpx;
			padding-top: 40rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			justify-content: space-around;
			background-color: #eee;
			
			.btns-item {
				width: 240rpx;
				background-color: #1296db;
				padding: 0 20rpx;
				height: 90rpx;
				line-height: 90rpx;
				color: #fff;
				border-radius: 15rpx;
				text-align: center;
			}

		}
		
		.sex-box{
			border: 15rpx;
			::v-deep .u-radio-group{
				flex-direction: row;
				justify-content: space-around;
				.u-radio {
					margin-right: 20rpx;
				}
			}
		}
		
		.bottom-ios {
			padding-bottom: constant(safe-area-inset-bottom);
			padding-top: constant(safe-area-inset-bottom);
			/*兼容 IOS<11.2*/
			padding-bottom: env(safe-area-inset-bottom);
			padding-top: env(safe-area-inset-bottom);
			/*兼容 IOS>11.2*/
		}
	}
</style>
