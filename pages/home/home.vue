<template>
	<view class="home">
		<home-banner></home-banner>
		<home-click-information :status="clinicStatus.status"></home-click-information>
	</view>
</template>

<script setup>
	import HomeBanner from "./components/home-banner.vue"
	import HomeClickInformation from "./components/home-clinic-information.vue"
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app"
	import {
		storeToRefs
	} from "pinia"
	import useHomeStore from "@/store/home/home.js";

	onLoad(() => {
		homeStore.getAllDoctorListAction()
	})
	onShow(() => {
		homeStore.getClinicStatusAction()
	})
	const homeStore = useHomeStore();
	const {
		clinicStatus
	} = storeToRefs(homeStore)
</script>

<style lang="scss">
	page {
		background-color: #F8F8F8;
	}
</style>
