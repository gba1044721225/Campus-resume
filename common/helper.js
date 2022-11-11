module.exports = {
	imageBaseSrc: '/static/',

	//设置全局api请求地址h
	hostname() {
		// return "http://192.168.43.93:8877"
		return "http://101.33.210.213:8877"
		// return ""
	},

	//设置全局api请求路径
	baseurl() {
		var url = this.$hostname();
		return url + '';
	},

	header: {
		'content-type': 'application/x-www-form-urlencoded'
	},

	//请求api,fun(请求的页面文件名)，data（请求参数），succ（funciton，用于接收api返回的数据），t（是否显示加载中，可不传）
	http(fun, data, succ, header, t) {
		if (t) {
			uni.showLoading({
				"title": "加载中",
				"mask": true
			});
		}
		var _this = this;
		uni.request({
			"url": this.$baseurl() + fun,
			"method": "POST",
			"data": data,
			"header": header ? header : this.$header,
			"success": function(res) {
				uni.stopPullDownRefresh();
				if (t) {
					uni.hideLoading();
				}
				var result = res.data;
				succ(result);
			},
			"complete": function(res) {

			},
			"fail": function(res) {
				uni.showToast({
					title: "网络错误",
					icon: 'none'
				})
			}
		})
	},
	//请求api,fun(请求的页面文件名)，data（请求参数），succ（funciton，用于接收api返回的数据），t（是否显示加载中，可不传）
	getHttp(fun, data, succ, header, t) {
		if (t) {
			uni.showLoading({
				"title": "加载中",
				"mask": true
			});
		}
		var _this = this;
		uni.request({
			"url": this.$baseurl() + fun,
			"method": "GET",
			"data": data,
			"header": header ? header : this.$header,
			"success": function(res) {
				uni.stopPullDownRefresh();
				if (t) {
					uni.hideLoading();
				}
				var result = res.data;
				succ(result);
			},
			"complete": function(res) {

			},
			"fail": function(res) {
				uni.showToast({
					title: "网络错误",
					icon: 'none'
				})
			}
		})
	},
	//弹出提示框
	showToast(title, fun) {
		uni.showToast({
			title: title,
			icon: 'none'
		})
		if (fun) {
			setTimeout(function() {
				fun();
			}, 2000);
		}
	},

	//上传
	//1:证书 2简历 3头像 4活动宣传图 5. 6.营业执照 7.公司Logo
	upLoadFile(url, filePath, data, succ) {
		console.log("this.hostname()", this.$hostname() + url)
		console.log("filePath",filePath)
		wx.uploadFile({
			url: this.$hostname() + url, //仅为示例，非真实的接口地址
			filePath, //tempFilePaths[0]
			name: 'file',
			formData: {
				...data
			},
			success: succ,
			fail: err => {
				console.log(err,'qqqq')
			},
		});
	},

	//获取本地图片
	chooseImage() {
		return wx.chooseImage({
			count: 1,
			sizeType: ["original", "compressed"],
			sourceType: ["album", "camera"],
			type: 'image'
		});

	},
	
	//获取本地文件
	chooseFile() {
		return wx.chooseMessageFile({
		  count: 1,
		  type: 'file',
		})
	},
	
	downFile(url,succ){
		wx.downloadFile({
		  url: url,
		  success:succ
		})
	}
}
