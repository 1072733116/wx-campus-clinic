<template>
	<view class="record">
		<record-card :record="record" @goDetail="handleGoDeatilClick"></record-card>
	</view>
</template>

<script setup>
	import RecordCard from "@/components/record-card/record-card.vue"
	import {
		computed
	} from "vue"
	import useProfileStore from "@/store/profile/profile"
	const record = {
		usName: "陈冬伟",
		reFee: "15.00",
		date: "2023-03-04 08:00-09:00",
		dcName: "lisi"
	}
	const profileStore = useProfileStore();
	const recordList = computed(() => profileStore.recordList)
	const handleGoDeatilClick = (recordItem) => {
		const record = JSON.stringify(recordItem)
		uni.navigateTo({
			url: `../record-detail/record-detail?record=${record}`
		})
	}
</script>

<style lang="scss">

</style>
