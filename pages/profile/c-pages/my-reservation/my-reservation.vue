<template>
	<view>
		<van-tabs :active="active" @change="handleTabChange" :animated="true" :swipeable="true" :sticky="true"
			color="#1777FF">
			<van-tab title="预约中">
				<template v-for="item in readyList" :key="item.id">
					<my-card :item="item" @click="handleGoReservationDetail(item,yuyueBtns,'#F7922A')"></my-card>
				</template>
			</van-tab>
			<van-tab title="已到达">
				<template v-for="item in getList" :key="item.id">
					<my-card :item="item" @click="handleGoReservationDetail(item,dadaoBtns,'#1777FF')"></my-card>
				</template>
			</van-tab>
			<van-tab title="已完成">
				<template v-for="item in doneList" :key="item.id">
					<my-card :item="item"  @click="handleGoReservationDetail(item,null,'#5AB62D')"></my-card>
				</template>
			</van-tab>
			<van-tab title="已取消">
				<template v-for="item in cancelList" :key="item.id">
					<my-card :item="item" @click="handleGoReservationDetail(item,null,'#A9A9A9')"></my-card>
				</template>
			</van-tab>
		</van-tabs>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onUnload
	} from "@dcloudio/uni-app";
	import {
		ref
	} from "vue"
	import {
		storeToRefs
	} from "pinia"
	import useLoginStore from "@/store/login/login"
	import useProfileStore from "@/store/profile/profile"
	const yuyueBtns = {
		showCancelBtn:true,
		showGetBtn:true
	}
	const dadaoBtns = {
		showCancelBtn:true,
	}
	const callback = () => {
		initData()
	}
	onLoad(() => {
		initData()
		uni.$on('detailBack',callback)
	})
	onUnload(() => {
		uni.$off('detailBack',callback)
	})
	const initData = () => {
		fetchGetStatusAppointmentList(user.value.account, "预约中")
		fetchGetStatusAppointmentList(user.value.account, "已完成")
		fetchGetStatusAppointmentList(user.value.account, "已取消")
		fetchGetStatusAppointmentList(user.value.account, "已到达")
	}
	const profileStore = useProfileStore();
	const loginStore = useLoginStore();
	const {
		user
	} = storeToRefs(loginStore)
	const {
		readyList,
		doneList,
		cancelList,
		getList
	} = storeToRefs(profileStore)
	
	const fetchGetStatusAppointmentList = (account, status) => {
		profileStore.getMyStatusAppointmentAction(account, status)
	}
	const active = ref(0)
	const handleTabChange = (e) => {

	}
	const handleGoReservationDetail = (item,showBtns,statusColor) => {
		let url = `../reservation-detail/reservation-detail?item=${encodeURIComponent(JSON.stringify(item))}`
		if(showBtns){
			url = url + `&showBtns=${JSON.stringify(showBtns)}`
		}
		if(statusColor){
			url = url + `&statusColor=${statusColor}`
		}
		uni.navigateTo({
			url
		})
	}
</script>

<style lang="scss">
	page {
		background-color: #f4f4f4;
	}
</style>
