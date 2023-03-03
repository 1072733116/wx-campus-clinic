// <script>
// 	export default {
// 		onLaunch: function() {
// 			console.log('App Launch')
// 		},
// 		onShow: function() {
// 			console.log('App Show')
// 		},
// 		onHide: function() {
// 			console.log('App Hide')
// 		}
// 	}
// </script>
<script setup>
	import {
		onShow
	} from "@dcloudio/uni-app"
	import useHomeStore from "@/store/home/home.js";
	const homeStore = useHomeStore();
	onShow(() => {
		homeStore.getAllDoctorListAction()
	})
</script>

<style>
	/*每个页面公共css */
	@import "/wxcomponents/@vant/weapp/common/index.wxss";

	page {
		font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica,
			Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei',
			sans-serif;
	}
</style>
