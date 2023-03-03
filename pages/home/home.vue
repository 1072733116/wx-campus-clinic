<template>
	<view class="home">
		<home-banner></home-banner>
		<home-click-information></home-click-information>
	</view>
</template>

<script setup>
	import HomeBanner from "./components/home-banner.vue"
	import HomeClickInformation from "./components/home-clinic-information.vue"
	// import {
	// 	onLoad
	// } from "@dcloudio/uni-app"
	// import useHomeStore from "@/store/home/home.js";
	// const homeStore = useHomeStore();
	// onLoad(() => {
	// 	homeStore.getAllDoctorListAction()
	// })
</script>

<style lang="scss">
	page {
		background-color: #F8F8F8;
	}
</style>
