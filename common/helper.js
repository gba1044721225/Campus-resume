module.exports = {
	
	//设置全局api请求地址h
	hostname() {
		return "https://www.gzzzzb.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r="
	},
	
	//设置全局api请求路径
	baseurl() {
		var url = this.$hostname();
		return url + '';
	},
	
	//请求api,fun(请求的页面文件名)，data（请求参数），succ（funciton，用于接收api返回的数据），t（是否显示加载中，可不传）
	http(fun, data, succ, t) {
		var header = {
			'content-type': 'application/x-www-form-urlencoded'
		};
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
			"header": header,
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
	getHttp(fun, data, succ, t) {
		var header = {
			'content-type': 'application/x-www-form-urlencoded'
		};
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
			"header": header,
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
	}
}
