import operate from '../common/operate.js'

export default class Request {
	http(param) {
		// 请求参数
		let url = param.url,
			method = param.method,
			header = {},
			data = param.data || {},
			token = param.token || "",
			hideLoading = param.hideLoading || false;
			
		//拼接完整请求地址
		let requestUrl = operate.api + url;
		//拼接完整请求地址（根据环境切换）
		// var requestUrl = operate.api() + url;

		//请求方式:GET或POST(POST需配置
		// header: {'content-type' : "application/x-www-form-urlencoded"},)
		if (method) {
			method = method.toUpperCase(); //小写改为大写
			if (param.hasFile) { // 含有文件
				header = {
					// 'content-type': "application/x-www-form-urlencoded"
					'content-type': " multipart/form-data",
					
				};
			} else {
				header = {
					'content-type': "application/json"
				};
			}
		}
		if(uni.getStorageSync('token')){
			header.Authorization = uni.getStorageSync('token');
		}

		//加载圈
		if (!hideLoading) {
			uni.showLoading({
				title: '加载中...'
			});
		}

		// 返回promise
		return new Promise((resolve, reject) => {
			// 请求
			uni.request({
				url: requestUrl,
				data: data,
				method: method,
				header: header,
				success: (res) => {
					// 判断 请求api 格式是否正确
					if (res.statusCode && res.statusCode != 200) {
						uni.showToast({
							title: "api错误" + res.errMsg,
							icon: 'none'
						});
						return;
					}
					if(res.header.Authorization){
						res.data.Authorization = res.header.Authorization;
					}
					// 将结果抛出
					resolve(res.data)
				},
				//请求失败
				fail: (e) => {
					uni.showToast({
						title: "" + e.data.msg,
						icon: 'none'
					});
					resolve(e.data);
				},
				//请求完成
				complete() {
					//隐藏加载
					if (!hideLoading) {
						uni.hideLoading();
					}
					resolve();
					return;
				}
			})
		})
	}

}
