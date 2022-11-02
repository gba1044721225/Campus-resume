<template>
	<view class="deliver">
		ddd
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageInfo: {
					pageSize: 10,
					pageNum: 1,
				},
			}
		},
		methods: {

		},
		onLoad() {
			this.reqResumeList()
		}
	}
</script>

<style>
</style>
