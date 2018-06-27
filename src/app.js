import { camelCase } from 'lodash';
import nx from 'next-js-core2';

App({
	onLaunch() {
		console.log(nx, typeof 'nx121323');
		console.log(camelCase('OnLaunch'));
		// 调用API从本地缓存中获取数据
		const logs = wx.getStorageSync('logs') || [];
		logs.unshift(Date.now());
		wx.setStorageSync('logs', logs);
	},
	getUserInfo(cb) {
		if (this.globalData.userInfo) {
			typeof cb === 'function' && cb(this.globalData.userInfo);
		}
		else {
			// 调用登录接口
			wx.login({
				success: () => {
					wx.getUserInfo({
						success: (res) => {
							this.globalData.userInfo = res.userInfo;
							typeof cb === 'function' && cb(this.globalData.userInfo);
						},
					});
				}
			});
		}
	},
	globalData: {
		userInfo: null,
	},
});
