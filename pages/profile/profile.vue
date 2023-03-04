<template>
	<view class="profile">
		<profile-info></profile-info>
		<profile-record></profile-record>
		<profile-menu @logout="handleLogout"></profile-menu>
		<van-toast id="van-toast" />
		<van-dialog id="van-dialog" />
	</view>
</template>

<script setup>
	import Dialog from '@vant/weapp/dist/dialog/dialog';
	import Toast from '@vant/weapp/dist/toast/toast';
	import cache from "@/utils/cache"
	import ProfileInfo from "./components/profile-info.vue"
	import ProfileRecord from "./components/profile-record"
	import ProfileMenu from "./components/profile-menu.vue"

	const handleLogout = () => {
		Dialog.confirm({
				title: '退出登录',
				message: '确认是否退出登录'
			})
			.then(() => {
				Toast.loading({
					selector:"#van-toast",
				  message: '退出中...',
				  forbidClick: true,
					duration:1000,
					onClose:() => {
						setTimeout(() => {
							uni.reLaunch({
								url:"/pages/login/login",
								success:() => {
									cache.clearCache()
								}
							})
						},1000)
					}
				});
			})
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
		background-color: #F6F6F6;
	}
</style>
