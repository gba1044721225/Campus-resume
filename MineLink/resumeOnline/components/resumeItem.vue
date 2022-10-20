<template>
	<view class="resume-item">
		<view class="resume-item-info">
			<tui-collapse :index="0" :current="collapseList.personalInfo" @click="changeCollapse(0)">
				<template v-slot:title>
					<view class="item-title">
						个人信息
					</view>
				</template>
				<template v-slot:content>
					<view class="info-content">
						<view class="content-item">
							<tui-input v-model="itemResumeList.pnInfo.name" :isFillet='true' :inputBorder='true'
								:required='true' label="姓名" placeholder="请输入姓名">
							</tui-input>
						</view>
						<view class="content-item">
							<tui-input :isFillet='true' :inputBorder='true' :required='true' label="手机"
								placeholder="请输入手机">
							</tui-input>
						</view>
						<view class="content-item">
							<tui-input :isFillet='true' :inputBorder='true' :required='true' label="学校"
								placeholder="请输入学校">
							</tui-input>
						</view>
						<view class="content-item">
							<tui-input :isFillet='true' :inputBorder='true' :required='true' label="学历"
								placeholder="请输入学历">
							</tui-input>
						</view>
						<view class="content-item">
							<tui-input :isFillet='true' :inputBorder='true' :required='true' label="专业"
								placeholder="请输入专业">
							</tui-input>
						</view>
						<view class="content-item">
							<tui-input :isFillet='true' :inputBorder='true' :required='true' label="求职意向"
								placeholder="请输入求职意向">
							</tui-input>
						</view>

						<view class="content-item">
							<tui-input :isFillet='true' @click="calendarHandler" :inputBorder='true' :required='true'
								label="毕业时间" :disabled='true' placeholder="请选择毕业时间"></tui-input>
							<tui-calendar ref="calendar" isFixed :type="1" @change="changeDate"></tui-calendar>
						</view>
					</view>
				</template>
			</tui-collapse>
		</view>



	</view>
</template>

<script>
	export default {

		props: {
			resumeList: {
				type: Object,
				default () {
					return {
						pnInfo: {
							name: '',
							phone: '',
							school: '',
							education: '',
							major: '',
							jobIntention: '',
							graduationTime: '',
						}
					}
				}
			}
		},
		data() {
			return {
				collapseList: {
					personalInfo: -1
				},
				itemResumeList: {}
			}
		},
		methods: {
			calendarHandler() {
				this.$refs.calendar.show()
			},
			changeDate(e) {
				console.log("e", e)
			},
			changeCollapse(e) {
				// console.log(e)
				if (this.collapseList.personalInfo == -1) {
					this.$set(this.collapseList, 'personalInfo', e)
				} else {
					this.$set(this.collapseList, 'personalInfo', -1)
				}
				// console.log('this.collapseList',this.collapseList)
			}
		},
		watch: {
			itemResumeList: {
				deep: true,
				immediate: true,
				handler(nw) {
					console.log('nw', nw)
					this.$emit('changeResumeList',JSON.parse(JSON.stringify(nw)))
				}
			}
		},
		mounted() {
			this.itemResumeList = JSON.parse(JSON.stringify(this.resumeList))
		}
	}
</script>

<style lang="scss" scoped>
	.resume-item {
		min-height: 100vh;

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
				margin-top: 20rpx;

				.content-item {
					padding: 0 25rpx;
					margin-top: 25rpx;

					.tui-input__wrap {
						background-color: red;
					}
				}
			}
		}
	}
</style>
