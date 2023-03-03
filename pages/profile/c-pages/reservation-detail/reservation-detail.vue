<template>
	<view class="detail">
		<view class="content">
			<my-cell title="预约项目" :value="item.project" />
			<my-cell title="预约日期" :value="item.preDate" />
			<my-cell title="预约时间" :value="item.preTime" />
			<my-cell title="预约状态" :value="item.preStatus" :valueStyle="valueStyle"/>
			<my-cell title="创建时间" :value="item.createTime" />
			<view class="divide"></view>
			<my-cell title="学号" :value="item.preNumber" />
			<my-cell title="姓名" :value="item.preName" />
			<my-cell title="医生" :value="item.dcName" />
			<my-cell title="电话" :value="item.dcPhone" />
		</view>
		<view class="btns" v-if="showBtns != null">
			<button v-show="showBtns.showCancelBtn" class="btn cancel"
				@click="handleChangeAppointmentStatusClick('cancel','已取消')">取消预约</button>
			<button v-show="showBtns.showGetBtn" class="btn get"
				@click="handleChangeAppointmentStatusClick('get','已到达')">已到达</button>
		</view>
		<view class="footer">
			<slot name="footer">
			</slot>
		</view>
		<van-toast id="van-toast" />
		<van-dialog id="van-dialog" />
	</view>
</template>

<script setup>
	import Toast from '@vant/weapp/dist/toast/toast';
	import Dialog from '@vant/weapp/dist/dialog/dialog';
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		ref,
		reactive
	} from "vue";
	import useAppointmentStore from "@/store/appointment/appointment"
	let showBtns = ref({})
	const valueStyle = ref({})
	const item = reactive({})
	onLoad((option) => {
		showBtns.value = option.showBtns ? JSON.parse(option.showBtns) : null
		valueStyle.value.color = option.statusColor ?? ''
		const i = JSON.parse(decodeURIComponent(option.item))
		for (const key in i) {
			item[key] = i[key] ?? ''
		}
	})
	const appointmentStore = useAppointmentStore();
	//改变预约状态
	const handleChangeAppointmentStatusClick = (name, status) => {
		let title = name === "cancel" ? "取消预约" : "已到达"
		Dialog.confirm({
				title: title,
				message: `确认是否${title}`,
			})
			.then(() => {
				return appointmentStore.updateAppointmentStatusAction({
					id: item.id,
					preStatus: status
				})
			})
			.then(res => {
				Toast.success({
					message: "确认成功",
					forbidClick: true,
					duration: 1000,
				});
				setTimeout(() => {
					uni.navigateBack({
						success: () => {
							uni.$emit('detailBack')
						}
					})
				}, 1000)
			})
			.catch(() => {});

	}
</script>

<style lang="scss">
	:deep(.van-dialog__button) {
		&:first-child {
			.van-button {
				color: #666666 !important;
			}
		}

		&:last-child {
			.van-button {
				color: #1777FF !important;
			}
		}
	}

	page {
		background-color: $bg-color;
	}

	.divide {
		height: 10rpx;
	}

	.btns {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 50rpx;

		.btn {
			width: 330rpx;
			height: 80rpx;
			line-height: 80rpx;
			border-radius: 50rpx;
			font-size: 30rpx;
		}

		.cancel {
			background-color: #D3D3D3;
			color: #808080;

			&:active {
				background-color: #E6E6E6;
			}
		}

		.get {
			color: #fff;
			background-color: $primary-color;

			&:active {
				background-color: #0380D9;
			}
		}
	}

	.footer {}
</style>
