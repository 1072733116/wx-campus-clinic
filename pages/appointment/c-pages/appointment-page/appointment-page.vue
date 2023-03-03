<template>
	<view class="appointment-page">
		<my-cell title="地点" value="学校诊所"></my-cell>
		<my-cell title="位置" value="C11"></my-cell>
		<my-cell title="预约项目" :value="project"></my-cell>
		<my-cell title="选择预约日期" :isLink="true" :value="date" @click="handleSelectClick">
		</my-cell>
		<my-cell title="预约时间段" :isLink="true" @click="handleSelectTime" :value="time"></my-cell>
		<my-cell title="已预约人数" :value="preTotal + ''"></my-cell>
		<my-cell title="选择预约医生" :value="doctorName" @click="handleActionSheetClick"></my-cell>
		<button @click="handleAppointmentClick" class="appointmentBtn">立即预约</button>
		<van-calendar color="#1777FF" :show="show" @close="handleCalenderClose" @confirm="handleConfirmClick" />
		<van-popup :show="popupShow" position="bottom" custom-style="height: 40	%;" @close="handlePopupClose">
			<picker-view :value="timeValue" class="picker-view" indicator-style="height: 55px;"
				@change="handleTimeChange">
				<picker-view-column>
					<view class="item" v-for="(item,index) in popright" :key="index">{{item}}</view>
				</picker-view-column>
			</picker-view>
			<view class="btns" @click="handleTimeConfirmClick">确定</view>
		</van-popup>
		<van-action-sheet :show="actionSheetShow" :actions="doctorActions" @close="handleActionSheetClose"
			@cancel="handleActionSheetClose" @select="handleActionSheetSelect" cancel-text="取消" description="选择医生" />
		<van-toast id="van-toast" />
	</view>

</template>

<script setup>
	import {
		ref,
		reactive,
		computed,
		watch
	} from "vue"
	import {
		storeToRefs
	} from "pinia"
	import Toast from '@vant/weapp/dist/toast/toast';
	import useLoginStore from "@/store/login/login"
	import useHomeStore from "@/store/home/home"
	import useAppointmentStore from "@/store/appointment/appointment"
	const homeStore = useHomeStore()
	const loginStore = useLoginStore()
	const appointmentStore = useAppointmentStore()
	const {
		doctorList
	} = storeToRefs(homeStore)
	const {
		user
	} = storeToRefs(loginStore)
	const {
		total
	} = storeToRefs(appointmentStore)

	const project = ref("预约就诊")
	const preTotal = computed(() => total.value)
	//datePicker
	const formatDate = date => {
		date = new Date(date);
		return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	}
	const show = ref(false)
	const date = ref('')
	const handleSelectClick = () => {
		show.value = true
	}
	const handleCalenderClose = () => {
		show.value = false
	}
	const handleConfirmClick = (e) => {
		date.value = formatDate(e.detail)
		show.value = false
	}

	//timePicker
	const popupShow = ref(false)
	const popright = reactive(['08:40-09:00',
		'09:00-9:20', '09:20-09:40', '09:40-10:00',
		'10:00-10:20', '10:20-10:40', '10:40-11:00',
		'11:00-11:20', '11:20-11:40', '11:40-12:00',
		'14:20-14:40', '14:40-15:00', '15:00-15:20',
		'15:20-15:40', '15:40-16:00', '16:00-16:20',
		'16:20-16:40', '16:40-17:00', '17:00-17:20'
	])
	let time = ref('')
	const handleSelectTime = () => {
		popupShow.value = true
	}
	const handlePopupClose = () => {
		popupShow.value = false
	}
	let timeValue = reactive([0])
	const handleTimeConfirmClick = () => {
		time.value = popright[timeValue[0]]
		popupShow.value = false
	}
	const handleTimeChange = (e) => {
		const arr = e.detail.value
		timeValue = arr
	}
	watch(() => ({
		date,
		time
	}), () => {
		if (date.value != "" && time.value != "") {
			appointmentStore.getAppointmentTimeTotalAction(date.value, time.value)
		}
	}, {
		deep: true
	})

	//actionSheet
	const doctorActions = doctorList.value.map(item => {
		return {
			id: item.id,
			name: item.name,
			phone: item.phone
		}
	})
	const actionSheetShow = ref(false)
	const doctorId = ref(0)
	const doctorPhone = ref("")
	const doctorName = ref('')
	const actions = reactive(doctorActions)
	const handleActionSheetClick = () => {
		actionSheetShow.value = true
	}
	const handleActionSheetClose = () => {
		actionSheetShow.value = false;
	}
	const handleActionSheetSelect = (e) => {
		doctorId.value = e.detail.id,
			doctorName.value = e.detail.name
		doctorPhone.value = e.detail.phone
	}

	//btn
	const handleAppointmentClick = () => {
		if (date.value === "" || time.value === "" || doctorName === "") {
			return Toast.fail({
				duration: 1000,
				message: "请填写正确信息",
				selector: '#van-toast'
			});
		}
		const appointment = {
			project: project.value,
			preName: user.value.name,
			preGender: user.value.gender,
			preCollege: user.value.college,
			preMajor: user.value.major,
			preNumber: user.value.account,
			prePhone: user.value.phone,
			preDate: date.value,
			preTime: time.value,
			dcId: doctorId.value,
			dcName: doctorName.value,
			dcPhone: doctorPhone.value
		}
		const toast = Toast.loading({
			duration: 0,
			forbidClick: true,
			message: '预约中...',
			selector: '#van-toast',
		});
		appointmentStore.createAppointmentAction(appointment).then(res => {
			Toast.success({
				duration: 1000,
				message: "预约成功",
				selector: '#van-toast'
			});
			setTimeout(() => {
				uni.navigateBack()
			}, 1000)
		}, err => {
			Toast.fail({
				duration: 1000,
				message: "预约失败",
				selector: '#van-toast'
			});
		})
	}
</script>

<style lang="scss">
	.appointment-page {
		.appointmentBtn {
			width: 90%;
			height: 90rpx;
			line-height: 90rpx;
			border-radius: 50px;
			margin-top: 50px;
			font-size: 32rpx;
			color: #fff;
			background-color: $primary-color;
		}
	}

	.picker-view {
		width: 100%;
		height: 330rpx;
		margin-top: 20rpx;
	}

	.item {
		height: 70rpx;
		line-height: 55px;
		font-size: 30rpx;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	.btns {
		width: 90%;
		height: 80rpx;
		line-height: 80rpx;
		margin: 0 auto;
		border-radius: 250rpx;
		background: $primary-color;
		font-size: 32rpx;
		font-weight: 500;
		color: #FFFFFF;
		text-align: center;
		margin-top: 20rpx;
	}
</style>
